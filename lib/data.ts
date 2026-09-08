export type CategorieFormation = "Cloud" | "Cybersécurité" | "Développement" | "Intelligence artificielle";

export interface Formation {
  id: string;
  nom: string;
  description: string;
  categorie: CategorieFormation;
  niveau: "Débutant" | "Intermédiaire" | "Avancé";
  formateurId: string;
  mode: "Présentiel" | "À distance" | "Hybride";
  dateDebut: string;
  dateFin: string;
  duree: string;
  places: number;
  placesDisponibles: number;
  prix: number;
  image: string;
  programme: string[];
  objectifs: string[];
}

export interface Formateur {
  id: string;
  nom: string;
  prenom: string;
  photo: string;
  specialite: string;
  biographie: string;
  certifications: string[];
  experience: string;
  email: string;
}

export interface Partenaire {
  id: string;
  nom: string;
  logo: string;
}

export interface Temoignage {
  id: string;
  nom: string;
  role: string;
  entreprise: string;
  texte: string;
  photo: string;
  note: number;
}

export const formateurs: Formateur[] = [
  {
    id: "f1",
    nom: "El Amrani",
    prenom: "Hassan",
    photo: "https://i.pravatar.cc/300?img=11",
    specialite: "Cloud Computing & DevOps",
    biographie: "Expert AWS certifié avec 15 ans d'expérience en architecture cloud.",
    certifications: ["AWS Solutions Architect", "Docker Certified", "Kubernetes"],
    experience: "15 ans",
    email: "hassan.elamrani@ziryabtec.com",
  },
  {
    id: "f2",
    nom: "Tazi",
    prenom: "Nadia",
    photo: "https://i.pravatar.cc/300?img=5",
    specialite: "Cybersécurité",
    biographie: "Consultante en sécurité informatique, experte en tests d'intrusion.",
    certifications: ["CEH", "CISSP", "OSCP"],
    experience: "12 ans",
    email: "nadia.tazi@ziryabtec.com",
  },
  {
    id: "f3",
    nom: "Chraibi",
    prenom: "Omar",
    photo: "https://i.pravatar.cc/300?img=12",
    specialite: "Développement Full Stack",
    biographie: "Développeur senior spécialisé en React, Node.js et architectures modernes.",
    certifications: ["React Developer", "Node.js Certified"],
    experience: "10 ans",
    email: "omar.chraibi@ziryabtec.com",
  },
];

export const formations: Formation[] = [
  {
    id: "formation-aws",
    nom: "AWS Solutions Architect",
    description: "Formation complète pour devenir architecte cloud AWS certifié.",
    categorie: "Cloud",
    niveau: "Avancé",
    formateurId: "f1",
    mode: "Présentiel",
    dateDebut: "2024-09-15",
    dateFin: "2024-12-15",
    duree: "3 mois",
    places: 20,
    placesDisponibles: 15,
    prix: 15000,
    image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=2072&auto=format&fit=crop",
    programme: ["Introduction AWS", "EC2 et VPC", "S3 et stockage", "Sécurité AWS", "Architecture avancée"],
    objectifs: ["Maîtriser les services AWS", "Préparer la certification", "Déployer des architectures cloud"],
  },
  {
    id: "formation-cyber",
    nom: "Cybersécurité Avancée",
    description: "Formation intensive en sécurité informatique et ethical hacking.",
    categorie: "Cybersécurité",
    niveau: "Intermédiaire",
    formateurId: "f2",
    mode: "À distance",
    dateDebut: "2024-10-01",
    dateFin: "2024-12-31",
    duree: "3 mois",
    places: 15,
    placesDisponibles: 10,
    prix: 12000,
    image: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&w=2070&auto=format&fit=crop",
    programme: ["Fondamentaux sécurité", "Tests d'intrusion", "Forensique", "Sécurité réseau"],
    objectifs: ["Comprendre les menaces", "Réaliser des audits", "Mettre en place la sécurité"],
  },
  {
    id: "formation-dev",
    nom: "Développement Full Stack",
    description: "Formation complète en développement web moderne avec React et Node.js.",
    categorie: "Développement",
    niveau: "Débutant",
    formateurId: "f3",
    mode: "Présentiel",
    dateDebut: "2024-09-20",
    dateFin: "2025-01-20",
    duree: "4 mois",
    places: 25,
    placesDisponibles: 20,
    prix: 18000,
    image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?q=80&w=2072&auto=format&fit=crop",
    programme: ["HTML/CSS/JS", "React", "Node.js", "PostgreSQL", "Déploiement"],
    objectifs: ["Créer des applications web", "Maîtriser React", "Développer des API"],
  },
  {
    id: "formation-ia",
    nom: "Intelligence Artificielle",
    description: "Formation avancée en machine learning et deep learning.",
    categorie: "Intelligence artificielle",
    niveau: "Avancé",
    formateurId: "f1",
    mode: "À distance",
    dateDebut: "2024-11-01",
    dateFin: "2025-02-01",
    duree: "3 mois",
    places: 20,
    placesDisponibles: 12,
    prix: 20000,
    image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?q=80&w=1932&auto=format&fit=crop",
    programme: ["Python pour IA", "Machine Learning", "Deep Learning", "NLP", "Computer Vision"],
    objectifs: ["Comprendre les algorithmes ML", "Créer des modèles", "Déployer des solutions IA"],
  }
];

