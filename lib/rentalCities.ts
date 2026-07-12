export type RentalFaq = { q: string; a: string }

export type RentalCity = {
  slug: string
  city: string
  region: string
  scene: string
  metaDescription: string
  heroSub: string
  intro: string
  eventTypes: string[]
  neighborhoods: string[]
  nearby: string
  faqs: RentalFaq[]
}

export const rentalCities: RentalCity[] = [
  {
    slug: 'san-francisco',
    city: 'San Francisco',
    region: 'the San Francisco Bay Area',
    scene: 'golden-gate',
    metaDescription:
      'Rent a claw machine in San Francisco for your party, wedding, or corporate event. Delivery and setup across the Mission, SoMa, the Marina, and beyond. Unlimited plushie prizes, from $200.',
    heroSub:
      'A real claw machine, stocked with unlimited plushie prizes and set to free-play — delivered and set up anywhere in San Francisco, from a SoMa office party to a wedding in the Presidio.',
    intro:
      "San Francisco throws events unlike anywhere else — tech-company offsites in SoMa, rooftop celebrations downtown, weddings overlooking the bay, and milestone birthdays in the Mission. A claw machine is the centerpiece that gets every guest off their phone and into the fun. We handle delivery, setup, and pickup so your San Francisco event runs without a hitch.",
    eventTypes: [
      'Tech company parties & offsites',
      'Weddings & receptions',
      'Milestone birthdays',
      'Corporate holiday parties',
      'Campus events (USF, SF State, UCSF)',
      'Brand pop-ups & activations',
    ],
    neighborhoods: [
      'Mission District',
      'SoMa & Mission Bay',
      'Marina & Cow Hollow',
      'Financial District',
      'Hayes Valley',
      'Dogpatch',
      'Sunset & Richmond',
      'Nob Hill',
    ],
    nearby: 'We also deliver down the Peninsula and across the bay to Oakland and Berkeley.',
    faqs: [
      {
        q: 'How much does it cost to rent a claw machine in San Francisco?',
        a: 'Our San Francisco event packages are $200 for one hour, $350 for two hours, $475 for three hours, $575 for four hours, and $700 for six hours — each with unlimited plushie prizes, delivery, and setup included. Longer events or multiple machines are quoted custom.',
      },
      {
        q: 'Do you deliver to my San Francisco neighborhood or venue?',
        a: 'Yes — we deliver citywide, from the Mission and SoMa to the Marina, the Sunset, and downtown high-rises. Just tell us the venue and we handle load-in.',
      },
      {
        q: 'Can you set up in an SF office building or high-rise?',
        a: 'Absolutely. We work with building load-in rules and elevators regularly for SoMa and Financial District office parties. Let us know the floor and access details and we take care of the rest.',
      },
      {
        q: 'How far in advance should I book a San Francisco event?',
        a: 'For weekend weddings and corporate parties, two to three weeks ahead is ideal since SF dates fill quickly. We do our best to accommodate last-minute requests too.',
      },
    ],
  },
  {
    slug: 'san-diego',
    city: 'San Diego',
    region: 'the San Diego area',
    scene: 'san-diego',
    metaDescription:
      'Rent a claw machine in San Diego for your party, wedding, or event. Delivery and setup across Pacific Beach, North Park, La Jolla, and beyond. Unlimited plushie prizes, from $200.',
    heroSub:
      'A real claw machine, stocked with unlimited plushie prizes and set to free-play — delivered and set up anywhere in San Diego, from a Pacific Beach backyard bash to a La Jolla wedding.',
    intro:
      "San Diego's easygoing, always-outdoors event scene is a perfect match for a claw machine — beach parties in Pacific Beach, brewery celebrations in North Park, weddings in La Jolla and Coronado, and quinceañeras across the county. We deliver, set it to free-play, and pack it away, so your San Diego event is all fun and no fuss.",
    eventTypes: [
      'Beach & backyard parties',
      'Weddings & receptions',
      'Brewery & taproom events',
      'Corporate & office parties',
      'Quinceañeras & birthdays',
      'Campus events (SDSU, UCSD, USD)',
    ],
    neighborhoods: [
      'Downtown & Gaslamp',
      'Pacific Beach',
      'North Park',
      'La Jolla',
      'Coronado',
      'Mission Valley',
      'Hillcrest',
      'Point Loma',
    ],
    nearby: 'We also cover the wider county — Chula Vista, Carlsbad, Oceanside, Encinitas, Escondido, and El Cajon.',
    faqs: [
      {
        q: 'How much does it cost to rent a claw machine in San Diego?',
        a: 'San Diego event packages are $200 for one hour, $350 for two hours, $475 for three hours, $575 for four hours, and $700 for six hours, each including unlimited plushie prizes, delivery, and setup. Longer events or multiple machines get a custom quote.',
      },
      {
        q: 'Do you deliver across San Diego County?',
        a: 'Yes — beyond the city we deliver to Chula Vista, Carlsbad, Oceanside, Encinitas, Escondido, and El Cajon. Tell us your location and we confirm delivery.',
      },
      {
        q: 'Can you set up for a beach or outdoor event in San Diego?',
        a: 'We can, as long as there is access to power and some cover for the machine (a tent or shaded area). We set up outdoors regularly for San Diego backyard and beachside parties.',
      },
      {
        q: 'Do you service brewery and taproom events?',
        a: 'Definitely — a free-play claw machine is a hit at North Park and Miramar taprooms. It gives guests something to do and keeps them around longer.',
      },
    ],
  },
]

export function getRentalCityBySlug(slug: string): RentalCity | undefined {
  return rentalCities.find((c) => c.slug === slug)
}
