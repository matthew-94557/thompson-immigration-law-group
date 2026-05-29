/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, useEffect } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import TrustBadges from './components/TrustBadges';
import Services from './components/Services';
import WhyChooseUs from './components/WhyChooseUs';
import Testimonials from './components/Testimonials';
import Process from './components/Process';
import FooterForm from './components/FooterForm';
import Footer from './components/Footer';
import LeadDashboard from './components/LeadDashboard';
import { ConsultationLead } from './types';
import { Database, ShieldCheck, HelpCircle } from 'lucide-react';

export default function App() {
  const [leads, setLeads] = useState<ConsultationLead[]>(() => {
    try {
      const saved = localStorage.getItem('thompson_immigration_leads');
      return saved ? JSON.parse(saved) : [];
    } catch (e) {
      console.error('Failed to parse saved leads from localStorage:', e);
      return [];
    }
  });

  const [isAdminOpen, setIsAdminOpen] = useState(false);
  const [notification, setNotification] = useState<string | null>(null);

  useEffect(() => {
    localStorage.setItem('thompson_immigration_leads', JSON.stringify(leads));
  }, [leads]);

  const handleAddLead = (newLead: ConsultationLead) => {
    setLeads((prev) => [newLead, ...prev]);
    
    // Display a gentle toast notification that the lead was captured
    setNotification(`Successfully recorded consultation request for ${newLead.fullName}!`);
    setTimeout(() => {
      setNotification(null);
    }, 4500);
  };

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 flex flex-col font-sans selection:bg-teal-500 selection:text-slate-950 w-full max-w-full overflow-x-hidden">
      
      {/* Scrollable sections */}
      <Header
        onOpenConsultation={() => {
          const el = document.getElementById('footer-form');
          el?.scrollIntoView({ behavior: 'smooth' });
        }}
        onOpenLeads={() => setIsAdminOpen(true)}
        leadCount={leads.length}
      />

      <main className="flex-grow">
        <Hero onAddLead={handleAddLead} onOpenLeads={() => setIsAdminOpen(true)} />
        <TrustBadges />
        <Services onOpenConsultation={() => {
          const el = document.getElementById('footer-form');
          el?.scrollIntoView({ behavior: 'smooth' });
        }} />
        <WhyChooseUs />
        <Testimonials />
        <Process />
        <FooterForm onAddLead={handleAddLead} />
      </main>

      <Footer />

      {/* Slide-over admin dashboard console */}
      <LeadDashboard
        isOpen={isAdminOpen}
        onClose={() => setIsAdminOpen(false)}
        leads={leads}
        onSetLeads={setLeads}
      />

      {/* Floating Action Badge to easily open leads console */}
      <div className="fixed bottom-6 right-6 z-30 flex flex-col items-end space-y-2">
        {notification && (
          <div className="bg-slate-900 border border-teal-500/30 text-white text-xs px-4 py-3 rounded-xl shadow-2xl flex items-center space-x-2 max-w-sm animate-bounce duration-1000">
            <span className="w-2 h-2 rounded-full bg-teal-400 animate-ping" />
            <span>{notification}</span>
          </div>
        )}

        <button
          id="floating-admin-console-btn"
          onClick={() => setIsAdminOpen(true)}
          className="group flex items-center space-x-2 px-4 py-3 bg-slate-900 hover:bg-slate-800 text-slate-200 hover:text-white rounded-full shadow-2xl border border-slate-800 hover:border-slate-700 transition-all duration-300 transform hover:scale-105"
        >
          <Database className="w-4 h-4 text-teal-400 group-hover:rotate-12 transition-transform duration-200" />
          <span className="text-xs font-semibold tracking-wider font-sans">Leads Database</span>
          {leads.length > 0 && (
            <span className="w-5 h-5 rounded-full bg-teal-500 text-slate-950 text-[10px] font-bold flex items-center justify-center">
              {leads.length}
            </span>
          )}
        </button>
      </div>

    </div>
  );
}

