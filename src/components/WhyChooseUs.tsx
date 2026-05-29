import { ADVANTAGES } from '../data';
import { 
  Scale, 
  FileCheck, 
  Briefcase, 
  UserCheck, 
  MessageSquare, 
  HeartHandshake, 
  Sparkles,
  ShieldAlert
} from 'lucide-react';

import femaleLawyerImage from '../assets/images/female_lawyer_1780071603551.png';

export default function WhyChooseUs() {
  const getAdvantageIcon = (iconName: string) => {
    switch (iconName) {
      case 'Scale':
        return <Scale className="w-5 h-5 text-teal-400" />;
      case 'FileCheck':
        return <FileCheck className="w-5 h-5 text-teal-400" />;
      case 'Briefcase':
        return <Briefcase className="w-5 h-5 text-teal-400" />;
      case 'UserCheck':
        return <UserCheck className="w-5 h-5 text-teal-400" />;
      case 'MessageSquare':
        return <MessageSquare className="w-5 h-5 text-teal-400" />;
      case 'HeartHandshake':
        return <HeartHandshake className="w-5 h-5 text-teal-400" />;
      default:
        return <Sparkles className="w-5 h-5 text-teal-400" />;
    }
  };

  return (
    <section id="about" className="py-20 md:py-28 bg-slate-900 border-t border-slate-800 text-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main Grid Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Column: Portrait & Subtitles */}
          <div className="lg:col-span-5 relative group" id="why-choose-us-image-container">
            {/* Soft decorative frame shadows */}
            <div className="absolute -inset-2 bg-gradient-to-r from-teal-500/10 to-teal-400/10 rounded-2xl blur-lg opacity-70" />
            <div className="absolute top-4 left-4 right-4 bottom-4 border border-teal-500/10 rounded-2xl pointer-events-none z-20 group-hover:scale-[1.02] transition-transform duration-300" />
            
            <div className="relative overflow-hidden rounded-2xl border border-slate-800 shadow-2xl bg-slate-950/40">
              <img
                src={femaleLawyerImage}
                alt="Rachel Thompson, Senior Managing Partner"
                referrerPolicy="no-referrer"
                className="w-full h-[360px] sm:h-[480px] object-cover object-center group-hover:scale-105 transition duration-500"
              />
              {/* Overlay with attorney details */}
              <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-slate-950 via-slate-950/60 to-transparent">
                <p className="text-teal-400 font-mono text-[10px] uppercase tracking-widest font-semibold">Senior Managing Attorney</p>
                <h4 className="text-lg font-serif font-bold text-white mt-1">Rachel Thompson, Esq.</h4>
                <p className="text-xs text-slate-300 font-sans leading-relaxed mt-1">
                  Admitted to U.S. Federal Courts & American Immigration Lawyers Association (AILA). Dedicated to client victory.
                </p>
              </div>
            </div>
          </div>

          {/* Right Column: Copywriting & Pillars Grid */}
          <div className="lg:col-span-7 space-y-8 text-center lg:text-left">
            <div className="space-y-4">
              <span className="font-sans text-[11px] font-bold tracking-[0.25em] text-teal-400 uppercase">
                Why Choose
              </span>
              <h2 className="font-serif text-3xl sm:text-4xl font-bold tracking-tight text-white leading-tight">
                Thompson Immigration Law Group?
              </h2>
              <p className="text-slate-300 text-sm sm:text-base max-w-2xl mx-auto lg:mx-0 leading-relaxed font-sans">
                We combine technical legal expertise with a human-centered approach to deliver the best possible outcomes for our clients. No legal case is just a file number to us—it is someone's life, career, and future.
              </p>
            </div>

            {/* Grid of the 6 pillars */}
            <div id="advantages-grid" className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-4">
              {ADVANTAGES.map((adv, idx) => (
                <div
                  id={`advantage-item-${idx}`}
                  key={adv.title}
                  className="flex items-start text-left space-x-4 bg-slate-950/20 border border-slate-850 p-4 rounded-xl hover:border-slate-800 hover:bg-slate-950/40 transition duration-200"
                >
                  <div className="p-2.5 bg-teal-500/10 rounded-lg flex-shrink-0">
                    {getAdvantageIcon(adv.icon)}
                  </div>
                  <div className="space-y-1">
                    <h4 className="font-sans text-sm font-semibold text-white tracking-wide">
                      {adv.title}
                    </h4>
                    <p className="text-slate-400 text-xs font-sans leading-relaxed">
                      {adv.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            {/* Quick trust metrics */}
            <div className="pt-4 flex items-center justify-center lg:justify-start space-x-3 text-xs text-teal-400 font-mono">
              <ShieldAlert className="w-4 h-4 text-teal-400" />
              <span>Certified AILA Member | 100% Secure Confidential Files</span>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
