import Link from 'next/link';
import { projects } from '@/data/projects';
import ProjectCard from '@/components/ProjectCard';

export default function Home() {
  // On ne prend que les 2 ou 3 premiers projets pour l'aperçu de la Home
  const featuredProjects = projects.slice(0, 3);

  return (
    <div className="space-y-20 pb-16">
      {/* 1. Hero Section */}
      <section className="bg-linear-to-b from-slate-900 to-slate-800 text-white py-24 px-6 text-center">
        <div className="max-w-3xl mx-auto space-y-6">
          <h1 className="text-5xl font-extrabold tracking-tight sm:text-6xl text-transparent bg-clip-text bg-linear-to-r from-blue-400 to-emerald-400">
            HANINE AYOUB
          </h1>
          <p className="text-2xl font-medium text-slate-300">
            Développeur MERN stack 
          </p>
          <p className="text-lg text-slate-400 max-w-xl mx-auto">
            Passionné par la création d'applications web modernes, fluides et typées de bout en bout. Bienvenue sur ma vitrine professionnelle.
          </p>
          
          {/* Bouton Call-to-Action */}
          <div className="pt-4">
            <Link 
              href="/portfolio" 
              className="inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 transition-colors shadow-lg"
            >
              Voir mes réalisations
            </Link>
          </div>
        </div>
      </section>

      {/* 2. Aperçu des Projets */}
      <section className="max-w-6xl mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-8 gap-4">
          <div>
            <h2 className="text-3xl font-bold text-slate-900">Projets à la une</h2>
            <p className="text-slate-500 mt-1">Un aperçu rapide de mes derniers travaux</p>
          </div>
          <Link href="/portfolio" className="text-blue-600 hover:text-blue-800 font-medium text-sm transition-colors">
            Voir tous les projets →
          </Link>
        </div>

        {/* Grille d'aperçu */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {featuredProjects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </section>
    </div>
  );
}