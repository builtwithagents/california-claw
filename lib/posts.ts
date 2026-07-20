export type PostBlock =
  | { type: 'p'; text: string }
  | { type: 'h2'; text: string }
  | { type: 'h3'; text: string }
  | { type: 'list'; items: string[] }
  | { type: 'callout'; text: string; cta: { label: string; href: string } }

export type PostFaq = { q: string; a: string }

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
  faqs: PostFaq[]
}

export const posts: Post[] = [
  {
    slug: 'how-much-does-it-cost-to-rent-a-claw-machine',
    title: 'How Much Does It Cost to Rent a Claw Machine for a Party?',
    excerpt:
      'A straight answer on claw machine rental pricing — what our packages include, what other companies quietly charge extra for, and how to pick the right package for your event.',
    category: 'Rentals',
    readTime: '7 min read',
    publishedAt: '2026-06-15',
    updatedAt: '2026-06-15',
    metaDescription:
      'Claw machine rental pricing explained: what a 1, 2, 3, 4, or 6-hour rental costs, what\'s included, common hidden fees to watch for, and how to pick the right package for your event.',
    content: [
      {
        type: 'p',
        text: "If you're planning an event and searching \"how much to rent a claw machine,\" you want a number, not a sales pitch. So here it is: our packages run $200 for one hour, $350 for two hours, $475 for three hours, $575 for four hours, and $700 for six hours — flat rate, no surprises. Here's exactly what that gets you, and how to think about which package fits your event.",
      },
      { type: 'h2', text: 'California Claw pricing at a glance' },
      {
        type: 'list',
        items: [
          '1 hour — $200. A quick, high-energy activation for a shorter event or a busy happy hour.',
          '2 hours — $350. Our most-booked package, and the sweet spot for most parties.',
          '3 hours — $475. Keeps guests entertained for the full length of a longer event.',
          '4 hours — $575. For a longer reception or an all-afternoon celebration.',
          '6 hours — $700. Our wedding and corporate-event favorite — covers cocktail hour through the reception, or a full workday.',
          'Beyond 6 hours, multiple machines, or a compact mini machine — custom quote.',
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
          'Prize caps — many competitors include around 25 starter prizes, then charge roughly $150 for each additional batch of 25. Ours are unlimited, restocked all event long, at no extra charge.',
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
          '3–4 hours: best when the machine needs to hold attention for a full evening — receptions, larger corporate parties, or all-day events.',
          '6 hours: our most-booked option for weddings and corporate events that run from cocktail hour through the night, or a full workday.',
          'Custom: for events longer than 6 hours, festivals, or any event that wants more than one machine running at once.',
        ],
      },
      { type: 'h2', text: 'Optional add-ons' },
      {
        type: 'list',
        items: [
          'Second machine — half the price of your booked tier (for example, +$350 on a 6-hour booking). Worth it once you\'re past about 150 guests and one machine starts to bottleneck.',
          'Extended hours — $45/hour beyond the 6-hour package, if your event runs long.',
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
      { type: 'h2', text: 'Is a claw machine rental actually worth it?' },
      {
        type: 'p',
        text: "Compare it to the other ways people fill the same budget line — a photo booth, a caricature artist, a candy bar — and a claw machine holds up well. It's interactive rather than passive, it works for every age at the event, and the prize itself doubles as a favor guests take home. At $350 for two hours, the per-guest cost for a 50-person party works out to about $7, and that's before you factor in that most guests play more than once.",
      },
      { type: 'h2', text: 'How claw machine rental pricing compares' },
      {
        type: 'p',
        text: "There isn't a single industry-standard rate — pricing varies a lot by region and by what's actually included. A few things worth comparing across quotes, beyond the sticker price:",
      },
      {
        type: 'list',
        items: [
          'Is the price flat, or will it change based on your final guest count or how long the machine actually stays out?',
          'Are prizes unlimited, or is there a cap with a refill charge?',
          'Is delivery included, or billed separately based on distance?',
          'Is the machine set to free-play by default, or coin-operated unless you pay for an upgrade?',
        ],
      },
      {
        type: 'p',
        text: "Once you ask those four questions, most quotes end up higher than they first appeared. Ours doesn't change: the number you see is the number you pay.",
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
    faqs: [
      {
        q: 'How much does it cost to rent a claw machine?',
        a: 'Our packages are flat-rate: $200 for one hour, $350 for two hours, $475 for three hours, $575 for four hours, and $700 for six hours. Every tier includes unlimited plushie prizes, delivery, setup, and pickup. Events longer than six hours, multiple machines, or a compact mini machine are quoted custom.',
      },
      {
        q: 'Do I need to pay a deposit to book?',
        a: "No payment is due to submit a request. We confirm your date, package, and details first, then walk you through payment before your event.",
      },
      {
        q: 'Is there a minimum guest count?',
        a: "No minimum. The flat price works whether you have 20 guests or 200 — though for events over about 150 guests, a second machine keeps the line from bottlenecking.",
      },
      {
        q: 'Are there any fees not included in the price?',
        a: "No. Delivery, setup, pickup, and unlimited prize restocking are all included in the flat price for your package. The only additional charges are the optional add-ons — a second machine or extended hours beyond six.",
      },
      {
        q: 'What if my event runs longer than planned?',
        a: 'Extended hours are available at $45 per hour beyond the six-hour package. Let our team know during the event and we can typically accommodate it on the spot.',
      },
      {
        q: 'Can I add a second machine?',
        a: "Yes — a second machine is half the price of your booked tier (for example, +$350 on a six-hour booking). It's a popular add-on for events over 150 guests.",
      },
      {
        q: 'Do guests really get unlimited plays and prizes?',
        a: 'Yes. The machine is set to free-play — no coins or tokens — and every play wins. We keep it stocked throughout your event, so it never runs dry, at no extra cost.',
      },
      {
        q: 'How far in advance should I book?',
        a: "We recommend booking two to three weeks ahead for weekend dates, since those fill up fastest — especially in the summer and around the holidays. We also do our best to accommodate last-minute requests.",
      },
    ],
  },
  {
    slug: 'free-claw-machine-for-your-business-how-it-works',
    title: 'Free Claw Machine for Your Business: How It Actually Works',
    excerpt:
      "\"Free\" makes people suspicious, and that's fair. Here's exactly what happens when you request a claw machine placement — no contract, no catch, just the honest process.",
    category: 'Business Placement',
    readTime: '8 min read',
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
      { type: 'h3', text: 'Free-play or coin-play — which should you pick?' },
      {
        type: 'list',
        items: [
          "Free-play fits businesses that want the machine purely as a perk — a café rewarding regulars, a campus break room, an amenity that makes people choose your space over a competitor's.",
          "Coin-play fits businesses with high walk-in traffic — a laundromat, a busy lobby, a retail entryway — where a small per-play charge doesn't affect the experience but adds a bit of side revenue for the business.",
          "You can switch modes later if the first choice isn't the right fit — just mention it on your next visit from our team.",
        ],
      },
      { type: 'h2', text: 'What businesses actually notice' },
      {
        type: 'p',
        text: "The honest answer is that results vary by location, but the pattern we hear most often is the same: the machine becomes a small, recurring reason people mention the business by name. A few things that show up consistently:",
      },
      {
        type: 'list',
        items: [
          'Longer dwell time — customers linger a few extra minutes, which matters most for cafes, waiting areas, and anywhere a longer visit means an extra purchase.',
          'Organic social mentions — a claw machine is more photogenic than most break-room perks, and it shows up in check-ins and stories without any prompting.',
          "A reason for repeat visits — kids in particular ask to come back to \"the place with the claw machine,\" which is a stickier hook than most low-cost perks.",
          "Zero downside if it doesn't land — since there's no cost and no contract, trying it out carries basically no risk to the business.",
        ],
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
    faqs: [
      {
        q: 'Is a free claw machine placement really free?',
        a: "Yes. We own the machine, pay for delivery and installation, and cover all maintenance and restocking. Your business provides floor space and a power outlet — there's no rental fee, no minimum contract, and no invoice later.",
      },
      {
        q: 'Do I need to sign a contract?',
        a: "No long-term contract. If the machine isn't working for your space, we'll remove it — no penalty either way.",
      },
      {
        q: 'How is this different from renting a claw machine?',
        a: "A rental is for a one-time event — a party or office celebration — and runs on an hourly package. This program places a machine permanently in your business at no cost. See our rental guide if you're planning a single event instead.",
      },
      {
        q: 'Who keeps the money if the machine is coin-play?',
        a: "That's part of the setup conversation — some businesses run coin-play purely as a customer perk with proceeds going toward maintenance, others structure it differently. We'll walk through the options during your onboarding call.",
      },
      {
        q: 'What if the machine gets damaged or stops working?',
        a: "We handle it. Our team monitors and services every machine directly — you never need to call a repair line or pay for parts.",
      },
      {
        q: 'How long does installation take once I apply?',
        a: 'We review requests within 24 hours, follow up with a quick call to confirm details, then schedule delivery and setup — most businesses have a working machine within one to two weeks of reaching out.',
      },
      {
        q: 'Can I request the machine be removed later?',
        a: "Yes, any time. There's no penalty and no notice period required — just let us know and we'll coordinate a pickup.",
      },
      {
        q: 'Is this available outside the San Francisco Bay Area and San Diego?',
        a: "Right now we place and service machines across the San Francisco Bay Area and greater San Diego. Reach out and let us know your location — we're always evaluating new areas.",
      },
    ],
  },
  {
    slug: 'renting-a-claw-machine-for-a-wedding',
    title: 'Renting a Claw Machine for Your Wedding: A Planning Guide',
    excerpt:
      "Claw machines are showing up at weddings as a playful surprise during cocktail hour or the reception. Here's how to plan one in — timing, setup, and what a rental includes.",
    category: 'Weddings',
    readTime: '6 min read',
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
          'Reception (3–4 hours): good for a more casual, family-style event where you want a standing activity running most of the night.',
          'Cocktail hour through the reception (6 hours): our most-booked wedding package — the machine stays out from the first toast to last dance.',
        ],
      },
      { type: 'h2', text: 'What a rental includes' },
      {
        type: 'p',
        text: "Our packages are flat-rate: $200 for one hour, $350 for two hours, $475 for three, $575 for four, and $700 for six. Every package includes unlimited plushie prizes, delivery, setup, and pickup — your venue coordinator never has to manage the machine. Most weddings land on the 6-hour package, which covers cocktail hour through the reception, since unlimited prizes and a flat price mean there's nothing to negotiate mid-event.",
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
      { type: 'h2', text: 'Where to place it at your venue' },
      {
        type: 'p',
        text: "Placement makes a bigger difference than most couples expect. Near the bar or lounge area during cocktail hour works well because guests are already standing and mingling there. During the reception, a spot along the edge of the room — visible but out of the walking path to the dance floor — keeps it a fun detour instead of a bottleneck. Avoid placing it directly next to the gift table or guest book, since a cluster of people playing can crowd out guests trying to sign in.",
      },
      { type: 'h2', text: 'Does it fit your wedding style?' },
      {
        type: 'p',
        text: "It tends to land best at weddings that already lean playful — backyard and garden weddings, brewery or winery venues, casual family-style receptions, and anything with a laid-back cocktail hour. For a strictly formal, black-tie affair, it still works, but we'd suggest keeping it tucked into the lounge or bar area rather than front and center, so it reads as a bonus rather than the centerpiece.",
      },
      { type: 'h2', text: 'A few planning tips' },
      {
        type: 'list',
        items: [
          'Loop in your venue coordinator early so they can carve out space near the bar or lounge area, away from the dance floor.',
          "Book your date as soon as it's set — weekend dates fill up two to three weeks out, and wedding season books faster.",
          "If you're working with a planner, they can coordinate delivery timing directly with our team.",
          "If your reception is likely to run past your booked window, ask about extended hours ahead of time so it's a non-issue on the day.",
        ],
      },
      {
        type: 'callout',
        text: 'Check pricing and lock in your wedding date.',
        cta: { label: 'See rental packages', href: '/rent-a-claw-machine' },
      },
    ],
    faqs: [
      {
        q: 'How much does it cost to add a claw machine to a wedding?',
        a: 'Our packages are flat-rate: $200 for one hour up to $700 for six hours, which is our most-booked wedding option since it covers cocktail hour through the reception. Every tier includes unlimited plushie prizes, delivery, setup, and pickup.',
      },
      {
        q: 'Does someone need to staff or supervise it during the wedding?',
        a: "No. It's set to free-play, so guests walk up and play on their own — no coins, tickets, or an attendant required. We deliver, set it up, and come back to collect it after your event.",
      },
      {
        q: 'Can it be set up outdoors for a garden or backyard wedding?',
        a: 'Yes, as long as there\'s some cover — a tent, awning, or covered patio — and a nearby power outlet. We regularly set up for outdoor California weddings.',
      },
      {
        q: 'Will it feel out of place at a formal wedding?',
        a: "It can work at any style of wedding — for a more formal affair, we'd suggest tucking it into the bar or lounge area so it reads as a playful bonus rather than a centerpiece.",
      },
      {
        q: 'How far ahead should we book for wedding season?',
        a: 'Two to three weeks minimum for a weekend date, though wedding season (late spring through fall) books faster — the earlier you confirm your date, the better.',
      },
      {
        q: 'Can we extend the rental if the reception runs long?',
        a: 'Yes — extended hours are $45 per hour beyond your booked package. Flagging this possibility with us ahead of time makes it a quick call on the day rather than a scramble.',
      },
      {
        q: 'What does our venue need to prepare?',
        a: 'Just a roughly 3-by-3-foot space and a standard power outlet nearby. Your coordinator can pick the spot — we handle delivery, setup, and pickup around your timeline.',
      },
      {
        q: 'Can the plushie prizes match our wedding colors or theme?',
        a: "We stock a fun, varied assortment of plushies rather than a themed or custom selection, but they make a genuinely memorable favor guests keep from the night.",
      },
    ],
  },
  {
    slug: 'claw-machine-rental-for-a-birthday-party',
    title: 'Claw Machine Rental for a Birthday Party (or Any Party)',
    excerpt:
      "A claw machine turns a birthday party into a full arcade moment. Here's how to plan one for kids, adults, or a mixed-age crowd.",
    category: 'Parties',
    readTime: '6 min read',
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
          '3 hours ($475) or 4 hours ($575): best for an all-afternoon or all-evening bash where you want the machine running the whole time.',
          '6 hours ($700): for a large blowout party or a rental shared across multiple back-to-back celebrations in one day.',
        ],
      },
      { type: 'h2', text: 'Backyard, home, or venue setups' },
      {
        type: 'p',
        text: "We deliver and set up wherever the party is — a backyard, a rented venue, or a community clubhouse. It needs about a 3-by-3-foot footprint and a nearby outlet, and we're happy to work outdoors as long as there's some cover in case of weather.",
      },
      { type: 'h2', text: 'Kids\' parties vs. milestone birthdays' },
      {
        type: 'p',
        text: "The machine works for both, but the framing shifts a bit. For a kids' party, it's the main event — expect a rotating cluster of kids around it most of the time, so give it real breathing room away from other activities. For an adult milestone birthday (30th, 40th, 50th, and beyond), it tends to work best as a lounge or bar-area feature — a nostalgic, low-effort activity guests drift toward between conversations rather than something that needs its own dedicated moment on the timeline.",
      },
      { type: 'h2', text: 'A party favor that doesn\'t need a separate budget line' },
      {
        type: 'p',
        text: "Most parties budget for favors separately — goodie bags, small toys, candy stations. Since every play wins a plushie and prizes are unlimited, the machine doubles as the favor station. Guests grab their own on the way out, which also means one less thing to assemble and set out before the party starts.",
      },
      { type: 'h2', text: 'Tips for a smooth party' },
      {
        type: 'list',
        items: [
          "Place it away from the cake and gift table so it doesn't compete for space during those moments.",
          'For mixed-age parties, give younger kids first crack at it before things get crowded.',
          "Book two to three weeks ahead if you're aiming for a weekend — those dates go first.",
          "If the party moves between indoor and outdoor spaces, let us know your preferred spot ahead of time so setup goes quickly.",
        ],
      },
      {
        type: 'callout',
        text: 'Ready to book the machine for your next party?',
        cta: { label: 'See pricing and packages', href: '/rent-a-claw-machine#pricing' },
      },
    ],
    faqs: [
      {
        q: 'What age range does a claw machine rental work for?',
        a: "All of them. It's genuinely one of the few activations that works for a 7-year-old's birthday and a 40th just as well — kids grab plushies, adults get a hit of nostalgia.",
      },
      {
        q: 'How much does a birthday party rental cost?',
        a: 'Packages start at $200 for one hour and go up to $700 for six hours ($350 for two hours is our most-booked option for a typical birthday party). Every tier includes unlimited prizes, delivery, setup, and pickup.',
      },
      {
        q: 'Do we need to supervise the machine during the party?',
        a: "No. It's set to free-play, so guests walk up and play on their own — no tickets, tokens, or an attendant needed.",
      },
      {
        q: 'Can it be set up in a backyard or at a rented venue?',
        a: "Yes — we deliver and set up wherever the party is happening: a backyard, a rented hall, a community clubhouse. Outdoor setups just need some cover in case of weather.",
      },
      {
        q: 'What if we want to have multiple parties on the same day?',
        a: 'Let us know your full-day plan — a longer package (or a custom multi-stop arrangement) can often be worked out for back-to-back celebrations.',
      },
      {
        q: 'Do prizes really never run out?',
        a: 'Correct — every play wins, and we keep the machine stocked throughout your event at no extra charge, however many kids (or adults) line up.',
      },
      {
        q: 'How far in advance should we book?',
        a: 'Two to three weeks ahead is ideal for a weekend date, since those book up fastest. We do our best to accommodate shorter notice too.',
      },
      {
        q: 'Is there a difference between a party rental and getting a free permanent machine?',
        a: "Yes — a party rental is a one-time booking on an hourly package, sized for a single event. If you're a business looking to add a machine permanently (say, in an office break room), that's a separate, no-cost placement program.",
      },
    ],
  },
  {
    slug: 'renting-a-claw-machine-for-the-office',
    title: 'Renting a Claw Machine for the Office: A Guide for Team Events',
    excerpt:
      "Holiday party, team offsite, or just a Friday pick-me-up — a rented claw machine is an easy way to add energy to an office event. Here's how it works, and how it's different from our free placement program.",
    category: 'Corporate Events',
    readTime: '7 min read',
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
          '3 hours ($475) or 4 hours ($575): best for a larger company event that runs most of the afternoon.',
          '6 hours ($700): our most-booked option for an all-day open house, offsite, or company-wide event.',
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
      { type: 'h2', text: 'Getting it approved and expensed' },
      {
        type: 'p',
        text: "Because it's a flat, one-time cost with no ongoing commitment, it's usually an easy line item to get approved — it reads the same as any other event vendor (catering, a photo booth, a DJ) rather than a new recurring expense. A few things that help it move through approval quickly:",
      },
      {
        type: 'list',
        items: [
          'A fixed number up front — since pricing is flat, you can request an exact quote before asking for sign-off, with no risk of the number changing later.',
          'Framing it as a team morale or event-experience line item rather than equipment or facilities spend.',
          'Booking through whoever already manages event vendors, so it goes through the same approval path as catering or entertainment.',
        ],
      },
      { type: 'h2', text: 'Planning tips' },
      {
        type: 'list',
        items: [
          'Loop in whoever books vendors for office events (often HR or an office manager) — they can request a quote and coordinate delivery timing.',
          'Schedule delivery outside of core meeting hours if the space is also a working area during the day.',
          'Pairs well with catered lunch or an afternoon happy hour.',
          'For multi-floor or campus offices, let us know the exact delivery location ahead of time so our team knows where to check in.',
        ],
      },
      {
        type: 'callout',
        text: 'Ready to book a machine for your next office event?',
        cta: { label: 'See rental packages', href: '/rent-a-claw-machine' },
      },
    ],
    faqs: [
      {
        q: 'How much does it cost to rent a claw machine for an office event?',
        a: 'Packages range from $200 for one hour to $700 for six hours, which is our most-booked option for an all-day open house or company-wide event. Every tier includes unlimited plushie prizes, delivery, setup, and pickup.',
      },
      {
        q: 'Is this the same as your free machine program?',
        a: "No — this is a one-time rental for a single event, billed on an hourly package. Our free placement program is a separate offering: a machine placed permanently in your office at no cost, as an ongoing perk.",
      },
      {
        q: 'Do we need building or facilities approval?',
        a: "If you're in a shared building, it's worth a quick check with facilities or building management about delivery access. Otherwise, no special approval is needed — you provide about a 3-by-3-foot space and a power outlet.",
      },
      {
        q: 'How do we get this approved by finance?',
        a: "Since pricing is flat, you can request an exact quote before seeking sign-off — it reads like any other one-time event vendor cost (catering, a photo booth), not a recurring expense.",
      },
      {
        q: 'Can we book it for a multi-day company event?',
        a: "Our standard packages run up to six hours in a single day, with extended hours available at $45/hour beyond that. For a multi-day event, reach out and we'll put together a custom quote.",
      },
      {
        q: 'Does someone need to staff the machine during our event?',
        a: "No — it's set to free-play, so employees and guests walk up and play on their own. No coins, tickets, or attendant required.",
      },
      {
        q: 'How far in advance should we book for a holiday party?',
        a: 'Two to three weeks ahead is ideal, and earlier is better for December — holiday party season is our busiest stretch of the year.',
      },
      {
        q: 'Can we add a second machine for a larger company event?',
        a: 'Yes — a second machine is half the price of your booked tier, which is worth considering for company-wide events or offices spread across multiple floors.',
      },
    ],
  },
  {
    slug: 'where-to-rent-a-claw-machine-san-francisco-bay-area',
    title: 'Where to Rent a Claw Machine in the San Francisco Bay Area',
    excerpt:
      'A local guide to renting a claw machine across the San Francisco Bay Area — the counties and cities we deliver to, how much lead time to give us, and why local delivery-and-setup beats hauling a machine yourself.',
    category: 'Rentals',
    readTime: '6 min read',
    publishedAt: '2026-07-06',
    updatedAt: '2026-07-06',
    metaDescription:
      'Renting a claw machine in the San Francisco Bay Area: the counties and cities California Claw delivers to, how far ahead to book, venue and setup notes, and why local delivery beats DIY.',
    content: [
      {
        type: 'p',
        text: "If you're searching for a claw machine rental in the San Francisco Bay Area, the first thing you actually want to know is simple: do they deliver to me, and how soon do I need to book? This guide answers both, plus the local details — venues, parking, power, and lead times — that make the difference between a smooth event and a scramble.",
      },
      { type: 'h2', text: 'Where we deliver in the San Francisco Bay Area' },
      {
        type: 'p',
        text: "California Claw delivers, sets up, and picks up across the San Francisco Bay Area. That covers the city itself and the surrounding counties, so most events from the Peninsula to the East Bay to the South Bay are well within range:",
      },
      {
        type: 'list',
        items: [
          'San Francisco County — the city proper, from the Marina to the Mission.',
          'San Mateo County — Peninsula towns like San Mateo, Burlingame, and Redwood City.',
          'Santa Clara County — the South Bay, including San Jose, Santa Clara, and Sunnyvale.',
          'Marin County — north of the Golden Gate, from Sausalito to San Rafael.',
          'Alameda County — the East Bay, including Oakland, Berkeley, and Fremont.',
          'Contra Costa County — from Richmond out to Walnut Creek and Concord.',
        ],
      },
      {
        type: 'callout',
        text: 'See delivery details and availability for San Francisco and the surrounding cities.',
        cta: { label: 'Browse rentals by city', href: '/rent-a-claw-machine' },
      },
      { type: 'h2', text: 'How local delivery works' },
      {
        type: 'p',
        text: "Every rental is fully handled by our team. We bring the machine, get it running in free-play mode, keep it stocked with plushie prizes throughout your event, and come back to collect it afterward. You never touch a dolly, and there's no separate delivery fee based on distance within our San Francisco Bay Area service area — it's folded into the flat package price.",
      },
      {
        type: 'list',
        items: [
          'Delivery, setup, and pickup are included in every package.',
          'The machine runs on free-play — no coins or tokens for your guests.',
          'Prizes are unlimited and restocked all event long, at no extra charge.',
          'A trained operator is on call if anything needs adjusting mid-event.',
        ],
      },
      { type: 'h2', text: 'How far ahead to book' },
      {
        type: 'p',
        text: "Weekend dates across the San Francisco Bay Area fill up fastest, especially in summer and around the holidays. Two to three weeks of lead time is the comfortable window for a Friday or Saturday. Weekday events and last-minute requests are often doable too — it's always worth asking.",
      },
      { type: 'h2', text: 'A few local logistics worth flagging' },
      {
        type: 'p',
        text: "Bay Area venues range from downtown high-rises to backyard patios, and a couple of details help us plan the setup:",
      },
      {
        type: 'list',
        items: [
          'Access — let us know about stairs, elevators, or a loading dock. The machine moves on a dolly, so ground-floor or elevator access makes setup quick.',
          'Parking — a spot to unload near the entrance saves time, which matters for tight downtown San Francisco addresses.',
          'Power — the machine needs a standard outlet within reach. Outdoor events just need cover and access to power.',
          'Space — one machine fits comfortably in most rooms; for a compact venue like a tasting room or small backyard, ask about our mini machine.',
        ],
      },
      { type: 'h2', text: 'Why local delivery beats doing it yourself' },
      {
        type: 'p',
        text: "You can find machines to buy or ship, but a claw machine is heavy, awkward to move, and no fun to troubleshoot the morning of your event. A local San Francisco Bay Area rental means someone else handles the lifting, the setup, the restocking, and the teardown — and if the machine hiccups, a real person is a phone call away, not a shipping label.",
      },
      {
        type: 'callout',
        text: 'Tell us your date, city, and rough guest count — we confirm availability within 24 hours.',
        cta: { label: 'Check pricing and book', href: '/rent-a-claw-machine#pricing' },
      },
    ],
    faqs: [
      {
        q: 'What areas of the San Francisco Bay Area do you deliver to?',
        a: 'We deliver, set up, and pick up across San Francisco County, San Mateo County, Santa Clara County, Marin County, Alameda County, and Contra Costa County — covering the city, the Peninsula, the South Bay, the East Bay, and Marin.',
      },
      {
        q: 'Is there a delivery fee for events outside San Francisco proper?',
        a: 'No. Delivery, setup, and pickup are included in the flat package price throughout our San Francisco Bay Area service area — the price is not adjusted by distance.',
      },
      {
        q: 'How far in advance should I book in the San Francisco Bay Area?',
        a: 'Two to three weeks ahead is ideal for weekend dates, which fill up fastest in summer and around the holidays. Weekday and last-minute requests are often still possible — just ask.',
      },
      {
        q: 'Do you deliver to San Jose and the South Bay?',
        a: 'Yes. Santa Clara County — including San Jose, Santa Clara, and Sunnyvale — is part of our regular delivery area.',
      },
      {
        q: 'What do I need to provide at the venue?',
        a: 'Just a standard power outlet within reach and a clear path to move the machine in on a dolly. Let us know about stairs, elevators, or parking so we can plan the setup.',
      },
    ],
  },
  {
    slug: 'claw-machines-for-trade-shows-and-brand-activations',
    title: 'Claw Machines for Trade Shows & Brand Activations: A Booth Traffic Guide',
    excerpt:
      'A claw machine is one of the most reliable ways to stop foot traffic at a booth. Here is how to use one to draw a crowd, hand out branded prizes, and turn plays into leads.',
    category: 'Corporate Events',
    readTime: '7 min read',
    publishedAt: '2026-07-13',
    updatedAt: '2026-07-13',
    metaDescription:
      'How to use a claw machine at a trade show or brand activation: drawing booth traffic, filling it with branded prizes, capturing leads, and setup for expo halls and pop-ups in the San Francisco Bay Area and San Diego.',
    content: [
      {
        type: 'p',
        text: "At a crowded expo hall, attention is the whole game. A claw machine solves the hardest part of any booth: getting people to stop, step in, and stay long enough to talk. It works because it's interactive and a little nostalgic — and unlike a bowl of candy, every play is a reason to strike up a conversation.",
      },
      { type: 'h2', text: 'Why a claw machine pulls booth traffic' },
      {
        type: 'list',
        items: [
          'It creates a small crowd — and crowds draw more crowds. A machine mid-aisle is a natural gathering point.',
          "It's a reason to linger. A 30-second play gives your team a natural opening to start a conversation.",
          'Every guest leaves with something branded in hand — a walking billboard for the rest of the show.',
          'It levels the playing field against bigger booths. Experience beats square footage.',
        ],
      },
      { type: 'h2', text: 'Fill it with branded prizes' },
      {
        type: 'p',
        text: "The machine is only half the activation — what comes out of it is the other half. We can stock it with your own branded swag or co-branded plushies so every win reinforces your brand and every prize travels home with an attendee.",
      },
      {
        type: 'list',
        items: [
          'Branded plushies or custom swag that match your booth and colors.',
          "A mix of tiers — a stack of easy-win items plus a few premium prizes people actually chase.",
          'Prizes sized to travel — attendees will carry them around the floor and pack them home.',
        ],
      },
      { type: 'h2', text: 'Turn plays into leads' },
      {
        type: 'p',
        text: "The play itself is the hook; the lead capture is what makes it pay off. Because the machine runs on free-play, you control the small ask that comes before or after a turn:",
      },
      {
        type: 'list',
        items: [
          'Play to win — scan a QR code to enter, badge-scan at the booth, or drop a card to unlock a play.',
          'Use a grand-prize tier as the reason to leave contact details for a follow-up drawing.',
          'Pair each win with a quick demo or a one-line pitch while the prize is fresh in hand.',
        ],
      },
      {
        type: 'p',
        text: "Set the ask to match your goals — a light touch for pure brand awareness, or a badge scan when the priority is a qualified list.",
      },
      { type: 'h2', text: 'ROI versus a giveaway table' },
      {
        type: 'p',
        text: "Compare it to the usual booth spend — a bowl of pens, a raffle, a swag pile that empties in an hour. Those get taken, not remembered. A claw machine converts the same prize budget into an experience: people wait in line for it, talk to your team to earn it, and remember the booth where they won something. The prize does double duty as both the draw and the takeaway.",
      },
      { type: 'h2', text: 'Setup for expo halls and pop-ups' },
      {
        type: 'p',
        text: "We deliver, set up, and staff-support activations across the San Francisco Bay Area and San Diego. A few things help us plan a show floor:",
      },
      {
        type: 'list',
        items: [
          'Footprint — one machine fits a standard 10x10 booth with room to gather; a mini machine works for tighter spaces.',
          'Power — the machine needs a standard outlet, so confirm your booth has electrical ordered from the venue.',
          'Load-in — expo halls have set move-in windows and dock access; share the schedule and we work around it.',
          'Multi-day shows — we can keep it stocked across the run so it never sits empty.',
        ],
      },
      {
        type: 'callout',
        text: 'Planning a trade show booth or brand activation? Tell us the dates and we will build a quote.',
        cta: { label: 'Get an activation quote', href: '/rent-a-claw-machine' },
      },
    ],
    faqs: [
      {
        q: 'Can you fill the machine with our own branded prizes?',
        a: 'Yes. We can stock the machine with your branded swag or co-branded plushies so every win reinforces your brand. Share what you have in mind and we will help plan the prize mix.',
      },
      {
        q: 'How does a claw machine help capture leads at a booth?',
        a: 'Because it runs on free-play, you control the small ask around each turn — a QR scan to enter, a badge scan, or a card drop to unlock a play. That turns the crowd it draws into contact details and conversations.',
      },
      {
        q: 'Will a claw machine fit in a standard trade show booth?',
        a: 'One machine fits comfortably in a standard 10x10 booth with room for a small crowd. For tighter spaces, our compact mini machine is a good alternative.',
      },
      {
        q: 'Do you handle multi-day trade shows?',
        a: 'Yes. We keep the machine stocked across the full run so it never sits empty, and we work around the hall’s move-in and move-out windows.',
      },
      {
        q: 'Where do you deliver for corporate activations?',
        a: 'We deliver and set up across the San Francisco Bay Area and San Diego. Share your venue and show schedule and we will confirm availability.',
      },
    ],
  },
  {
    slug: 'before-your-claw-machine-arrives-space-power-setup-checklist',
    title: 'Before Your Claw Machine Arrives: Space, Power & Setup Checklist',
    excerpt:
      'Everything to check before your rental shows up — how much space the machine needs, what power it requires, and how delivery and teardown actually work, so there are no surprises on event day.',
    category: 'Rentals',
    readTime: '6 min read',
    publishedAt: '2026-07-20',
    updatedAt: '2026-07-20',
    metaDescription:
      'A pre-rental checklist for your claw machine: how much space and clearance it needs, power requirements, indoor vs. outdoor setup, venue access, and how delivery and teardown work.',
    content: [
      {
        type: 'p',
        text: "Booking a claw machine is the easy part. This is the short checklist that makes event day effortless — the space, power, and access details worth confirming before our team pulls up, so setup takes minutes and nothing catches you off guard.",
      },
      { type: 'h2', text: 'How much space it needs' },
      {
        type: 'p',
        text: "A standard machine takes up about the footprint of a large fridge, plus a bit of breathing room so guests can gather and play. You don't need a lot — just a clear, level spot that isn't blocking a walkway or a fire exit.",
      },
      {
        type: 'list',
        items: [
          'Plan for roughly a 3-by-3-foot footprint, plus a few feet in front for players to stand.',
          'A level surface is ideal — the machine plays best when it sits flat.',
          'Tight venue like a tasting room or small backyard? Ask about our compact mini machine.',
        ],
      },
      { type: 'h2', text: 'Power requirements' },
      {
        type: 'p',
        text: "The machine plugs into a standard wall outlet — the same kind you'd use for a lamp or a phone charger. No special wiring, no generator for a typical indoor event.",
      },
      {
        type: 'list',
        items: [
          'One standard 110V outlet within reach of the setup spot.',
          "If the nearest outlet is far, an extension cord bridges the gap — just let us know so we bring one.",
          'For outdoor events, you\'ll need access to power plus some cover from sun or weather.',
        ],
      },
      { type: 'h2', text: 'Indoor vs. outdoor' },
      {
        type: 'p',
        text: "Indoor setups are the simplest — climate-controlled and out of the elements. Outdoor events work well too, with two things in mind: the machine needs shade or a tent so it isn't sitting in direct sun or rain, and it still needs a power source nearby.",
      },
      { type: 'h2', text: 'Venue access and timing' },
      {
        type: 'p',
        text: "The machine rolls in on a dolly, so the smoother the path from our vehicle to the setup spot, the faster we're done. A few details to confirm with your venue ahead of time:",
      },
      {
        type: 'list',
        items: [
          'Stairs or elevator — ground-floor or elevator access keeps setup quick; flag any stairs in advance.',
          'Parking or a loading zone near the entrance for unloading.',
          'Door and hallway width wide enough for the machine to pass through.',
          'A setup window before guests arrive — we typically need a short slot to get it running.',
        ],
      },
      { type: 'h2', text: 'How delivery and teardown work' },
      {
        type: 'p',
        text: "Our team handles the whole cycle. We deliver the machine, set it up in free-play mode, and get it stocked before your event starts. Throughout the event we keep an eye on the prizes so it never runs dry. When it's over, we come back to break it down and haul it out — you never lift a thing.",
      },
      {
        type: 'list',
        items: [
          'We arrive ahead of your start time to set up and test the machine.',
          'It runs on free-play — no coins or tokens — and stays stocked all event long.',
          'We return at the agreed time for teardown and pickup.',
        ],
      },
      {
        type: 'callout',
        text: 'Have your date and venue? Send them over and we will confirm the setup details with you.',
        cta: { label: 'Book your rental', href: '/rent-a-claw-machine' },
      },
    ],
    faqs: [
      {
        q: 'How much space does a claw machine need?',
        a: 'Plan for about a 3-by-3-foot footprint on a level surface, plus a few feet in front for guests to gather and play. For tight spaces, our compact mini machine needs even less room.',
      },
      {
        q: 'What are the power requirements?',
        a: 'The machine plugs into a single standard 110V wall outlet — no special wiring or generator needed for a typical indoor event. If the nearest outlet is far, let us know and we will bring an extension cord.',
      },
      {
        q: 'Can the machine be set up outdoors?',
        a: 'Yes. Outdoor setups work well as long as there is shade or a tent to keep the machine out of direct sun and rain, plus access to a power source nearby.',
      },
      {
        q: 'Do I need to help move or set up the machine?',
        a: 'No. Our team handles delivery, setup, restocking, and teardown. The machine rolls in on a dolly, so we just need a clear path and a short setup window before guests arrive.',
      },
      {
        q: 'What if my venue is up a flight of stairs?',
        a: 'Let us know in advance. Ground-floor or elevator access makes setup quickest, but flag any stairs when you book so we can plan the load-in accordingly.',
      },
    ],
  },
]

export function getPostBySlug(slug: string): Post | undefined {
  return posts.find((p) => p.slug === slug)
}
