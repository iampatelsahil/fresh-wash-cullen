export const business = {
  name: 'Fresh Wash Washateria',
  location: 'Cullen',
  fullName: 'Fresh Wash Washateria - Cullen - Wash & Fold Services',
  street: '14450 Old Chocolate Bayou Rd Ste A',
  cityStateZip: 'Houston, TX 77048',
  areas: ['Cullen', 'Pearland'],
  phone: '(832) 649-3079',
  phoneHref: 'tel:+18326493079',
  mapsUrl: 'https://maps.app.goo.gl/U51vEKGPgMVFQykV8',
  mapsEmbedUrl:
    'https://www.google.com/maps?q=14450+Old+Chocolate+Bayou+Rd+Ste+A,+Houston,+TX+77048&output=embed',
}

export const navLinks = [
  { href: '#home', label: 'Home' },
  { href: '#self-service', label: 'Self-Service' },
  { href: '#wash-fold', label: 'Wash, Dry & Fold' },
  { href: '#hours', label: 'Hours' },
  { href: '#location', label: 'Location' },
  { href: '#contact', label: 'Contact' },
]

export const hours = [
  { day: 'Wednesday', time: '7:00 AM – 10:00 PM' },
  { day: 'Thursday', time: '7:00 AM – 10:00 PM' },
  { day: 'Friday', time: '7:00 AM – 10:00 PM' },
  { day: 'Saturday', time: '7:00 AM – 11:00 PM' },
  { day: 'Sunday', time: '7:00 AM – 11:00 PM' },
  { day: 'Monday', time: '7:00 AM – 10:00 PM' },
  { day: 'Tuesday', time: '7:00 AM – 10:00 PM' },
]

export const washers = [
  { size: '20 lb', count: 14, price: '$3.00', extra: '$0.75' },
  { size: '40 lb', count: 14, price: '$5.00', extra: '$0.85' },
  { size: '60 lb', count: 7, price: '$7.00', extra: '$1.00' },
  { size: '80 lb', count: 4, price: '$9.00', extra: '$1.25' },
]

export const dryers = [
  { size: '30 lb', count: 14, price: '$1.25', topoff: '$0.35', minutes: 7 },
  { size: '45 lb', count: 32, price: '$1.25', topoff: '$0.50', minutes: 7 },
  { size: '75 lb', count: 4, price: '$2.50', topoff: '$0.75', minutes: 5 },
]

export const washFoldMain = [
  { name: 'Per Pound', note: 'Minimum 10 pounds', price: '$1.39', unit: 'per pound' },
  { name: 'Mini Load', note: '1 to 10 pounds', price: '$13.99', unit: 'minimum charge' },
]

export const washFoldItems = [
  { name: 'Queen / King Size', note: 'Comforters & blankets', price: '$15.99', unit: 'per piece' },
  { name: 'Tween / Full Size', note: 'Comforters & blankets', price: '$10.99', unit: 'per piece' },
  { name: 'Pillows', note: null, price: '$2.99', unit: 'per piece' },
  { name: 'Large Rug', note: null, price: '$17.99', unit: 'per piece' },
  { name: 'Small Rug', note: null, price: '$10.99', unit: null },
]

export const washFoldBags = [
  { name: 'Large Trash Bag', price: '$0.92' },
  { name: 'Medium Trash Bag', price: '$0.75' },
]

export const photos = {
  exterior: {
    src: '/images/exterior.jpg',
    alt: 'Fresh Wash Washateria storefront with the freshwash Washateria sign and Wash, Dry & Fold window decals',
  },
  interior: {
    src: '/images/interior-folding.jpg',
    alt: 'Inside Fresh Wash Washateria: folded towels and shirts on a stainless folding table in front of rows of washers',
  },
  staff: {
    src: '/images/staff-folding.jpg',
    alt: 'Fresh Wash team members washing and folding customer laundry',
  },
  washers: {
    src: '/images/washers-row.jpg',
    alt: 'Row of front-load washers beneath the blue bubble mural at Fresh Wash Washateria',
  },
  folded: {
    src: '/images/folded-clothes.jpg',
    alt: 'Neatly folded clothes on the folding counter with the Fresh Wash sign on the wall',
  },
  care: {
    src: '/images/customer-care.jpg',
    alt: 'Value Add Center kiosks and a Fresh Wash Wash & Fold drop off bag',
  },
}
