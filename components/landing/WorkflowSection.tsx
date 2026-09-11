'use client';

import React, { useEffect, useRef } from 'react';
import { Activity, Search, LineChart, MessageSquare, Target, Zap } from 'lucide-react';
import { gsap } from 'gsap';

const steps = [
  { id: 1, name: 'Monitor', icon: Activity, desc: 'Ingest PAIMANA data' },
  { id: 2, name: 'Detect', icon: Search, desc: 'Identify anomalies' },
  { id: 3, name: 'Predict', icon: LineChart, desc: 'Forecast risks' },
  { id: 4, name: 'Explain', icon: MessageSquare, desc: 'Surface evidence' },
  { id: 5, name: 'Prioritize', icon: Target, desc: 'Rank interventions' },
  { id: 6, name: 'Intervene', icon: Zap, desc: 'Take targeted action' },
];

export function WorkflowSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const lineRef = useRef<HTMLDivElement>(null);
  const stepsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const section = sectionRef.current;
    const line = lineRef.current;
    const stepElements = stepsRef.current?.children;

    if (!section || !line || !stepElements) return;

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: section,
        start: 'top 60%',
        end: 'center center',
        toggleActions: 'play none none reverse',
      }
    });

    // Animate connecting line
    tl.fromTo(line, 
      { scaleX: 0, transformOrigin: 'left center' }, 
      { scaleX: 1, duration: 1.5, ease: 'power2.inOut' }
    );

    // Animate steps staggering slightly behind the line
    tl.fromTo(stepElements,
      { y: 30, opacity: 0, scale: 0.9 },
      { y: 0, opacity: 1, scale: 1, duration: 0.6, stagger: 0.15, ease: 'back.out(1.5)' },
      '-=1.2'
    );

  }, []);

  return (
    <section id="how-it-works" ref={sectionRef} className="py-24 bg-slate-50 border-y border-slate-100 overflow-hidden">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center mb-24">
          <h2 className="text-xs font-bold tracking-[0.2em] text-sky-600 uppercase mb-4">The Pipeline</h2>
          <p className="mt-2 text-4xl font-black tracking-tight text-slate-900 sm:text-5xl">
            Predict &rarr; Explain &rarr; Prioritize &rarr; Intervene
          </p>
        </div>

        <div className="relative max-w-5xl mx-auto">
          {/* Desktop Connecting Line */}
          <div className="hidden lg:block absolute top-[48px] left-[8%] right-[8%] h-1 bg-slate-200 rounded-full" aria-hidden="true">
            <div 
              ref={lineRef}
              className="h-full bg-gradient-to-r from-sky-400 via-sky-500 to-cyan-500 rounded-full"
            />
          </div>

          <div ref={stepsRef} className="grid grid-cols-2 gap-y-12 gap-x-8 lg:grid-cols-6 relative z-10">
            {steps.map((step) => (
              <div
                key={step.name}
                className="flex flex-col items-center text-center group"
              >
                <div className="relative mb-6">
                  {/* Subtle glow behind icon */}
                  <div className="absolute inset-0 bg-sky-200 rounded-full blur-xl opacity-0 group-hover:opacity-50 transition-opacity duration-500" />
                  
                  <div className="relative flex h-24 w-24 items-center justify-center rounded-2xl bg-white shadow-xl shadow-slate-200/50 border border-slate-100 group-hover:-translate-y-2 group-hover:border-sky-200 group-hover:shadow-sky-100 transition-all duration-300">
                    <step.icon className="h-10 w-10 text-slate-400 group-hover:text-sky-500 transition-colors duration-300" strokeWidth={1.5} />
                  </div>
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-2 group-hover:text-sky-600 transition-colors">{step.name}</h3>
                <p className="text-sm font-medium text-slate-500">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
