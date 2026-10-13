// Site de démonstration : restaurant (nom, numéro et adresse fictifs).

const site = {
  // --- Identité ---
  name: "La Table d'Essai",
  tagline: "Cuisine béninoise du jour, sur place et à emporter.",
  description:
    "Restaurant de cuisine béninoise à Cotonou : plats du jour, repas à emporter et traiteur pour vos événements.",

  // --- Contact ---
  phone: "+229 01 00 00 00 00",
  whatsapp: "2290100000000",
  whatsappMessage: "Bonjour, j'aimerais commander ou réserver une table.",
  email: "contact@exemple.com",
  address: "Rue exemple, Cotonou, Bénin",
  mapsUrl: "https://www.google.com/maps/search/?api=1&query=Cotonou",

  // --- Horaires ---
  hours: [
    { days: "Lundi au samedi", time: "11h00 - 22h00" },
    { days: "Dimanche", time: "12h00 - 20h00" },
  ],

  // --- Menu ---
  servicesLabel: "Menu",
  servicesTitle: "Notre menu",
  servicesCta: "Voir le menu",
  services: [
    {
      title: "Riz au gras et poulet braisé",
      description: "Riz parfumé à la tomate et aux épices, servi avec du poulet braisé et du piment frais.",
      price: "3 000 FCFA",
    },
    {
      title: "Amiwo au poulet",
      description: "Pâte de maïs rouge cuite à la tomate et à l'huile, servie avec du poulet.",
      price: "2 500 FCFA",
    },
    {
      title: "Poisson braisé et alloco",
      description: "Poisson entier braisé, bananes plantain frites, sauce piment et oignons.",
      price: "4 000 FCFA",
    },
    {
      title: "Pâte noire sauce gombo",
      description: "Pâte de maïs accompagnée d'une sauce gombo à la viande ou au poisson.",
      price: "2 500 FCFA",
    },
    {
      title: "Jus et boissons locales",
      description: "Jus de bissap, de gingembre, d'ananas, préparés maison.",
      price: "500 FCFA",
    },
  ],

  // --- Page À propos ---
  about: {
    title: "Notre cuisine",
    paragraphs: [
      "La Table d'Essai propose une cuisine béninoise préparée chaque matin avec des produits frais achetés au marché. Les plats changent selon les saisons et les arrivages.",
      "Vous pouvez manger sur place, commander à emporter par WhatsApp ou nous confier le repas de votre événement. Les prix du menu sont donnés à titre d'exemple.",
    ],
  },

  // --- Couleurs ---
  theme: {
    accent: "#b4421a",
    accentDark: "#8a3012",
    background: "#fbf7f2",
    text: "#2a1b14",
  },
};

export default site;