export const partenaires: Partenaire[] = [
  { id: "p1", nom: "AWS", logo: "/logos/aws.svg" },
  { id: "p2", nom: "Docker", logo: "/logos/docker.svg" },
  { id: "p3", nom: "Python", logo: "/logos/python.svg" },
  { id: "p4", nom: "React", logo: "/logos/react.svg" },
  { id: "p5", nom: "Next.js", logo: "/logos/nextjs.svg" },
  { id: "p6", nom: "PostgreSQL", logo: "/logos/postgresql.svg" },
  { id: "p7", nom: "TypeScript", logo: "/logos/typescript.svg" },
  { id: "p8", nom: "Node.js", logo: "/logos/nodejs.svg" },
];

export const temoignages: Temoignage[] = [
  {
    id: "t1",
    nom: "Youssef Alaoui",
    role: "Cloud Architect",
    entreprise: "TechCorp",
    texte: "La formation AWS Solutions Architect m'a permis de décrocher mon poste actuel. Les formateurs sont des experts qui maîtrisent vraiment leur sujet, et l'approche pratique m'a donné confiance pour passer la certification.",
    photo: "https://i.pravatar.cc/150?img=68",
    note: 5
  },
  {
    id: "t2",
    nom: "Sara Bennani",
    role: "Développeuse Frontend",
    entreprise: "WebAgency",
    texte: "J'ai suivi le cursus Full Stack et je suis impressionnée par la qualité du contenu. Le projet de fin d'études m'a donné un portfolio solide à présenter aux recruteurs. Je recommande vivement ZiryabTec !",
    photo: "https://i.pravatar.cc/150?img=47",
    note: 5
  },
  {
    id: "t3",
    nom: "Amine Tazi",
    role: "Analyste Cybersécurité",
    entreprise: "SecurBank",
    texte: "Une formation intense mais extrêmement enrichissante. Les laboratoires pratiques sur l'ethical hacking étaient incroyables. Aujourd'hui, j'applique ces connaissances au quotidien dans mon métier.",
    photo: "https://i.pravatar.cc/150?img=11",
    note: 5
  },
  {
    id: "t4",
    nom: "Khadija El Fassi",
    role: "Data Scientist",
    entreprise: "DataVision",
    texte: "Le module d'Intelligence Artificielle est très bien structuré, partant des bases de Python jusqu'aux modèles de Deep Learning complexes. Une vraie montée en compétences rapide et efficace.",
    photo: "https://i.pravatar.cc/150?img=32",
    note: 4
  }
];
