export interface ConsultationLead {
  id: string;
  fullName: string;
  emailAddress: string;
  phoneNumber: string;
  currentVisaStatus: string;
  immigrationGoal: string;
  message: string;
  submittedAt: string;
  status: 'New' | 'Contacted' | 'Scheduled' | 'Closed';
}

export interface ServiceItem {
  id: string;
  title: string;
  description: string;
  bullets: string[];
}

export interface TestimonialItem {
  id: string;
  name: string;
  role: string;
  quote: string;
  image: string;
}

export interface ProcessStep {
  stepNumber: number;
  title: string;
  description: string;
}

export interface CountryInfo {
  name: string;
  code: string;
  flag: string;
}
