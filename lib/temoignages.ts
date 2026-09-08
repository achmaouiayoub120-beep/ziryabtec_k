export interface Temoignage {
  id: string;
  nom: string;
  role: string;
  entreprise: string;
  texte: string;
  photo: string;
  note: number;
}

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
    texte: "Une formation intense mais extrêmement enrichissante. Les laboratoires pratiques sur l'ethical hacking étaient incroyables. Aujourd'my, j'applique ces connaissances au quotidien dans mon métier.",
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
