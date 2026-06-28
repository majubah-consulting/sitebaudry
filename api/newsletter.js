// Fonction serverless (Vercel / Netlify, Node.js) — inscription à la newsletter IA.
// La clé API reste CÔTÉ SERVEUR (variables d'environnement). Deux modes :
//
//  1) BREVO  — définir BREVO_API_KEY (+ BREVO_LIST_ID). Double opt-in recommandé
//     via BREVO_DOI_TEMPLATE_ID et BREVO_DOI_REDIRECT_URL (sinon ajout direct).
//  2) WEBHOOK — définir NEWSLETTER_WEBHOOK_URL (Systeme.io, Zapier, Make, n8n…).
//
// Priorité : Brevo si BREVO_API_KEY est défini, sinon le webhook. Sans configuration,
// on NE simule PAS un succès → erreur explicite (le front affiche un message).

export default async function handler(req, res) {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Methods", "POST, OPTIONS");
  res.setHeader("Access-Control-Allow-Headers", "Content-Type");
  if (req.method === "OPTIONS") { res.statusCode = 204; return res.end(); }
  if (req.method !== "POST") { res.statusCode = 405; return res.end("Method Not Allowed"); }

  try {
    let body = req.body;
    if (body == null || typeof body === "string") {
      const raw = typeof body === "string" ? body : await readBody(req);
      body = raw ? JSON.parse(raw) : {};
    }
    if (body.website) { return json(res, 200, { ok: true }); } // honeypot

    const email = String(body.email || "").trim().toLowerCase();
    if (!email || !/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(email)) { return json(res, 400, { error: "email invalide" }); }

    // ---- Mode Brevo ----
    if (process.env.BREVO_API_KEY) {
      const listIds = process.env.BREVO_LIST_ID ? [Number(process.env.BREVO_LIST_ID)] : undefined;
      let url, payload;
      if (process.env.BREVO_DOI_TEMPLATE_ID) {
        url = "https://api.brevo.com/v3/contacts/doubleOptinConfirmation";
        payload = {
          email,
          includeListIds: listIds,
          templateId: Number(process.env.BREVO_DOI_TEMPLATE_ID),
          redirectionUrl: process.env.BREVO_DOI_REDIRECT_URL || undefined,
        };
      } else {
        url = "https://api.brevo.com/v3/contacts";
        payload = { email, listIds, updateEnabled: true };
      }
      const r = await fetch(url, {
        method: "POST",
        headers: { "api-key": process.env.BREVO_API_KEY, "Content-Type": "application/json", accept: "application/json" },
        body: JSON.stringify(payload),
      });
      if (r.ok) return json(res, 200, { ok: true });
      const txt = await r.text();
      if (/already|duplicate/i.test(txt)) return json(res, 200, { ok: true }); // contact déjà présent
      console.error("Brevo error", r.status, txt);
      return json(res, 502, { error: "Inscription refusée par le fournisseur." });
    }

    // ---- Mode webhook (Systeme.io / Zapier / Make…) ----
    if (process.env.NEWSLETTER_WEBHOOK_URL) {
      const r = await fetch(process.env.NEWSLETTER_WEBHOOK_URL, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, source: "site-newsletter", created_at: new Date().toISOString() }),
      });
      if (r.ok) return json(res, 200, { ok: true });
      console.error("Webhook newsletter", r.status);
      return json(res, 502, { error: "Le service a refusé l'inscription." });
    }

    return json(res, 501, { error: "Newsletter non encore configurée." });
  } catch (err) {
    console.error("api/newsletter error:", err);
    return json(res, 500, { error: "Erreur serveur." });
  }
}

function json(res, code, obj) { res.statusCode = code; res.setHeader("Content-Type", "application/json"); res.end(JSON.stringify(obj)); }
function readBody(req) {
  return new Promise((resolve, reject) => { let d = ""; req.on("data", (c) => { d += c; }); req.on("end", () => resolve(d)); req.on("error", reject); });
}
