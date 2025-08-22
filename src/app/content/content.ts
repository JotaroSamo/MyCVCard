export type LanguageCode = 'ru' | 'en';

export interface ExperienceItem {
  when: string;
  org: string;
  sector?: string;
  role: string;
  bullets: string[];
}

export interface EducationInfo {
  degree: string;
  year: string;
  university: string;
  faculty: string;
  universityLogoUrl?: string;
  facultyLogoUrl?: string;
}

export interface ProfileIntro {
  name: string;
  role: string;
  experienceYears: number;
  age: number;
  photoUrl: string;
}

export interface ContactsInfo {
  phone: string;
  telegram: string; // like @username
  email: string;
  linkedin: string;
}

export interface SiteContent {
  intro: ProfileIntro;
  aboutText: string;
  experience: ExperienceItem[];
  education: EducationInfo;
  skills: string[];
  contacts: ContactsInfo;
}

export const CONTENT: Record<LanguageCode, SiteContent> = {
  ru: {
    intro: {
      name: 'Anton Samoshuk',
      role: '.NET Developer',
      experienceYears: 2,
      age: 23,
      photoUrl: '/avatar.png',
    },
    aboutText:
      'Middle .NET Developer с опытом 2 года разработки API, микросервисов, а также интеграции фронтенда и бэкенда. Создаю решения, которые оптимизируют процессы, повышают стабильность систем и улучшают пользовательский опыт.\n\nУверенно работаю с современными технологиями: C#, ASP.NET, Entity Framework Core, Angular, GraphQL, WebSocket, RESTful API, Docker, MassTransit, RabbitMQ, Redis, MongoDB, а также инструментами мониторинга, OpenTelemetry и Grafana. Стремлюсь создавать масштабируемые и надежные решения для бизнеса.',
    experience: [
      {
        when: 'Октябрь 2024 — октябрь 2025 · 1 год',
        org: '«Военная академия» ВА РБ · Минск',
        sector: 'Государственные организации',
        role: '.NET Developer (Middle)',
        bullets: [
          'Разработал микросервисы с MassTransit, RabbitMQ, Elasticsearch, Redis, MongoDB.',
          'Оптимизировал PostgreSQL: индексы, GIN полнотекст, ускорение запросов.',
          'Создал парсер для переноса данных в MinIO, автоматизировал обработку.',
          'Реализовал чат в реальном времени через SignalR.',
          'GraphQL, WebSocket, RESTful API: гибкая интеграция фронта и бэка.',
          'Оптимизировал Angular интерфейс, снизил ошибки пользователей.',
          'Контейнеризация с Docker для стабильного деплоя.',
        ],
      },
      {
        when: 'Июнь 2023 — Май 2024 · 1 год',
        org: 'Полесский государственный университет · Пинск',
        role: '.NET Developer (Junior)',
        bullets: [
          'ПО и Telegram‑боты для университета: информирование абитуриентов и студентов.',
          'Оптимизация проектов: стабильность и удобство систем.',
          'Усиление коммуникаций и ускорение доступа к информации.',
        ],
      },
    ],
    education: {
      degree: 'Высшее',
      year: '2024',
      university: 'Полесский государственный университет, Пинск',
      faculty: 'Инженерный, Информационные системы и технологии',
      universityLogoUrl: '/university.png',
      facultyLogoUrl: '/faculty.png',
    },
    skills: ['SQL','PostgreSQL','HTML','C#','ASP.NET','.NET','Entity Framework','RabbitMQ','Angular','Docker','Git','TypeScript','GraphQL','REST API','MassTransit', 'Redis' ,'SignalR', 'OpenTelemetry', 'Grafana', 'Serilog', 'MinIO', 'Redis', 'MongoDB', 'Elasticsearch'],
    contacts: {
      phone: '+375295580632',
      telegram: '@dk_tengen',
      email: 'toni.samoshuk@gmail.com',
      linkedin: 'https://www.linkedin.com/in/anton-samoshuk-21b109241',
    },
  },
  en: {
    intro: {
      name: 'Anton Samoshuk',
      role: '.NET Developer',
      experienceYears: 2,
      age: 23,
      photoUrl: '/avatar.png',
    },
    aboutText:
      'Middle .NET Developer with 2 years of experience building APIs and microservices, integrating front‑end and back‑end. I deliver solutions that optimize processes, increase system stability, and improve user experience.\n\nConfident with C#, ASP.NET, Entity Framework Core, Angular, GraphQL, WebSocket, RESTful API, Docker, MassTransit, RabbitMQ, Redis, MongoDB, and monitoring tools like OpenTelemetry and Grafana. Focused on scalable and reliable business solutions.',
    experience: [
      {
        when: 'Oct 2024 — Oct 2025 · 1 year',
        org: 'Military Academy · Minsk',
        sector: 'Government organizations',
        role: '.NET Developer (Middle)',
        bullets: [
          'Built microservices with MassTransit, RabbitMQ, Elasticsearch, Redis, MongoDB.',
          'Optimized PostgreSQL: indexes, GIN full‑text, faster queries.',
          'Created a parser to migrate data to MinIO, automated processing.',
          'Implemented real‑time chat with SignalR.',
          'GraphQL, WebSocket, RESTful API for flexible integration.',
          'Optimized Angular UI, reduced user errors.',
          'Containerization with Docker for stable deployments.',
        ],
      },
      {
        when: 'Jun 2023 — May 2024 · 1 year',
        org: 'Polessky State University · Pinsk',
        role: '.NET Developer (Junior)',
        bullets: [ 
          'Developed software and Telegram bots for the university.',
          'Improved existing projects: stability and usability.',
          'Enhanced internal communications and information access.',
        ],
      },
    ],
    education: {
      degree: 'Higher',
      year: '2024',
      university: 'Polessky State University, Pinsk',
      faculty: 'Engineering, Information Systems and Technologies',
      universityLogoUrl: '/university.png',
      facultyLogoUrl: '/faculty.png',
    },
    skills: ['SQL','PostgreSQL','HTML','C#','ASP.NET','.NET','Entity Framework','RabbitMQ','Angular','Docker','Git','TypeScript','GraphQL','REST API', 'MassTransit', 'Redis' ,'SignalR', 'OpenTelemetry', 'Grafana', 'Serilog', 'MinIO', 'Redis', 'MongoDB', 'Elasticsearch'],
    contacts: {
      phone: '+375295580632',
      telegram: '@dk_tengen',
      email: 'toni.samoshuk@gmail.com',
      linkedin: 'https://www.linkedin.com/in/anton-samoshuk-21b109241',
    },
  },
};


