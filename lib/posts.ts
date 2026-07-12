export type PostBlock =
  | { type: 'p'; text: string }
  | { type: 'h2'; text: string }
  | { type: 'h3'; text: string }
  | { type: 'list'; items: string[] }
  | { type: 'callout'; text: string; cta: { label: string; href: string } }

export type Post = {
  slug: string
  title: string
  excerpt: string
  category: string
  readTime: string
  publishedAt: string // ISO date
  updatedAt: string // ISO date
  metaDescription: string
  content: PostBlock[]
}

export const posts: Post[] = [
  {
    slug: 'how-much-does-it-cost-to-rent-a-claw-machine',
    title: 'How Much Does It Cost to Rent a Claw Machine for a Party?',
    excerpt:
      'A straight answer on claw machine rental pricing — what our packages include, what other companies quietly charge extra for, and how to pick the right package for your event.',
    category: 'Rentals',
    readTime: '5 min read',
    publishedAt: '2026-06-15',
    updatedAt: '2026-06-15',
    metaDescription:
      'Claw machine rental pricing explained: what a 1, 2, or 3-hour rental costs, what\'s included, common hidden fees to watch for, and how to pick the right package for your event.',
    content: [
      {
        type: 'p',
        text: "If you're planning an event and searching \"how much to rent a claw machine,\" you want a number, not a sales pitch. So here it is: our packages run $200 for one hour, $350 for two hours, and $500 for three hours — flat rate, no surprises. Here's exactly what that gets you, and how to think about which package fits your event.",
      },
      { type: 'h2', text: 'California Claw pricing at a glance' },
      {
        type: 'list',
        items: [
          '1 hour — $200. A quick, high-energy activation for a shorter event or a busy happy hour.',
          '2 hours — $350. Our most-booked package, and the sweet spot for most parties.',
          '3 hours — $500. Keeps guests entertained for the full length of a longer event.',
          '4+ hours, multiple machines, or a compact mini machine — custom quote.',
        ],
      },
      {
        type: 'p',
        text: "Every tier is a flat price. There's no per-play charge, no separate delivery fee, and no \"prize refill\" surcharge tacked on at the end.",
      },
      { type: 'h2', text: "What's included in every rental" },
      {
        type: 'list',
        items: [
          'Unlimited plushie prizes — the machine is stocked generously and we keep an eye on it throughout the event, so it never runs dry.',
          'Delivery, setup, and pickup — our team brings the machine, gets it running, and comes back to collect it. You never touch a dolly.',
          'Free-play mode — no coins, no tokens. Guests just walk up and play, as many times as they want.',
          'A trained operator on call — if anything needs an adjustment mid-event, we handle it.',
        ],
      },
      { type: 'h2', text: 'What some rental companies charge extra for' },
      {
        type: 'p',
        text: "Claw machine rental pricing across the industry is inconsistent, and a lot of the sting is in the fine print. Before you book anywhere, it's worth asking about:",
      },
      {
        type: 'list',
        items: [
          'Coin or token fees — some rentals are coin-operated by default, meaning guests pay per play unless you buy a "free-play" upgrade.',
          'Prize restocking fees — if the machine runs empty, some companies charge to refill it mid-event.',
          'Delivery fees based on distance — often not disclosed until the invoice.',
          'Setup/breakdown labor charged separately from the rental itself.',
        ],
      },
      {
        type: 'callout',
        text: 'Our packages fold all of this into one number up front, so the price you see is the price you pay.',
        cta: { label: 'See current pricing', href: '/rent-a-claw-machine#pricing' },
      },
      { type: 'h2', text: 'How to pick the right package for your event' },
      {
        type: 'list',
        items: [
          '1 hour: a good fit for a short office happy hour, a pop-up activation, or any event where guests filter through quickly (roughly 20–40 people).',
          '2 hours: right for most birthday parties, engagement parties, or the cocktail-hour portion of a wedding (roughly 40–100 guests).',
          '3 hours: best when the machine needs to hold attention for a full evening — receptions, larger corporate parties, or all-day events.',
          'Custom: for weddings with a long reception, festivals, or any event that wants more than one machine running at once.',
        ],
      },
      { type: 'h2', text: 'A few things that can affect your quote' },
      {
        type: 'list',
        items: [
          'Indoor vs. outdoor setup — outdoor events need a bit of cover and access to power, which we can usually accommodate.',
          "Multiple machines — great for larger events where you don't want a line forming at just one.",
          'A compact mini machine — a nice option for tight venue spaces like a tasting room or small backyard.',
          'How far out you book — weekend dates fill up a few weeks in advance, especially in the summer.',
        ],
      },
      { type: 'h2', text: 'Ready to book?' },
      {
        type: 'p',
        text: "Tell us your date, city, and rough guest count, and we'll confirm availability and the right package within 24 hours. We currently deliver across the San Francisco Bay Area and San Diego.",
      },
      {
        type: 'callout',
        text: 'Check delivery details and book your date for San Francisco or San Diego.',
        cta: { label: 'Browse rentals by city', href: '/rent-a-claw-machine' },
      },
    ],
  },
  {
    slug: 'free-claw-machine-for-your-business-how-it-works',
    title: 'Free Claw Machine for Your Business: How It Actually Works',
    excerpt:
      "\"Free\" makes people suspicious, and that's fair. Here's exactly what happens when you request a claw machine placement — no contract, no catch, just the honest process.",
    category: 'Business Placement',
    readTime: '6 min read',
    publishedAt: '2026-06-22',
    updatedAt: '2026-06-22',
    metaDescription:
      "How California Claw's free claw machine placement program works for cafes, restaurants, and campuses — the application process, installation, maintenance, and what businesses actually pay (nothing).",
    content: [
      {
        type: 'p',
        text: 'If a business owner hears "free claw machine" and immediately thinks "what\'s the catch," that\'s a healthy reaction. So let\'s walk through exactly what happens, step by step, so there are no surprises.',
      },
      { type: 'h2', text: "The short version: there isn't a catch" },
      {
        type: 'p',
        text: 'We own the machine. We pay for delivery and installation. We handle every repair and service visit. We restock the prizes on our own schedule. Your business provides the floor space and a power outlet — that\'s the entire ask. There\'s no rental fee, no minimum contract, and no invoice that shows up later.',
      },
      { type: 'h2', text: 'How we make it work' },
      {
        type: 'p',
        text: "Machines can run one of two ways, and you choose which fits your space: free-play, where guests play at no charge as a perk for visiting your business, or coin-play, where guests pay a small amount per turn. Either way, your business owes us nothing — that's simply how we keep the program sustainable on our end.",
      },
      { type: 'h2', text: 'The process, step by step' },
      {
        type: 'list',
        items: [
          'You reach out. Fill out our contact form with your business name, location, and a bit about your space. Takes about a minute.',
          "We review within 24 hours. We'll follow up to ask a few questions about foot traffic, available space, and what kind of machine would fit best.",
          "We schedule a quick call. This is where we confirm details and answer any questions — no pressure, no sales script.",
          "We install everything. Our team delivers, sets up, and tests the machine. We handle any minor electrical needs on our end.",
          "You open for business as usual. The machine becomes part of your space — no ongoing effort required from your team.",
          "We maintain and restock on a schedule. We keep tabs on prize levels and mechanical health, and we come by proactively rather than waiting for a complaint.",
        ],
      },
      { type: 'h2', text: 'Common questions we hear' },
      { type: 'h3', text: 'Do I have to sign a long-term contract?' },
      {
        type: 'p',
        text: "No. There's no lock-in period. If the machine isn't working for your space, we'll remove it — no penalty, no hard feelings.",
      },
      { type: 'h3', text: 'How much space does it need?' },
      {
        type: 'p',
        text: 'A standard machine needs roughly a 3-by-3-foot footprint and a nearby outlet. We also have a compact mini machine for tighter spots like a checkout counter or a narrow café corner.',
      },
      { type: 'h3', text: 'Who fixes it if something breaks?' },
      {
        type: 'p',
        text: "We do, always. If a machine has a mechanical issue, you don't call a repair line and wait around — we monitor and service our machines directly.",
      },
      { type: 'h3', text: 'What kind of businesses is this a good fit for?' },
      {
        type: 'list',
        items: [
          'Cafes and boba shops — gives customers something to do while they wait for an order.',
          'Restaurants — a photo-op and a way to keep waiting parties (and kids) entertained.',
          'Laundromats — turns dead time on a wash cycle into something fun.',
          'Campuses and offices — a break-room perk that people genuinely talk about.',
          'Shopping centers and retail — an extra reason for foot traffic to linger.',
        ],
      },
      { type: 'h2', text: "Why we do it this way" },
      {
        type: 'p',
        text: "We'd rather earn a spot in your business by proving the machine adds value than lock you into a contract that assumes it will. Most of our placements come from word of mouth between businesses in the same neighborhood — that only works if the first machine actually delivers.",
      },
      {
        type: 'callout',
        text: "See what's involved for your specific city, or just reach out and we'll walk you through it.",
        cta: { label: 'Request a free machine', href: '/#contact' },
      },
    ],
  },
  {
    slug: 'renting-a-claw-machine-for-a-wedding',
    title: 'Renting a Claw Machine for Your Wedding: A Planning Guide',
    excerpt:
      "Claw machines are showing up at weddings as a playful surprise during cocktail hour or the reception. Here's how to plan one in — timing, setup, and what a rental includes.",
    category: 'Weddings',
    readTime: '4 min read',
    publishedAt: '2026-07-08',
    updatedAt: '2026-07-08',
    metaDescription:
      'How to rent a claw machine for your wedding: best timing during the day, setup and space requirements, pricing, and tips for a smooth, photo-worthy activation.',
    content: [
      {
        type: 'p',
        text: "A claw machine isn't the first thing most couples picture at a wedding — which is exactly why it works. It's an unexpected, playful moment that gives guests something to do, without competing with the parts of the day that matter most.",
      },
      { type: 'h2', text: 'Why couples are adding one to the day' },
      {
        type: 'list',
        items: [
          'Keeps guests entertained during cocktail hour, while the wedding party is off taking photos.',
          'A genuine surprise that photographs and films well — great for guest reels and candid shots.',
          'Free-play means no one is fumbling for cash or tokens in formal attire.',
          'Doubles as a party favor station — guests walk away with a plushie prize.',
        ],
      },
      { type: 'h2', text: 'When to schedule it during your day' },
      {
        type: 'list',
        items: [
          'Cocktail hour (60–90 min): the most popular slot — it fills the gap while photos happen and keeps guests near the bar area entertained.',
          'Reception (2–3 hours): good for a more casual, family-style event where you want a standing activity running most of the night.',
          'Late-night lull: a fun way to re-energize the room before dancing picks back up.',
        ],
      },
      { type: 'h2', text: 'What a rental includes' },
      {
        type: 'p',
        text: 'Our packages are flat-rate: $200 for one hour, $350 for two hours, and $500 for three. Every package includes unlimited plushie prizes, delivery, setup, and pickup — your venue coordinator never has to manage the machine. Most weddings land on the 2-hour package, which comfortably covers cocktail hour with room to spare.',
      },
      { type: 'h2', text: 'Setup details your venue will ask about' },
      {
        type: 'list',
        items: [
          'Footprint: about 3 by 3 feet, plus a bit of clearance for guests to gather around.',
          'Power: one standard outlet nearby is all it needs.',
          'Indoor or outdoor: we set up either, as long as an outdoor spot has some cover.',
        ],
      },
      { type: 'h2', text: 'A few planning tips' },
      {
        type: 'list',
        items: [
          'Loop in your venue coordinator early so they can carve out space near the bar or lounge area, away from the dance floor.',
          "Book your date as soon as it's set — weekend dates fill up two to three weeks out, and wedding season books faster.",
          "If you're working with a planner, they can coordinate delivery timing directly with our team.",
        ],
      },
      {
        type: 'callout',
        text: 'Check pricing and lock in your wedding date.',
        cta: { label: 'See rental packages', href: '/rent-a-claw-machine' },
      },
    ],
  },
  {
    slug: 'claw-machine-rental-for-a-birthday-party',
    title: 'Claw Machine Rental for a Birthday Party (or Any Party)',
    excerpt:
      "A claw machine turns a birthday party into a full arcade moment. Here's how to plan one for kids, adults, or a mixed-age crowd.",
    category: 'Parties',
    readTime: '4 min read',
    publishedAt: '2026-07-10',
    updatedAt: '2026-07-10',
    metaDescription:
      'Planning a claw machine rental for a birthday party or celebration: pricing by the hour, which age groups it works best for, setup requirements, and tips for a smooth party.',
    content: [
      {
        type: 'p',
        text: "Bounce houses and face painting are great, but they age out fast. A claw machine doesn't — it works for a 7-year-old's birthday just as well as a 40th, which makes it one of the easiest activations to book for a mixed-age party.",
      },
      { type: 'h2', text: 'Why it works for parties' },
      {
        type: 'list',
        items: [
          'No supervision required — guests walk up and play on their own.',
          'Wide age range appeal: kids grab plushies, adults get a dose of nostalgia.',
          "Free-play mode means you're not managing tickets, tokens, or cash all day.",
          'Doubles as a party favor station, since every prize is included and unlimited.',
        ],
      },
      { type: 'h2', text: 'Picking your package' },
      {
        type: 'list',
        items: [
          "1 hour ($200): a good fit for a shorter kids' party or a quick backyard gathering.",
          '2 hours ($350): our most-booked package, and the sweet spot for a typical birthday party.',
          '3 hours ($500): best for an all-afternoon or all-evening bash where you want the machine running the whole time.',
        ],
      },
      { type: 'h2', text: 'Backyard, home, or venue setups' },
      {
        type: 'p',
        text: "We deliver and set up wherever the party is — a backyard, a rented venue, or a community clubhouse. It needs about a 3-by-3-foot footprint and a nearby outlet, and we're happy to work outdoors as long as there's some cover in case of weather.",
      },
      { type: 'h2', text: 'Tips for a smooth party' },
      {
        type: 'list',
        items: [
          "Place it away from the cake and gift table so it doesn't compete for space during those moments.",
          'For mixed-age parties, give younger kids first crack at it before things get crowded.',
          "Book two to three weeks ahead if you're aiming for a weekend — those dates go first.",
        ],
      },
      {
        type: 'callout',
        text: 'Ready to book the machine for your next party?',
        cta: { label: 'See pricing and packages', href: '/rent-a-claw-machine#pricing' },
      },
    ],
  },
  {
    slug: 'renting-a-claw-machine-for-the-office',
    title: 'Renting a Claw Machine for the Office: A Guide for Team Events',
    excerpt:
      "Holiday party, team offsite, or just a Friday pick-me-up — a rented claw machine is an easy way to add energy to an office event. Here's how it works, and how it's different from our free placement program.",
    category: 'Corporate Events',
    readTime: '5 min read',
    publishedAt: '2026-07-12',
    updatedAt: '2026-07-12',
    metaDescription:
      'How to rent a claw machine for an office party or team event: pricing, what the space needs to provide, and how a one-time rental differs from a free permanent placement.',
    content: [
      {
        type: 'p',
        text: "Offices reach out to us in two very different situations: some want a claw machine for a single event, others want one permanently in the break room. Both are things we do — this guide is about the first one.",
      },
      { type: 'h2', text: 'Rental vs. a free permanent machine' },
      {
        type: 'p',
        text: "If you're planning a one-time event — a holiday party, an offsite, a launch — you want a rental, which is what this article covers. If you're looking to add a claw machine as an ongoing office perk, we also place machines permanently at no cost to the business. That's a separate program, and we've written up exactly how it works.",
      },
      {
        type: 'callout',
        text: 'Looking for a permanent machine instead of a one-time rental?',
        cta: { label: 'How free placement works', href: '/blog/free-claw-machine-for-your-business-how-it-works' },
      },
      { type: 'h2', text: 'Good occasions for an office rental' },
      {
        type: 'list',
        items: [
          'Holiday parties and end-of-year celebrations',
          'Team offsites or summer parties',
          'Product launches or company anniversaries',
          'Recruiting events or campus visits',
          'Client appreciation days',
        ],
      },
      { type: 'h2', text: 'Picking a package' },
      {
        type: 'list',
        items: [
          '1 hour ($200): a quick energy boost for a Friday happy hour or a short lull in the day.',
          '2 hours ($350): the standard choice for a holiday party or team celebration.',
          '3 hours ($500): best for an all-day open house, offsite, or larger company event.',
        ],
      },
      { type: 'h2', text: 'What the space needs to provide' },
      {
        type: 'list',
        items: [
          'About a 3-by-3-foot footprint, ideally near where people already gather.',
          'A standard power outlet nearby.',
          "If you're in a shared building, a quick check with facilities or building management on delivery access.",
        ],
      },
      { type: 'h2', text: 'Planning tips' },
      {
        type: 'list',
        items: [
          'Loop in whoever books vendors for office events (often HR or an office manager) — they can request a quote and coordinate delivery timing.',
          'Schedule delivery outside of core meeting hours if the space is also a working area during the day.',
          'Pairs well with catered lunch or an afternoon happy hour.',
        ],
      },
      {
        type: 'callout',
        text: 'Ready to book a machine for your next office event?',
        cta: { label: 'See rental packages', href: '/rent-a-claw-machine' },
      },
    ],
  },
]

export function getPostBySlug(slug: string): Post | undefined {
  return posts.find((p) => p.slug === slug)
}
