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
  {
    slug: 'free-claw-machine-vs-buying-vs-renting',
    title: "You Don't Need to Buy a Claw Machine: Free Placement vs. Buying vs. Renting",
    excerpt:
      "Three ways to get a claw machine into your business — buy one, rent one for an event, or have an operator place one for free. Here's the honest math on each, including when buying really is the right call.",
    category: 'Business Placement',
    readTime: '9 min read',
    publishedAt: '2026-08-26',
    updatedAt: '2026-08-26',
    metaDescription:
      "A commercial claw machine costs roughly $2,000-$5,000 to buy, plus prizes, repairs, and your time. Operator placement costs nothing. Here's how buying, renting, and free placement actually compare for a business.",
    content: [
      {
        type: 'p',
        text: 'If you want a claw machine in your business, you have three options: buy one outright, rent one for a single event, or have an operator place one at no cost. Most business owners assume the first one is the only one. For a permanent machine, it is usually the wrong choice — and the reasons have less to do with the price of the machine than with everything that comes after it.',
      },
      { type: 'h2', text: 'The short version' },
      {
        type: 'list',
        items: [
          'Buy a machine if you want full control of the prizes and the revenue, and you are willing to own the maintenance, the restocking, and the cash handling yourself.',
          'Rent a machine if you need it for a specific date — a party, a company event, a grand opening — and then you want it gone.',
          'Have one placed if you want a permanent machine in your space without buying equipment, learning to repair it, or spending your own hours on it.',
        ],
      },
      { type: 'h2', text: 'What buying actually costs' },
      {
        type: 'p',
        text: 'A commercial-grade claw machine generally runs somewhere between $2,000 and $5,000 new, and premium cabinets go past $7,000. Used units turn up cheaper. That number is the one everybody quotes, and it is also the least important number in the decision.',
      },
      { type: 'h3', text: 'The machine is the cheapest part' },
      {
        type: 'p',
        text: 'The ongoing costs are what actually decide whether owning a machine is worth it, and they are the ones nobody puts in the sales listing:',
      },
      {
        type: 'list',
        items: [
          'Prizes, forever. A machine that pays out is a machine that keeps getting played. You are now sourcing plush, tracking what moves, and reordering — and a machine full of stale prizes stops earning within weeks.',
          'Repairs. Claw mechanisms, coin mechs, and payout sensors are the failure points. When one goes down, you are either fixing it yourself or waiting on a technician who does not work for you.',
          'Tuning. Claw strength and payout rate have to be set so the machine is winnable but sustainable. Set it too tight and customers stop playing; too loose and you empty the prize bin at a loss.',
          'Cash handling. If it is coin-play, someone is emptying the hopper, counting it, and getting it to the bank. That is your time or your staff’s.',
          'Your attention. This is the real cost. Every hour spent thinking about a claw machine is an hour not spent on the business the machine is supposed to support.',
        ],
      },
      {
        type: 'p',
        text: 'The pattern we see most often with owner-bought machines is not that they lose money. It is that they quietly stop being maintained. The prizes get old, the claw stays broken for a month, nobody plays it, and a $3,000 cabinet turns into furniture.',
      },
      { type: 'h2', text: 'When buying is actually the right call' },
      {
        type: 'p',
        text: 'It genuinely is the right answer for some businesses, and we would rather say so than pretend otherwise:',
      },
      {
        type: 'list',
        items: [
          'You run an arcade, an FEC, or a bowling alley. Amusement is your core business, you already have a tech, and machine revenue is a real line on your P&L rather than a side effect.',
          'You want total control of the prizes. If the machine is a branded merchandising vehicle — your own plush, your own product, a specific promotion — you need to own it.',
          'You already run a route. If you have multiple locations and someone on staff who services equipment, the economics flip in your favor.',
          'You have very high, very predictable traffic. At real volume, keeping all of the revenue outweighs the cost of servicing it yourself.',
        ],
      },
      {
        type: 'p',
        text: 'If none of those describe you, owning the machine mostly means owning the problems.',
      },
      { type: 'h2', text: 'When renting is the right call' },
      {
        type: 'p',
        text: 'Renting is for a date on a calendar, not for a space in your floor plan. It makes sense when the machine is part of an event rather than part of the business:',
      },
      {
        type: 'list',
        items: [
          'A grand opening, an anniversary, or a promotional weekend where you want a draw for two days and then your floor space back.',
          'A company party, a wedding, or a private event where the machine is entertainment for a fixed guest list.',
          'A trade show or brand activation, where the machine is doing a specific job at a booth and then going home.',
        ],
      },
      {
        type: 'callout',
        text: 'Looking for a machine for one specific date rather than a permanent placement?',
        cta: { label: 'See rental pricing', href: '/rent-a-claw-machine' },
      },
      { type: 'h2', text: 'When free placement is the right call' },
      {
        type: 'p',
        text: 'Placement is the option most business owners have never heard of, which is why so many of them start by pricing out machines to buy. An operator owns the machine, delivers it, services it, restocks it, and handles everything mechanical. You provide floor space and an outlet.',
      },
      {
        type: 'p',
        text: 'It fits when the machine is an amenity rather than a business line:',
      },
      {
        type: 'list',
        items: [
          'You have customers who wait — for a wash cycle, for a table, for a drink, for a haircut — and you want that wait to feel shorter.',
          'You want the upside without the capital outlay or the ongoing labor.',
          'You are not sure it will even work in your space, and you want to find out without spending thousands to run the experiment.',
          'You would rather someone else own the risk that the machine breaks, the prizes go stale, or the whole idea turns out to be a dud in your location.',
        ],
      },
      { type: 'h2', text: 'Side by side' },
      {
        type: 'list',
        items: [
          'Upfront cost — Buying: $2,000-$5,000+. Renting: a per-event package fee. Placement: nothing.',
          'Who maintains it — Buying: you. Renting: the rental company, for the duration. Placement: the operator, ongoing.',
          'Who restocks prizes — Buying: you, indefinitely. Renting: included for the event. Placement: the operator.',
          'Who keeps the revenue — Buying: you keep all of it. Renting: not applicable. Placement: depends on the arrangement — free-play means no revenue for anyone, coin-play is discussed up front.',
          'Commitment — Buying: you own an asset. Renting: hours or a day. Placement: none; the machine can be removed.',
          'Best for — Buying: amusement-first businesses. Renting: one-time events. Placement: businesses where people wait.',
        ],
      },
      { type: 'h2', text: 'The question that settles it' },
      {
        type: 'p',
        text: 'Ask yourself whether you want to be in the claw machine business or whether you want a claw machine in your business. Those are completely different commitments. If the answer is the second one, buying equipment is solving a problem you do not have.',
      },
      {
        type: 'p',
        text: 'We place and service machines across the San Francisco Bay Area and San Diego. If your space is a fit, there is no cost to find out — and if it is not a fit, we will tell you that instead of installing a machine that sits idle.',
      },
      {
        type: 'callout',
        text: 'Not sure which of the three makes sense for your space? Tell us about it and we will give you a straight answer.',
        cta: { label: 'Request a free machine', href: '/#contact' },
      },
    ],
    faqs: [
      {
        q: 'How much does it cost to buy a claw machine for a business?',
        a: 'A commercial-grade claw machine typically costs $2,000 to $5,000 new, and premium cabinets go past $7,000. Used machines cost less. Beyond the purchase price you also take on prizes, repairs, tuning, and cash handling indefinitely.',
      },
      {
        q: 'Can I get a claw machine for my business without buying one?',
        a: 'Yes. Operators place machines in qualifying businesses at no cost — they own the machine, handle delivery, maintenance, and restocking, and you provide floor space and a power outlet. There is no purchase, no rental fee, and no long-term contract.',
      },
      {
        q: 'Is buying a claw machine ever a better option than free placement?',
        a: 'Yes, in specific cases. If amusement is your core business, if you need full control of the prizes for branding or merchandising, if you already run an equipment route, or if you have very high predictable traffic, owning the machine and keeping all the revenue can outweigh the servicing burden.',
      },
      {
        q: 'What is the difference between renting a claw machine and having one placed?',
        a: 'A rental covers a specific date — a party, a grand opening, a trade show — and runs on an hourly or daily package. A placement is permanent: the machine stays in your business, the operator services it, and there is no fee to the business.',
      },
      {
        q: 'What are the hidden costs of owning a claw machine?',
        a: 'Prize sourcing and restocking, mechanical repairs to the claw and coin mechanism, payout tuning so the machine stays winnable but sustainable, cash collection and banking, and your own time managing all of it. These recurring costs usually matter more than the purchase price.',
      },
      {
        q: 'Do I need a contract for a free claw machine placement?',
        a: 'Not with us. There is no lock-in period. If the machine is not working in your space we remove it, with no penalty and no notice period required.',
      },
      {
        q: 'How much space does a claw machine need?',
        a: 'Plan for roughly a 3-by-3-foot footprint on a level surface, plus a few feet of clearance in front for people to play. Compact mini machines fit tighter spots like a counter end or a narrow corner.',
      },
      {
        q: 'Where do you place machines?',
        a: 'We place and service machines throughout the San Francisco Bay Area and greater San Diego. If you are outside those areas, reach out anyway — we are always evaluating where to expand.',
      },
    ],
  },
  {
    slug: 'free-claw-machine-in-your-laundromat',
    title: 'Free Claw Machines in Laundromats: What They Earn and What They Need',
    excerpt:
      'Laundromats are the strongest claw machine placement there is — customers are stuck for 30 to 90 minutes, every week, often with kids. A machine here generally brings in $200 to $1,000 a month. Here is what drives that.',
    category: 'Business Placement',
    readTime: '10 min read',
    publishedAt: '2026-08-26',
    updatedAt: '2026-08-26',
    metaDescription:
      'A claw machine in a laundromat generally brings in $200 to $1,000 a month in gross play. What drives that range, how customers pay, and what the machine needs for space, power, and supervision.',
    content: [
      {
        type: 'p',
        text: 'Laundromats are the best-performing place to put a claw machine, and it is not close. The reason is simple: your customers cannot leave. A wash-and-dry cycle is 30 to 90 minutes of waiting that nobody chose, it repeats every week, and it very often involves kids who are bored out of their minds. No other type of business hands a machine that much captive attention.',
      },
      { type: 'h2', text: 'Why laundromats outperform every other placement' },
      {
        type: 'p',
        text: 'Most host businesses give a machine a few minutes of a customer’s attention. A laundromat gives it an hour, and then does it again next week. Three things stack up here that do not stack anywhere else:',
      },
      {
        type: 'list',
        items: [
          'The wait is forced, not optional. In a cafe, a customer who is bored leaves. In a laundromat, their clothes are in the machine. They are staying either way, so the only question is what they do with the time.',
          'The visit repeats on a schedule. Laundry is weekly for most people. That turns a one-time novelty into a recurring habit, which is the difference between a machine that spikes and a machine that earns steadily.',
          'Kids come along. Parents doing laundry with children in tow are the single most reliable source of play. The machine is not competing for attention — it is rescuing a parent from forty minutes of "I am bored."',
        ],
      },
      { type: 'h2', text: 'What a machine actually earns' },
      {
        type: 'p',
        text: 'A claw machine in a laundromat generally brings in $200 to $1,000 a month in gross play. That range is wide because it is doing a lot of work — the difference between the bottom and the top of it is almost entirely about the store, not the machine.',
      },
      {
        type: 'p',
        text: 'What moves a location up or down that range:',
      },
      {
        type: 'list',
        items: [
          'Daily foot traffic. The number of separate customers matters more than total loads. Twenty people doing one load each beats five people doing four.',
          'How family-heavy the customer base is. A store in a neighborhood with young families will outperform a store serving mostly single adults, by a wide margin.',
          'Attended versus unattended hours. Machines in attended stores get played more, get damaged less, and stay in service longer.',
          'Prize quality. This is the one people underestimate. A machine stocked with recognizable, current plush gets played several times more than the same machine full of generic filler.',
          'How easy it is to pay. Our machines take cards, cash, and coins, so nobody has to go hunting for quarters to play — which matters more than it sounds, because most people will simply walk away rather than go looking for change.',
        ],
      },
      { type: 'h3', text: 'What the laundromat actually keeps' },
      {
        type: 'p',
        text: 'That depends on how the machine is set up, and it is worth being clear about, because "free machine" and "extra revenue" are two different promises:',
      },
      {
        type: 'list',
        items: [
          'Free-play. Guests play at no charge. There is no coin revenue for anyone — the machine is purely an amenity that makes your store the one families choose. Some owners prefer this because there is nothing to split, count, or discuss.',
          'Coin-play. Guests pay per turn. This is where a revenue conversation happens, and we have it up front rather than after installation. Splits in this industry commonly run somewhere in the 10 to 30 percent range to the location, or a flat arrangement, depending on traffic and who handles what.',
        ],
      },
      {
        type: 'p',
        text: 'Either way, the machine costs the laundromat nothing. We own it, deliver it, service it, and restock it.',
      },
      { type: 'h2', text: 'How customers pay' },
      {
        type: 'p',
        text: 'Our machines take cards, cash, and coins. That means it does not matter whether your store still runs on quarters, has gone fully cashless, or sits somewhere in between — the machine handles payment on its own and does not need to be tied into whatever system your washers and dryers use.',
      },
      {
        type: 'p',
        text: 'This matters more than it sounds. A customer who has to go find change to play is a customer who does not play, and in a store where people have stopped carrying quarters that is most of them. Taking cards removes the step entirely.',
      },
      { type: 'h2', text: 'Space and power' },
      {
        type: 'p',
        text: 'A standard machine needs roughly a 3-by-3-foot footprint on a level floor, plus a few feet of clearance in front so a player is not standing in a walkway. It plugs into a standard 110V wall outlet — no dedicated circuit, no special wiring, nothing that involves an electrician. If your only free wall is across the store from an outlet, tell us and we will plan for it.',
      },
      {
        type: 'p',
        text: 'For tight stores, a compact mini machine fits places a full cabinet will not — the end of a folding table run, a narrow entry wall, the gap beside a vending bank. If you are short on floor, that is a layout question, not a disqualifier.',
      },
      { type: 'h3', text: 'Where to put it' },
      {
        type: 'list',
        items: [
          'In sightline of the seating area, so waiting customers see it without going looking for it.',
          'Not in a path between the washers and the dryers, where people are carrying full baskets.',
          'Under existing light and, where you have them, in view of your cameras.',
          'Away from the folding tables, so a crowd around the machine does not crowd the people working.',
        ],
      },
      { type: 'h2', text: 'Loitering, supervision, and unattended hours' },
      {
        type: 'p',
        text: 'Worth addressing directly, because it is the most common hesitation we hear from laundromat owners and it is a fair one.',
      },
      {
        type: 'p',
        text: 'A claw machine does draw people toward it, and in an unattended store at 11pm that can mean kids hanging around the machine rather than doing laundry. In practice this looks a lot like the concern owners already have about vending and arcade equipment, and the same things address it: put the machine where your cameras cover it, keep it in a well-lit part of the floor, and if your store has unattended overnight hours, know that machines in attended stores hold up better. If loitering is already a problem in your store, adding an attraction near the entrance is not the fix, and we will say so.',
      },
      { type: 'h2', text: 'What happens if it does not work out' },
      {
        type: 'p',
        text: 'We remove it. There is no contract, no penalty, and no notice period — you tell us, we schedule a pickup, and you have your floor space back. That is deliberate: we would rather earn the spot by having the machine actually perform than lock a store into keeping something that is not working.',
      },
      {
        type: 'callout',
        text: 'Run a laundromat in the San Francisco Bay Area or San Diego? Tell us about your store and we will tell you if it is a fit.',
        cta: { label: 'Request a free machine', href: '/#contact' },
      },
    ],
    faqs: [
      {
        q: 'How much does a claw machine make in a laundromat?',
        a: 'A claw machine in a laundromat generally brings in $200 to $1,000 a month in gross play. Where a specific store lands in that range depends mostly on daily foot traffic, how many customers bring children, attended versus unattended hours, prize quality, and how easy it is to pay.',
      },
      {
        q: 'Does a claw machine work if my laundromat is cashless?',
        a: 'Yes. Our machines take cards, cash, and coins, so customers can play whether or not they are carrying quarters. The machine handles payment on its own and does not need to be connected to the system your washers and dryers run on.',
      },
      {
        q: 'How much space does a claw machine need in a laundromat?',
        a: 'About a 3-by-3-foot footprint on level floor, plus a few feet of clearance in front so players are not standing in a walkway. A compact mini machine fits tighter spots such as a narrow entry wall or the end of a folding table run.',
      },
      {
        q: 'What are the power requirements?',
        a: 'A standard 110V wall outlet. No dedicated circuit, no special wiring, and no electrician needed. If the nearest outlet is far from the spot you have in mind, mention it and we will plan the placement around it.',
      },
      {
        q: 'Will a claw machine cause loitering in my laundromat?',
        a: 'It draws attention, which is the point, but it can mean people gathering near the machine during unattended hours. Placing it under good lighting and camera coverage addresses most of it. If your store already has a loitering problem, an attraction near the entrance is not the right fix and we will tell you so.',
      },
      {
        q: 'Who restocks the prizes and fixes the machine?',
        a: 'We do, on our own schedule. We monitor prize levels and mechanical health and come by proactively rather than waiting for a complaint. Your staff never needs to open the machine, order plush, or call a repair line.',
      },
      {
        q: 'Does the laundromat make money from the machine?',
        a: 'It depends on the setup. Free-play produces no coin revenue for anyone and serves purely as an amenity that keeps families choosing your store. Coin-play generates play revenue, and how that is handled is agreed up front during onboarding rather than after installation.',
      },
      {
        q: 'Can I have the machine removed later?',
        a: 'Yes, at any time. There is no contract, no penalty, and no notice period required — just let us know and we will coordinate a pickup.',
      },
    ],
  },
  {
    slug: 'free-claw-machine-for-your-restaurant',
    title: 'Free Claw Machines in Restaurants: What They Actually Do for a Dining Room',
    excerpt:
      'In a restaurant the machine is not a revenue line — it is a wait-management tool. Here is the case for one, where it goes, and the honest answer on whether it cheapens your room.',
    category: 'Business Placement',
    readTime: '9 min read',
    publishedAt: '2026-08-26',
    updatedAt: '2026-08-26',
    metaDescription:
      'Why restaurants put in claw machines: fewer walkouts at the host stand, calmer tables with kids, and longer visits. Placement, free-play versus coin-play, and which restaurant segments it fits.',
    content: [
      {
        type: 'p',
        text: 'If you run a restaurant and someone pitches you a claw machine on the quarters it collects, ignore them. The coin drop is not the point and it never will be — in a restaurant, the machine is a wait-management tool. It exists to keep a party from walking out of your lobby and to keep a table from turning into a meltdown. Both of those are worth more than a jar of change.',
      },
      { type: 'h2', text: 'Two different waits, one machine' },
      {
        type: 'p',
        text: 'A restaurant has two waits, and they are nothing alike. The machine helps with both, but for different reasons.',
      },
      { type: 'h3', text: 'The host stand wait' },
      {
        type: 'p',
        text: 'This is the expensive one. A party of four is quoted twenty-five minutes, stands in a crowded entryway with nothing to do, and after eight minutes somebody says "let us just go somewhere else." That walkout is not a lost jar of quarters. It is a lost check, and on a Friday night it is a lost check you cannot backfill because the table stays empty through your peak.',
      },
      {
        type: 'p',
        text: 'The value of anything in your waiting area is measured in how much longer a party will tolerate standing there. A machine gives the kids something to do and gives the adults something to watch, and a wait that people are participating in feels shorter than a wait they are enduring.',
      },
      { type: 'h3', text: 'The wait at the table' },
      {
        type: 'p',
        text: 'The second wait is the gap between ordering and food arriving, with restless children at the table. This is where families cut visits short — the check gets asked for early, dessert never gets ordered, and the party leaves at minute twenty-five instead of minute forty.',
      },
      {
        type: 'p',
        text: 'A machine in sightline of the dining room gives parents a release valve. One adult walks a kid over for two minutes, the table resets, and the meal continues at a normal pace. That is the mechanism — not more revenue per guest, but the visit reaching its natural length instead of getting cut short.',
      },
      { type: 'h2', text: 'Why the coin drop is the wrong number' },
      {
        type: 'p',
        text: 'Do the comparison honestly. A claw machine in a restaurant might take a modest amount in play across a month. One party of four that stays for dessert instead of leaving early, or one party that waits out a Friday rush instead of walking, is worth a meaningful fraction of that on a single night.',
      },
      {
        type: 'p',
        text: 'Which is why we generally do not recommend that restaurants think about this as a revenue stream at all. If a machine in your lobby earns you nothing in coins and reduces your walkouts, it did its job.',
      },
      { type: 'h2', text: 'Free-play or coin-play?' },
      {
        type: 'p',
        text: 'In restaurants we lean toward free-play more than in any other type of business, and the reasoning is about the room rather than the money:',
      },
      {
        type: 'list',
        items: [
          'Free-play reads as hospitality. A machine your guests can play while they wait is a perk you are extending. A machine that asks a waiting guest for money reads as an upsell in the one moment they are already mildly annoyed with you.',
          'It removes friction entirely. No change, no card, no app, no guest asking your host for quarters during a rush.',
          'It fits how restaurants already think about waiting areas. Nobody charges for the bowl of mints.',
          'Coin-play still makes sense in some rooms — family-casual restaurants with a dedicated game corner, or places where an arcade element is already part of the concept.',
        ],
      },
      { type: 'h2', text: 'Where the machine goes' },
      {
        type: 'p',
        text: 'Placement matters more in a restaurant than anywhere else we work, because your floor is already doing several jobs at once:',
      },
      {
        type: 'list',
        items: [
          'In or beside the waiting area, visible from the host stand, so the host can keep an eye on kids without leaving the podium.',
          'Never in an egress path. Your exits, aisles, and accessible routes have to stay clear — this is a code question before it is a design question, and it is the first thing we check on a walkthrough.',
          'Out of server paths. Anywhere a runner carries hot plates is not a place for a crowd of children to gather.',
          'Not blocking the point of sale or the door. A machine that creates a knot of people at your entrance during a rush is a problem, not an amenity.',
          'Against a wall with an outlet, on a level floor, with a few feet of clearance in front.',
        ],
      },
      { type: 'h2', text: 'Does it cheapen the room?' },
      {
        type: 'p',
        text: 'Sometimes, yes. We would rather say that plainly than install a machine that fights your concept.',
      },
      {
        type: 'list',
        items: [
          'Family casual, pizza, diners, breakfast spots, taquerias, counter-service — a good fit. Your guests already expect a relaxed room, and the machine reads as part of the hospitality.',
          'Brewpubs, sports bars, and casual neighborhood spots — usually a good fit, especially where there is already a dartboard, a pinball cabinet, or a jukebox. The machine is not out of place in a room that already has games in it.',
          'Fine dining and upscale rooms — no. A claw machine in a room with white tablecloths is working against everything else you have spent money on. We will not pretend otherwise to place a machine.',
          'Small dining rooms with no waiting area — usually no. If nobody waits, the machine has no job to do, and it is just taking up covers.',
        ],
      },
      { type: 'h2', text: 'The practical objections' },
      { type: 'h3', text: 'Noise during service' },
      {
        type: 'p',
        text: 'A claw machine has attract sounds and play sounds. Volume is adjustable, and in restaurants we set it low or off by default — the visual draw does the work in a room where people are already looking around. If your dining room is quiet enough that this matters, tell us and we will set it accordingly on install.',
      },
      { type: 'h3', text: 'Cleanliness' },
      {
        type: 'p',
        text: 'It is a glass box in a room where people eat, and it will get handprints. We clean it on every service visit, and your staff can wipe it down with whatever they already use on the front-of-house glass. It is not a food-contact surface and it does not add anything to your health inspection that a jukebox or a vending machine would not.',
      },
      { type: 'h3', text: 'Kids playing unsupervised' },
      {
        type: 'p',
        text: 'This is why sightline from the host stand matters. A machine tucked around a corner becomes a place where children are out of view of both their parents and your staff. Put it where it can be seen from the podium and the problem mostly disappears.',
      },
      { type: 'h2', text: 'What it costs you' },
      {
        type: 'p',
        text: 'Nothing. We own the machine, deliver and install it, service it, and restock the prizes on our own schedule. Your restaurant provides floor space and an outlet. There is no contract, and if it turns out to be wrong for your room we remove it.',
      },
      {
        type: 'callout',
        text: 'Run a restaurant in the San Francisco Bay Area or San Diego? Tell us about your waiting area and we will tell you honestly whether it fits.',
        cta: { label: 'Request a free machine', href: '/#contact' },
      },
    ],
    faqs: [
      {
        q: 'Why would a restaurant put in a claw machine?',
        a: 'To manage two waits: the wait at the host stand, where bored parties walk out and cost you a full check, and the wait at the table with restless kids, which cuts family visits short. The machine gives waiting guests something to do so visits reach their natural length.',
      },
      {
        q: 'Should a restaurant run the machine free-play or coin-play?',
        a: 'Free-play usually fits better. It reads as hospitality rather than an upsell to a guest who is already waiting, and it removes any friction around change or apps during a rush. Coin-play makes more sense in family-casual rooms that already have a dedicated game area.',
      },
      {
        q: 'Where should a claw machine go in a restaurant?',
        a: 'In or beside the waiting area, visible from the host stand, out of server paths, and never in an egress route. It needs a level spot against a wall with an outlet and a few feet of clearance in front so players are not standing in a walkway.',
      },
      {
        q: 'Will a claw machine cheapen my dining room?',
        a: 'In a fine dining or upscale room, yes — we will tell you not to do it. In family casual, pizza, diners, breakfast spots, counter service, brewpubs, and sports bars it reads as part of the hospitality and fits the room.',
      },
      {
        q: 'Is a claw machine noisy in a dining room?',
        a: 'The attract and play sounds are adjustable, and in restaurants we set the volume low or off by default. The machine draws attention visually in a room where guests are already looking around, so it does not need to be audible to work.',
      },
      {
        q: 'Is there a health code problem with a claw machine in a restaurant?',
        a: 'It is not a food-contact surface and generally raises no more of an issue than a vending machine or a jukebox. The real code consideration is egress — the machine cannot sit in an exit path or block an accessible route, which we check during the walkthrough.',
      },
      {
        q: 'What does it cost the restaurant?',
        a: 'Nothing. We own the machine and cover delivery, installation, maintenance, and prize restocking. The restaurant provides floor space and a power outlet, with no rental fee and no long-term contract.',
      },
      {
        q: 'What if it does not work in my restaurant?',
        a: 'We remove it. There is no penalty and no notice period — you tell us, we schedule a pickup, and you get the floor space back.',
      },
    ],
  },
  {
    slug: 'free-claw-machine-for-your-boba-shop',
    title: 'Free Claw Machines in Boba Shops: Why the Prize Mix Decides Everything',
    excerpt:
      'Your customers are young, social, and choosing between four near-identical shops. A claw machine is a reason to pick yours — but only if the prizes are right and the machine is tuned fairly.',
    category: 'Business Placement',
    readTime: '9 min read',
    publishedAt: '2026-08-26',
    updatedAt: '2026-08-26',
    metaDescription:
      'How a claw machine works in a boba shop: differentiation against nearby competitors, prize curation for a young crowd, mini machines for tight footprints, and where to put it without blocking the register.',
    content: [
      {
        type: 'p',
        text: 'A boba shop has a different problem than a laundromat or a restaurant. Your wait is short — five to ten minutes — so you are not solving boredom. Your problem is that there are three other shops within walking distance selling a very similar drink at a very similar price, and your customers are deciding between them on feel. A claw machine is one of the cheapest ways to be the one they pick.',
      },
      { type: 'h2', text: 'The real problem is choice, not waiting' },
      {
        type: 'p',
        text: 'Boba is a category where the product differences are small and the customer is loyal to a vibe rather than a recipe. Your customers are largely teenagers and young adults, they come in groups, they come often, and where they go is a group decision made in about four seconds.',
      },
      {
        type: 'p',
        text: 'That decision gets made on things like: which shop has the seating, which one has the better music, which one is more fun to be in. A claw machine is a concrete, visible answer to "why here instead of there" — and unlike a loyalty app or a discount, it does not cost you margin on every drink.',
      },
      { type: 'h2', text: 'Your customers know claw machines' },
      {
        type: 'p',
        text: 'This is the part that makes boba shops different from every other placement, and it is worth taking seriously.',
      },
      {
        type: 'p',
        text: 'This demographic has played a lot of claw machines. They have been to the arcades, they have seen the machines in the Asian supermarkets and the mall, and a meaningful number of them have watched videos about how the claw strength settings work. They will know within two plays whether your machine is tuned to be winnable or tuned to be a coin trap.',
      },
      {
        type: 'p',
        text: 'A machine that never pays out does not just fail to earn — it actively costs you. Word gets around a group of regulars fast, and "that shop has the rigged claw machine" is a worse reputation than having no machine at all. We tune for a real win rate for exactly this reason, and it is the main thing we would tell any shop owner buying their own machine to get right.',
      },
      { type: 'h2', text: 'Prize mix decides everything' },
      {
        type: 'p',
        text: 'In a laundromat, a machine full of generic plush still gets played, because the alternative is staring at a dryer. In a boba shop there is no captive wait to fall back on. The prizes have to be worth wanting on their own, or the machine gets ignored.',
      },
      {
        type: 'list',
        items: [
          'Character and licensed-style plush strongly outperforms generic filler with this crowd. Recognizable beats cute.',
          'Current matters. This demographic tracks what is popular closely, and a prize mix that was right eighteen months ago reads as stale.',
          'Size variety helps. A mix of small easy grabs and one or two larger centerpiece prizes gives the machine a reason to be looked at and a reason to be attempted.',
          'Presentation counts. A well-packed machine looks abundant. A half-empty one looks abandoned, and nobody plays a machine that looks abandoned.',
        ],
      },
      {
        type: 'p',
        text: 'We restock and rotate on our own schedule, and prize mix is something we will actively adjust for a shop based on what is moving. If your customers are skewing younger or older than we assumed, tell us — that is a two-minute conversation that changes what goes in the machine.',
      },
      { type: 'h2', text: 'Footprint: why the mini machine matters here' },
      {
        type: 'p',
        text: 'Boba shops are small and the rent per square foot is brutal. A full-size cabinet at roughly three by three feet is real estate you may not want to give up, and we are not going to pretend that is nothing.',
      },
      {
        type: 'p',
        text: 'This is where the compact mini machine earns its place. It fits spots a full cabinet cannot: the end of a counter, a narrow wall by the pickup area, the dead corner next to the door that currently holds nothing. If floor space is your hesitation, the honest answer is usually that we are talking about a much smaller commitment than you are picturing.',
      },
      { type: 'h2', text: 'Where it goes without wrecking your queue' },
      {
        type: 'p',
        text: 'The one way a machine genuinely hurts a boba shop is by getting in the way of the line. Your ordering queue and your pickup crowd already collide during a rush, and adding a third cluster of people in the wrong spot makes the room feel chaotic rather than fun.',
      },
      {
        type: 'list',
        items: [
          'Put it past the pickup counter, not before the register. People should encounter it after they have ordered, in the space where they are already standing around waiting for a name to be called.',
          'Keep it off the queue wall. Whichever wall your line forms along is the one wall the machine should not be on.',
          'Near the seating, if you have seating. Groups who sit down are the ones most likely to get up and play.',
          'Not in the doorway. A machine visible from outside is good; a machine that creates a bottleneck at the entrance is not.',
        ],
      },
      { type: 'h2', text: 'Coin-play or free-play?' },
      {
        type: 'p',
        text: 'Either works here, and it depends on what you want the machine to do:',
      },
      {
        type: 'list',
        items: [
          'Coin-play suits shops with steady walk-in volume and a crowd that lingers. This group is used to paying to play — it is a normal part of how they already spend time — and it does not read as an upsell the way it might in a restaurant lobby.',
          'Free-play suits shops using the machine purely as a draw, or running it as a promotion — a free play with a drink purchase, for example, which turns the machine into a reason to buy rather than a separate transaction.',
          'You can switch. If the first choice is not working, we change it. This is not a decision you are locked into.',
        ],
      },
      { type: 'h2', text: 'The social media effect, honestly' },
      {
        type: 'p',
        text: 'Claw machines get filmed. A win is a small, self-contained moment with a satisfying ending, which is close to the ideal shape for a short video, and this customer base posts constantly.',
      },
      {
        type: 'p',
        text: 'What we will not do is promise you a viral moment. Most placements produce a steady trickle of tagged posts and stories rather than one big spike, and the value is cumulative — your shop shows up in your customers’ feeds attached to something fun, repeatedly, without you running an ad. That is worth having. It is not a marketing strategy on its own.',
      },
      { type: 'h2', text: 'What it costs you' },
      {
        type: 'p',
        text: 'Nothing. We own the machine, deliver and install it, maintain it, and keep it stocked. You provide the floor space and an outlet — a standard 110V wall socket, no special wiring. No contract, and if it is not working for your shop we take it back out.',
      },
      {
        type: 'callout',
        text: 'Run a boba shop or cafe in the San Francisco Bay Area or San Diego? Tell us your footprint and we will tell you which machine fits.',
        cta: { label: 'Request a free machine', href: '/#contact' },
      },
    ],
    faqs: [
      {
        q: 'Why would a boba shop want a claw machine?',
        a: 'Because the problem in boba is not waiting, it is choice. Customers pick between several near-identical shops within walking distance, largely on atmosphere. A claw machine is a visible, concrete reason to choose your shop, and unlike a discount or a loyalty program it does not cost you margin on every drink.',
      },
      {
        q: 'Will a claw machine fit in a small boba shop?',
        a: 'Usually yes. A full-size cabinet needs roughly three by three feet, but the compact mini machine fits spots a full cabinet cannot — the end of a counter, a narrow wall by the pickup area, or a dead corner near the door. Tell us your footprint and we will match a machine to it.',
      },
      {
        q: 'What prizes work best in a boba shop?',
        a: 'Character and licensed-style plush strongly outperforms generic filler with a young crowd, and the mix has to stay current — this demographic tracks what is popular closely. A range of small grabs plus one or two larger centerpiece prizes works best, and the machine should always look well stocked.',
      },
      {
        q: 'Where should the machine go so it does not block the line?',
        a: 'Past the pickup counter rather than before the register, and off whichever wall your ordering queue forms along. Customers should encounter it after ordering, in the space where they are already waiting for their name to be called, ideally near seating if you have it.',
      },
      {
        q: 'Should a boba shop run the machine coin-play or free-play?',
        a: 'Coin-play suits shops with steady walk-in volume and customers who linger, since this crowd is used to paying to play. Free-play suits shops using the machine as a pure draw, or as a promotion such as a free play with a drink purchase. You can switch between them later.',
      },
      {
        q: 'Are your machines tuned to be winnable?',
        a: 'Yes, and it matters more in boba shops than anywhere else. This customer base has played a lot of claw machines and will recognize a coin trap within two plays. A machine with a reputation for never paying out is worse for a shop than having no machine at all.',
      },
      {
        q: 'What does it cost the shop?',
        a: 'Nothing. We own the machine and cover delivery, installation, maintenance, and prize restocking. You provide floor space and a standard 110V outlet, with no rental fee and no long-term contract.',
      },
      {
        q: 'Do you place machines in cafes too?',
        a: 'Yes. Cafes, boba shops, juice bars, and dessert shops all work on the same logic — a short wait, a young or family-heavy crowd, and nearby competition selling something similar. We place and service machines across the San Francisco Bay Area and San Diego.',
      },
    ],
  },
]

export function getPostBySlug(slug: string): Post | undefined {
  return posts.find((p) => p.slug === slug)
}
