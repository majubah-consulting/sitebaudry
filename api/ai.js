// Fonction serverless (Vercel / Netlify Functions, runtime Node.js) qui relaie
// les questions de la démo IA vers l'API Claude — en STREAMING texte brut.
//
// La clé API n'est JAMAIS dans la page : elle vit côté serveur dans la variable
// d'environnement ANTHROPIC_API_KEY (à définir dans le dashboard Vercel/Netlify).
//
// Le widget du site (window.MJB_AI_ENDPOINT) lit la réponse octet par octet,
// donc on écrit du texte brut au fil de l'eau (pas de SSE, pas de JSON).

import Anthropic from "@anthropic-ai/sdk";

const client = new Anthropic(); // lit ANTHROPIC_API_KEY depuis l'environnement

const SYSTEM = `Tu es l'assistant IA du site de Baudry Bahuna (MAJUBAH Consulting), formateur en intelligence artificielle basé en Normandie.
Tu réponds en français, de façon concise (3 à 5 phrases), chaleureuse et concrète, aux questions des visiteurs sur l'IA et sur la formation « Formation intensive IA — 3 jours » (éligible CPF, certifiante, présentiel ou distanciel ; de débutant à utilisateur autonome).
Quand c'est pertinent, invite à découvrir la formation ou à contacter Baudry via le formulaire du site. Ne fournis jamais de contenu dangereux ; si une question sort du cadre (IA, formation, productivité professionnelle), recentre poliment.`;

export default async function handler(req, res) {
  // CORS (utile pendant les tests depuis un autre domaine ; inoffensif en prod même domaine)
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Methods", "POST, OPTIONS");
  res.setHeader("Access-Control-Allow-Headers", "Content-Type");
  if (req.method === "OPTIONS") { res.statusCode = 204; return res.end(); }
  if (req.method !== "POST") { res.statusCode = 405; return res.end("Method Not Allowed"); }

  try {
    // Récupère le corps JSON { message: "..." } quel que soit le runtime
    let body = req.body;
    if (body == null || typeof body === "string") {
      const raw = typeof body === "string" ? body : await readBody(req);
      body = raw ? JSON.parse(raw) : {};
    }
    const message = String((body && body.message) || "").slice(0, 2000).trim();
    if (!message) { res.statusCode = 400; return res.end("missing message"); }

    res.statusCode = 200;
    res.setHeader("Content-Type", "text/plain; charset=utf-8");
    res.setHeader("Cache-Control", "no-store");

    const stream = client.messages.stream({
      model: "claude-opus-4-8",
      max_tokens: 1024,
      system: SYSTEM,
      messages: [{ role: "user", content: message }],
    });

    for await (const event of stream) {
      if (event.type === "content_block_delta" && event.delta.type === "text_delta") {
        res.write(event.delta.text);
      }
    }
    res.end();
  } catch (err) {
    console.error("api/ai error:", err);
    if (!res.headersSent) { res.statusCode = 500; res.setHeader("Content-Type", "text/plain; charset=utf-8"); }
    res.end("Désolé, le service IA est momentanément indisponible.");
  }
}

function readBody(req) {
  return new Promise((resolve, reject) => {
    let data = "";
    req.on("data", (chunk) => { data += chunk; });
    req.on("end", () => resolve(data));
    req.on("error", reject);
  });
}
