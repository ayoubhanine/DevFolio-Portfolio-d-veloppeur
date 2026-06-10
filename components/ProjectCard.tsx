import { Project } from '@/types';
import Link from 'next/link';

interface ProjectCardProps {
  project: Project;
}

export default function ProjectCard({ project }: ProjectCardProps) {
  return (
    <div className="bg-white rounded-xl shadow-md overflow-hidden border border-slate-100 flex flex-col justify-between p-6 hover:shadow-lg transition-shadow duration-300">
      <div>
        <h3 className="text-xl font-bold text-slate-900 mb-2">{project.title}</h3>
        <p className="text-slate-600 text-sm mb-4 line-clamp-3">{project.description}</p>
        
        <div className="flex flex-wrap gap-2 mb-6">
          {project.stack.map((tech) => (
            <span 
              key={tech} 
              className="px-2.5 py-1 bg-blue-50 text-blue-600 rounded-md text-xs font-medium"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>

     
      <div className="flex space-x-4 border-t border-slate-100 pt-4">
        <a 
          href={project.githubUrl} 
          target="_blank" 
          rel="noopener noreferrer" 
          className="text-sm font-medium text-slate-700 hover:text-blue-600 transition-colors"
        >
          Code GitHub →
        </a>
       
      </div>
    </div>
  );
}