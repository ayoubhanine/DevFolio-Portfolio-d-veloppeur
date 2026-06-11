import { Experience } from "@/types"
import Image from "next/image"

const timeLineData:Experience[]=[
     {
    id: "1",
    title: "Formation en Développement Web MERN Stack",
    companyOrSchool: "École Numérique Ahmed El Hansali (ENNA), Beni Mellal",
    period: "2025 - 2026",
    description:
      "Formation spécialisée en développement d'applications web modernes avec MongoDB, Express.js, React et Node.js. Réalisation de projets full-stack et maîtrise des technologies du développement web.",
  },
  {
    id: "2",
    title: "Technicien Spécialisé en Développement Digital - Option Web Full Stack",
    companyOrSchool:
      "Institut Spécialisé de Technologie Appliquée NTIC (ISTA NTIC), Beni Mellal",
    period: "2023 - 2025",
    description:
      "Formation en développement web front-end et back-end, bases de données, conception d'applications web, programmation orientée objet et gestion de projets informatiques.",
  },
  {
    id: "3",
    title: "Baccalauréat Sciences Physiques et Chimie",
    companyOrSchool: "Lycée à Beni Mellal",
    period: "2018",
    description:
      "Obtention du baccalauréat en sciences physiques et chimie avec acquisition de solides bases en mathématiques, physique et raisonnement scientifique.",
  },
]
export default function AboutPage(){
    return(
    <div className="max-w-4xl mx-auto px-6 py-12 space-y-16">
      
     
     <section className="flex flex-col md:flex-row items-center gap-10 bg-white p-8 rounded-2xl shadow-sm border border-slate-100">
  
  {/* Photo */}
  <div className="relative w-36 h-36 md:w-44 md:h-44 shrink-0">
    <Image
      src="/Portfolio.jpg"
      alt="Photo de Ayoub"
      fill
      className="rounded-full object-cover border-4 border-blue-100 shadow-lg"
      priority
    />
  </div>

  <div className="space-y-4 text-center md:text-left">
    <div>
      <h1 className="text-3xl font-bold text-slate-900">
        Ayoub
      </h1>
      <p className="text-blue-600 font-medium mt-1">
        Développeur Web Full Stack | MERN Stack
      </p>
    </div>

    <p className="text-slate-600 leading-relaxed max-w-2xl">
      Passionné par le développement web, je conçois des applications
      modernes, performantes et intuitives en utilisant React, Next.js,
      Node.js et MongoDB. Actuellement en formation MERN Stack, je continue
      à renforcer mes compétences à travers des projets concrets et des défis
      techniques afin de créer des solutions web fiables et évolutives.
    </p>

    <div className="flex flex-wrap gap-2 justify-center md:justify-start">
      <span className="px-3 py-1 bg-blue-50 text-blue-700 rounded-full text-sm">
        React
      </span>
      <span className="px-3 py-1 bg-blue-50 text-blue-700 rounded-full text-sm">
        Next.js
      </span>
      <span className="px-3 py-1 bg-blue-50 text-blue-700 rounded-full text-sm">
        TypeScript
      </span>
      <span className="px-3 py-1 bg-blue-50 text-blue-700 rounded-full text-sm">
        Node.js
      </span>
      <span className="px-3 py-1 bg-blue-50 text-blue-700 rounded-full text-sm">
        MongoDB
      </span>
    </div>
  </div>
</section>
      
      <section className="space-y-8">
        <div>
          <h2 className="text-2xl font-bold text-slate-900">Mon Parcours</h2>
          <p className="text-slate-500 text-sm mt-1">Formations et expériences clés</p>
        </div>

      
        <div className="relative border-l-2 border-slate-200 pl-6 ml-4 space-y-10">
          {timeLineData.map((item) => (
            <div key={item.id} className="relative">
              
              <span className="absolute -left-7.75 top-1.5 bg-blue-600 h-4 w-4 rounded-full border-4 border-white shadow-sm" />
              
              <div className="bg-white p-5 rounded-xl border border-slate-100 shadow-sm space-y-2">
                <span className="text-xs font-semibold text-blue-600 bg-blue-50 px-2.5 py-0.5 rounded-full">
                  {item.period}
                </span>
                <h3 className="text-lg font-bold text-slate-950 pt-1">{item.title}</h3>
                <h4 className="text-sm font-medium text-slate-500">{item.companyOrSchool}</h4>
                <p className="text-slate-600 text-sm pt-2 leading-relaxed">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

    </div>
  );
}