export interface Partenaire {
  id: string;
  nom: string;
  logo: string;
}

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
