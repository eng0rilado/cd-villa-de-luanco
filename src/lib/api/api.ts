import type {
  ApiResponse,
  PaginationParams,
  ClubInfo,
  Facility,
  Sponsor,
  MembershipType,
  ContactInfo,
  Activity,
  Event,
  NewsArticle,
  GalleryAlbum,
  Team,
  Match,
  Classification,
  NavItem
} from '../types/index.js';

import {
  navigationData,
  clubInfo,
  facilities,
  sponsors,
  membershipTypes,
  contactInfo,
  activities,
  events,
  newsArticles,
  galleryAlbums,
  teams,
  matches,
  classifications
} from './mockData.js';

// Simulate API delay
const delay = (ms: number) => new Promise(resolve => setTimeout(resolve, ms));

// Navigation API
export async function getNavigation(): Promise<ApiResponse<NavItem[]>> {
  await delay(100);
  return {
    data: navigationData,
    success: true,
    message: 'Navigation data retrieved successfully'
  };
}

// Club API
export async function getClubInfo(): Promise<ApiResponse<ClubInfo>> {
  await delay(150);
  return {
    data: clubInfo,
    success: true,
    message: 'Club information retrieved successfully'
  };
}

export async function getFacilities(params?: PaginationParams): Promise<ApiResponse<Facility[]>> {
  await delay(200);
  let filteredFacilities = facilities;

  if (params?.search) {
    filteredFacilities = facilities.filter(facility =>
      facility.name.toLowerCase().includes(params.search!.toLowerCase()) ||
      facility.description.toLowerCase().includes(params.search!.toLowerCase())
    );
  }

  if (params?.category) {
    filteredFacilities = filteredFacilities.filter(facility => facility.type === params.category);
  }

  const page = params?.page || 1;
  const limit = params?.limit || 10;
  const startIndex = (page - 1) * limit;
  const endIndex = startIndex + limit;
  const paginatedData = filteredFacilities.slice(startIndex, endIndex);

  return {
    data: paginatedData,
    success: true,
    message: 'Facilities retrieved successfully',
    pagination: {
      page,
      limit,
      total: filteredFacilities.length,
      totalPages: Math.ceil(filteredFacilities.length / limit)
    }
  };
}

export async function getSponsors(): Promise<ApiResponse<Sponsor[]>> {
  await delay(100);
  return {
    data: sponsors,
    success: true,
    message: 'Sponsors retrieved successfully'
  };
}

export async function getMembershipTypes(): Promise<ApiResponse<MembershipType[]>> {
  await delay(100);
  return {
    data: membershipTypes,
    success: true,
    message: 'Membership types retrieved successfully'
  };
}

export async function getContactInfo(): Promise<ApiResponse<ContactInfo>> {
  await delay(100);
  return {
    data: contactInfo,
    success: true,
    message: 'Contact information retrieved successfully'
  };
}

// Activities API
export async function getActivities(params?: PaginationParams): Promise<ApiResponse<Activity[]>> {
  await delay(200);
  let filteredActivities = activities;

  if (params?.search) {
    filteredActivities = activities.filter(activity =>
      activity.name.toLowerCase().includes(params.search!.toLowerCase()) ||
      activity.description.toLowerCase().includes(params.search!.toLowerCase())
    );
  }

  if (params?.category) {
    filteredActivities = filteredActivities.filter(activity => activity.category === params.category);
  }

  const page = params?.page || 1;
  const limit = params?.limit || 10;
  const startIndex = (page - 1) * limit;
  const endIndex = startIndex + limit;
  const paginatedData = filteredActivities.slice(startIndex, endIndex);

  return {
    data: paginatedData,
    success: true,
    message: 'Activities retrieved successfully',
    pagination: {
      page,
      limit,
      total: filteredActivities.length,
      totalPages: Math.ceil(filteredActivities.length / limit)
    }
  };
}

export async function getActivityById(id: string): Promise<ApiResponse<Activity | null>> {
  await delay(150);
  const activity = activities.find(a => a.id === id);
  return {
    data: activity || null,
    success: !!activity,
    message: activity ? 'Activity retrieved successfully' : 'Activity not found'
  };
}

// Events API
export async function getEvents(params?: PaginationParams): Promise<ApiResponse<Event[]>> {
  await delay(200);
  let filteredEvents = events;

  if (params?.search) {
    filteredEvents = events.filter(event =>
      event.name.toLowerCase().includes(params.search!.toLowerCase()) ||
      event.description.toLowerCase().includes(params.search!.toLowerCase())
    );
  }

  if (params?.category) {
    filteredEvents = filteredEvents.filter(event => event.type === params.category);
  }

  // Filter by date range if provided
  if (params?.sortBy === 'startDate') {
    filteredEvents.sort((a, b) => {
      const dateA = new Date(a.startDate).getTime();
      const dateB = new Date(b.startDate).getTime();
      return params.sortOrder === 'desc' ? dateB - dateA : dateA - dateB;
    });
  }

  const page = params?.page || 1;
  const limit = params?.limit || 10;
  const startIndex = (page - 1) * limit;
  const endIndex = startIndex + limit;
  const paginatedData = filteredEvents.slice(startIndex, endIndex);

  return {
    data: paginatedData,
    success: true,
    message: 'Events retrieved successfully',
    pagination: {
      page,
      limit,
      total: filteredEvents.length,
      totalPages: Math.ceil(filteredEvents.length / limit)
    }
  };
}

