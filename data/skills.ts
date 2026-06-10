import { Skill } from "@/types";

export interface SkillCategory{
    categoryName:string,
    skills:Skill[],
}

export const SkillCategories:SkillCategory[]=[
    {
        categoryName: "Frontend",
    skills: [
      { name: "React", level: "Intermédiaire", icon: "⚛️" },
      { name: "Next.js", level: "Débutant", icon: "▲" },
      { name: "TypeScript", level: "Débutant", icon: "📘" },
      { name: "Tailwind CSS", level: "Intermédiaire", icon: "🎨" },
      { name: "Redux Toolkit", level: "Intermédiaire", icon: "📦" }
    ]
    },
    {
        categoryName: "Backend & Base de données",
    skills: [
      { name: "Node.js", level: "Intermédiaire", icon: "🟢" },
      { name: "Express", level: "Intermédiaire", icon: "🚂" },
      { name: "MongoDB", level: "Intermédiaire", icon: "🍃" },
      { name: "JWT (Auth)", level: "Intermédiaire", icon: "🔒" }
    ]
    },
    {
      categoryName: "Outils & Workflow",
    skills: [
      { name: "Git & GitHub", level: "Avancé", icon: "🐙" },
      { name: "VS Code", level: "Avancé", icon: "💻" },
      { name: "NPM / Yarn", level: "Intermédiaire", icon: "🛠️" },
      { name: "Postman", level: "Intermédiaire", icon: "🚀" }
    ]
    }
]