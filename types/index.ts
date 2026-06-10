//Une interface: sert à décrire la structure d'un objet.
export interface Project {
    id:string;
    title:string;
    description:string;
    stack:string[];
    githubUrl:string;
    
}
// Interface pour une compétence (Page Skills)
export interface Skill {
  name: string;
  level: 'Débutant' | 'Intermédiaire' | 'Avancé'; // Types d'unions stricts
  icon: string; 
}

// Interface pour le parcours (Page About)
export interface Experience {
  id: string;
  title: string;
  companyOrSchool: string;
  period: string; // Ex: "2024 - 2026"
  description: string;
}