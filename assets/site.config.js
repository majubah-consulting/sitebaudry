/* =========================================================================
   MAJUBAH Consulting — Source unique de vérité métier.
   Modifie UNIQUEMENT ce fichier pour changer prix, capacités, liens, sessions.
   Les pages lisent window.MAJUBAH pour afficher les valeurs dynamiques.
   Les valeurs marquées « à confirmer » doivent être validées avant production.
   ========================================================================= */
window.MAJUBAH = {
  brand: "MAJUBAH Consulting",
  founder: "Baudry Bahuna",
  location: "Pont-Audemer, Normandie",
  // Coordonnées : reprises du projet existant. Compléter / corriger si besoin.
  email: "baudry@majubah.com",
  phone: "", // laisser vide tant que non public (n'affiche rien si vide)
  linkedin: "https://www.linkedin.com/in/baudry-bahuna/", // profil LinkedIn de Baudry
  campusUrl: "https://majubah-campus.com",

  // Recommandations LinkedIn (preuve sociale réelle et publique).
  linkedinRecommendations: "https://www.linkedin.com/in/baudry-bahuna/details/recommendations/?detailScreenTabIndex=0",
  recommendationsCount: 51, // nombre affiché « +51 recommandations »
  // ⬇️ COLLE ICI 6 à 9 de tes VRAIES recommandations LinkedIn (autorisées car publiques).
  //    Format : { quote: "le texte de la reco…", name: "Prénom Nom", role: "Fonction · Entreprise" }
  //    Tant que la liste est vide, la section affiche seulement le bouton vers LinkedIn.
  testimonials: [
    {
      quote: "J'ai eu le plaisir d'avoir Baudry comme formateur lors de mon Bachelor RPMC à l'E2SE. Ce qui le distingue vraiment des autres intervenants, c'est son approche pédagogique unique, résolument tournée vers la pratique et la volonté de toujours nous mettre dans un environnement agréable où nous sommes poussés à travailler. En plus de m'avoir transmis une solide maîtrise du benchmark et de l'analyse chiffrée, il nous a formés de manière très concrète sur l'Intelligence Artificielle, en mettant en lumière aussi bien ses forces que ses limites — très utile avec la montée en puissance actuelle de celle-ci.",
      name: "Lucas Gréget",
      role: "Étudiant en Marketing",
      photo: "assets/avis/lucasgreget.jpeg",
    },
    {
      quote: "J'ai eu le plaisir d'être formée par Monsieur Bahuna dans le cadre du parcours Manager des Organisations. Son enseignement en gestion de projet a été particulièrement structurant et concret : il sait rendre les concepts clairs et applicables, en s'appuyant sur des exemples pertinents et des mises en situation qui facilitent l'appropriation des méthodes de pilotage de projet. J'ai particulièrement apprécié ses nombreux conseils sur l'utilisation de l'intelligence artificielle dans nos pratiques managériales : il nous a appris à en tirer parti avec méthode, tout en conservant un esprit critique indispensable. Au-delà de ses compétences, il sait créer une véritable dynamique de groupe et instaure un climat de confiance où les erreurs deviennent de réelles opportunités d'apprentissage. Un formateur engagé, pédagogue et inspirant, que je recommande vivement.",
      name: "Séverine Moussel",
      role: "Parcours Manager des Organisations",
      photo: "assets/avis/Sévervinemoussel.jpeg",
    },
    {
      quote: "J'ai adoré suivre les cours de Baudry en gestion de projet ! Sa passion pour l'innovation et l'intelligence artificielle rend chaque séance vivante, dynamique et inspirante. Toujours à l'écoute et plein d'énergie, il sait créer une ambiance bienveillante qui donne vraiment envie d'apprendre et de se dépasser.",
      name: "Lucie Pineau",
      role: "Gestion de projet",
      photo: "assets/avis/luciepineau.jpeg",
    },
    {
      quote: "J'ai commencé à travailler avec Baudry récemment, et je comprends mieux cette phrase de Sénèque : « Ce n'est pas parce que les choses sont difficiles que nous n'osons pas, c'est parce que nous n'osons pas qu'elles sont difficiles. » Baudry a ce talent rare d'identifier les blocages tout en donnant l'assurance nécessaire pour les dépasser. Professionnel, analytique, mais surtout profondément humain. Pas de discours rigide, juste des échanges clairs et naturels qui font réellement avancer. Recommandé pour les entrepreneurs cherchant un accompagnement exigeant ET bienveillant.",
      name: "Jocelyn Longfort",
      role: "CEO SOFICCA · Expert en financements & marchand de biens",
      photo: "assets/avis/jocelynlongfort.jpg",
    },
    {
      quote: "J'ai eu la chance d'être formé par Baudry Bahuna en gestion de projet durant ma première année de Master MDO Groupe A à l'E2SE. Formateur passionné et pédagogue, il sait rendre ses cours extrêmement vivants et captivants. Baudry intègre également les nouveaux outils, dont l'IA, ce qui nous permet de rester performants et en phase avec les exigences actuelles du métier. Professionnel, clair et engagé dans la réussite de ses étudiants, c'est un intervenant que je recommande vivement. Encore un grand merci au nom du groupe A MDO 2025/2026 ! 😉",
      name: "Hugo Leveziel",
      role: "Étudiant · Master MDO (E2SE)",
      photo: "assets/avis/hugoleveziel.jpeg",
    },
    // Ajoute ici tes autres recommandations au même format pour les afficher.
  ],

  // Qualiopi : N'AFFICHER que si vérifié. Renseigner le numéro réel.
  qualiopi: {
    certified: true,
    declarationNumber: "", // n° de déclaration d'activité (à confirmer)
    mention: "Organisme de formation certifié Qualiopi",
  },

  // Certification du parcours IA (RS7344) — données officielles du certificateur.
  certification: {
    cpfEligible: true,
    label: "Développer son activité avec l'Intelligence Artificielle",
    code: "RS7344",
    codeUrl: "https://www.francecompetences.fr/recherche/rs/7344/",
    certifier: "Webmarketing & co'm",
    certifierUrl: "https://www.webmarketing-com.com",
  },

  pricesVatNote: "Tarifs indicatifs — statut HT/TTC à confirmer.",

  training: {
    durationDays: 3,
    price: 1600,
    minParticipants: 2,        // seuil de confirmation
    maxParticipants: 6,        // capacité max
    confirmationThreshold: 2,
    campusAccessMonths: 12,
    modes: ["in_person", "remote"],
  },

  campus: {
    monthlyPrice: 29,
    annualPrice: 290,
    alumniRenewalPrice: 190,
    url: "https://majubah-campus.com",
  },

  workshops: {
    individualDayPrice: 590,
    intraDayPriceFrom: 1500,
  },

  // Outils IA enseignés (bandeau).
  tools: [
    "ChatGPT", "Claude", "Gemini", "Microsoft Copilot", "Perplexity",
    "NotebookLM", "Gamma", "Mistral", "Canva IA", "Lovable",
  ],

  // Sessions de formation. VIDE = aucune date programmée → la page /reserver
  // bascule automatiquement sur « être informé des prochaines dates ».
  // Modèle : { id, title, startDate, endDate, mode:'in_person'|'remote',
  //            location, capacity, confirmationThreshold, registeredCount, status }
  // status : 'pre_registration_open' | 'confirmed' | 'full' | 'cancelled'
  sessions: [],
};
