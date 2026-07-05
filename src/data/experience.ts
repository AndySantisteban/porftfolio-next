export interface Job {
  company: string;
  role: string;
  period: string;
  current?: boolean;
  bullets: string[];
}

export const jobs: Job[] = [
  {
    company: "Unified Software ",
    role: "Full-stack Developer ",
    period: "Agosto 2022 — Presente",
    current: true,
    bullets: [
      "Desarrollo full-stack sobre el ecosistema de servicios financieros de la empresa.",
    ],
  },
  {
    company: "Freelancer.com",
    role: "Full-stack Developer",
    period: "Febrero 2020 — Diciembre 2023",
    bullets: [
      "Desarrollo de aplicaciones web para diversas empresas.",
      "Arquitecturas limpias, SPAs y landing pages.",
      "Manejo de proyectos y migraciones de arquitectura.",
      "Monorepos y microservicios.",
    ],
  },
  {
    company: "Clínica de la Piel",
    role: "Project Manager & Full-stack Developer",
    period: "Marzo 2022 — Octubre 2023",
    bullets: [
      "Responsable de todas las áreas de desarrollo.",
      "Gestión del equipo de trabajo y control de actividades.",
      "Desarrollo frontend y despliegues a servidores.",
    ],
  },
  {
    company: "First Automation",
    role: "Web Developer & Cloud Engineer",
    period: "Septiembre 2021 — Marzo 2023",
    bullets: [
      "Desarrollo de nubeindustrial.com y app.nubeindustrial.com.",
      "Monorepos con microservicios: React, TypeScript, Styled-components, Vite, Apollo Client y GraphQL.",
      "Cloud en AWS: EC2, S3, CloudFront y CI/CD con CodeCommit, CodeBuild y CodePipeline.",
      "Apps web y móviles con React y React Native.",
    ],
  },
  {
    company: "MDP Consulting S.A.C.",
    role: "Full-stack Developer",
    period: "Septiembre 2022 — Diciembre 2022",
    bullets: [
      "Desarrollo en equipo de Tracking SelleR para Ripley Perú (appseller.ripley.com.pe).",
      "Metodologías ágiles con Scrum y entorno cloud en AWS.",
      "Frontend con React.js y TypeScript.",
    ],
  },
];

export interface Highlight {
  org: string;
  title: string;
  description: string;
  url?: string;
}

export const highlights: Highlight[] = [
  {
    org: "USS — Universidad Señor de Sipán",
    title: "Signape",
    description:
      "Software que transforma la comunicación al integrar detección e interpretación de lenguaje de señas, fomentando un entorno inclusivo.",
    url: "https://www.facebook.com/UssipanImagen/videos/1006514997066493/",
  },
  {
    org: "USS — Universidad Señor de Sipán",
    title: "Proyecto de responsabilidad social",
    description:
      "La Escuela de Ingeniería de Sistemas de la USS ejecutó un proyecto de responsabilidad social del que formé parte como desarrollador.",
    url: "https://www.uss.edu.pe/",
  },
  {
    org: "Codefresh",
    title: "GitOps Certification",
    description: "Certificación en GitOps y despliegue continuo con Argo CD.",
  },
];
