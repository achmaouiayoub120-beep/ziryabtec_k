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
