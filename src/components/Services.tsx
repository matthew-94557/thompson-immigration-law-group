import { useState } from 'react';
import { SERVICES } from '../data';
import { 
  Building2, 
  UserCheck, 
  Users, 
  GraduationCap, 
  Briefcase, 
  FileCheck, 
  ChevronDown, 
  ChevronUp, 
  Scale, 
  ArrowRight
} from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

interface ServicesProps {
  onOpenConsultation: () => void;
}

export default function Services({ onOpenConsultation }: ServicesProps) {
  const [expandedId, setExpandedId] = useState<string | null>(null);

  const getServiceIcon = (id: string) => {
    switch (id) {
      case 'employment':
        return <Scale className="w-6 h-6 text-teal-400" id={`icon-${id}`} />;
      case 'greencard':
        return <FileCheck className="w-6 h-6 text-teal-400" id={`icon-${id}`} />;
      case 'family':
        return <Users className="w-6 h-6 text-teal-400" id={`icon-${id}`} />;
      case 'student-work':
        return <GraduationCap className="w-6 h-6 text-teal-400" id={`icon-${id}`} />;
      case 'employer':
        return <Building2 className="w-6 h-6 text-teal-400" id={`icon-${id}`} />;
      case 'extensions':
        return <Briefcase className="w-6 h-6 text-teal-400" id={`icon-${id}`} />;
      default:
        return <Building2 className="w-6 h-6 text-teal-400" id={`icon-${id}`} />;
    }
  };

  const toggleExpand = (id: string) => {
    setExpandedId(expandedId === id ? null : id);
  };

  return (
    <section id="services" className="py-20 md:py-28 bg-slate-950 text-slate-100 relative">
      {/* Background glow shadow */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-sky-500/5 rounded-full blur-[130px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Intro Headings */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <span className="font-sans text-[11px] font-bold tracking-[0.25em] text-teal-400 uppercase">
            Our Immigration Services
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl font-bold tracking-tight text-white leading-tight">
            Comprehensive Legal Support for Your Immigration Journey
          </h2>
          <div className="w-16 h-1 bg-teal-500/80 mx-auto mt-4 rounded" />
        </div>

        {/* Dense responsive Service Card Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {SERVICES.map((service) => {
            const isExpanded = expandedId === service.id;
            
            return (
              <div
                id={`service-card-${service.id}`}
                key={service.id}
                className={`group flex flex-col justify-between p-6 sm:p-8 rounded-2xl border transition-all duration-300 ${
                  isExpanded 
                    ? 'bg-slate-900 border-teal-500/40 shadow-xl shadow-teal-500/5' 
                    : 'bg-slate-900/40 border-slate-900 hover:border-slate-800 hover:bg-slate-900/80'
                }`}
              >
                <div className="space-y-4">
                  {/* Icon Circular Background */}
                  <div className="w-12 h-12 rounded-xl bg-teal-500/10 border border-teal-500/20 flex items-center justify-center group-hover:scale-110 transition-transform duration-200">
                    {getServiceIcon(service.id)}
                  </div>

                  <div className="space-y-2">
                    <h3 className="font-serif text-lg font-bold text-white group-hover:text-teal-400 transition-colors">
                      {service.title}
                    </h3>
                    <p className="text-sm text-slate-400 group-hover:text-slate-300 transition-colors leading-relaxed font-sans">
                      {service.description}
                    </p>
                  </div>

                  {/* Bullet Expandable Content */}
                  <AnimatePresence>
                    {isExpanded && (
                      <motion.div
                        id={`service-expand-${service.id}`}
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        className="overflow-hidden pt-2 border-t border-slate-800 space-y-2"
                      >
                        <h4 className="text-[11px] font-bold uppercase tracking-[0.1em] text-teal-400 font-mono">
                          Common Petitions Filed:
                        </h4>
                        <ul className="space-y-1.5 pl-1">
                          {service.bullets.map((bullet, i) => (
                            <li id={`bullet-${service.id}-${i}`} key={i} className="text-xs text-slate-300 flex items-center space-x-2">
                              <span className="w-1.5 h-1.5 rounded-full bg-teal-500 flex-shrink-0" />
                              <span>{bullet}</span>
                            </li>
                          ))}
                        </ul>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>

                {/* Card CTA & Toggle */}
                <div className="flex items-center justify-between mt-6 pt-4 border-t border-slate-800/60">
                  <button
                    id={`service-toggle-${service.id}`}
                    onClick={() => toggleExpand(service.id)}
                    className="text-xs font-semibold text-slate-400 group-hover:text-teal-400 transition flex items-center gap-1 focus:outline-none"
                  >
                    {isExpanded ? (
                      <>
                        Hide Filings <ChevronUp className="w-4 h-4" />
                      </>
                    ) : (
                      <>
                        View Specific Filings <ChevronDown className="w-4 h-4" />
                      </>
                    )}
                  </button>

                  <a
                    id={`service-consult-${service.id}`}
                    href="#footer-form"
                    className="text-xs font-bold text-teal-400 hover:text-white flex items-center gap-1 group-hover:translate-x-0.5 transition-all"
                  >
                    Consult <ArrowRight className="w-3.5 h-3.5" />
                  </a>
                </div>

              </div>
            );
          })}
        </div>

        {/* View All Services Footer */}
        <div className="mt-12 text-center">
          <a
            id="view-all-services-link"
            href="#footer-form"
            className="inline-flex items-center gap-2 px-6 py-3 bg-slate-900 hover:bg-slate-850 text-slate-300 hover:text-teal-400 rounded-lg text-sm font-semibold border border-slate-800 hover:border-slate-700 transition"
          >
            Looking for a different visa type? Consult us today
            <ArrowRight className="w-4 h-4 text-teal-500" />
          </a>
        </div>

      </div>
    </section>
  );
}
