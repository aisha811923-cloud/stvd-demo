/**
 * St. Teresa Vidya Deep Senior Secondary School (STVDS)
 * Strict TypeScript Interfaces & Data Contracts
 */

export type SubmissionStatus = 
  | 'pending_callback' 
  | 'contacted' 
  | 'campus_visit_booked' 
  | 'enrolled' 
  | 'closed';

export type FormStatus = 'idle' | 'loading' | 'success' | 'error';

export interface AdmissionInquiry {
  id?: string;
  created_at?: string;
  parent_name: string;
  phone: string;
  child_name: string;
  grade_applying: string;
  notes?: string;
  status?: SubmissionStatus;
  assigned_counselor?: string;
  followup_date?: string;
}

export interface MetricCard {
  id: string;
  value: string;
  label: string;
  subtext: string;
  iconName?: string;
}

export interface NavItem {
  label: string;
  href: string;
  description?: string;
  badge?: string;
  children?: {
    label: string;
    href: string;
    description?: string;
  }[];
}

export interface AcademicWing {
  id: string;
  title: string;
  classes: string;
  ageRange: string;
  description: string;
  highlights: string[];
  icon: string;
}

export interface SchoolFacility {
  id: string;
  title: string;
  category: 'STEM Laboratories' | 'Sports & Athletics' | 'Creative Arts' | 'Campus Infrastructure';
  description: string;
  imageUrl: string;
  specifications: string[];
}

export interface CBSEDisclosureItem {
  id: string;
  title: string;
  category: 'Affiliation' | 'Safety' | 'Academic' | 'Financial';
  documentUrl: string;
  lastUpdated: string;
}

export interface SchoolContactInfo {
  legalName: string;
  shortName: string;
  motto: string;
  affiliationNumber: string;
  board: string;
  establishedYear: number;
  managingSociety: string;
  principalName: string;
  address: {
    line1: string;
    line2: string;
    locality: string;
    city: string;
    state: string;
    pincode: string;
    country: string;
  };
  phones: string[];
  whatsapp: string;
  emails: string[];
  timings: string;
}
