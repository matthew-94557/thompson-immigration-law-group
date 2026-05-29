import { Phone, Mail, MapPin, Clock, Facebook, Linkedin, Instagram, Youtube, Star } from 'lucide-react';

export default function Footer() {
  const practiceAreas = [
    { name: 'Employment-Based Visas', href: '#services' },
    { name: 'Green Cards', href: '#services' },
    { name: 'Family Immigration', href: '#services' },
    { name: 'Student & Work Visas', href: '#services' },
    { name: 'Employer Immigration', href: '#services' },
    { name: 'Visa Extensions & Status Changes', href: '#services' },
  ];

  return (
    <footer id="footer-section" className="bg-slate-950 border-t border-slate-900 text-slate-400 py-16 text-sm font-sans">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Upper footer grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-8 pb-12 border-b border-slate-900">
          
          {/* Column 1: Brand details (col span 4) */}
          <div className="lg:col-span-4 space-y-6">
            <a href="#home" id="footer-brand-logo" className="flex items-center space-x-3 group">
              <div className="flex items-center justify-center w-10 h-10 border border-teal-500/20 rounded-md bg-slate-900 p-1">
                <svg viewBox="0 0 100 100" className="w-7 h-7 text-teal-400" fill="none" stroke="currentColor" strokeWidth="6">
                  <line x1="15" y1="20" x2="85" y2="20" strokeWidth="8"/>
                  <line x1="50" y1="20" x2="50" y2="85" strokeWidth="8"/>
                  <line x1="30" y1="85" x2="70" y2="85" strokeWidth="8"/>
                  <path d="M25 45 C 38 45, 38 60, 50 60 C 62 60, 62 45, 75 45" strokeWidth="4" />
                </svg>
              </div>
              <div className="flex flex-col">
                <span className="font-serif text-base font-bold tracking-[0.15em] text-white leading-none">THOMPSON</span>
                <span className="font-sans text-[9px] font-semibold tracking-[0.2em] text-teal-400 mt-1 uppercase leading-none">IMMIGRATION</span>
                <span className="font-sans text-[7px] font-normal tracking-[0.12em] text-slate-500 mt-0.5 uppercase">LAW GROUP</span>
              </div>
            </a>
            <p className="text-slate-400 text-xs sm:text-sm leading-relaxed max-w-sm">
              Dedicated to helping individuals, families, and employers achieve their dreams in the United States through trusted, professional federal immigration representation.
            </p>
          </div>

          {/* Column 2: Practice Areas (col span 3) */}
          <div className="lg:col-span-3 space-y-4">
            <h4 className="text-sm font-semibold text-white uppercase tracking-wider font-sans">Practice Areas</h4>
            <ul className="space-y-2.5 text-xs sm:text-sm">
              {practiceAreas.map((pa) => (
                <li id={`footer-pa-item-${pa.name.replace(/\s+/g, '-').toLowerCase()}`} key={pa.name}>
                  <a href={pa.href} className="hover:text-teal-400 transition hover:underline">
                    • {pa.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Contact & Address coordinates (col span 3) */}
          <div className="lg:col-span-3 space-y-4">
            <h4 className="text-sm font-semibold text-white uppercase tracking-wider font-sans">Contact Us</h4>
            <ul className="space-y-3.5 text-xs sm:text-sm">
              <li className="flex items-start space-x-2.5">
                <Phone className="w-4 h-4 text-teal-400 flex-shrink-0 mt-0.5" />
                <span className="text-slate-300">(212) 555-0198</span>
              </li>
              <li className="flex items-start space-x-2.5">
                <Mail className="w-4 h-4 text-teal-400 flex-shrink-0 mt-0.5" />
                <span className="text-slate-350 select-all hover:text-teal-400 truncate">info@thompsonimmigrationlaw.com</span>
              </li>
              <li className="flex items-start space-x-2.5">
                <MapPin className="w-4 h-4 text-teal-400 flex-shrink-0 mt-0.5" />
                <span className="text-slate-300 font-sans">
                  225 Broadway, Suite 2100 <br />
                  New York, NY 10007
                </span>
              </li>
              <li className="flex items-start space-x-2.5">
                <Clock className="w-4 h-4 text-teal-450 flex-shrink-0 mt-0.5" />
                <span className="text-slate-400 text-xs">Mon - Fri: 9:00 AM - 6:00 PM</span>
              </li>
            </ul>
          </div>

          {/* Column 4: Client satisfaction card (col span 2) */}
          <div className="lg:col-span-2 space-y-4">
            <h4 className="text-sm font-semibold text-white uppercase tracking-wider font-sans">Follow Us</h4>
            
            {/* Social media connections */}
            <div className="flex items-center space-x-3.5">
              <a href="#" className="p-2 bg-slate-900 hover:bg-slate-800 hover:text-teal-400 rounded-md transition" aria-label="Facebook"><Facebook className="w-4 h-4" /></a>
              <a href="#" className="p-2 bg-slate-900 hover:bg-slate-800 hover:text-teal-400 rounded-md transition" aria-label="LinkedIn"><Linkedin className="w-4 h-4" /></a>
              <a href="#" className="p-2 bg-slate-900 hover:bg-slate-800 hover:text-teal-400 rounded-md transition" aria-label="Instagram"><Instagram className="w-4 h-4" /></a>
              <a href="#" className="p-2 bg-slate-900 hover:bg-slate-800 hover:text-teal-400 rounded-md transition" aria-label="YouTube"><Youtube className="w-4 h-4" /></a>
            </div>

            {/* Satisfaction Card Widget */}
            <div className="bg-slate-900/60 border border-slate-900 p-4 rounded-xl space-y-2">
              <div className="flex items-center space-x-1 text-amber-400">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-3.5 h-3.5 fill-amber-400 stroke-amber-400" />
                ))}
              </div>
              <div>
                <div className="text-xl font-bold font-serif text-white tracking-tight">98%</div>
                <div className="text-[10px] text-teal-400 uppercase tracking-wide font-mono font-bold mt-0.5">Client Satisfaction</div>
                <div className="text-[9px] text-slate-500 font-sans mt-0.5">Based on 500+ direct client case reviews</div>
              </div>
            </div>

          </div>

        </div>

        {/* Lower footer copyright info */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs">
          <p className="text-slate-500 font-sans text-center sm:text-left">
            © {new Date().getFullYear()} Thompson Immigration Law Group. All Rights Reserved. Attorney Advertising.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-slate-400">
            <a href="#" className="hover:text-teal-400 hover:underline">Privacy Policy</a>
            <a href="#" className="hover:text-teal-400 hover:underline">Terms of Service</a>
            <a href="#" className="hover:text-teal-400 hover:underline">Disclaimer</a>
          </div>
        </div>

      </div>
    </footer>
  );
}
