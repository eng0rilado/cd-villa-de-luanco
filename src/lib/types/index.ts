// Base types
export interface BaseEntity {
  id: string;
  title: string;
  description?: string;
  createdAt: Date;
  updatedAt: Date;
}

// Club related types
export interface ClubInfo extends BaseEntity {
  history: string;
  mission: string;
  vision: string;
  values: string[];
  achievements: Achievement[];
}

export interface Achievement extends BaseEntity {
  year: number;
  category: 'championship' | 'recognition' | 'milestone';
  description: string;
  imageUrl?: string;
}

export interface Facility extends BaseEntity {
  name: string;
  type: 'sports' | 'recreational' | 'administrative';
  description: string;
  capacity: number;
  features: string[];
  images: string[];
  isAvailable: boolean;
  bookingUrl?: string;
}

export interface Sponsor extends BaseEntity {
  name: string;
  logo: string;
  website?: string;
  tier: 'gold' | 'silver' | 'bronze' | 'partner';
  description: string;
}

export interface MembershipType extends BaseEntity {
  name: string;
  price: number;
  duration: number; // months
  benefits: string[];
  features: string[];
  isPopular: boolean;
  category: 'individual' | 'family' | 'senior' | 'student';
}

export interface ContactInfo {
  address: string;
  phone: string;
  email: string;
  coordinates: {
    lat: number;
    lng: number;
  };
  hours: {
    weekdays: string;
    weekends: string;
    holidays?: string;
  };
  socialMedia: {
    facebook?: string;
    instagram?: string;
    twitter?: string;
    youtube?: string;
  };
}

// Activities types
export interface Activity extends BaseEntity {
  name: string;
  category: 'balonmano' | 'baloncesto' | 'ciclo-indoor' | 'full-body' | 'padel' | 'escuela-deportiva';
  description: string;
  instructor: string;
  instructorBio?: string;
  schedule: Schedule[];
  price: number;
  duration: number; // minutes
  maxParticipants: number;
  currentParticipants: number;
  level: 'beginner' | 'intermediate' | 'advanced' | 'all';
  equipment?: string[];
  requirements?: string[];
  imageUrl: string;
  gallery?: string[];
  isActive: boolean;
  ageGroup?: {
    min: number;
    max: number;
  };
}

export interface Schedule {
  day: 'monday' | 'tuesday' | 'wednesday' | 'thursday' | 'friday' | 'saturday' | 'sunday';
  startTime: string;
  endTime: string;
  location: string;
}

// Events types
export interface Event extends BaseEntity {
  name: string;
  type: 'weekend' | 'summer' | 'charity' | 'camp' | 'sports';
  description: string;
  startDate: Date;
  endDate: Date;
  location: string;
  price: number;
  maxParticipants: number;
  currentParticipants: number;
  ageGroup?: {
    min: number;
    max: number;
  };
  requirements?: string[];
  includes?: string[];
  imageUrl: string;
  gallery?: string[];
  registrationUrl?: string;
  isActive: boolean;
  isFeatured: boolean;
  organizer: string;
  contactInfo?: {
    email: string;
    phone: string;
  };
}

// News types
export interface NewsArticle extends BaseEntity {
  title: string;
  excerpt: string;
  content: string;
  author: string;
  category: 'general' | 'sports' | 'events' | 'achievements' | 'community';
  tags: string[];
  imageUrl: string;
  gallery?: string[];
  isFeatured: boolean;
  publishedAt: Date;
  readTime: number; // minutes
}

// Gallery types
export interface GalleryItem {
  id: string;
  title: string;
  description?: string;
  imageUrl: string;
  thumbnailUrl: string;
  category: string;
  eventId?: string;
  activityId?: string;
  uploadedAt: Date;
  photographer?: string;
}

export interface GalleryAlbum extends BaseEntity {
  name: string;
  description: string;
  coverImage: string;
  items: GalleryItem[];
  eventId?: string;
  activityId?: string;
  createdAt: Date;
}

// Results and classifications
export interface Team extends BaseEntity {
  name: string;
  category: string;
  league: string;
  season: string;
  players: Player[];
  coach: string;
  logo?: string;
}

export interface Player extends BaseEntity {
  name: string;
  position: string;
  number: number;
  teamId: string;
  stats?: PlayerStats;
}

export interface PlayerStats {
  gamesPlayed: number;
  points: number;
  goals?: number;
  assists?: number;
  rebounds?: number;
  steals?: number;
  blocks?: number;
}

export interface Match extends BaseEntity {
  homeTeam: string;
  awayTeam: string;
  homeScore: number;
  awayScore: number;
  date: Date;
  location: string;
  league: string;
  season: string;
  status: 'scheduled' | 'live' | 'finished' | 'postponed';
  isHomeGame: boolean;
}

export interface Classification extends BaseEntity {
  team: string;
  position: number;
  gamesPlayed: number;
  wins: number;
  draws: number;
  losses: number;
  goalsFor: number;
  goalsAgainst: number;
  points: number;
  league: string;
  season: string;
}

// Navigation types
export interface NavItem {
  id: string;
  label: string;
  href: string;
  children?: NavItem[];
  isExternal?: boolean;
}

export interface BreadcrumbItem {
  label: string;
  href?: string;
}

// API Response types
export interface ApiResponse<T> {
  data: T;
  success: boolean;
  message?: string;
  pagination?: {
    page: number;
    limit: number;
    total: number;
    totalPages: number;
  };
}

export interface PaginationParams {
  page?: number;
  limit?: number;
  search?: string;
  category?: string;
  sortBy?: string;
  sortOrder?: 'asc' | 'desc';
}
