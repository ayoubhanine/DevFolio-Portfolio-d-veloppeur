import { Experience } from "@/types"

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
      
      {/* Profil & Biographie */}
      <section className="flex flex-col md:flex-row items-center gap-8 bg-white p-8 rounded-2xl shadow-sm border border-slate-100">
        {/* Avatar Fictif / Espace Image */}
        <div className="w-32 h-32  md:w-40 bg-linear-to-tr from-blue-500 to-teal-400 rounded-full flex items-center justify-center text-white text-4xl font-bold shadow-inner shrink-0">
          HA
        </div>
        
        <div className="space-y-4 text-center md:text-left">
          <h1 className="text-3xl font-bold text-slate-900">À propos de moi</h1>
          <p className="text-slate-600 leading-relaxed">
           Bonjour , Je m'appelle Ayoub, développeur web Full Stack
            en formation MERN Stack. Passionné par le développement d'applications web modernes, 
            je travaille principalement avec React, JavaScript et les technologies du web. 
            {/* J'aime concevoir des solutions performantes, maintenir un code propre 
           et continuer à développer mes compétences à travers des projets concrets. */}
          </p>
        </div>
      </section>

      {/* Parcours / Timeline */}
      <section className="space-y-8">
        <div>
          <h2 className="text-2xl font-bold text-slate-900">Mon Parcours</h2>
          <p className="text-slate-500 text-sm mt-1">Formations et expériences clés</p>
        </div>

        {/* Design structurel de la Timeline */}
        <div className="relative border-l-2 border-slate-200 pl-6 ml-4 space-y-10">
          {timeLineData.map((item) => (
            <div key={item.id} className="relative">
              {/* Le petit point repère sur la ligne */}
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