export interface NavItem {
  label: string;
  href: string;
}

export interface FrictionPoint {
  title: string;
  description: string;
}

export interface ProtocolDetail {
  title: string;
  description: string;
}

export interface ImpactStat {
  value: string;
  label: string;
}

export interface SectorCard {
  id: number;
  title: string;
  subtitle: string;
  description: string;
  ref: string;
  imagePlaceholder: string;
  icon: 'car' | 'landmark' | 'briefcase' | 'building';
  frictions: FrictionPoint[];
  protocol: ProtocolDetail;
  solutions?: ProtocolDetail[];
  impact: {
    title: string;
    stats: ImpactStat[];
    cta: string;
  };
  testimonial?: {
    quote: string;
    author: string;
    role: string;
  };
  caseStudy?: {
    title: string;
    outcome: string;
    metrics: string[];
  };
  liveStatus?: string;
}

export interface FAQItem {
  question: string;
  answer: string;
}

export interface Step {
  number: string;
  title: string;
  description: string;
}

export interface LocationData {
  id: string;
  city: string;
  region: string;
  description: string;
  stats: ImpactStat[];
  features: string[];
}
