import { Project } from "../types";

export const projects: Project[] = [
  {
    id: '1',
     title: "Dashboard Investisseur & Gestion de Portefeuille",
  description:
    "Développement d'une plateforme de financement participatif intégrant un tableau de bord investisseur, la gestion du portefeuille, le suivi des investissements, l'alimentation du solde et l'exploration des projets disponibles.",
  stack: ["React","EXPRESS", "Redux Toolkit", "React Router", "Tailwind", "JavaScript"],
    githubUrl: 'https://github.com/ayoubhanine/CrowdManag.git',
  },
  {
    id: '2',
     title: "Dashboard de Gestion des Dépenses & Factures",
  description:
    "Développement d’une SPA React connectée à une API sécurisée par JWT, permettant de gérer les fournisseurs, suivre les factures et paiements, analyser les dépenses et centraliser l’état global de l’application avec Redux Toolkit.",
  stack: ["React","EXPRESS", "Redux Toolkit", "React Router", "Tailwind", "REST API","JWT"],
    githubUrl: 'https://github.com/walid-olt/FluxBill.git',
  },
  {
     id: '3',
     title: "GameExplorer - Plateforme de Découverte de Jeux Vidéo",
  description:
    "Application web développée avec React permettant d'explorer un vaste catalogue de jeux vidéo grâce à l'API RAWG. L'application intègre la recherche, les filtres par genre, la pagination, les détails des jeux, les équipes de développement et les profils des créateurs avec une gestion complète des états asynchrones",
  stack: ["React", "Axios", "React Router", "Tailwind","RAWG API"],
    githubUrl: 'https://github.com/walid-olt/GXP.git',
  },
  {
     id: '4',
     title: "API de Gestion de Portefeuilles Financiers",
  description:
    "Développement d'une API REST avec Express.js permettant la gestion des utilisateurs et de leurs portefeuilles financiers. L'application intègre les opérations de dépôt et de retrait avec validation métier, gestion des erreurs, architecture MVC, middleware personnalisés et persistance des données",
  stack: ["Nodejs", "Postman", " Express", "REST API","JavaScript"],
    githubUrl: 'https://github.com/ayoubhanine/Digital-Wallet-API-avec-Express.js.git',
  }
];