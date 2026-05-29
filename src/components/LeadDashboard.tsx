import { useState, useEffect } from 'react';
import { ConsultationLead } from '../types';
import { X, Calendar, Phone, Mail, FileText, Search, Download, Trash2, Shield, Eye, Database } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

interface LeadDashboardProps {
  isOpen: boolean;
  onClose: () => void;
  leads: ConsultationLead[];
  onSetLeads: (leads: ConsultationLead[]) => void;
}

export default function LeadDashboard({ isOpen, onClose, leads, onSetLeads }: LeadDashboardProps) {
  const [search, setSearch] = useState('');
  const [filterStatus, setFilterStatus] = useState<string>('all');

  const addMockLeads = () => {
    const mockLeads: ConsultationLead[] = [
      {
        id: 'mock-1',
        fullName: 'Chen Wei',
        emailAddress: 'wei.chen@techglobal.com',
        phoneNumber: '+1-415-555-8291',
        currentVisaStatus: 'H-1B',
        immigrationGoal: 'Employment Green Card',
        message: 'I have been on an H-1B visa for 4 years as a software architect. My company wants to sponsor my EB-2 PERM petition and I want to consult on the timeline.',
        submittedAt: new Date(Date.now() - 3600000 * 2).toISOString(),
        status: 'Scheduled',
      },
      {
        id: 'mock-2',
        fullName: 'Gabriela Silva',
        emailAddress: 'gaby_silva91@gmail.com',
        phoneNumber: '+1-305-555-0182',
        currentVisaStatus: 'F-1 Student',
        immigrationGoal: 'Work Visa & Optimization',
        message: 'Currently on STEM OPT ending in 6 months. Seeking advice on transitioning to H-1B, O-1, or cap-exempt employment paths.',
        submittedAt: new Date(Date.now() - 3600000 * 18).toISOString(),
        status: 'New',
      },
      {
        id: 'mock-3',
        fullName: 'Nikhil Sharma',
        emailAddress: 'sharma.nikhil@healthcorp.org',
        phoneNumber: '+1-212-555-6671',
        currentVisaStatus: 'J-1 Visa',
        immigrationGoal: 'Other Visa Services',
        message: 'Medical researcher seeking a J-1 waiver and transition to an O-1 extraordinary ability visa or EB-1A green card.',
        submittedAt: new Date(Date.now() - 3600000 * 48).toISOString(),
        status: 'Contacted',
      }
    ];
    onSetLeads([...mockLeads, ...leads]);
  };

  const deleteLead = (id: string) => {
    const updated = leads.filter(l => l.id !== id);
    onSetLeads(updated);
  };

  const updateStatus = (id: string, newStatus: ConsultationLead['status']) => {
    const updated = leads.map(l => l.id === id ? { ...l, status: newStatus } : l);
    onSetLeads(updated);
  };

  const clearAllLeads = () => {
    if (confirm('Are you sure you want to clear all leads?')) {
      onSetLeads([]);
    }
  };

  const filteredLeads = leads.filter(l => {
    const matchesSearch = 
      l.fullName.toLowerCase().includes(search.toLowerCase()) ||
      l.emailAddress.toLowerCase().includes(search.toLowerCase()) ||
      l.immigrationGoal.toLowerCase().includes(search.toLowerCase()) ||
      l.currentVisaStatus.toLowerCase().includes(search.toLowerCase());
    
    const matchesFilter = filterStatus === 'all' || l.status.toLowerCase() === filterStatus.toLowerCase();
    
    return matchesSearch && matchesFilter;
  });

  const exportCSV = () => {
    if (leads.length === 0) return;
    const headers = ['Full Name', 'Email', 'Phone', 'Visa Status', 'Immigration Goal', 'Message', 'Submitted At', 'Status'];
    const rows = leads.map(l => [
      `"${l.fullName}"`,
      `"${l.emailAddress}"`,
      `"${l.phoneNumber}"`,
      `"${l.currentVisaStatus}"`,
      `"${l.immigrationGoal}"`,
      `"${l.message.replace(/"/g, '""')}"`,
      `"${new Date(l.submittedAt).toLocaleString()}"`,
      `"${l.status}"`
    ]);
    const csvContent = "data:text/csv;charset=utf-8," 
      + [headers.join(','), ...rows.map(e => e.join(','))].join('\n');
    const encodedUri = encodeURI(csvContent);
    const link = document.createElement("a");
    link.setAttribute("href", encodedUri);
    link.setAttribute("download", `Immigration_Leads_${new Date().toISOString().slice(0,10)}.csv`);
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            id="backdrop"
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.5 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black z-50 pointer-events-auto"
          />

          {/* Sidebar */}
          <motion.div
            id="sidebar-container"
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'spring', damping: 25, stiffness: 200 }}
            className="fixed inset-y-0 right-0 w-full md:max-w-2xl bg-slate-900 border-l border-slate-800 text-slate-100 shadow-2xl z-50 flex flex-col pointer-events-auto"
          >
            {/* Header */}
            <div className="p-6 border-b border-slate-800 flex items-center justify-between bg-slate-950/40">
              <div className="flex items-center space-x-3">
                <div className="p-2 bg-teal-500/10 rounded-lg text-teal-400">
                  <Database className="w-6 h-6" id="db-icon" />
                </div>
                <div>
                  <h2 className="text-xl font-serif font-semibold tracking-tight text-white flex items-center gap-2">
                    Leads Dashboard
                    <span className="text-xs font-mono font-normal bg-teal-500/20 text-teal-300 px-2.5 py-0.5 rounded-full">Admin View</span>
                  </h2>
                  <p className="text-xs text-slate-400">Review booked consultation details locally</p>
                </div>
              </div>
              <button
                id="close-sidebar-btn"
                onClick={onClose}
                className="p-2 hover:bg-slate-800 rounded-full transition-colors duration-150 text-slate-400 hover:text-white"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Controls */}
            <div className="p-6 border-b border-slate-800 bg-slate-950/20 space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {/* Search */}
                <div className="relative">
                  <Search className="absolute left-3 top-3 w-4 h-4 text-slate-500" />
                  <input
                    id="lead-search-input"
                    type="text"
                    placeholder="Search by name, status..."
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}
                    className="w-full pl-9 pr-4 py-2 bg-slate-800/80 border border-slate-700 rounded-lg text-sm text-white placeholder-slate-500 focus:outline-none focus:border-teal-500 focus:ring-1 focus:ring-teal-500 transition-all duration-200"
                  />
                </div>

                {/* Filter Status */}
                <select
                  id="lead-status-filter"
                  value={filterStatus}
                  onChange={(e) => setFilterStatus(e.target.value)}
                  className="w-full px-4 py-2 bg-slate-800/80 border border-slate-700 rounded-lg text-sm text-slate-300 focus:outline-none focus:border-teal-500 focus:ring-1 focus:ring-teal-500 transition-all duration-200"
                >
                  <option value="all">All Statuses</option>
                  <option value="new">New</option>
                  <option value="contacted">Contacted</option>
                  <option value="scheduled">Scheduled</option>
                  <option value="closed">Closed</option>
                </select>
              </div>

              {/* Utility actions */}
              <div className="flex flex-wrap items-center justify-between gap-3 pt-2">
                <span className="text-xs text-slate-400 font-mono">
                  Showing <b>{filteredLeads.length}</b> of <b>{leads.length}</b> leads
                </span>
                <div className="flex items-center space-x-2">
                  <button
                    id="add-mock-btn"
                    onClick={addMockLeads}
                    className="px-3 py-1.5 bg-slate-800 hover:bg-slate-700 text-teal-400 hover:text-teal-300 rounded text-xs font-medium transition duration-150 flex items-center gap-1"
                  >
                    + Load Mock Data
                  </button>
                  {leads.length > 0 && (
                    <>
                      <button
                        id="export-csv-btn"
                        onClick={exportCSV}
                        className="p-1.5 bg-slate-800 hover:bg-slate-700 text-slate-300 rounded hover:text-white transition duration-150"
                        title="Export CSV"
                      >
                        <Download className="w-4 h-4" />
                      </button>
                      <button
                        id="clear-leads-btn"
                        onClick={clearAllLeads}
                        className="p-1.5 bg-red-950/40 hover:bg-red-900/40 text-red-400 rounded transition duration-150"
                        title="Clear All"
                      >
                        <Trash2 className="w-4 h-4" />
                      </button>
                    </>
                  )}
                </div>
              </div>
            </div>

            {/* List */}
            <div className="flex-1 overflow-y-auto p-6 space-y-4">
              {filteredLeads.length === 0 ? (
                <div className="h-full flex flex-col items-center justify-center text-center p-8">
                  <Shield className="w-12 h-12 text-slate-700 mb-3" />
                  <h3 className="text-slate-400 text-sm font-medium">No Leads Found</h3>
                  <p className="text-xs text-slate-500 mt-1 max-w-sm">
                    {leads.length === 0 
                      ? 'Submit a consultation booking through either of the landing page forms to see live data populate here instantly.' 
                      : 'No matches found. Try adjusting your search or category filters.'}
                  </p>
                  {leads.length === 0 && (
                    <button
                      id="load-mock-empty-btn"
                      onClick={addMockLeads}
                      className="mt-4 px-4 py-2 bg-teal-500/10 hover:bg-teal-500/20 text-teal-400 text-xs font-semibold rounded-lg transition duration-150"
                    >
                      Pre-populate Mock Consultation Leads
                    </button>
                  )}
                </div>
              ) : (
                filteredLeads.map((lead) => (
                  <motion.div
                    id={`lead-card-${lead.id}`}
                    key={lead.id}
                    layout
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, scale: 0.95 }}
                    className="p-5 bg-slate-950/50 border border-slate-800 rounded-xl space-y-3 shadow-lg relative group transition hover:border-slate-700"
                  >
                    {/* Top Row: Name and Date */}
                    <div className="flex flex-wrap items-start justify-between gap-2">
                      <div>
                        <h4 className="font-serif font-bold text-white text-base">{lead.fullName}</h4>
                        <p className="text-xs text-slate-500 font-mono">
                          {new Date(lead.submittedAt).toLocaleString()}
                        </p>
                      </div>
                      <div className="flex items-center space-x-2">
                        {/* Status Select Badge */}
                        <select
                          id={`lead-status-select-${lead.id}`}
                          value={lead.status}
                          onChange={(e) => updateStatus(lead.id, e.target.value as ConsultationLead['status'])}
                          className={`text-[11px] font-semibold px-2.5 py-1 rounded-full border-0 focus:ring-1 focus:ring-teal-500 cursor-pointer focus:outline-none ${
                            lead.status === 'New' ? 'bg-indigo-500/20 text-indigo-400 hover:bg-indigo-500/30' :
                            lead.status === 'Contacted' ? 'bg-yellow-500/20 text-yellow-300 hover:bg-yellow-500/30' :
                            lead.status === 'Scheduled' ? 'bg-teal-500/20 text-teal-300 hover:bg-teal-500/30' :
                            'bg-slate-500/20 text-slate-400 hover:bg-slate-500/30'
                          }`}
                        >
                          <option value="New" className="bg-slate-900 text-slate-300">New</option>
                          <option value="Contacted" className="bg-slate-900 text-slate-300">Contacted</option>
                          <option value="Scheduled" className="bg-slate-900 text-slate-300">Scheduled</option>
                          <option value="Closed" className="bg-slate-900 text-slate-300">Closed</option>
                        </select>
                        {/* Delete Button */}
                        <button
                          id={`delete-lead-btn-${lead.id}`}
                          onClick={() => deleteLead(lead.id)}
                          className="p-1 text-slate-500 hover:text-red-400 rounded hover:bg-slate-800 transition"
                          title="Delete Lead"
                        >
                          <Trash2 className="w-4 h-4" />
                        </button>
                      </div>
                    </div>

                    {/* Meta Fields Grid */}
                    <div className="grid grid-cols-2 gap-y-2 gap-x-4 bg-slate-900/40 p-3 rounded-lg border border-slate-800/80 text-xs">
                      <div className="flex items-center space-x-2 text-slate-400">
                        <Mail className="w-3.5 h-3.5 text-slate-500 flex-shrink-0" />
                        <span className="truncate select-all text-slate-300" title={lead.emailAddress}>{lead.emailAddress}</span>
                      </div>
                      <div className="flex items-center space-x-2 text-slate-400">
                        <Phone className="w-3.5 h-3.5 text-slate-500 flex-shrink-0" />
                        <span className="truncate select-all text-slate-300">{lead.phoneNumber}</span>
                      </div>
                      <div className="flex items-center space-x-2 text-slate-400">
                        <span className="font-semibold text-[10px] uppercase font-mono text-slate-500 flex-shrink-0">Visa Status</span>
                        <span className="px-1.5 py-0.5 rounded bg-slate-800 text-slate-300 truncate">{lead.currentVisaStatus}</span>
                      </div>
                      <div className="flex items-center space-x-2 text-slate-400">
                        <span className="font-semibold text-[10px] uppercase font-mono text-slate-500 flex-shrink-0">Goal</span>
                        <span className="px-1.5 py-0.5 rounded bg-slate-800 text-slate-300 truncate" title={lead.immigrationGoal}>{lead.immigrationGoal}</span>
                      </div>
                    </div>

                    {/* Brief Note */}
                    <div className="space-y-1 bg-slate-900/25 p-3 rounded-lg border border-slate-800/40 text-xs text-slate-300 leading-relaxed font-sans">
                      <div className="flex items-center space-x-1 text-teal-400 font-semibold mb-1">
                        <FileText className="w-3.5 h-3.5" />
                        <span>Situation Brief:</span>
                      </div>
                      <p className="whitespace-pre-wrap italic">"{lead.message || 'No situation briefing provided.'}"</p>
                    </div>
                  </motion.div>
                ))
              )}
            </div>
            {/* Footer lock symbol */}
            <div className="p-4 bg-slate-950/70 border-t border-slate-800 text-center flex items-center justify-center space-x-2">
              <Shield className="w-3.5 h-3.5 text-teal-400" />
              <span className="text-[10px] text-slate-400 font-mono tracking-wider uppercase">Local Database Session Secure</span>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
