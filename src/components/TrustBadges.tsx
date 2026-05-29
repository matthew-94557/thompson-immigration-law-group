import { COUNTRIES } from '../data';
import { Globe } from 'lucide-react';

export default function TrustBadges() {
  return (
    <div id="trust-badges-section" className="bg-slate-900 border-y border-slate-800/80 py-8 relative overflow-hidden">
      
      {/* Container sizing */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="space-y-4">
          
          {/* Section banner */}
          <div className="flex items-center justify-center space-x-2 text-center">
            <Globe className="w-4 h-4 text-teal-400" />
            <h3 className="font-sans text-[11px] font-bold tracking-[0.25em] text-slate-400 uppercase">
              Proudly Helping Clients From Around The World
            </h3>
          </div>

          {/* Responsive grid system: cleanly wrapped on mobile, single row on desktop */}
          <div id="flags-scroller-container" className="mt-6 grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-10 gap-3 items-stretch justify-center">
            {COUNTRIES.map((country) => (
              <div
                id={`flag-badge-${country.code.toLowerCase()}`}
                key={country.name}
                className="flex flex-col items-center justify-center text-center gap-1.5 bg-slate-950/45 border border-slate-800/80 p-2.5 sm:p-3 rounded-xl transition duration-200 hover:border-slate-700 hover:bg-slate-950/70"
              >
                <span className="text-xl sm:text-2xl filter drop-shadow select-none" role="img" aria-label={country.name}>
                  {country.flag}
                </span>
                <span className="text-[10px] sm:text-xs font-medium tracking-wide text-slate-300 font-sans">
                  {country.name}
                </span>
              </div>
            ))}

            {/* Extra element */}
            <div
              id="flag-badge-more"
              className="flex flex-col items-center justify-center text-center gap-1.5 bg-slate-950/45 border border-slate-800/80 p-2.5 sm:p-3 rounded-xl text-slate-400 hover:text-teal-400 transition cursor-help hover:border-slate-700"
            >
              <span className="text-lg sm:text-xl">🌐</span>
              <span className="text-[10px] sm:text-xs font-semibold tracking-wide font-sans">
                More Countries
              </span>
            </div>
          </div>

        </div>
      </div>
      
    </div>
  );
}
