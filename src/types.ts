export interface ServiceItem {
  id: string;
  title: string;
  shortDesc: string;
  fullDesc: string;
  features: string[];
  image: string;
  badge?: string;
}

export interface ProjectItem {
  id: string;
  title: string;
  category: 'facade' | 'loggia' | 'details';
  categoryLabel: string;
  image: string;
  location: string;
  description: string;
  specs: {
    beforeState: string;
    afterState: string;
    profileType: string;
    finish: string;
  };
}

export interface ReviewItem {
  id: string;
  author: string;
  role: string;
  city: string;
  text: string;
  highlight: string;
  rating: number;
}

export interface ParameterConfig {
  structureType: string;
  footage: string;
  color: string;
  serviceLevel: string;
  notes?: string;
}

export interface LeadFormData {
  name: string;
  phone: string;
  email: string;
  structureType: string;
  footage: string;
  color: string;
  contactMethod: 'whatsapp' | 'phone';
  message: string;
}
