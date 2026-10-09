import { business, dryers, washers, washFoldBags, washFoldItems, washFoldMain } from '@/lib/business'

// Answers use only details shown elsewhere on the site (address, phone, hours, posted prices).
// Payment methods and wash & fold turnaround are deliberately not answered until the store confirms them.

const [perPound, miniLoad] = washFoldMain
const washerRange = `${washers[0].price} for a ${washers[0].size} washer up to ${washers[washers.length - 1].price} for an ${washers[washers.length - 1].size} washer`
const address = `${business.street}, ${business.cityStateZip}`
const item = (name: string) => washFoldItems.find((i) => i.name === name)!

export const homeFaqs = [
  {
    q: 'What are your hours?',
    a: 'FreshWash Washateria is open 7 days a week: Monday through Friday from 7:00 AM to 10:00 PM, and Saturday and Sunday from 7:00 AM to 11:00 PM.',
  },
  {
    q: 'Where is the laundromat?',
    a: `We are at ${address}, on Old Chocolate Bayou Rd in south Houston. Customers come from the Cullen area and nearby Pearland.`,
  },
  {
    q: 'How much does it cost to wash and dry a load?',
    a: `Washers cost ${washerRange}. Every wash setting is the same price. Dryers start at ${dryers[0].price}, with extra drying time from ${dryers[0].topoff}.`,
  },
  {
    q: 'What size washers and dryers do you have?',
    a: `We have ${washers.reduce((n, w) => n + w.count, 0)} washers (20, 40, 60 and 80 lb) and ${dryers.reduce((n, d) => n + d.count, 0)} dryers (30, 45 and 75 lb). The 60 and 80 lb washers handle comforters, blankets and large family loads.`,
  },
  {
    q: 'Do you offer wash and fold?',
    a: `Yes. Drop off your laundry and our team will wash, dry and fold it. Wash, Dry & Fold is ${perPound.price} per pound with a 10 lb minimum, or ${miniLoad.price} for a mini load of 1 to 10 lb, plus service charge and tax.`,
  },
  {
    q: 'Can I get directions or call ahead?',
    a: `Yes. Call the store at ${business.phone}, or use the Get Directions button to open our location in Google Maps.`,
  },
]

export const washFoldFaqs = [
  {
    q: 'How much is wash and fold?',
    a: `${perPound.price} per pound with a 10 lb minimum. Smaller loads of 1 to 10 lb are a ${miniLoad.price} mini load. A service charge and sales tax are added to the listed prices.`,
  },
  {
    q: 'Can you wash comforters, blankets, pillows and rugs?',
    a: `Yes. Queen and king comforters or blankets are ${item('Queen / King Size').price} each, twin and full sizes are ${item('Twin / Full Size').price} each, pillows are ${item('Pillows').price} each, large rugs are ${item('Large Rug').price} and small rugs are ${item('Small Rug').price}.`,
  },
  {
    q: 'When can I drop off my laundry?',
    a: 'Bring your laundry in during store hours: 7:00 AM to 10:00 PM Monday through Friday, and 7:00 AM to 11:00 PM on Saturday and Sunday.',
  },
  {
    q: 'Do I need my own bag?',
    a: `Any bag works. If you need one, we sell large trash bags for ${washFoldBags[0].price} and medium trash bags for ${washFoldBags[1].price}.`,
  },
  {
    q: 'When will my laundry be ready?',
    a: `Ready time depends on the size of the order. Ask when you drop off, or call ${business.phone}.`,
  },
]

export const homeFaqsEs = [
  {
    q: '¿Cuál es el horario?',
    a: 'FreshWash Washateria abre los 7 días de la semana: de lunes a viernes de 7:00 a. m. a 10:00 p. m., y sábado y domingo de 7:00 a. m. a 11:00 p. m.',
  },
  {
    q: '¿Hay una lavandería cerca de mí con servicio de lavado y doblado?',
    a: `Si está en el sur de Houston, en el área de Cullen o en Pearland, estamos en ${address}, sobre Old Chocolate Bayou Rd. Ofrecemos lavandería de autoservicio y servicio de lavado, secado y doblado.`,
  },
  {
    q: '¿Cuánto cuesta lavar y secar una carga?',
    a: `Las lavadoras cuestan desde ${washers[0].price} (${washers[0].size}) hasta ${washers[washers.length - 1].price} (${washers[washers.length - 1].size}). Todos los ciclos de lavado cuestan lo mismo. Las secadoras empiezan en ${dryers[0].price}, con tiempo adicional desde ${dryers[0].topoff}.`,
  },
  {
    q: '¿Cuánto cuesta el servicio de lavado, secado y doblado?',
    a: `${perPound.price} por libra con un mínimo de 10 libras, o ${miniLoad.price} por una carga pequeña de 1 a 10 libras. Se agrega un cargo por servicio y el impuesto.`,
  },
  {
    q: '¿Puedo lavar edredones, cobijas y tapetes?',
    a: `Sí. Tenemos lavadoras de 60 y 80 libras para cargas grandes. Si prefiere dejarlos con nosotros, los edredones o cobijas queen/king cuestan ${item('Queen / King Size').price} por pieza y los tapetes grandes ${item('Large Rug').price}.`,
  },
]