export async function getEventById(id: string): Promise<ApiResponse<Event | null>> {
  await delay(150);
  const event = events.find(e => e.id === id);
  return {
    data: event || null,
    success: !!event,
    message: event ? 'Event retrieved successfully' : 'Event not found'
  };
}

export async function getFeaturedEvents(): Promise<ApiResponse<Event[]>> {
  await delay(100);
  const featuredEvents = events.filter(event => event.isFeatured);
  return {
    data: featuredEvents,
    success: true,
    message: 'Featured events retrieved successfully'
  };
}

// News API
export async function getNewsArticles(params?: PaginationParams): Promise<ApiResponse<NewsArticle[]>> {
  await delay(200);
  let filteredArticles = newsArticles;

  if (params?.search) {
    filteredArticles = newsArticles.filter(article =>
      article.title.toLowerCase().includes(params.search!.toLowerCase()) ||
      article.excerpt.toLowerCase().includes(params.search!.toLowerCase()) ||
      article.content.toLowerCase().includes(params.search!.toLowerCase())
    );
  }

  if (params?.category) {
    filteredArticles = filteredArticles.filter(article => article.category === params.category);
  }

  // Sort by published date by default
  filteredArticles.sort((a, b) => new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime());

  const page = params?.page || 1;
  const limit = params?.limit || 10;
  const startIndex = (page - 1) * limit;
  const endIndex = startIndex + limit;
  const paginatedData = filteredArticles.slice(startIndex, endIndex);

  return {
    data: paginatedData,
    success: true,
    message: 'News articles retrieved successfully',
    pagination: {
      page,
      limit,
      total: filteredArticles.length,
      totalPages: Math.ceil(filteredArticles.length / limit)
    }
  };
}

export async function getNewsArticleById(id: string): Promise<ApiResponse<NewsArticle | null>> {
  await delay(150);
  const article = newsArticles.find(a => a.id === id);
  return {
    data: article || null,
    success: !!article,
    message: article ? 'News article retrieved successfully' : 'Article not found'
  };
}

export async function getFeaturedNews(): Promise<ApiResponse<NewsArticle[]>> {
  await delay(100);
  const featuredNews = newsArticles.filter(article => article.isFeatured);
  return {
    data: featuredNews,
    success: true,
    message: 'Featured news retrieved successfully'
  };
}

// Gallery API
export async function getGalleryAlbums(params?: PaginationParams): Promise<ApiResponse<GalleryAlbum[]>> {
  await delay(200);
  let filteredAlbums = galleryAlbums;

  if (params?.search) {
    filteredAlbums = galleryAlbums.filter(album =>
      album.name.toLowerCase().includes(params.search!.toLowerCase()) ||
      album.description.toLowerCase().includes(params.search!.toLowerCase())
    );
  }

  const page = params?.page || 1;
  const limit = params?.limit || 10;
  const startIndex = (page - 1) * limit;
  const endIndex = startIndex + limit;
  const paginatedData = filteredAlbums.slice(startIndex, endIndex);

  return {
    data: paginatedData,
    success: true,
    message: 'Gallery albums retrieved successfully',
    pagination: {
      page,
      limit,
      total: filteredAlbums.length,
      totalPages: Math.ceil(filteredAlbums.length / limit)
    }
  };
}

export async function getGalleryAlbumById(id: string): Promise<ApiResponse<GalleryAlbum | null>> {
  await delay(150);
  const album = galleryAlbums.find(a => a.id === id);
  return {
    data: album || null,
    success: !!album,
    message: album ? 'Gallery album retrieved successfully' : 'Album not found'
  };
}

// Teams and Results API
export async function getTeams(): Promise<ApiResponse<Team[]>> {
  await delay(150);
  return {
    data: teams,
    success: true,
    message: 'Teams retrieved successfully'
  };
}

export async function getMatches(params?: PaginationParams): Promise<ApiResponse<Match[]>> {
  await delay(200);
  let filteredMatches = matches;

  if (params?.search) {
    filteredMatches = matches.filter(match =>
      match.homeTeam.toLowerCase().includes(params.search!.toLowerCase()) ||
      match.awayTeam.toLowerCase().includes(params.search!.toLowerCase())
    );
  }

  const page = params?.page || 1;
  const limit = params?.limit || 10;
  const startIndex = (page - 1) * limit;
  const endIndex = startIndex + limit;
  const paginatedData = filteredMatches.slice(startIndex, endIndex);

  return {
    data: paginatedData,
    success: true,
    message: 'Matches retrieved successfully',
    pagination: {
      page,
      limit,
      total: filteredMatches.length,
      totalPages: Math.ceil(filteredMatches.length / limit)
    }
  };
}

export async function getClassifications(params?: PaginationParams): Promise<ApiResponse<Classification[]>> {
  await delay(150);
  let filteredClassifications = classifications;

  if (params?.search) {
    filteredClassifications = classifications.filter(classification =>
      classification.team.toLowerCase().includes(params.search!.toLowerCase()) ||
      classification.league.toLowerCase().includes(params.search!.toLowerCase())
    );
  }

  const page = params?.page || 1;
  const limit = params?.limit || 10;
  const startIndex = (page - 1) * limit;
  const endIndex = startIndex + limit;
  const paginatedData = filteredClassifications.slice(startIndex, endIndex);

  return {
    data: paginatedData,
    success: true,
    message: 'Classifications retrieved successfully',
    pagination: {
      page,
      limit,
      total: filteredClassifications.length,
      totalPages: Math.ceil(filteredClassifications.length / limit)
    }
  };
}
