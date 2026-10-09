import { hours, navLinks } from '@/lib/business'

export type Locale = 'en' | 'es'

const dayNamesEs: Record<string, string> = {
  Monday: 'Lunes',
  Tuesday: 'Martes',
  Wednesday: 'Miércoles',
  Thursday: 'Jueves',
  Friday: 'Viernes',
  Saturday: 'Sábado',
  Sunday: 'Domingo',
}

// "7:00 AM – 10:00 PM" -> "7:00 a. m. – 10:00 p. m."
const timeEs = (time: string) => time.replace(/AM/g, 'a. m.').replace(/PM/g, 'p. m.')

export const hoursFor = (locale: Locale) =>
  locale === 'es' ? hours.map(({ day, time }) => ({ day: dayNamesEs[day], time: timeEs(time) })) : hours

export const ui = {
  en: {
    home: '/',
    nav: navLinks,
    tagline: 'Cullen · Pearland · Wash & Fold',
    hoursShort: 'Open 7 days · 7 AM – 10 PM (Sat–Sun 11 PM)',
    hoursLong: 'Open 7 days: 7:00 AM – 10:00 PM · Sat & Sun until 11:00 PM',
    switchLabel: 'Español',
    switchHref: '/es',
    switchLang: 'es',
    switchTitle: 'Ver esta información en español',
    call: 'Call',
    callUs: 'Call Us',
    directions: 'Get Directions',
    directionsShort: 'Directions',
    prices: 'Prices',
    pricesHref: '/#self-service',
    openMenu: 'Open menu',
    closeMenu: 'Close menu',
    mainNav: 'Main',
    quickActions: 'Quick actions',
    serving: 'Serving the Cullen & Pearland Areas',
    quickLinks: 'Quick Links',
    services: 'Services',
    serviceLinks: [
      { href: '/#self-service', label: 'Self-Service Washers & Dryers' },
      { href: '/wash-and-fold', label: 'Wash, Dry & Fold' },
      { href: '/wash-and-fold#bedding', label: 'Comforters, Blankets & Rugs' },
      { href: '/es', label: 'Lavandería en español' },
    ],
    storeHours: 'Store Hours',
  },
  es: {
    home: '/es',
    nav: [
      { href: '/es', label: 'Inicio' },
      { href: '/es#autoservicio', label: 'Autoservicio' },
      { href: '/es#lavado-y-doblado', label: 'Lavado y doblado' },
      { href: '/es#horario', label: 'Horario' },
      { href: '/es#preguntas', label: 'Preguntas' },
      { href: '/es#contacto', label: 'Contacto' },
    ],
    tagline: 'Lavandería · Lavado y doblado',
    hoursShort: 'Abierto 7 días · 7 a. m.–10 p. m. (sáb–dom 11 p. m.)',
    hoursLong: 'Abierto los 7 días: 7:00 a. m. – 10:00 p. m. · Sábado y domingo hasta las 11:00 p. m.',
    switchLabel: 'English',
    switchHref: '/',
    switchLang: 'en',
    switchTitle: 'View this site in English',
    call: 'Llamar al',
    callUs: 'Llamar',
    directions: 'Cómo llegar',
    directionsShort: 'Cómo llegar',
    prices: 'Precios',
    pricesHref: '/es#autoservicio',
    openMenu: 'Abrir menú',
    closeMenu: 'Cerrar menú',
    mainNav: 'Principal',
    quickActions: 'Acciones rápidas',
    serving: 'Al servicio de las áreas de Cullen y Pearland',
    quickLinks: 'Enlaces',
    services: 'Servicios',
    serviceLinks: [
      { href: '/es#autoservicio', label: 'Lavadoras y secadoras de autoservicio' },
      { href: '/es#lavado-y-doblado', label: 'Lavado, secado y doblado' },
      { href: '/wash-and-fold', label: 'Wash & Fold (English)' },
    ],
    storeHours: 'Horario',
  },
} satisfies Record<Locale, unknown>
