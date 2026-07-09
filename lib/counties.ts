export type Venue = {
  emoji: string
  title: string
  blurb: string
}

export type Faq = {
  q: string
  a: string
}

export type County = {
  slug: string
  name: string
  city: string
  region: string
  description: string
  tagline: string
  scene: string
  intro: string
  localAngle: string
  neighborhoods: string[]
  venues: Venue[]
  faqs: Faq[]
}

export const counties: County[] = [
  {
    slug: 'san-francisco-county',
    name: 'San Francisco County',
    city: 'San Francisco',
    region: 'the San Francisco Bay Area',
    description: 'Serving cafes, co-working spaces, and university campuses across San Francisco.',
    tagline: 'From the Mission to the Marina, we bring the claw.',
    scene: 'golden-gate',
    intro:
      "San Francisco runs on foot traffic — and there's no better way to turn a line at the register into a moment of fun than a claw machine glowing in the corner. We place, stock, and maintain premium machines at cafes, boba shops, laundromats, and campuses across all seven-by-seven miles of the city.",
    localAngle:
      "SF venues live and die by dwell time. A claw machine gives your customers a reason to linger, snap a photo, and post it — free marketing from the Mission to Ocean Beach. Whether you run a third-wave coffee bar in Hayes Valley or a late-night spot in North Beach, we tailor the machine and prize mix to your crowd.",
    neighborhoods: [
      'Mission District',
      'Marina & Cow Hollow',
      'SoMa',
      'North Beach',
      'Hayes Valley',
      'The Castro',
      'Sunset & Richmond',
      'Financial District',
    ],
    venues: [
      { emoji: '☕', title: 'Cafes & boba shops', blurb: 'Turn the wait for a latte or milk tea into a game worth staying for.' },
      { emoji: '🎓', title: 'Campuses', blurb: 'USF, SF State, and UCSF study spots that students actually want to hang around.' },
      { emoji: '🧺', title: 'Laundromats', blurb: 'Thirty minutes on the spin cycle just got a whole lot better.' },
      { emoji: '🍜', title: 'Restaurants & bars', blurb: 'A photo-op centerpiece for waiting parties and late-night crowds.' },
    ],
    faqs: [
      {
        q: 'How much does a claw machine cost my San Francisco business?',
        a: 'Nothing. We place the machine free of charge and handle installation, maintenance, and restocking. You provide the floor space and a power outlet — we do the rest.',
      },
      {
        q: 'How fast can you install in San Francisco?',
        a: 'Most SF placements go live within a few days of our first call. We handle delivery, setup, and testing so your machine is earning smiles by the weekend.',
      },
      {
        q: 'Do you also rent machines for SF events?',
        a: 'Yes — we rent machines with unlimited plushie prizes for parties, weddings, and corporate events across the city. Check out our rental packages for pricing.',
      },
    ],
  },
  {
    slug: 'san-mateo-county',
    name: 'San Mateo County',
    city: 'San Mateo',
    region: 'the San Francisco Bay Area',
    description: 'Bringing arcade fun to restaurants and businesses throughout the Peninsula.',
    tagline: 'A little joy for every stop down the Peninsula.',
    scene: 'peninsula',
    intro:
      'The Peninsula is where the city meets the suburbs — family restaurants, bustling downtowns, and corporate campuses all packed between the bay and the hills. A California Claw machine fits right in, giving Peninsula businesses an easy way to stand out and keep customers smiling.',
    localAngle:
      'From the shops along Burlingame Avenue to the food halls near the tech campuses in Redwood City, San Mateo County families are always looking for a little something extra. A claw machine turns an ordinary errand into a treat the kids beg to come back for — and it costs you nothing to offer it.',
    neighborhoods: [
      'San Mateo',
      'Redwood City',
      'Burlingame',
      'Foster City',
      'Daly City',
      'South San Francisco',
      'Millbrae',
      'San Bruno',
    ],
    venues: [
      { emoji: '🍝', title: 'Family restaurants', blurb: 'Keep the little ones happy while the table waits for a booth.' },
      { emoji: '🧋', title: 'Boba & dessert shops', blurb: 'The perfect pairing for a Peninsula sweet-tooth crowd.' },
      { emoji: '🏢', title: 'Corporate campuses', blurb: 'A break-room upgrade employees actually get excited about.' },
      { emoji: '🛍️', title: 'Shopping centers', blurb: 'Draw foot traffic and give shoppers a reason to stick around.' },
    ],
    faqs: [
      {
        q: 'What does it cost to get a claw machine in San Mateo County?',
        a: 'Placement is completely free. We cover the machine, delivery, servicing, and prizes — there are no rental fees or hidden costs for your business.',
      },
      {
        q: 'Which Peninsula cities do you serve?',
        a: 'We cover the entire county, from Daly City and South San Francisco down through San Mateo, Burlingame, Foster City, and Redwood City.',
      },
      {
        q: 'Can you handle a high-traffic location?',
        a: 'Absolutely. We restock on a schedule that matches your volume, so a busy shopping-center spot never runs low on prizes.',
      },
    ],
  },
  {
    slug: 'san-jose-county',
    name: 'Santa Clara County',
    city: 'San Jose',
    region: 'the San Francisco Bay Area',
    description: 'Energizing tech campuses, food courts, and entertainment venues in Silicon Valley.',
    tagline: 'Silicon Valley works hard. We make it fun.',
    scene: 'silicon-valley',
    intro:
      "Santa Clara County is the beating heart of Silicon Valley — sprawling tech campuses, buzzing food halls, and some of the best Asian dining in the country. A California Claw machine brings a jolt of playful energy to any of them, whether it's a startup break room in Sunnyvale or a busy restaurant on Santana Row.",
    localAngle:
      'Valley workers spend long hours on campus, and the best companies know that small delights matter. A free-play claw machine in the break room or cafeteria is the kind of perk people actually talk about. And in San Jose\'s vibrant restaurant scene, it\'s a magnet for families and a natural photo-op for date night.',
    neighborhoods: [
      'Downtown San Jose',
      'Santana Row',
      'Santa Clara',
      'Sunnyvale',
      'Mountain View',
      'Cupertino',
      'Palo Alto',
      'Milpitas',
    ],
    venues: [
      { emoji: '💻', title: 'Tech campuses', blurb: 'A break-room centerpiece that gives teams a reason to step away and recharge.' },
      { emoji: '🍜', title: 'Restaurants & food halls', blurb: 'From pho spots to poke bars, a draw for families and waiting parties.' },
      { emoji: '🧋', title: 'Boba shops', blurb: 'The Valley loves its milk tea — pair it with a game worth the wait.' },
      { emoji: '🎳', title: 'Entertainment venues', blurb: 'Arcades, bowling alleys, and lounges that thrive on more to do.' },
    ],
    faqs: [
      {
        q: 'Can you put a claw machine in our Silicon Valley office?',
        a: 'Yes — office and campus placements are one of our favorites. We can set it to free-play as an employee perk or coin-play, whatever fits your space, at no cost to the company.',
      },
      {
        q: 'How quickly can you install in San Jose?',
        a: 'Typically within a few days. We handle delivery, setup, and testing across Santa Clara County so your machine is ready fast.',
      },
      {
        q: 'Do you restock the prizes?',
        a: 'Always. We keep every machine stocked with fresh, high-quality plush and novelty prizes on a schedule that matches your traffic.',
      },
    ],
  },
  {
    slug: 'marin-county',
    name: 'Marin County',
    city: 'San Rafael',
    region: 'the San Francisco Bay Area',
    description: "Adding a touch of fun to Marin's boutique shops, restaurants, and campuses.",
    tagline: 'Where the redwoods meet the waterfront — and a little fun.',
    scene: 'marin',
    intro:
      'Just across the Golden Gate, Marin blends laid-back waterfront towns with boutique shopping and family-friendly downtowns. A California Claw machine is a charming fit for the county\'s relaxed, family-first vibe — from the shops of Mill Valley to the marinas of Sausalito.',
    localAngle:
      "Marin families spend their weekends browsing downtown San Rafael, grabbing lunch on the Sausalito waterfront, or wandering the shops in Corte Madera. A claw machine adds a spark of delight to those outings — the kind of small-town charm that keeps locals coming back and gives visitors a reason to smile.",
    neighborhoods: [
      'San Rafael',
      'Novato',
      'Mill Valley',
      'Sausalito',
      'Larkspur',
      'Corte Madera',
      'Tiburon',
      'Fairfax',
    ],
    venues: [
      { emoji: '🛍️', title: 'Boutique shops', blurb: 'A playful surprise that turns browsers into repeat visitors.' },
      { emoji: '🦀', title: 'Waterfront restaurants', blurb: 'Keep waiting parties entertained with a view and a game.' },
      { emoji: '🍦', title: 'Ice cream & cafes', blurb: 'The perfect after-treat treat for Marin families.' },
      { emoji: '🎓', title: 'Campuses & rec centers', blurb: 'A welcome bit of fun for students and community spaces.' },
    ],
    faqs: [
      {
        q: 'Is there really no cost to Marin businesses?',
        a: 'Correct — placement is free. We own and maintain the machine, cover the prizes, and handle every service visit. Your only job is to enjoy the extra foot traffic.',
      },
      {
        q: 'Which Marin towns do you serve?',
        a: 'All of them — San Rafael, Novato, Mill Valley, Sausalito, Larkspur, Corte Madera, Tiburon, and the surrounding communities.',
      },
      {
        q: 'Do you offer machines for Marin events?',
        a: 'Yes. We rent machines with unlimited prizes for birthdays, weddings, and community events throughout the county. See our rental page for details.',
      },
    ],
  },
  {
    slug: 'oakland-county',
    name: 'Alameda County',
    city: 'Oakland',
    region: 'the San Francisco Bay Area',
    description: 'Serving Oakland, Berkeley, and surrounding East Bay communities.',
    tagline: 'The East Bay has flavor. We bring the fun.',
    scene: 'oakland',
    intro:
      'From the taquerias of Fruitvale to the barcades of Uptown and the campus energy of Berkeley, the East Bay has a creative, community-first spirit unlike anywhere else. A California Claw machine fits right in — a fun, local touch for the independent spots that give Alameda County its character.',
    localAngle:
      "East Bay regulars are loyal to the places that feel like theirs. A claw machine in the corner of your Temescal cafe or Jack London Square restaurant becomes part of that identity — a little ritual for regulars and a draw for the UC Berkeley and Cal State crowds always looking for something to do.",
    neighborhoods: [
      'Downtown & Uptown Oakland',
      'Berkeley',
      'Alameda',
      'Fremont',
      'Hayward',
      'San Leandro',
      'Emeryville',
      'Temescal',
    ],
    venues: [
      { emoji: '🌮', title: 'Taquerias & restaurants', blurb: 'A crowd-pleaser for the East Bay\'s legendary food scene.' },
      { emoji: '🍺', title: 'Barcades & breweries', blurb: 'More to do means longer visits and bigger tabs.' },
      { emoji: '🎓', title: 'Campus hangouts', blurb: 'Cal and Cal State students love a spot with something extra.' },
      { emoji: '☕', title: 'Cafes', blurb: 'Turn the Temescal coffee crowd into lingering regulars.' },
    ],
    faqs: [
      {
        q: 'How much does placement cost in Oakland or Berkeley?',
        a: 'Zero. We place and service the machine at no charge and keep it stocked with prizes. There are no contracts and no fees for your business.',
      },
      {
        q: 'What parts of the East Bay do you cover?',
        a: 'The whole county — Oakland, Berkeley, Alameda, Fremont, Hayward, San Leandro, Emeryville, and the communities in between.',
      },
      {
        q: 'Can students play, and what are the prizes like?',
        a: 'Of course. We stock every machine with high-quality plush and novelty prizes that keep players of all ages coming back.',
      },
    ],
  },
  {
    slug: 'contra-costa-county',
    name: 'Contra Costa County',
    city: 'Martinez',
    region: 'the San Francisco Bay Area',
    description: 'Covering Walnut Creek, Concord, and communities throughout Contra Costa.',
    tagline: 'Family fun in the shadow of Mount Diablo.',
    scene: 'diablo',
    intro:
      'Spread across the rolling hills beneath Mount Diablo, Contra Costa is Bay Area suburbia at its best — walkable downtowns, big family restaurants, and shopping centers made for a weekend outing. A California Claw machine is a natural fit for the county\'s family-friendly rhythm.',
    localAngle:
      'Whether it\'s a Saturday at Broadway Plaza in Walnut Creek, a family dinner in Concord, or a rec-center afternoon in San Ramon, Contra Costa families are looking for easygoing fun. A claw machine delivers exactly that — a small thrill that keeps kids happy and gives your business a reason to be their favorite spot.',
    neighborhoods: [
      'Walnut Creek',
      'Concord',
      'Richmond',
      'Antioch',
      'Pleasant Hill',
      'San Ramon',
      'Danville',
      'Martinez & Brentwood',
    ],
    venues: [
      { emoji: '🍕', title: 'Family restaurants', blurb: 'The easiest way to keep the kids happy before the food arrives.' },
      { emoji: '🛍️', title: 'Shopping centers', blurb: 'A destination draw from Broadway Plaza to the Sunvalley mall.' },
      { emoji: '🏓', title: 'Rec centers', blurb: 'Extra fun for community spaces and after-school crowds.' },
      { emoji: '🍺', title: 'Breweries & taprooms', blurb: 'Give the grown-ups a game while they relax with a pint.' },
    ],
    faqs: [
      {
        q: 'Do you charge Contra Costa businesses anything?',
        a: 'No. Machine placement is free, and we cover maintenance and prizes. You get all the upside with none of the cost or upkeep.',
      },
      {
        q: 'Which Contra Costa cities do you serve?',
        a: 'We serve the county wide — Walnut Creek, Concord, Richmond, Antioch, Pleasant Hill, San Ramon, Danville, Martinez, Brentwood, and nearby areas.',
      },
      {
        q: 'How long does setup take?',
        a: 'Usually just a few days from our first conversation. We deliver, install, and test everything so the machine is ready for your customers.',
      },
    ],
  },
  {
    slug: 'san-diego-county',
    name: 'San Diego County',
    city: 'San Diego',
    region: 'the San Diego area',
    description: "Bringing the claw machine experience to San Diego's vibrant venue scene.",
    tagline: 'Sun, surf, tacos — and a claw machine to match.',
    scene: 'san-diego',
    intro:
      "San Diego's laid-back beach-town energy runs from the boardwalks of Pacific Beach to the breweries of North Park and the taco shops of Barrio Logan. A California Claw machine is a perfect match for that easygoing, always-out-and-about vibe — a fun, free way for local spots to stand out.",
    localAngle:
      "San Diego locals and tourists alike are looking for their next fun stop, and a claw machine gives them one more reason to choose your spot. From a Carlsbad coffee shop to a Gaslamp restaurant to an SDSU or UCSD hangout, we tailor the machine and prizes to fit the neighborhood and its crowd.",
    neighborhoods: [
      'Downtown & Gaslamp',
      'Pacific Beach',
      'North Park',
      'La Jolla',
      'Chula Vista',
      'Oceanside & Carlsbad',
      'Escondido',
      'El Cajon',
    ],
    venues: [
      { emoji: '🌮', title: 'Taco shops & eateries', blurb: 'A playful draw for San Diego\'s world-famous food scene.' },
      { emoji: '🏖️', title: 'Beach-town cafes', blurb: 'Turn a post-surf coffee stop into a spot worth lingering.' },
      { emoji: '🍺', title: 'Breweries & taprooms', blurb: 'More to do in America\'s craft-beer capital.' },
      { emoji: '🎓', title: 'Campus hangouts', blurb: 'SDSU and UCSD students love a spot with a little extra.' },
    ],
    faqs: [
      {
        q: 'Is claw machine placement free in San Diego?',
        a: 'Yes. We place, service, and stock the machine at no cost to your business. No rental fees, no contracts — just a fun new draw for your customers.',
      },
      {
        q: 'Which San Diego areas do you cover?',
        a: 'Countywide — from Oceanside and Carlsbad in the north through San Diego proper, La Jolla, and down to Chula Vista, plus Escondido and El Cajon inland.',
      },
      {
        q: 'Do you rent machines for San Diego events?',
        a: 'We do. Our event rentals come with unlimited plushie prizes and full setup, perfect for beach parties, weddings, and corporate events. See the rental page for pricing.',
      },
    ],
  },
]

export function getCountyBySlug(slug: string): County | undefined {
  return counties.find((c) => c.slug === slug)
}
