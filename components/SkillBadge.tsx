import { Skill } from "@/types";

interface SkillBadgeProps {
  skill: Skill;
}

// On type directement l'objet des props ({ skill }) au lieu d'utiliser React.FC
export const SkillBadge = ({ skill }: SkillBadgeProps) => {
  const levelStyles = {
    Avancé: "bg-emerald-50 text-emerald-700 border-emerald-200",
    Intermédiaire: "bg-blue-50 text-blue-700 border-blue-200",
    Débutant: "bg-amber-50 text-amber-700 border-amber-200"
  };

  return (
    <div className="flex items-center justify-between p-3 border rounded-xl shadow-sm bg-white hover:scale-105 transition-transform duration-200">
      <div className="flex items-center gap-3">
        {/* Icône / Emoji */}
        <span className="text-xl w-6 text-center">{skill.icon}</span>
        {/* Nom de la compétence */}
        <span className="font-medium text-slate-800">{skill.name}</span>
      </div>
      
      {/* Niveau */}
      <span className={`text-xs px-2 py-0.5 rounded-full border font-medium ${levelStyles[skill.level]}`}>
        {skill.level}
      </span>
    </div>
  );
};