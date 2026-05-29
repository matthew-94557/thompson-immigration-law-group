import { useState } from 'react';
import { PROCESS_STEPS } from '../data';
import { HelpCircle, ChevronRight, ArrowRight, CornerRightDown } from 'lucide-react';

export default function Process() {
  const [hoveredStep, setHoveredStep] = useState<number | null>(null);

  return (
    <section id="process" className="py-20 md:py-28 bg-slate-900 border-t border-slate-800 text-slate-100 relative">
      
      {/* Visual wirelines inside process */}
      <div className="absolute top-1/2 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-teal-500/10 to-transparent pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Title Content Header */}
        <div className="text-center max-w-2xl mx-auto mb-16 space-y-3">
          <span className="font-sans text-[11px] font-bold tracking-[0.25em] text-teal-400 uppercase">
            Our Proven Immigration Process
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl font-bold tracking-tight text-white leading-tight">
            Simple Steps. Clear Guidance.
          </h2>
          <div className="w-16 h-1 bg-teal-500/80 mx-auto mt-4 rounded" />
        </div>

        {/* Steps Chain: Grid-based aligned flow */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 relative">
          {PROCESS_STEPS.map((step, idx) => {
            const isHovered = hoveredStep === step.stepNumber;
            
            return (
              <div
                id={`process-step-${step.stepNumber}`}
                key={step.stepNumber}
                onMouseEnter={() => setHoveredStep(step.stepNumber)}
                onMouseLeave={() => setHoveredStep(null)}
                className={`relative p-6 bg-slate-950/45 border rounded-2xl flex flex-col items-center text-center space-y-4 group transition-all duration-300 ${
                  isHovered 
                    ? 'border-teal-500/50 bg-slate-950 translate-y-[-4px] shadow-lg shadow-teal-500/5' 
                    : 'border-slate-850'
                }`}
              >
                
                {/* Arrow connectors on large rows */}
                {idx < 3 && (
                  <div className="hidden lg:block absolute left-[88%] top-[2.5rem] text-teal-500/30 z-20 group-hover:text-teal-400 group-hover:translate-x-1 transition-all duration-200">
                    <ArrowRight className="w-6 h-6" />
                  </div>
                )}

                {/* Circular Number Bubble */}
                <div className={`w-14 h-14 rounded-full flex items-center justify-center font-serif text-lg font-bold border-2 transition-all duration-300 ${
                  isHovered 
                    ? 'bg-teal-500 text-slate-950 border-teal-400' 
                    : 'bg-slate-900 text-teal-400 border-slate-800'
                }`}>
                  {step.stepNumber}
                </div>

                {/* Text Body */}
                <div className="space-y-2">
                  <h3 className="font-serif text-base font-bold text-white group-hover:text-teal-400 transition-colors">
                    {step.title}
                  </h3>
                  <p className="text-xs text-slate-400 leading-relaxed font-sans max-w-xs group-hover:text-slate-300 transition-colors">
                    {step.description}
                  </p>
                </div>

                {/* Hover decorative border accent */}
                <div className={`absolute bottom-0 inset-x-12 h-1 bg-teal-500 rounded-t-full transition-all duration-300 ${
                  isHovered ? 'opacity-100 scale-100' : 'opacity-0 scale-50'
                }`} />

              </div>
            );
          })}
        </div>

        {/* Process callout section */}
        <div className="mt-16 bg-slate-950/50 border border-slate-850 p-6 md:p-8 rounded-2xl max-w-4xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="text-center md:text-left space-y-1">
            <h4 className="text-sm font-semibold text-white flex items-center justify-center md:justify-start gap-1.5">
              <span className="inline-block w-2.5 h-2.5 rounded-full bg-teal-400" />
              Ready to construct your application path?
            </h4>
            <p className="text-xs text-slate-400">
              Get an eligibility evaluation in less than 24 hours with zero upfront costs.
            </p>
          </div>
          <a
            id="process-cta-btn"
            href="#footer-form"
            className="px-5 py-3 bg-teal-500 hover:bg-teal-400 text-slate-950 text-xs font-bold tracking-wider uppercase rounded font-sans transition-all w-full md:w-auto text-center cursor-pointer shadow hover:shadow-teal-400/10 active:translate-y-0.5"
          >
            Start Your Case Now
          </a>
        </div>

      </div>
    </section>
  );
}
