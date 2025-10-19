import type {
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

// Navigation data
export const navigationData: NavItem[] = [
  {
    id: 'inicio',
    label: 'Inicio',
    href: '/'
  },
  {
    id: 'club',
    label: 'Club',
    href: '/club',
    children: [
      { id: 'quienes-somos', label: 'Quiénes Somos', href: '/club/quienes-somos' },
      { id: 'instalaciones', label: 'Instalaciones', href: '/club/instalaciones' },
      { id: 'patrocinadores', label: 'Patrocinadores y Colaboradores', href: '/club/patrocinadores' },
      { id: 'colabora', label: 'Colabora / Hazte Socio', href: '/club/colabora' },
      { id: 'contacto', label: 'Contacto / Ubicación', href: '/club/contacto' }
    ]
  },
  {
    id: 'actividades',
    label: 'Actividades',
    href: '/actividades',
    children: [
      { id: 'balonmano', label: 'Balonmano', href: '/actividades/balonmano' },
      { id: 'baloncesto', label: 'Baloncesto', href: '/actividades/baloncesto' },
      { id: 'ciclo-indoor', label: 'Ciclo Indoor', href: '/actividades/ciclo-indoor' },
      { id: 'full-body', label: 'Full Body', href: '/actividades/full-body' },
      { id: 'padel', label: 'Pádel', href: '/actividades/padel' },
      { id: 'escuela-deportiva', label: 'Escuela Deportiva', href: '/actividades/escuela-deportiva' }
    ]
  },
  {
    id: 'eventos',
    label: 'Eventos',
    href: '/eventos',
    children: [
      { id: 'eventos-fin-semana', label: 'Eventos de Fin de Semana', href: '/eventos/fin-semana' },
      { id: 'eventos-verano', label: 'Eventos de Verano', href: '/eventos/verano' },
      { id: 'eventos-solidarios', label: 'Eventos Solidarios', href: '/eventos/solidarios' },
      { id: 'campamentos', label: 'Campamentos', href: '/eventos/campamentos' },
      { id: 'calendario', label: 'Calendario Deportivo', href: '/eventos/calendario' }
    ]
  },
  {
    id: 'actualidad',
    label: 'Actualidad',
    href: '/actualidad',
    children: [
      { id: 'noticias', label: 'Noticias', href: '/actualidad/noticias' },
      { id: 'galeria', label: 'Galería', href: '/actualidad/galeria' },
      { id: 'resultados', label: 'Resultados y Clasificaciones', href: '/actualidad/resultados' },
      { id: 'destacadas', label: 'Noticias Destacadas', href: '/actualidad/destacadas' }
    ]
  }
];

// Club information
export const clubInfo: ClubInfo = {
  id: 'club-info',
  title: 'Club Deportivo Villa',
  description: 'Más de 50 años promoviendo el deporte y la vida sana en nuestra comunidad',
  history: 'Fundado en 1973, el Club Deportivo Villa ha sido un pilar fundamental en el desarrollo deportivo de nuestra ciudad. Nacido del sueño de un grupo de vecinos apasionados por el deporte, hemos crecido hasta convertirnos en una institución reconocida a nivel regional.',
  mission: 'Promover la práctica deportiva como herramienta de desarrollo integral, fomentando valores como el compañerismo, la disciplina y la excelencia tanto en el ámbito competitivo como recreativo.',
  vision: 'Ser el referente deportivo de la región, reconocido por nuestra excelencia deportiva, compromiso social y capacidad de formar deportistas integrales.',
  values: ['Excelencia', 'Compañerismo', 'Respeto', 'Disciplina', 'Compromiso Social'],
  achievements: [
    {
      id: 'championship-2023',
      title: 'Campeonato Regional de Balonmano',
      year: 2023,
      category: 'championship',
      description: 'Primer puesto en la categoría juvenil masculina',
      imageUrl: '/images/achievements/championship-2023.jpg'
    },
    {
      id: 'recognition-2022',
      title: 'Premio al Club Más Comprometido Socialmente',
      year: 2022,
      category: 'recognition',
      description: 'Reconocimiento por nuestras iniciativas de inclusión deportiva'
    },
    {
      id: 'milestone-2021',
      title: '1000 Socios Activos',
      year: 2021,
      category: 'milestone',
      description: 'Alcanzamos la cifra histórica de 1000 socios activos'
    }
  ],
  createdAt: new Date('1973-01-01'),
  updatedAt: new Date('2024-01-01')
};

// Facilities data
export const facilities: Facility[] = [
  {
    id: 'pista-principal',
    title: 'Pista Principal de Balonmano',
    name: 'Pista Principal',
    type: 'sports',
    description: 'Pista reglamentaria de balonmano con superficie de parquet y capacidad para 500 espectadores.',
    capacity: 500,
    features: ['Iluminación LED', 'Sistema de sonido', 'Gradas móviles', 'Vestuarios adjuntos'],
    images: ['/images/facilities/pista-principal-1.jpg', '/images/facilities/pista-principal-2.jpg'],
    isAvailable: true,
    bookingUrl: '/reservas/pista-principal'
  },
  {
    id: 'cancha-baloncesto',
    title: 'Cancha de Baloncesto',
    name: 'Cancha de Baloncesto',
    type: 'sports',
    description: 'Cancha exterior de baloncesto con superficie de cemento pulido y iluminación nocturna.',
    capacity: 100,
    features: ['Iluminación nocturna', 'Superficie antideslizante', 'Redes nuevas'],
    images: ['/images/facilities/cancha-baloncesto-1.jpg'],
    isAvailable: true
  },
  {
    id: 'gimnasio',
    title: 'Gimnasio Multifuncional',
    name: 'Gimnasio',
    type: 'sports',
    description: 'Gimnasio equipado con máquinas de última generación para entrenamiento funcional y cardio.',
    capacity: 30,
    features: ['Máquinas de cardio', 'Pesas libres', 'Zona de funcional', 'Vestuarios'],
    images: ['/images/facilities/gimnasio-1.jpg', '/images/facilities/gimnasio-2.jpg'],
    isAvailable: true
  },
  {
    id: 'padel-1',
    title: 'Pista de Pádel 1',
    name: 'Pista de Pádel 1',
    type: 'sports',
    description: 'Pista cubierta de pádel con superficie de césped artificial y iluminación LED.',
    capacity: 4,
    features: ['Cobertura total', 'Iluminación LED', 'Césped artificial premium', 'Sistema de ventilación'],
    images: ['/images/facilities/padel-1.jpg'],
    isAvailable: true,
    bookingUrl: '/reservas/padel-1'
  },
  {
    id: 'padel-2',
    title: 'Pista de Pádel 2',
    name: 'Pista de Pádel 2',
    type: 'sports',
    description: 'Segunda pista cubierta de pádel con las mismas características premium.',
    capacity: 4,
    features: ['Cobertura total', 'Iluminación LED', 'Césped artificial premium', 'Sistema de ventilación'],
    images: ['/images/facilities/padel-2.jpg'],
    isAvailable: true,
    bookingUrl: '/reservas/padel-2'
  }
];

// Sponsors data
export const sponsors: Sponsor[] = [
  {
    id: 'sponsor-gold-1',
    title: 'Deportes Villa',
    name: 'Deportes Villa',
    logo: '/images/sponsors/deportes-villa.png',
    website: 'https://deportesvilla.com',
    tier: 'gold',
    description: 'Nuestro patrocinador principal, especialistas en equipamiento deportivo de alta calidad.'
  },
  {
    id: 'sponsor-silver-1',
    title: 'Banco Local',
    name: 'Banco Local',
    logo: '/images/sponsors/banco-local.png',
    website: 'https://bancolocal.com',
    tier: 'silver',
    description: 'Apoyo financiero para el desarrollo de nuestras actividades juveniles.'
  },
  {
    id: 'sponsor-bronze-1',
    title: 'Farmacia del Deporte',
    name: 'Farmacia del Deporte',
    logo: '/images/sponsors/farmacia-deporte.png',
    tier: 'bronze',
    description: 'Especialistas en suplementación deportiva y primeros auxilios.'
  }
];

// Membership types
export const membershipTypes: MembershipType[] = [
  {
    id: 'individual-adulto',
    title: 'Individual Adulto',
    name: 'Individual Adulto',
    price: 35,
    duration: 1,
    benefits: ['Acceso a todas las instalaciones', 'Participación en actividades', 'Descuentos en eventos'],
    features: ['Gimnasio', 'Pistas deportivas', 'Actividades grupales'],
    isPopular: false,
    category: 'individual'
  },
  {
    id: 'familiar',
    title: 'Membresía Familiar',
    name: 'Familiar',
    price: 80,
    duration: 1,
    benefits: ['Acceso familiar completo', 'Descuentos especiales', 'Prioridad en inscripciones'],
    features: ['Hasta 4 miembros', 'Todas las instalaciones', 'Actividades familiares'],
    isPopular: true,
    category: 'family'
  },
  {
    id: 'estudiante',
    title: 'Estudiante',
    name: 'Estudiante',
    price: 25,
    duration: 1,
    benefits: ['Precio reducido', 'Acceso completo', 'Programas especiales'],
    features: ['Gimnasio', 'Pistas', 'Actividades estudiantiles'],
    isPopular: false,
    category: 'student'
  }
];

// Contact information
export const contactInfo: ContactInfo = {
  address: 'Av. Deportiva 123, 28001 Madrid, España',
  phone: '+34 91 123 45 67',
  email: 'info@clubvilladeportivo.com',
  coordinates: {
    lat: 40.4168,
    lng: -3.7038
  },
  hours: {
    weekdays: '06:00 - 23:00',
    weekends: '08:00 - 22:00',
    holidays: '09:00 - 20:00'
  },
  socialMedia: {
    facebook: 'https://facebook.com/clubvilladeportivo',
    instagram: 'https://instagram.com/clubvilladeportivo',
    twitter: 'https://twitter.com/clubvilla',
    youtube: 'https://youtube.com/clubvilladeportivo'
  }
};

// Activities data
export const activities: Activity[] = [
  {
    id: 'balonmano-adultos',
    title: 'Balonmano Adultos',
    name: 'Balonmano Adultos',
    category: 'balonmano',
    description: 'Entrenamientos de balonmano para adultos de todos los niveles. Mejora tu técnica y condición física.',
    instructor: 'Carlos Martínez',
    instructorBio: 'Ex-jugador profesional con 15 años de experiencia como entrenador.',
    schedule: [
      { day: 'tuesday', startTime: '19:00', endTime: '21:00', location: 'Pista Principal' },
      { day: 'thursday', startTime: '19:00', endTime: '21:00', location: 'Pista Principal' }
    ],
    price: 40,
    duration: 120,
    maxParticipants: 20,
    currentParticipants: 15,
    level: 'all',
    equipment: ['Balones oficiales', 'Protecciones'],
    requirements: ['Certificado médico', 'Seguro deportivo'],
    imageUrl: '/images/activities/balonmano-adultos.jpg',
    isActive: true,
    ageGroup: { min: 18, max: 65 }
  },
  {
    id: 'baloncesto-jovenes',
    title: 'Baloncesto Jóvenes',
    name: 'Baloncesto Jóvenes',
    category: 'baloncesto',
    description: 'Entrenamiento de baloncesto para jóvenes de 12 a 17 años. Desarrollo técnico y táctico.',
    instructor: 'Ana García',
    instructorBio: 'Entrenadora certificada por la Federación Española de Baloncesto.',
    schedule: [
      { day: 'monday', startTime: '17:00', endTime: '19:00', location: 'Cancha Exterior' },
      { day: 'wednesday', startTime: '17:00', endTime: '19:00', location: 'Cancha Exterior' },
      { day: 'friday', startTime: '17:00', endTime: '19:00', location: 'Cancha Exterior' }
    ],
    price: 35,
    duration: 120,
    maxParticipants: 15,
    currentParticipants: 12,
    level: 'intermediate',
    equipment: ['Balones', 'Conos', 'Chalecos'],
    requirements: ['Autorización parental'],
    imageUrl: '/images/activities/baloncesto-jovenes.jpg',
    isActive: true,
    ageGroup: { min: 12, max: 17 }
  },
  {
    id: 'ciclo-indoor',
    title: 'Ciclo Indoor',
    name: 'Ciclo Indoor',
    category: 'ciclo-indoor',
    description: 'Sesiones de ciclismo indoor con música. Quema calorías y mejora tu resistencia cardiovascular.',
    instructor: 'María López',
    instructorBio: 'Instructora certificada en ciclo indoor con más de 10 años de experiencia.',
    schedule: [
      { day: 'monday', startTime: '19:30', endTime: '20:30', location: 'Sala de Ciclo' },
      { day: 'wednesday', startTime: '19:30', endTime: '20:30', location: 'Sala de Ciclo' },
      { day: 'friday', startTime: '19:30', endTime: '20:30', location: 'Sala de Ciclo' }
    ],
    price: 30,
    duration: 60,
    maxParticipants: 12,
    currentParticipants: 10,
    level: 'all',
    equipment: ['Bicicletas estáticas', 'Música', 'Ventiladores'],
    requirements: ['Toalla', 'Botella de agua'],
    imageUrl: '/images/activities/ciclo-indoor.jpg',
    isActive: true
  },
  {
    id: 'full-body',
    title: 'Full Body',
    name: 'Full Body',
    category: 'full-body',
    description: 'Entrenamiento funcional completo que trabaja todo el cuerpo con ejercicios variados.',
    instructor: 'Roberto Sánchez',
    instructorBio: 'Entrenador personal certificado especializado en entrenamiento funcional.',
    schedule: [
      { day: 'tuesday', startTime: '18:00', endTime: '19:00', location: 'Sala de Funcional' },
      { day: 'thursday', startTime: '18:00', endTime: '19:00', location: 'Sala de Funcional' },
      { day: 'saturday', startTime: '10:00', endTime: '11:00', location: 'Sala de Funcional' }
    ],
    price: 35,
    duration: 60,
    maxParticipants: 15,
    currentParticipants: 13,
    level: 'all',
    equipment: ['Mancuernas', 'Kettlebells', 'Colchonetas', 'Bandas elásticas'],
    requirements: ['Ropa deportiva cómoda'],
    imageUrl: '/images/activities/full-body.jpg',
    isActive: true
  },
  {
    id: 'padel-iniciacion',
    title: 'Pádel Iniciación',
    name: 'Pádel Iniciación',
    category: 'padel',
    description: 'Clases de pádel para principiantes. Aprende las bases del juego de forma divertida.',
    instructor: 'David Fernández',
    instructorBio: 'Profesor titulado de pádel con amplia experiencia en enseñanza.',
    schedule: [
      { day: 'saturday', startTime: '10:00', endTime: '11:30', location: 'Pista Pádel 1' },
      { day: 'sunday', startTime: '10:00', endTime: '11:30', location: 'Pista Pádel 2' }
    ],
    price: 45,
    duration: 90,
    maxParticipants: 4,
    currentParticipants: 3,
    level: 'beginner',
    equipment: ['Palas', 'Pelotas', 'Redes'],
    requirements: ['Calzado deportivo específico'],
    imageUrl: '/images/activities/padel-iniciacion.jpg',
    isActive: true
  },
  {
    id: 'escuela-deportiva',
    title: 'Escuela Deportiva Infantil',
    name: 'Escuela Deportiva',
    category: 'escuela-deportiva',
    description: 'Escuela deportiva para niños de 6 a 12 años. Desarrollo motor y valores deportivos.',
    instructor: 'Laura Rodríguez',
    instructorBio: 'Profesora de educación física especializada en deporte infantil.',
    schedule: [
      { day: 'saturday', startTime: '16:00', endTime: '17:30', location: 'Pista Principal' },
      { day: 'sunday', startTime: '16:00', endTime: '17:30', location: 'Pista Principal' }
    ],
    price: 40,
    duration: 90,
    maxParticipants: 20,
    currentParticipants: 18,
    level: 'beginner',
    equipment: ['Material adaptado', 'Juegos educativos'],
    requirements: ['Autorización médica'],
    imageUrl: '/images/activities/escuela-deportiva.jpg',
    isActive: true,
    ageGroup: { min: 6, max: 12 }
  }
];

// Events data
export const events: Event[] = [
  {
    id: 'torneo-balonmano-2024',
    title: 'Torneo de Balonmano Villa 2024',
    name: 'Torneo de Balonmano Villa 2024',
    type: 'weekend',
    description: 'Torneo anual de balonmano con equipos de toda la región. Dos días de competición intensa.',
    startDate: new Date('2024-03-15'),
    endDate: new Date('2024-03-16'),
    location: 'Club Deportivo Villa',
    price: 25,
    maxParticipants: 200,
    currentParticipants: 150,
    ageGroup: { min: 16, max: 50 },
    requirements: ['Certificado médico', 'Seguro deportivo'],
    includes: ['Comida', 'Medallas', 'Trofeos'],
    imageUrl: '/images/events/torneo-balonmano-2024.jpg',
    isActive: true,
    isFeatured: true,
    organizer: 'Club Deportivo Villa',
    contactInfo: {
      email: 'torneos@clubvilladeportivo.com',
      phone: '+34 91 123 45 67'
    }
  },
  {
    id: 'campamento-verano-2024',
    title: 'Campamento de Verano 2024',
    name: 'Campamento de Verano',
    type: 'camp',
    description: 'Campamento deportivo de verano para niños y jóvenes. Actividades variadas y diversión garantizada.',
    startDate: new Date('2024-07-01'),
    endDate: new Date('2024-07-15'),
    location: 'Club Deportivo Villa',
    price: 300,
    maxParticipants: 50,
    currentParticipants: 35,
    ageGroup: { min: 8, max: 16 },
    requirements: ['Autorización médica', 'Seguro de accidentes'],
    includes: ['Comidas', 'Material deportivo', 'Actividades acuáticas', 'Excursiones'],
    imageUrl: '/images/events/campamento-verano-2024.jpg',
    isActive: true,
    isFeatured: true,
    organizer: 'Club Deportivo Villa',
    contactInfo: {
      email: 'campamentos@clubvilladeportivo.com',
      phone: '+34 91 123 45 67'
    }
  },
  {
    id: 'carrera-solidaria-2024',
    title: 'Carrera Solidaria 2024',
    name: 'Carrera Solidaria',
    type: 'charity',
    description: 'Carrera solidaria para recaudar fondos para la investigación del cáncer infantil.',
    startDate: new Date('2024-05-20'),
    endDate: new Date('2024-05-20'),
    location: 'Parque del Retiro',
    price: 10,
    maxParticipants: 500,
    currentParticipants: 320,
    includes: ['Camiseta conmemorativa', 'Medalla de participación', 'Aperitivo'],
    imageUrl: '/images/events/carrera-solidaria-2024.jpg',
    isActive: true,
    isFeatured: false,
    organizer: 'Club Deportivo Villa'
  }
];

// News articles
export const newsArticles: NewsArticle[] = [
  {
    id: 'nueva-pista-padel',
    title: 'Inauguración de la Nueva Pista de Pádel Cubierta',
    excerpt: 'El Club Deportivo Villa estrena su segunda pista de pádel cubierta con tecnología de última generación.',
    content: 'Hoy hemos inaugurado oficialmente nuestra segunda pista de pádel cubierta, equipada con la mejor tecnología del mercado...',
    author: 'Redacción CD Villa',
    category: 'general',
    tags: ['instalaciones', 'padel', 'inauguración'],
    imageUrl: '/images/news/nueva-pista-padel.jpg',
    isFeatured: true,
    publishedAt: new Date('2024-01-15'),
    readTime: 3,
    createdAt: new Date('2024-01-15'),
    updatedAt: new Date('2024-01-15')
  },
  {
    id: 'campeonato-balonmano',
    title: 'Nuestro Equipo de Balonmano Campeón Regional',
    excerpt: 'El equipo juvenil de balonmano se proclama campeón de la liga regional tras una temporada espectacular.',
    content: 'En una final emocionante disputada en nuestro pabellón, nuestro equipo juvenil de balonmano...',
    author: 'Carlos Martínez',
    category: 'sports',
    tags: ['balonmano', 'campeonato', 'juvenil'],
    imageUrl: '/images/news/campeonato-balonmano.jpg',
    isFeatured: true,
    publishedAt: new Date('2024-01-10'),
    readTime: 5,
    createdAt: new Date('2024-01-10'),
    updatedAt: new Date('2024-01-10')
  }
];

// Teams data
export const teams: Team[] = [
  {
    id: 'balonmano-juvenil',
    title: 'Balonmano Juvenil Masculino',
    name: 'Balonmano Juvenil Masculino',
    category: 'Juvenil',
    league: 'Liga Regional Juvenil',
    season: '2023-2024',
    players: [
      { id: 'player-1', name: 'Juan Pérez', position: 'Portero', number: 1, teamId: 'balonmano-juvenil' },
      { id: 'player-2', name: 'Carlos García', position: 'Lateral', number: 7, teamId: 'balonmano-juvenil' }
    ],
    coach: 'Carlos Martínez',
    logo: '/images/teams/balonmano-juvenil.png',
    createdAt: new Date('2023-09-01'),
    updatedAt: new Date('2024-01-01')
  }
];

// Matches data
export const matches: Match[] = [
  {
    id: 'match-1',
    title: 'Villa vs Atlético Madrid',
    homeTeam: 'Club Deportivo Villa',
    awayTeam: 'Atlético Madrid',
    homeScore: 28,
    awayScore: 24,
    date: new Date('2024-02-15'),
    location: 'Pista Principal',
    league: 'Liga Regional Juvenil',
    season: '2023-2024',
    status: 'finished',
    isHomeGame: true,
    createdAt: new Date('2024-02-15'),
    updatedAt: new Date('2024-02-15')
  }
];

// Classifications data
export const classifications: Classification[] = [
  {
    id: 'class-1',
    title: 'Clasificación Liga Regional Juvenil',
    team: 'Club Deportivo Villa',
    position: 1,
    gamesPlayed: 10,
    wins: 8,
    draws: 1,
    losses: 1,
    goalsFor: 280,
    goalsAgainst: 240,
    points: 17,
    league: 'Liga Regional Juvenil',
    season: '2023-2024',
    createdAt: new Date('2024-01-01'),
    updatedAt: new Date('2024-01-01')
  }
];

// Gallery albums
export const galleryAlbums: GalleryAlbum[] = [
  {
    id: 'album-torneo-2024',
    title: 'Torneo de Balonmano 2024',
    name: 'Torneo de Balonmano 2024',
    description: 'Fotos del torneo anual de balonmano',
    coverImage: '/images/gallery/torneo-2024/cover.jpg',
    items: [
      {
        id: 'photo-1',
        title: 'Entrega de trofeos',
        description: 'Momento de la entrega de trofeos',
        imageUrl: '/images/gallery/torneo-2024/entrega-trofeos.jpg',
        thumbnailUrl: '/images/gallery/torneo-2024/thumbs/entrega-trofeos.jpg',
        category: 'eventos',
        eventId: 'torneo-balonmano-2024',
        uploadedAt: new Date('2024-03-16'),
        photographer: 'María López'
      }
    ],
    eventId: 'torneo-balonmano-2024',
    createdAt: new Date('2024-03-16'),
    updatedAt: new Date('2024-03-16')
  }
];
