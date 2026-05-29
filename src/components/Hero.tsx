import React, { useState } from 'react';
import { ConsultationLead } from '../types';
import { Calendar, Shield, Lock, CheckCircle2, Award, Briefcase, Users, Star } from 'lucide-react';
import { motion } from 'motion/react';

// Path to our generated hero lawyers image
import lawyersImage from '../assets/images/premium_immigration_lawyers_1780073002279.png';

interface HeroProps {
  onAddLead: (lead: ConsultationLead) => void;
  onOpenLeads: () => void;
}

export default function Hero({ onAddLead, onOpenLeads }: HeroProps) {
  const [fullName, setFullName] = useState('');
  const [emailAddress, setEmailAddress] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [currentVisaStatus, setCurrentVisaStatus] = useState('');
  const [immigrationGoal, setImmigrationGoal] = useState('');
  const [message, setMessage] = useState('');
  
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!fullName || !emailAddress || !phoneNumber) {
      alert('Please fill out your name, email, and phone number to request a consultation.');
      return;
    }

    setIsSubmitting(true);

    // Simulate database write
    setTimeout(() => {
      const newLead: ConsultationLead = {
        id: 'lead-' + Date.now(),
        fullName,
        emailAddress,
        phoneNumber,
        currentVisaStatus: currentVisaStatus || 'Not Specified',
        immigrationGoal: immigrationGoal || 'General Consultation',
        message: message || 'No message provided.',
        submittedAt: new Date().toISOString(),
        status: 'New'
      };

      onAddLead(newLead);
      setIsSubmitting(false);
      setIsSuccess(true);

      // Reset form fields
      setFullName('');
      setEmailAddress('');
      setPhoneNumber('');
      setCurrentVisaStatus('');
      setImmigrationGoal('');
      setMessage('');
    }, 1000);
  };

  return (
    <section id="home" className="relative pt-24 pb-16 md:pt-32 md:pb-24 lg:pb-32 bg-slate-950 text-white overflow-hidden">
      
      {/* Background radial glow */}
      <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-teal-500/10 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-[400px] h-[400px] bg-blue-500/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 animate-none">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Headline and Badges */}
          <div className="lg:col-span-7 space-y-8 text-center lg:text-left transition-all">
            <div className="space-y-4">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-teal-500/10 border border-teal-500/20 text-teal-400 text-xs font-semibold tracking-wider uppercase">
                <Star className="w-3.5 h-3.5 fill-teal-400" />
                Your Path to U.S. Immigration
              </span>
              <h1 className="font-serif text-[38px] sm:text-5xl md:text-6xl font-bold tracking-tight text-white leading-tight">
                Starts With Clear <br />
                <span className="text-teal-400">Legal Guidance.</span>
              </h1>
              <p className="text-slate-300 text-base sm:text-lg max-w-2xl mx-auto lg:mx-0 leading-relaxed font-sans">
                Compassionate. Experienced. Results-Driven. We help individuals, families, and employers navigate complex U.S. immigration processes with complete confidence.
              </p>
            </div>

            {/* Key stats badges - as displayed in the mockup */}
            <div className="grid grid-cols-3 gap-3 max-w-xl mx-auto lg:mx-0 p-4 rounded-xl bg-slate-900/50 border border-slate-900">
              <div className="text-center p-2 border-r border-slate-800">
                <div className="text-teal-400 font-serif text-xl sm:text-2xl font-bold flex items-center justify-center gap-0.5">
                  <Award className="w-4 h-4 text-teal-500 hidden sm:inline" /> 10+
                </div>
                <div className="text-[10px] sm:text-xs text-slate-400 font-sans mt-0.5">Years Experience</div>
              </div>
              <div className="text-center p-2 border-r border-slate-800">
                <div className="text-teal-400 font-serif text-xl sm:text-2xl font-bold flex items-center justify-center gap-0.5">
                  <Briefcase className="w-4 h-4 text-teal-500 hidden sm:inline" /> 5k+
                </div>
                <div className="text-[10px] sm:text-xs text-slate-400 font-sans mt-0.5">Cases Handled</div>
              </div>
              <div className="text-center p-2">
                <div className="text-teal-400 font-serif text-xl sm:text-2xl font-bold flex items-center justify-center gap-0.5">
                  <Users className="w-4 h-4 text-teal-500 hidden sm:inline" /> 98%
                </div>
                <div className="text-[10px] sm:text-xs text-slate-400 font-sans mt-0.5">Success Rate</div>
              </div>
            </div>

            {/* Middle team photo section as shown in mockup */}
            <div className="relative group max-w-xl mx-auto lg:mx-0 overflow-hidden rounded-2xl border-2 border-slate-800/80 shadow-2xl">
              <img
                src={lawyersImage}
                alt="Thompson Immigration Attorneys"
                referrerPolicy="no-referrer"
                className="w-full h-56 sm:h-64 object-cover object-top hover:scale-105 transition duration-500 filter brightness-95"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/20 to-transparent" />
              <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between text-left">
                <div>
                  <h4 className="text-sm font-semibold text-white">Thompson Legal Advisory Panel</h4>
                  <p className="text-[10px] text-teal-400">Personalized Case Strategies & Support</p>
                </div>
                <span className="text-[9px] font-mono tracking-wider bg-teal-500/20 text-teal-300 py-1 px-2.5 rounded border border-teal-500/30 uppercase">
                  Featured Board
                </span>
              </div>
            </div>

            {/* Quick sub-text trust items */}
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-4 text-slate-400 text-xs py-2">
              <span className="flex items-center gap-1.5"><Shield className="w-3.5 h-3.5 text-teal-400" /> Confidential File Handling</span>
              <span className="hidden sm:inline text-slate-600">•</span>
              <span className="flex items-center gap-1.5"><Star className="w-3.5 h-3.5 text-teal-400" /> Tailored Solutions</span>
              <span className="hidden sm:inline text-slate-600">•</span>
              <span className="flex items-center gap-1.5"><CheckCircle2 className="w-3.5 h-3.5 text-teal-400" /> Fully Results-Focused</span>
            </div>
          </div>

          {/* Right Column: High Converting Form Card */}
          <div className="lg:col-span-5 relative" id="consultation-form-card">
            
            {/* Ambient gold/teal highlight borders */}
            <div className="absolute -inset-1 bg-gradient-to-tr from-teal-500/20 to-teal-400/15 rounded-2xl blur-md opacity-75 pointer-events-none" />

            <div className="relative bg-slate-900/90 border border-slate-800/70 p-6 md:p-8 rounded-2xl shadow-xl space-y-6">
              
              <div className="text-center lg:text-left space-y-1.5">
                <h3 className="font-sans text-[11px] font-bold tracking-[0.2em] text-teal-400 uppercase">Book Your</h3>
                <h2 className="font-serif text-xl sm:text-2xl font-bold tracking-tight text-white">Immigration Consultation</h2>
                <p className="text-xs text-slate-400">Take the first step toward your secure future in the U.S.</p>
              </div>

              {isSuccess ? (
                <motion.div 
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="p-6 bg-slate-950/40 border border-teal-500/30 rounded-xl text-center space-y-4 py-12"
                >
                  <div className="w-14 h-14 bg-teal-500/10 rounded-full flex items-center justify-center mx-auto text-teal-400">
                    <CheckCircle2 className="w-8 h-8" />
                  </div>
                  <div className="space-y-2">
                    <h4 className="text-lg font-serif font-semibold text-white">Request Submitted!</h4>
                    <p className="text-xs text-slate-300 max-w-sm mx-auto leading-relaxed">
                      Thank you, <b>{fullName || 'Client'}</b>. Your consultation inquiry has been recorded in our secure database. Our legal intake advisors will contact you shortly.
                    </p>
                  </div>
                  <div className="pt-2">
                    <button
                      id="reset-form-success-btn"
                      onClick={() => setIsSuccess(false)}
                      className="px-4 py-2 bg-slate-800 hover:bg-slate-700 rounded-lg text-xs font-semibold text-teal-400 hover:text-teal-300 transition duration-150"
                    >
                      Submit Another Request
                    </button>
                  </div>
                </motion.div>
              ) : (
                <form id="hero-consultation-form" onSubmit={handleSubmit} className="space-y-4">
                  {/* Name */}
                  <div className="relative">
                    <input
                      id="hero-form-name"
                      type="text"
                      required
                      placeholder="Full Name *"
                      value={fullName}
                      onChange={(e) => setFullName(e.target.value)}
                      className="w-full px-4 py-3 bg-slate-950 border border-slate-800 rounded-lg text-sm text-white placeholder-slate-500 focus:outline-none focus:border-teal-500 focus:ring-1 focus:ring-teal-500 transition-all duration-150"
                    />
                  </div>

                  {/* Email */}
                  <div className="relative">
                    <input
                      id="hero-form-email"
                      type="email"
                      required
                      placeholder="Email Address *"
                      value={emailAddress}
                      onChange={(e) => setEmailAddress(e.target.value)}
                      className="w-full px-4 py-3 bg-slate-950 border border-slate-800 rounded-lg text-sm text-white placeholder-slate-500 focus:outline-none focus:border-teal-500 focus:ring-1 focus:ring-teal-500 transition-all duration-150"
                    />
                  </div>

                  {/* Phone */}
                  <div className="relative">
                    <input
                      id="hero-form-phone"
                      type="tel"
                      required
                      placeholder="Phone Number *"
                      value={phoneNumber}
                      onChange={(e) => setPhoneNumber(e.target.value)}
                      className="w-full px-4 py-3 bg-slate-950 border border-slate-800 rounded-lg text-sm text-white placeholder-slate-500 focus:outline-none focus:border-teal-500 focus:ring-1 focus:ring-teal-500 transition-all duration-150"
                    />
                  </div>

                  {/* Current Visa Dropdown */}
                  <div className="relative">
                    <select
                      id="hero-form-visa"
                      value={currentVisaStatus}
                      onChange={(e) => setCurrentVisaStatus(e.target.value)}
                      className="w-full px-4 py-3 bg-slate-950 border border-slate-800 rounded-lg text-sm text-slate-300 focus:outline-none focus:border-teal-500 focus:ring-1 focus:ring-teal-500 transition-all duration-150 appearance-none cursor-pointer"
                    >
                      <option value="" disabled className="text-slate-600">Current Visa Status</option>
                      <option value="None / Outside U.S.">None / Outside U.S.</option>
                      <option value="H-1B">H-1B Specialty Worker</option>
                      <option value="F-1 Student">F-1 Student</option>
                      <option value="J-1 Exchange">J-1 Exchange</option>
                      <option value="L-1 Intracompany">L-1 Intracompany</option>
                      <option value="B-1/B-2 Visitor">B-1/B-2 Visitor</option>
                      <option value="Other Status">Other Status</option>
                    </select>
                    <div className="absolute inset-y-0 right-0 flex items-center px-4 pointer-events-none text-slate-500">
                      <svg className="fill-current h-4 w-4" viewBox="0 0 20 20">
                        <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
                      </svg>
                    </div>
                  </div>

                  {/* Goal Dropdown */}
                  <div className="relative">
                    <select
                      id="hero-form-goal"
                      value={immigrationGoal}
                      onChange={(e) => setImmigrationGoal(e.target.value)}
                      className="w-full px-4 py-3 bg-slate-950 border border-slate-800 rounded-lg text-sm text-slate-300 focus:outline-none focus:border-teal-500 focus:ring-1 focus:ring-teal-500 transition-all duration-150 appearance-none cursor-pointer"
                    >
                      <option value="" disabled className="text-slate-600">Immigration Goal</option>
                      <option value="Employment Green Card">Employment Green Card (PERM, EB-1/2/3)</option>
                      <option value="Family Green Card">Family Green Card (Spousal/Relative)</option>
                      <option value="Work Visa & Optimization">Work Visa (H-1B, L-1, O-1)</option>
                      <option value="Student & Trainee Visa">Student & Trainee Visa (F-1, J-1)</option>
                      <option value="Visa Extension / Changes">Visa Extension / Status Change</option>
                      <option value="Other Visa Services">Other Visa Services</option>
                    </select>
                    <div className="absolute inset-y-0 right-0 flex items-center px-4 pointer-events-none text-slate-500">
                      <svg className="fill-current h-4 w-4" viewBox="0 0 20 20">
                        <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
                      </svg>
                    </div>
                  </div>

                  {/* Message */}
                  <div className="relative">
                    <textarea
                      id="hero-form-msg"
                      rows={3}
                      placeholder="Briefly describe your situation..."
                      value={message}
                      onChange={(e) => setMessage(e.target.value)}
                      className="w-full px-4 py-3 bg-slate-950 border border-slate-800 rounded-lg text-sm text-white placeholder-slate-500 focus:outline-none focus:border-teal-500 focus:ring-1 focus:ring-teal-500 transition-all duration-150 resize-none"
                    />
                  </div>

                  {/* Submit Button */}
                  <button
                    id="hero-submit-btn"
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full py-3.5 bg-teal-500 hover:bg-teal-400 text-slate-950 hover:text-slate-950 font-sans text-xs font-bold tracking-widest uppercase rounded-lg transition duration-200 cursor-pointer shadow-lg shadow-teal-500/15 hover:shadow-teal-400/25 disabled:opacity-50"
                  >
                    {isSubmitting ? 'Processing Inquiry...' : 'Book My Consultation'}
                  </button>

                  <div className="flex items-center justify-center space-x-2 text-[11px] text-slate-500 font-mono">
                    <Lock className="w-3.5 h-3.5 text-teal-500" />
                    <span>We respect your privacy. Form secured.</span>
                  </div>
                </form>
              )}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
