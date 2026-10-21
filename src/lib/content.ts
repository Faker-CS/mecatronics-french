/**
 * All landing-page copy lives here so it can later be swapped for a CMS/API
 * without touching the components. Text is taken verbatim from the Figma
 * frame "Mecatronics french" unless marked TODO.
 */

export const anchors = {
  home: "accueil",
  offers: "offres",
  services: "services",
  howItWorks: "comment-ca-marche",
  reviews: "avis",
  news: "actualites",
  contact: "contact",
} as const;

export const site = {
  name: "Mecatronic Center",
  logo: { src: "/images/logo.png", width: 300, height: 158 },
  // TODO: replace with the real phone/email — the Figma footer reuses
  // placeholders (and an email from another client project).
  phone: "+33 (0)0 00 00 00 00",
  email: "contact@nesspare-brise.fr",
  hours: "Lun–Sam · 8:00–18:00",
};

export const navLinks = [
  { label: "Maison", href: `#${anchors.home}` },
  { label: "Services", href: `#${anchors.services}` },
  { label: "Comment ça marche", href: `#${anchors.howItWorks}` },
  { label: "Pourquoi nous choisir", href: `#${anchors.reviews}` },
  { label: "Emplacements", href: `#${anchors.contact}` },
];

export const hero = {
  eyebrow: "Experts automobiles",
  title: ["Votre voiture", "a un problème.", "Nous avons la", "solution."],
  intro:
    "Des pare-brise et pneus aux diagnostics, en passant par l'électronique et l'optimisation moteur : redonnez à votre véhicule tout son potentiel.",
  highlights: [
    "Réponse rapide",
    "Techniciens experts",
    "Aide à l'assurance",
    "Pièces de qualité",
  ],
  cta: "Prendre rendez-vous",
};

export type Offer = {
  label: string;
  title: [string, string];
  subtitle: string;
  text: string;
  image: { src: string; alt: string };
};

export const offers: Offer[] = [
  {
    label: "Offre 1",
    title: ["De 200 €", "à 400 €"],
    subtitle: "Virement bancaire",
    text: "Consultez les termes et conditions de nos offres dans nos centres et sur notre site web",
    image: { src: "/images/offer-euro.png", alt: "Symbole euro rouge en verre" },
  },
  // TODO: the second slide only exists as a remote component variant that
  // isn't readable from the file — replace with the real offer.
  {
    label: "Offre 2",
    title: ["Jusqu'à 100 €", "offerts"],
    subtitle: "Sur votre pare-brise",
    text: "Consultez les termes et conditions de nos offres dans nos centres et sur notre site web",
    image: { src: "/images/offer-euro.png", alt: "Symbole euro rouge en verre" },
  },
];

export const offersSection = {
  watermark: "#OFFRES pour vous",
  cta: "Réclamer",
};

export const servicesSection = {
  eyebrow: "Nos prestations",
  title: "Soins automobiles complets. Tout en un lieu.",
  intro:
    "De remplacement de pare-brise et services de pneus à l'électronique automobile avancée et à l'optimisation du moteur, nos spécialistes proposent des solutions rapides et fiables pour vous garder en sécurité et en toute confiance sur la route.",
  secondaryCta: "Commandez vos pneus",
  primaryCta: "Prenez rendez-vous",
};

export type Service = {
  tag: string;
  title: string;
  image: string;
  href: string;
};

export const services: Service[] = [
  {
    tag: "Reprogrammation moteur",
    title: "Débloquez le plein potentiel de votre moteur.",
    image: "/images/service-engine.png",
    href: `#${anchors.contact}`,
  },
  {
    tag: "Services de pneus",
    title: "Adhérence meilleure. Voyages plus sécurisés.",
    image: "/images/service-tyres.png",
    href: `#${anchors.contact}`,
  },
  {
    tag: "Électronique automobile",
    title: "Diagnostiquez plus intelligemment. Conduisez mieux.",
    image: "/images/service-electronics.png",
    href: `#${anchors.contact}`,
  },
  {
    tag: "Services de pare-brise",
    title: "Vision claire. Sécurité complète.",
    image: "/images/service-windshield.png",
    href: `#${anchors.contact}`,
  },
  {
    tag: "Décarbonisation du moteur",
    title: "Nettoyez votre moteur. Restaurez ses performances.",
    image: "/images/service-decarbonization.png",
    href: `#${anchors.contact}`,
  },
  {
    tag: "E85 Bioéthanol",
    title: "Une façon plus intelligente d'alimenter votre conduite.",
    image: "/images/service-e85.png",
    href: `#${anchors.contact}`,
  },
];

