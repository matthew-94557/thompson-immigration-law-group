import { ServiceItem, TestimonialItem, ProcessStep, CountryInfo } from './types';

export const COUNTRIES: CountryInfo[] = [
  { name: 'India', code: 'IN', flag: '🇮🇳' },
  { name: 'China', code: 'CN', flag: '🇨🇳' },
  { name: 'Canada', code: 'CA', flag: '🇨🇦' },
  { name: 'Brazil', code: 'BR', flag: '🇧🇷' },
  { name: 'UK', code: 'GB', flag: '🇬🇧' },
  { name: 'Philippines', code: 'PH', flag: '🇵🇭' },
  { name: 'Mexico', code: 'MX', flag: '🇲🇽' },
  { name: 'Vietnam', code: 'VN', flag: '🇻🇳' },
  { name: 'South Korea', code: 'KR', flag: '🇰🇷' },
];

export const SERVICES: ServiceItem[] = [
  {
    id: 'employment',
    title: 'Employment-Based Visas',
    description: 'H-1B, L-1, O-1 and other work visas for skilled professionals seeking to advance their careers in the U.S.',
    bullets: ['H-1B Specialty Occupation', 'L-1 Intracompany Transferees', 'O-1 Extraordinary Ability', 'EB-1, EB-2, EB-3 Petitions']
  },
  {
    id: 'greencard',
    title: 'Green Card Applications',
    description: 'Employment-based and family-based permanent residence solutions tailored to secure your long-term future.',
    bullets: ['Adjustment of Status (AOS)', 'Consular Processing', 'I-485 Filings', 'Permanent Residency Permits']
  },
  {
    id: 'family',
    title: 'Family Immigration',
    description: 'Spousal, parent, child and family sponsorship applications to unite you with your loved ones in the United States.',
    bullets: ['Spouse & Fiancé Visas', 'Parent & Child Sponsorship', 'Relative Petitions (I-130)', 'Consular Processing Assistance']
  },
  {
    id: 'student-work',
    title: 'Student & Work Visas',
    description: 'F-1, OPT, CPT and work authorization for students and trainees hoping to study and find opportunities.',
    bullets: ['F-1 Student Status', 'Optional Practical Training (OPT)', 'Curricular Practical Training (CPT)', 'J-1 Exchange Visitor Visas']
  },
  {
    id: 'employer',
    title: 'Employer Immigration',
    description: 'Support for companies, startups, and HR teams hiring, transfering, and sponsoring international talent.',
    bullets: ['Corporate Compliance & Audits', 'I-9 and E-Verify Setup', 'Employer Blankets', 'Workplace Visa Sponsoring']
  },
  {
    id: 'extensions',
    title: 'Visa Extensions & Status Changes',
    description: 'Extend your lawful stay or seamlessly transition to a different non-immigrant status in the U.S.',
    bullets: ['B-1/B-2 Visitor Extensions', 'Change of Status (I-539)', 'Visa Transfers', 'Overstay Waivers & Advice']
  }
];

export const TESTIMONIALS: TestimonialItem[] = [
  {
    id: 'arjun',
    name: 'Arjun P.',
    role: 'H-1B Visa Approval',
    quote: 'Rachel and her team made my H-1B process smooth and stress-free. Their guidance and attention to detail gave me so much confidence during a stressful time.',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&auto=format&fit=crop&q=80'
  },
  {
    id: 'maria',
    name: 'Maria S.',
    role: 'Green Card Recipient',
    quote: 'After years of uncertainty, I finally got my Green Card! Thompson Immigration Law Group was with me every single step of the way, making the complex simple.',
    image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150&auto=format&fit=crop&q=80'
  },
  {
    id: 'david',
    name: 'David L.',
    role: 'Startup Founder',
    quote: 'They successfully helped our company bring in top engineering talent from around the world. Professional, responsive, and incredibly reliable legal partners.',
    image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&auto=format&fit=crop&q=80'
  }
];

export const PROCESS_STEPS: ProcessStep[] = [
  {
    stepNumber: 1,
    title: 'Initial Consultation',
    description: 'We review your unique background, timeline, credentials, and assess legal eligibility options.'
  },
  {
    stepNumber: 2,
    title: 'Case Evaluation',
    description: 'We build a customized strategic pathway, define requirements, and prepare your legal documents.'
  },
  {
    stepNumber: 3,
    title: 'Filing & Submission',
    description: 'We compile and file your petition packets with complete accuracy, error check, and submit on time.'
  },
  {
    stepNumber: 4,
    title: 'Ongoing Support',
    description: 'We track status updates, respond to RFE requests, and guide you thoroughly until success.'
  }
];

export const ADVANTAGES = [
  {
    title: 'Experienced Immigration Attorney',
    description: 'Focused on your success',
    icon: 'Scale'
  },
  {
    title: 'Attention to Detail',
    description: 'Ensuring accuracy in every document',
    icon: 'FileCheck'
  },
  {
    title: 'Personalized Case Strategies',
    description: 'Tailored to your unique goals',
    icon: 'Briefcase'
  },
  {
    title: 'Client-First Approach',
    description: 'Your goals, your future, your priority',
    icon: 'UserCheck'
  },
  {
    title: 'Clear & Transparent Communication',
    description: "You're informed every step of the way",
    icon: 'MessageSquare'
  },
  {
    title: 'Support Throughout Your Journey',
    description: "We're with you from start to finish",
    icon: 'HeartHandshake'
  }
];
