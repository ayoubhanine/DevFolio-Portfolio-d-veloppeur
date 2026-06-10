import ProjectCard from "@/components/ProjectCard"
import Link from "next/link"
import { projects } from "@/data/projects"
export default function Portfolio(){
    
    return(
        <div className="container mx-auto p-8">
            {/* 2. Aperçu des Projets */}
      <section className="max-w-6xl mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-8 gap-4">
          <div>
            <h2 className="text-3xl font-bold text-slate-900">Mes Projets Réalisés</h2>
            <p className="text-slate-500 mt-1">Découvrez une sélection de mes dernières réalisations techniques.</p>
          </div>
          
        </div>

        {/* Grille d'aperçu */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </section>
    </div>
        
    )
}