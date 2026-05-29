import React, { useState } from 'react';
import { ConsultationLead } from '../types';
import { Lock, CheckCircle, HelpCircle, ShieldAlert } from 'lucide-react';
import { motion } from 'motion/react';

import nycSkylineImage from '../assets/images/nyc_skyline_1780071620889.png';

interface FooterFormProps {
  onAddLead: (lead: ConsultationLead) => void;
}

export default function FooterForm({ onAddLead }: FooterFormProps) {
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

    setTimeout(() => {
      const newLead: ConsultationLead = {
        id: 'footer-lead-' + Date.now(),
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

      // Reset
      setFullName('');
      setEmailAddress('');
      setPhoneNumber('');
      setCurrentVisaStatus('');
      setImmigrationGoal('');
      setMessage('');
    }, 1000);
  };

  return (
    <section id="footer-form" className="relative py-24 bg-slate-950 text-white overflow-hidden">
      
      {/* Background Image Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src={nycSkylineImage}
          alt="New York Skyline"
          referrerPolicy="no-referrer"
          className="w-full h-full object-cover brightness-30 contrast-125"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/80 to-transparent" />
        <div className="absolute inset-0 bg-slate-950/50" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Text Column */}
          <div className="lg:col-span-6 space-y-6 text-center lg:text-left">
            <div className="space-y-4">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded bg-teal-500/10 border border-teal-500/25 text-teal-400 text-xs font-mono tracking-wider uppercase">
                📥 Secure Intake Portal
              </span>
              <h2 className="font-serif text-[32px] sm:text-[44px] font-bold tracking-tight text-white leading-tight">
                Start Your Immigration <br />
                Journey With Confidence
              </h2>
              <p className="text-slate-300 text-sm sm:text-base max-w-xl mx-auto lg:mx-0 leading-relaxed font-sans">
                Book your consultation today and take the first step toward your future in the United States. Our legal team will analyze your eligibility and design a customized case strategy tailored to your exact timeline and budget.
              </p>
            </div>

            {/* Quick security trust links */}
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 text-xs font-sans text-slate-400 py-2">
              <div className="flex items-center space-x-1.5 p-2 bg-slate-900/50 rounded-lg border border-slate-800">
                <span className="font-bold text-teal-400">🛡️ 100% Confidential</span>
                <span className="text-slate-600">|</span>
                <span>Data encrypted</span>
              </div>
              <div className="flex items-center space-x-1.5 p-2 bg-slate-900/50 rounded-lg border border-slate-800">
                <span className="font-bold text-teal-400">📋 Tailored To You</span>
                <span className="text-slate-600">|</span>
                <span>Personalized audit</span>
              </div>
            </div>
          </div>

          {/* Right Form Card Column */}
          <div className="lg:col-span-6 relative">
            <div className="relative bg-slate-900/85 backdrop-blur-md border border-slate-800/80 p-6 md:p-8 rounded-2xl shadow-2xl space-y-6">
              
              {isSuccess ? (
                <motion.div 
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="p-6 bg-slate-950/40 border border-teal-500/30 rounded-xl text-center space-y-4 py-16"
                >
                  <div className="w-14 h-14 bg-teal-500/10 rounded-full flex items-center justify-center mx-auto text-teal-400">
                    <CheckCircle className="w-8 h-8" />
                  </div>
                  <div>
                    <h4 className="text-lg font-serif font-bold text-white">Consultation Requested</h4>
                    <p className="text-xs text-slate-300 mt-2 max-w-sm mx-auto leading-relaxed">
                      Thank you! Our legal intake staff has received your consultation parameters. A representative will contact you in the next 12-24 business hours to finalize scheduling.
                    </p>
                  </div>
                  <button
                    id="reset-form-footer-success"
                    onClick={() => setIsSuccess(false)}
                    className="mt-2 px-4 py-2 bg-slate-850 hover:bg-slate-800 border border-slate-700 hover:text-teal-400 rounded-lg text-xs font-semibold transition"
                  >
                    Send Another Request
                  </button>
                </motion.div>
              ) : (
                <form id="footer-consultation-form" onSubmit={handleSubmit} className="space-y-4">
                  
                  {/* Grid Inputs for Name & Email */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <input
                      id="footer-form-name"
                      type="text"
                      required
                      placeholder="Full Name *"
                      value={fullName}
                      onChange={(e) => setFullName(e.target.value)}
                      className="w-full px-4 py-3 bg-slate-950 border border-slate-850 rounded-lg text-sm text-white placeholder-slate-500 focus:outline-none focus:border-teal-500 focus:ring-1 focus:ring-teal-500 transition-all duration-150"
                    />
                    <input
                      id="footer-form-email"
                      type="email"
                      required
                      placeholder="Email Address *"
                      value={emailAddress}
                      onChange={(e) => setEmailAddress(e.target.value)}
                      className="w-full px-4 py-3 bg-slate-950 border border-slate-850 rounded-lg text-sm text-white placeholder-slate-500 focus:outline-none focus:border-teal-500 focus:ring-1 focus:ring-teal-500 transition-all duration-150"
                    />
                  </div>

                  {/* Phone & Visa selection */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <input
                      id="footer-form-phone"
                      type="tel"
                      required
                      placeholder="Phone Number *"
                      value={phoneNumber}
                      onChange={(e) => setPhoneNumber(e.target.value)}
                      className="w-full px-4 py-3 bg-slate-950 border border-slate-850 rounded-lg text-sm text-white placeholder-slate-500 focus:outline-none focus:border-teal-500 focus:ring-1 focus:ring-teal-500 transition-all duration-150"
                    />
                    <div className="relative">
                      <select
                        id="footer-form-visa"
                        value={currentVisaStatus}
                        onChange={(e) => setCurrentVisaStatus(e.target.value)}
                        className="w-full px-4 py-3 bg-slate-950 border border-slate-850 rounded-lg text-sm text-slate-350 focus:outline-none focus:border-teal-500 focus:ring-1 focus:ring-teal-500 appearance-none cursor-pointer transition-all duration-150"
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
                  </div>

                  {/* Goal Dropdown */}
                  <div className="relative">
                    <select
                      id="footer-form-goal"
                      value={immigrationGoal}
                      onChange={(e) => setImmigrationGoal(e.target.value)}
                      className="w-full px-4 py-3 bg-slate-950 border border-slate-850 rounded-lg text-sm text-slate-350 focus:outline-none focus:border-teal-500 focus:ring-1 focus:ring-teal-500 appearance-none cursor-pointer transition-all duration-150"
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

                  {/* Textarea Brief Description */}
                  <textarea
                    id="footer-form-msg"
                    rows={3}
                    placeholder="Briefly describe your situation..."
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    className="w-full px-4 py-3 bg-slate-950 border border-slate-850 rounded-lg text-sm text-white placeholder-slate-500 focus:outline-none focus:border-teal-500 focus:ring-1 focus:ring-teal-500 transition-all duration-150 resize-none"
                  />

                  {/* Submit Button */}
                  <button
                    id="footer-submit-btn"
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full py-3.5 bg-teal-500 hover:bg-teal-400 text-slate-950 font-sans text-xs font-bold tracking-widest uppercase rounded-lg transition-all duration-150 cursor-pointer shadow-lg shadow-teal-500/10"
                  >
                    {isSubmitting ? 'Submitting Form...' : 'Book My Consultation'}
                  </button>

                  <div className="flex items-center justify-center space-x-2 text-[10px] text-slate-400 font-mono">
                    <Lock className="w-3 h-3 text-teal-400" />
                    <span>Your privacy is fully protected. Information is kept static and confidential.</span>
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
