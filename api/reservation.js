// Fonction serverless (Vercel / Netlify, runtime Node.js) — réception des demandes
// de réservation et transmission au CRM. AUCUNE clé n'est exposée côté client.
//
// Configuration (variables d'environnement, dashboard de l'hébergeur) :
//   CRM_WEBHOOK_URL   URL du webhook CRM qui reçoit le lead (obligatoire pour activer l'envoi)
//   CRM_AUTH_HEADER   (optionnel) en-tête d'auth, ex. "Bearer xxxxx" ou "x-api-key: xxxxx"
//
// Comportement honnête : sans CRM_WEBHOOK_URL, on NE simule PAS un succès — on renvoie
// une erreur explicite (le front affiche un repli email).

export default async function handler(req, res) {
  if (req.method !== "POST") { res.statusCode = 405; return res.end("Method Not Allowed"); }

  try {
    let body = req.body;
    if (body == null || typeof body === "string") {
      const raw = typeof body === "string" ? body : await readBody(req);
      body = raw ? JSON.parse(raw) : {};
    }

    // Anti-spam (honeypot) : si rempli, on simule un succès silencieux sans rien transmettre.
    if (body.website) { res.statusCode = 200; res.setHeader("Content-Type", "application/json"); return res.end(JSON.stringify({ ok: true })); }

    // Validations minimales
    var email = String(body.email || "").trim();
    if (!email || !/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(email)) { return json(res, 400, { error: "email invalide" }); }
    if (body.consent_privacy !== true && body.consent_privacy !== "oui") { return json(res, 400, { error: "consentement requis" }); }
    if (!String(body.first_name || "").trim() || !String(body.last_name || "").trim()) { return json(res, 400, { error: "nom et prénom requis" }); }

    // Mapping CRM
    var lead = {
      first_name: str(body.first_name), last_name: str(body.last_name),
      company: str(body.company), job_title: str(body.job_title),
      email: email, phone: str(body.phone), city: str(body.city),
      offer_interest: str(body.offer_interest), preferred_mode: str(body.preferred_mode),
      session_id: str(body.session_id), availability: str(body.availability),
      funding_type: str(body.funding_type), message: str(body.message),
      lead_source: str(body.lead_source) || "site-reservation",
      utm_source: str(body.utm_source), utm_medium: str(body.utm_medium), utm_campaign: str(body.utm_campaign),
      consent_privacy: body.consent_privacy === true || body.consent_privacy === "oui",
      consent_marketing: body.consent_marketing === true || body.consent_marketing === "oui",
      created_at: str(body.created_at) || new Date().toISOString(),
    };

    var webhook = process.env.CRM_WEBHOOK_URL;
    if (!webhook) {
      console.warn("CRM_WEBHOOK_URL non défini — lead non transmis.");
      return json(res, 501, { error: "Service de réservation non encore configuré." });
    }

    var headers = { "Content-Type": "application/json" };
    if (process.env.CRM_AUTH_HEADER) {
      var idx = process.env.CRM_AUTH_HEADER.indexOf(":");
      if (idx > -1) headers[process.env.CRM_AUTH_HEADER.slice(0, idx).trim()] = process.env.CRM_AUTH_HEADER.slice(idx + 1).trim();
      else headers["Authorization"] = process.env.CRM_AUTH_HEADER;
    }

    var r = await fetch(webhook, { method: "POST", headers: headers, body: JSON.stringify(lead) });
    if (!r.ok) { console.error("CRM webhook a répondu", r.status); return json(res, 502, { error: "Le CRM a refusé la demande." }); }

    return json(res, 200, { ok: true });
  } catch (err) {
    console.error("api/reservation error:", err);
    return json(res, 500, { error: "Erreur serveur." });
  }
}

function json(res, code, obj) { res.statusCode = code; res.setHeader("Content-Type", "application/json"); res.end(JSON.stringify(obj)); }
function str(v) { return v == null ? "" : String(v).slice(0, 4000).trim(); }
function readBody(req) {
  return new Promise((resolve, reject) => { let d = ""; req.on("data", (c) => { d += c; }); req.on("end", () => resolve(d)); req.on("error", reject); });
}
