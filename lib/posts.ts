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
]

export function getPostBySlug(slug: string): Post | undefined {
  return posts.find((p) => p.slug === slug)
}
