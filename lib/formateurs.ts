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
