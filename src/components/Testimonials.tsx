import { useState } from 'react';
import { TESTIMONIALS } from '../data';
import { Quote, Star, ChevronLeft, ChevronRight, CheckCircle } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

export default function Testimonials() {
  const [activeIndex, setActiveIndex] = useState(0);

  const nextTestimonial = () => {
    setActiveIndex((prev) => (prev + 1) % TESTIMONIALS.length);
  };

  const prevTestimonial = () => {
    setActiveIndex((prev) => (prev - 1 + TESTIMONIALS.length) % TESTIMONIALS.length);
  };

  return (
    <section id="testimonials" className="py-20 md:py-28 bg-slate-950 text-slate-100 relative overflow-hidden">
      
      {/* Decorative background overlay */}
      <div className="absolute top-1/4 right-0 w-96 h-96 bg-teal-500/5 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute bottom-10 left-10 w-80 h-80 bg-blue-500/5 rounded-full blur-[80px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header Block */}
        <div className="text-center max-w-2xl mx-auto mb-16 space-y-3">
          <span className="font-sans text-[11px] font-bold tracking-[0.25em] text-teal-400 uppercase">
            Success Stories From Our Clients
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl font-bold tracking-tight text-white">
            Real People. Real Results.
          </h2>
          <div className="w-16 h-1 bg-teal-500/80 mx-auto mt-4 rounded" />
        </div>

        {/* Desktop Layout: Multi-card view. Mobile Layout: Card sliding carousel */}
        <div className="hidden lg:grid lg:grid-cols-3 gap-8">
          {TESTIMONIALS.map((t) => (
            <div
              id={`desktop-review-${t.id}`}
              key={t.id}
              className="bg-slate-900/50 border border-slate-900 p-8 rounded-2xl shadow-xl flex flex-col justify-between space-y-6 hover:border-slate-800 hover:bg-slate-900 transition duration-300 relative group"
            >
              <div className="space-y-4">
                {/* Visual Quote Icon */}
                <div className="flex items-center justify-between">
                  <div className="p-3 bg-teal-500/10 text-teal-400 rounded-xl">
                    <Quote className="w-5 h-5 fill-teal-400/10" />
                  </div>
                  <div className="flex items-center space-x-0.5 text-amber-400">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-amber-400 stroke-amber-400" />
                    ))}
                  </div>
                </div>
                
                {/* Review Text */}
                <p className="text-slate-300 text-sm leading-relaxed italic font-serif">
                  "{t.quote}"
                </p>
              </div>

              {/* Author Profile */}
              <div className="flex items-center space-x-4 pt-4 border-t border-slate-800/60">
                <img
                  src={t.image}
                  alt={t.name}
                  referrerPolicy="no-referrer"
                  className="w-12 h-12 rounded-full object-cover border-2 border-teal-500/20 group-hover:border-teal-400 transition"
                />
                <div>
                  <h4 className="text-sm font-semibold text-white">{t.name}</h4>
                  <p className="text-xs text-teal-400 flex items-center gap-1 mt-0.5">
                    <CheckCircle className="w-3 h-3" />
                    {t.role}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Mobile & Tablet Slider Loop Container */}
        <div className="block lg:hidden max-w-xl mx-auto">
          <div className="relative">
            <AnimatePresence mode="wait">
              {TESTIMONIALS.map((t, idx) => {
                if (idx !== activeIndex) return null;
                return (
                  <motion.div
                    id={`mobile-review-${t.id}`}
                    key={t.id}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -20 }}
                    transition={{ duration: 0.2 }}
                    className="bg-slate-900/60 border border-slate-900 p-6 sm:p-8 rounded-2xl shadow-xl space-y-6"
                  >
                    <div className="flex items-center justify-between">
                      <div className="p-2.5 bg-teal-500/10 text-teal-400 rounded-xl">
                        <Quote className="w-5 h-5 fill-teal-400/10" />
                      </div>
                      <div className="flex items-center space-x-0.5 text-amber-400">
                        {[...Array(5)].map((_, i) => (
                          <Star key={i} className="w-3.5 h-3.5 fill-amber-400 stroke-amber-400" />
                        ))}
                      </div>
                    </div>

                    <p className="text-slate-300 text-sm sm:text-base italic leading-relaxed font-serif">
                      "{t.quote}"
                    </p>

                    <div className="flex items-center space-x-4 pt-4 border-t border-slate-800/60">
                      <img
                        src={t.image}
                        alt={t.name}
                        referrerPolicy="no-referrer"
                        className="w-11 h-11 rounded-full object-cover border-2 border-teal-500/20"
                      />
                      <div>
                        <h4 className="text-sm font-semibold text-white">{t.name}</h4>
                        <p className="text-xs text-teal-400 flex items-center gap-1 mt-0.5">
                          <CheckCircle className="w-3 h-3" />
                          {t.role}
                        </p>
                      </div>
                    </div>
                  </motion.div>
                );
              })}
            </AnimatePresence>

            {/* Slider Controls Arrows */}
            <div className="flex items-center justify-between mt-6 px-1">
              {/* Pagination Dots */}
              <div className="flex items-center space-x-1.5">
                {TESTIMONIALS.map((_, i) => (
                  <button
                    id={`t-pagination-dot-${i}`}
                    key={i}
                    onClick={() => setActiveIndex(i)}
                    className={`w-2.5 h-2.5 rounded-full transition-all duration-200 ${
                      i === activeIndex ? 'bg-teal-400 w-6' : 'bg-slate-700 hover:bg-slate-600'
                    }`}
                    aria-label={`Slide ${i + 1}`}
                  />
                ))}
              </div>

              {/* Arrows button */}
              <div className="flex items-center space-x-2">
                <button
                  id="testimonial-prev-arrow"
                  onClick={prevTestimonial}
                  className="p-1.5 rounded-lg bg-slate-900 border border-slate-800 hover:border-slate-700 text-slate-400 hover:text-white transition"
                  aria-label="Previous Testimonial"
                >
                  <ChevronLeft className="w-4 h-4" />
                </button>
                <button
                  id="testimonial-next-arrow"
                  onClick={nextTestimonial}
                  className="p-1.5 rounded-lg bg-slate-900 border border-slate-800 hover:border-slate-700 text-slate-400 hover:text-white transition"
                  aria-label="Next Testimonial"
                >
                  <ChevronRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