export const howItWorks = {
  eyebrow: "Comment ça marche",
  title: "Vous êtes à un clic d'un rendez-vous.",
  intro:
    "Notre processus simple en 3 étapes facilite l'obtention du service automobile dont vous avez besoin : rapidement, professionnellement et sans tracas.",
  steps: [
    {
      title: "Dites-nous ce dont vous avez besoin.",
      text: "Contactez-nous via notre formulaire en ligne et partagez votre demande avec notre équipe. Nous nous assurerons de bien comprendre exactement ce dont votre véhicule a besoin.",
    },
    {
      title: "Parlez à un expert.",
      text: "Un expert du Centre Meca Tronic vous contactera dans les 24 heures pour discuter de votre demande, répondre à vos questions et recommander la bonne solution.",
    },
    {
      title: "Obtenez votre rendez-vous.",
      text: "Nous confirmerons votre rendez-vous dans notre centre automobile à Orléans. Notre équipe professionnelle et amicale sera prête à s'occuper de votre véhicule.",
    },
  ],
};

export const contactBanner = {
  eyebrow: "Contactez-nous",
  title: "Besoin d'un rendez-vous ? Vous avez une question ?",
  intro:
    "Remplissez le formulaire et prenez rendez-vous en quelques étapes simples dans notre centre automobile à Orléans (Fleury-Les-Aubrais)",
  secondaryCta: "Commandez vos pneus",
  primaryCta: "Prendre rendez-vous",
};

export type Article = {
  title: string;
  excerpt: string;
  image: string;
  href: string;
};

// TODO: placeholder articles (the design repeats one card) — wire to the blog.
const sampleArticle: Article = {
  title:
    "Centre d'Ingénierie Meca Tronic : Expertise automobile au service de la performance et de la fiabilité",
  excerpt:
    "Découvrez notre expertise en électronique automobile, pneus et services de pare-brise, avec des solutions fiables conçues pour maintenir votre véhicule à son meilleur niveau.",
  image: "/images/news-engine.png",
  href: "#",
};

export const newsSection = {
  eyebrow: "Dernières nouvelles",
  title: "Restez informé. Restez prêt à la route.",
  intro:
    "Découvrez les dernières informations automobiles, conseils d'entretien, conseils saisonniers et recommandations d'experts du Centre Meca Tronic.",
  readMore: "En savoir plus",
  cta: "Voir tous les blogs",
  articles: Array.from({ length: 6 }, () => sampleArticle),
};

export type Review = {
  author: string;
  avatar: string;
  date: string;
  rating: number;
  text: string;
};

// TODO: placeholder reviews from the design — replace with real Google reviews.
const sampleReview: Review = {
  author: "Tumar Baris",
  avatar: "/images/avatar.png",
  date: "il y a 10 mois",
  rating: 4,
  text: "Le café est excellent et le service est rapide. De premier ordre.",
};

export const reviewsSection = {
  eyebrow: "Clients réels",
  title: "Un bon service parle de lui-même.",
  intro:
    "Réelles expériences de clients qui nous ont choisis pour un service de vitrage automobile rapide, professionnel et sans tracas.",
  reviews: Array.from({ length: 8 }, () => sampleReview),
};

export const contactSection = {
  eyebrow: "Contactez-nous",
  title: "Prenons soin de votre véhicule.",
  intro:
    "Dites-nous ce dont votre véhicule a besoin et nos experts automobiles vous répondront dans les 24 heures avec la bonne solution.",
  image: "/images/contact-technician.png",
  fields: {
    firstName: "Prénom",
    lastName: "Nom",
    phone: "Numéro de téléphone",
    email: "Email",
    postalCode: "Code postal",
    message: "Dites-nous comment nous pouvons vous aider...",
  },
  consent:
    "J'accepte les Conditions Générales fournies par l'entreprise. En fournissant mon numéro de téléphone, j'accepte de recevoir des SMS et des appels de l'entreprise.",
  submit: "Envoyer la demande",
  success:
    "Merci ! Votre demande a bien été envoyée. Un expert vous recontacte sous 24 heures.",
};

export const footer = {
  // TODO: tagline and service list are windshield-centric copy carried over in
  // the design — confirm with the client.
  tagline:
    "Votre expert en vitrage automobile. Réparation et remplacement de pare-brise professionnels à travers la France.",
  columns: [
    {
      title: "Nos services",
      links: [
        "Remplacement de pare-brise",
        "Réparation d'impact",
        "Vitre arrière",
        "Vitre latérale",
        "Toit panoramique",
        "Calibration ADAS",
      ].map((label) => ({ label, href: `#${anchors.services}` })),
    },
    {
      title: "Infos",
      links: [
        { label: "Offre", href: `#${anchors.offers}` },
        { label: "Nos services", href: `#${anchors.services}` },
        { label: "Comment ça fonctionne", href: `#${anchors.howItWorks}` },
        { label: "Contactez-nous", href: `#${anchors.contact}` },
        { label: "Blog", href: `#${anchors.news}` },
      ],
    },
  ],
  socials: [
    { label: "Facebook", href: "#", icon: "facebook" },
    { label: "Instagram", href: "#", icon: "instagram" },
    { label: "YouTube", href: "#", icon: "youtube" },
  ] as const,
  language: "English(Eng)",
  copyright: "2026 Mecatronics. Tous droits réservés.",
  wordmark: "Mecatronic",
};
