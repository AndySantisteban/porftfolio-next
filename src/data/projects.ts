export interface ProjectImage {
  src: string;
  alt: string;
  width: number;
  height: number;
}

export interface Project {
  slug: string;
  title: string;
  tagline: string;
  /** Markdown — cuerpo largo de la página de detalle */
  body: string;
  stack: string[];
  url?: string;
  cover?: ProjectImage;
  gallery?: ProjectImage[];
  featured?: boolean;
  wip?: boolean;
  year: number;
}

export const projects: Project[] = [
  {
    slug: "signape",
    title: "Signape",
    tagline:
      "Videollamadas con traducción de lenguaje de señas peruano en tiempo real (Deep Learning).",
    body: `Aplicación de videollamadas que detecta e interpreta el abecedario del lenguaje de señas peruano usando visión por computadora, fomentando un entorno inclusivo para personas con discapacidad auditiva.

Desarrollado en colaboración con Nicolette Isis Pacheco Contreras como proyecto de investigación en la Universidad Señor de Sipán.

**Demo:** [signape.onrender.com](https://signape.onrender.com/)`,
    stack: ["Python", "Deep Learning", "OpenCV", "WebRTC", "React"],
    url: "https://signape.onrender.com/",
    cover: { src: "/signape-homepage.png", alt: "Página principal de Signape", width: 1200, height: 675 },
    featured: true,
    year: 2023,
  },
  {
    slug: "cultivame",
    title: "CultivaMe",
    tagline: "Monitoreo de cultivos agrícolas con Deep Learning (BETA).",
    body: `Aplicación de monitoreo de cultivos agrícolas que usa modelos de Deep Learning para analizar el estado de los cultivos y ayudar a la toma de decisiones en el campo.

**Demo:** [cultivame-web.vercel.app](https://cultivame-web.vercel.app/)`,
    stack: ["Python", "Deep Learning", "React", "Vercel"],
    url: "https://cultivame-web.vercel.app/",
    cover: { src: "/cultivame.png", alt: "Dashboard de CultivaMe", width: 1200, height: 675 },
    featured: true,
    year: 2024,
  },
  {
    slug: "first-automation-web",
    title: "First Automation — Nube Industrial",
    tagline: "Plataforma IIoT: alertas y reportes personalizados del proceso industrial.",
    body: `La implementación de una plataforma IIoT (Industrial IoT) tradicional requiere alta inversión de capital (CAPEX) para equipos, software, programación del PLC y desarrollo, además de un cronograma que puede tardar hasta 12 meses. Nube Industrial reduce ese costo y tiempo ofreciendo monitoreo, alertas y reportes personalizados del proceso industrial como servicio.

Trabajé el frontend (React, TypeScript, Styled-components, Vite, Apollo Client, GraphQL) y la infraestructura cloud en AWS (EC2, S3, CloudFront) con CI/CD sobre CodePipeline.

**Sitio:** [first-automation.vercel.app](https://first-automation.vercel.app/)`,
    stack: ["React", "TypeScript", "GraphQL", "AWS", "Vite"],
    url: "https://first-automation.vercel.app/",
    cover: { src: "/nube-industrial-home-page.png", alt: "Home de Nube Industrial", width: 1200, height: 675 },
    gallery: [
      { src: "/nube-industrial-login.png", alt: "Login de Nube Industrial", width: 1200, height: 675 },
    ],
    featured: true,
    year: 2022,
  },
  {
    slug: "first-automation-app",
    title: "Nube Industrial — App",
    tagline: "Gráficos estadísticos en tiempo real con GraphQL Subscriptions.",
    body: `Aplicación web de visualización industrial con gráficos estadísticos en tiempo real usando GraphQL Subscriptions, con un diseño de dashboards inspirado en InfluxDB. Construida sobre un monorepo con microservicios y react-grid-layout para dashboards configurables por el usuario.`,
    stack: ["React", "GraphQL Subscriptions", "TypeScript", "Node.js"],
    year: 2022,
  },
  {
    slug: "tracking-seller",
    title: "Tracking SelleR — Ripley",
    tagline: "Plataforma de sellers para Ripley Perú, en equipo con MDP e IT Data.",
    body: `Producto de tracking para sellers del marketplace de Ripley Perú, desarrollado en equipo (célula Tracking Seller) con metodologías ágiles (Scrum) y despliegue en AWS.

**Producción:** [appseller.ripley.com.pe](https://appseller.ripley.com.pe/login)`,
    stack: ["React", "TypeScript", "AWS", "Scrum"],
    url: "https://appseller.ripley.com.pe/login",
    featured: true,
    year: 2022,
  },
  {
    slug: "jwt-template",
    title: "jsonwebtoken-template",
    tagline: "Librería npm que simplifica firmar y verificar JWT con funciones reutilizables.",
    body: `Librería publicada en npm que facilita el uso de JSON Web Tokens con funciones reutilizables desde el frontend o Node.js.

\`\`\`js
const useJwt = require("jsonwebtoken-template");

const user = { name: "Andy", password: "Santisteban" };
const expired = { time: "1h" };
const secret = "secret";

// Crear token
const token = useJwt.signJwt(user, expired, secret);

// Verificar / decodificar
const decoded = useJwt.verifyJwt(token, secret);
\`\`\`

**Package:** [npmjs.com/package/jsonwebtoken-template](https://www.npmjs.com/package/jsonwebtoken-template)`,
    stack: ["Node.js", "JWT", "npm", "JavaScript"],
    url: "https://www.npmjs.com/package/jsonwebtoken-template",
    cover: { src: "/jwt-1.png", alt: "Documentación del package jsonwebtoken-template", width: 1200, height: 675 },
    gallery: [
      { src: "/jwt-2.png", alt: "Ejemplo de uso de signJwt", width: 1200, height: 675 },
      { src: "/jwt-3.png", alt: "Ejemplo de uso de verifyJwt", width: 1200, height: 675 },
      { src: "/jwt-4.png", alt: "Resultado en consola", width: 1200, height: 675 },
    ],
    year: 2022,
  },
  {
    slug: "snake-filter",
    title: "Snake Filter — ImageJ",
    tagline: "Plugin en Java para segmentación de imágenes médicas con la técnica SNAKE.",
    body: `Plugin para [ImageJ](https://imagej.net/) basado en la técnica SNAKE (active contours) que permite trazar imágenes identificando áreas con precisión.

El filtro, programado en Java con NetBeans, mostró resultados satisfactorios en segmentación de imágenes de endoscopía (mejores que en ultrasonido), validando el método para asistencia diagnóstica.`,
    stack: ["Java", "ImageJ", "Procesamiento de imágenes"],
    cover: { src: "/snake-filter.png", alt: "Filtro SNAKE aplicado sobre una imagen médica", width: 1200, height: 675 },
    gallery: [
      { src: "/filter-2.png", alt: "Segmentación paso 2", width: 1200, height: 675 },
      { src: "/filter-3.png", alt: "Segmentación paso 3", width: 1200, height: 675 },
      { src: "/filter-4.png", alt: "Segmentación paso 4", width: 1200, height: 675 },
      { src: "/filter-5.png", alt: "Segmentación paso 5", width: 1200, height: 675 },
    ],
    year: 2021,
  },
  {
    slug: "multiservicios-infotec",
    title: "Multiservicios Infotec",
    tagline: "E-commerce de equipos de cómputo, celulares y servicio técnico.",
    body: `Sitio para una tienda de venta de equipos de cómputo (PCs, portátiles), impresoras, suministros, celulares y accesorios, con catálogo de servicio técnico especializado.

**Sitio:** [multiservicios-infotec.vercel.app](https://multiservicios-infotec.vercel.app/)`,
    stack: ["React", "Vercel"],
    url: "https://multiservicios-infotec.vercel.app/",
    cover: { src: "/infotec-homepage.png", alt: "Home de Multiservicios Infotec", width: 1200, height: 675 },
    year: 2022,
  },
  {
    slug: "iglesia-del-nazareno",
    title: "Iglesia del Nazareno (Ferreñafe)",
    tagline: "Sitio institucional con bibliografía, historia y links de cultos.",
    body: `Página web para la Iglesia del Nazareno de Ferreñafe donde la comunidad puede acceder a bibliografía, historia y enlaces de cultos en vivo.

**Sitio:** [iglesia-del-nazareno-ferrenafe.vercel.app](https://iglesia-del-nazareno-ferrenafe.vercel.app/)`,
    stack: ["React", "Vercel"],
    url: "https://iglesia-del-nazareno-ferrenafe.vercel.app/",
    year: 2022,
  },
  {
    slug: "hash-password",
    title: "Hash Password",
    tagline: "Generador y encriptador de contraseñas.",
    body: `Herramienta web para encriptar contraseñas con MD5 y generar contraseñas seguras.

**Demo:** [hashpassword.vercel.app](https://hashpassword.vercel.app/)`,
    stack: ["React", "JavaScript"],
    url: "https://hashpassword.vercel.app/",
    year: 2021,
  },
  {
    slug: "notas",
    title: "Notes",
    tagline: "Lista de notas con Firebase Firestore, Redux y React.",
    body: `Aplicación de notas construida con Firebase para persistencia en Firestore, aprovechando Redux y react-redux para el manejo de estado.

**Demo:** [blog-de-notas.vercel.app](https://blog-de-notas.vercel.app/)`,
    stack: ["React", "Firebase", "Redux"],
    url: "https://blog-de-notas.vercel.app/",
    year: 2021,
  },
  {
    slug: "microfrontend-generator",
    title: "Microfrontend Generator",
    tagline: "CLI en Go que scaffoldea microfrontends con Vite.js.",
    body: `Generador de microfrontends escrito en Go que scaffoldea proyectos Vite.js listos para producción. En desarrollo.`,
    stack: ["Go", "Vite", "CLI"],
    wip: true,
    year: 2024,
  },
  {
    slug: "frontend-generator-template",
    title: "Frontend Generator Template",
    tagline: "Motor de templates para generar frontends, escrito en Go.",
    body: `Motor de templates en Go para generar estructuras de proyectos frontend de forma consistente. En desarrollo.`,
    stack: ["Go", "CLI"],
    wip: true,
    year: 2024,
  },
  {
    slug: "ticketing-system",
    title: "Sistema de Ticketing",
    tagline: "Gestión de tickets de soporte end-to-end.",
    body: `Sistema de gestión de tickets de soporte. En desarrollo.`,
    stack: ["Go", "React", "TypeScript"],
    wip: true,
    year: 2024,
  },
];

export const featuredProjects = projects.filter((p) => p.featured);

export function getProject(slug: string): Project | undefined {
  return projects.find((p) => p.slug === slug);
}
