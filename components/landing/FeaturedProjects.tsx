import React from 'react';
import Link from 'next/link';
import { ArrowRight, AlertCircle, CheckCircle2 } from 'lucide-react';
import { clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

export default function FeaturedProjects() {
  const projects = [
    {
      id: 1,
      name: 'Mumbai-Delhi Expressway Phase 2',
      sector: 'Highways',
      status: 'On Track',
      risk: 'Low',
      cost: '₹4,200 Cr',
      image: 'bg-slate-200'
    },
    {
      id: 2,
      name: 'Central Grid Expansion Project',
      sector: 'Power',
      status: 'At Risk',
      risk: 'High',
      cost: '₹8,500 Cr',
      image: 'bg-slate-200'
    },
    {
      id: 3,
      name: 'Eastern Dedicated Freight Corridor',
      sector: 'Railways',
      status: 'Warning',
      risk: 'Medium',
      cost: '₹12,000 Cr',
      image: 'bg-slate-200'
    },
    {
      id: 4,
      name: 'Navi Mumbai International Airport',
      sector: 'Aviation',
      status: 'On Track',
      risk: 'Low',
      cost: '₹16,700 Cr',
      image: 'bg-slate-200'
    }
  ];

  return (
    <section id="projects" className="py-24 bg-slate-50">
      <div className="container mx-auto px-4">
        
        <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-12 gap-4">
          <div>
            <div className="text-sm font-bold text-blue-600 tracking-widest uppercase mb-3">
              Featured Projects
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900">
              Critical Projects. Clearer Insights.
            </h2>
          </div>
          <Link href="/projects" className="inline-flex items-center text-sm font-semibold text-blue-600 hover:text-blue-700 transition-colors">
            View All Projects
            <ArrowRight className="ml-1 h-4 w-4" />
          </Link>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {projects.map((project) => (
            <div key={project.id} className="bg-white rounded-2xl overflow-hidden border border-slate-200 shadow-sm hover:shadow-xl transition-shadow group cursor-pointer">
              {/* Image Placeholder */}
              <div className={twMerge("h-48 w-full relative", project.image)}>
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 to-transparent"></div>
                <div className="absolute bottom-3 left-3 text-white text-xs font-bold px-2 py-1 bg-black/30 rounded backdrop-blur-sm">
                  {project.sector}
                </div>
              </div>
              
              <div className="p-5">
                <h3 className="font-bold text-slate-900 text-lg mb-4 line-clamp-2 leading-tight group-hover:text-blue-600 transition-colors">
                  {project.name}
                </h3>
                
                <div className="space-y-3">
                  <div className="flex justify-between items-center text-sm">
                    <span className="text-slate-500">Project Value</span>
                    <span className="font-semibold text-slate-900">{project.cost}</span>
                  </div>
                  
                  <div className="flex justify-between items-center text-sm pt-3 border-t border-slate-100">
                    <span className="text-slate-500">Risk Assessment</span>
                    <span className={twMerge(
                      "flex items-center gap-1.5 font-medium px-2 py-0.5 rounded-full text-xs",
                      project.risk === 'Low' ? "bg-green-100 text-green-700" :
                      project.risk === 'Medium' ? "bg-orange-100 text-orange-700" :
                      "bg-red-100 text-red-700"
                    )}>
                      {project.risk === 'Low' ? <CheckCircle2 className="h-3 w-3" /> : <AlertCircle className="h-3 w-3" />}
                      {project.risk} Risk
                    </span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
