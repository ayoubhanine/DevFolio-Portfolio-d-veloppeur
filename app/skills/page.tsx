// app/skills/page.tsx
import { SkillCategories } from "@/data/skills";
import { SkillBadge } from "@/components/SkillBadge";

export default function SkillsPage() {
  return (
    <div className="container mx-auto p-8 max-w-5xl">
      {/* En-tête de la page */}
      <div className="mb-12 text-center md:text-left">
        <h1 className="text-3xl font-bold text-slate-900">Mon Bagage Technique</h1>
        <p className="text-slate-500 mt-2">
          Voici les technologies, frameworks et outils que j'utilise au quotidien pour donner vie aux projets.
        </p>
      </div>

      {/* Liste des catégories */}
      <div className="space-y-10">
        {SkillCategories.map((category, catIndex) => (
          <section key={catIndex} className="bg-slate-50 p-6 rounded-2xl border border-slate-100">
            {/* Nom de la catégorie (ex: Frontend) */}
            <h2 className="text-xl font-semibold text-slate-800 mb-6 pb-2 border-b border-slate-200">
              {category.categoryName}
            </h2>

            {/* Grille des badges de cette catégorie */}
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
              {category.skills.map((skill, skillIndex) => (
                <SkillBadge key={skillIndex} skill={skill} />
              ))}
            </div>
          </section>
        ))}
      </div>
    </div>
  );
}