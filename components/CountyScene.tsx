// Flat brand-styled illustrations, one landmark per county, each with the
// California Claw cabinet in the foreground for brand cohesion.

const NAVY = '#003262'
const GOLD = '#FDB515'
const CORAL = '#FF6B5E'
const SKY = '#B8E3F5'
const CREAM = '#FFF9EF'
const WHITE = '#FFFFFF'

function ClawMachine() {
  // Small cabinet, bottom-right foreground
  return (
    <g transform="translate(348 214)">
      <rect x="0" y="0" width="86" height="118" rx="14" fill={WHITE} stroke={NAVY} strokeWidth="4" />
      <rect x="10" y="10" width="66" height="20" rx="6" fill={NAVY} />
      <text x="43" y="24" textAnchor="middle" fontSize="9" fontWeight="700" fill={GOLD} fontFamily="sans-serif">
        CLAW
      </text>
      <rect x="10" y="36" width="66" height="46" rx="8" fill={SKY} stroke={NAVY} strokeWidth="2" />
      <circle cx="26" cy="66" r="6" fill={CORAL} />
      <circle cx="40" cy="68" r="6" fill={GOLD} />
      <circle cx="54" cy="66" r="6" fill={CORAL} />
      {/* claw */}
      <line x1="43" y1="36" x2="43" y2="48" stroke={NAVY} strokeWidth="2" />
      <path d="M39 48 l4 6 l4 -6" fill="none" stroke={NAVY} strokeWidth="2" strokeLinecap="round" />
      <rect x="10" y="90" width="30" height="16" rx="4" fill={CORAL} />
      <rect x="46" y="90" width="30" height="16" rx="4" fill={GOLD} />
    </g>
  )
}

function Scene({ children }: { children: React.ReactNode }) {
  return (
    <svg viewBox="0 0 480 360" className="w-full h-auto" role="img" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <clipPath id="frame">
          <rect x="4" y="4" width="472" height="352" rx="28" />
        </clipPath>
        <linearGradient id="sky" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor={CREAM} />
          <stop offset="1" stopColor={SKY} />
        </linearGradient>
      </defs>
      <rect x="4" y="4" width="472" height="352" rx="28" fill="url(#sky)" />
      <g clipPath="url(#frame)">{children}</g>
      <rect x="4" y="4" width="472" height="352" rx="28" fill="none" stroke={NAVY} strokeWidth="4" />
    </svg>
  )
}

function GoldenGate() {
  return (
    <>
      <circle cx="110" cy="86" r="34" fill={GOLD} />
      {/* fog band */}
      <rect x="0" y="150" width="480" height="26" fill={WHITE} opacity="0.55" />
      {/* water */}
      <rect x="0" y="250" width="480" height="110" fill={SKY} />
      <path d="M0 250 q120 16 240 0 t240 0 v40 H0 Z" fill={NAVY} opacity="0.12" />
      {/* bridge towers */}
      <g fill={CORAL}>
        <rect x="150" y="70" width="18" height="200" rx="4" />
        <rect x="300" y="70" width="18" height="200" rx="4" />
      </g>
      <g stroke={CORAL} strokeWidth="5" fill="none" strokeLinecap="round">
        <path d="M60 150 Q159 90 258 150" />
        <path d="M258 150 Q307 118 356 150" />
        <path d="M356 150 Q420 128 470 150" />
        <line x1="60" y1="150" x2="420" y2="150" />
      </g>
      <rect x="0" y="150" width="480" height="6" fill={CORAL} />
    </>
  )
}

function Peninsula() {
  return (
    <>
      <circle cx="380" cy="76" r="30" fill={GOLD} />
      {/* hills */}
      <path d="M0 150 q120 -50 260 -10 t220 -6 V220 H0 Z" fill={NAVY} opacity="0.14" />
      {/* bay */}
      <rect x="0" y="214" width="480" height="146" fill={SKY} />
      <path d="M0 214 q120 14 240 0 t240 0 v40 H0 Z" fill={NAVY} opacity="0.1" />
      {/* Caltrain */}
      <g transform="translate(40 176)">
        <rect x="0" y="0" width="150" height="40" rx="8" fill={NAVY} />
        <rect x="0" y="4" width="30" height="20" rx="5" fill={GOLD} />
        <rect x="42" y="8" width="24" height="16" rx="3" fill={SKY} />
        <rect x="74" y="8" width="24" height="16" rx="3" fill={SKY} />
        <rect x="106" y="8" width="24" height="16" rx="3" fill={SKY} />
        <circle cx="34" cy="44" r="7" fill={NAVY} />
        <circle cx="118" cy="44" r="7" fill={NAVY} />
      </g>
      <rect x="20" y="222" width="240" height="4" fill={NAVY} opacity="0.4" />
    </>
  )
}

function SiliconValley() {
  return (
    <>
      <circle cx="96" cy="80" r="32" fill={GOLD} />
      {/* rolling gold hills */}
      <path d="M0 200 q120 -46 240 -10 t240 -14 V300 H0 Z" fill={GOLD} opacity="0.35" />
      <path d="M0 240 q140 -30 280 0 t200 -8 V360 H0 Z" fill={NAVY} opacity="0.12" />
      {/* glass campus building */}
      <g transform="translate(150 150)">
        <rect x="0" y="0" width="150" height="110" rx="8" fill={WHITE} stroke={NAVY} strokeWidth="3" />
        <g fill={SKY}>
          <rect x="12" y="14" width="28" height="20" rx="3" />
          <rect x="52" y="14" width="28" height="20" rx="3" />
          <rect x="92" y="14" width="28" height="20" rx="3" />
          <rect x="12" y="44" width="28" height="20" rx="3" />
          <rect x="52" y="44" width="28" height="20" rx="3" />
          <rect x="92" y="44" width="28" height="20" rx="3" />
          <rect x="12" y="74" width="28" height="20" rx="3" />
          <rect x="52" y="74" width="28" height="20" rx="3" />
          <rect x="92" y="74" width="28" height="20" rx="3" />
        </g>
      </g>
      {/* palm */}
      <g transform="translate(70 176)" stroke={NAVY} strokeWidth="6" strokeLinecap="round">
        <line x1="20" y1="84" x2="20" y2="20" />
        <path d="M20 20 q-24 -8 -36 4" fill="none" />
        <path d="M20 20 q24 -8 36 4" fill="none" />
        <path d="M20 20 q-10 -22 4 -30" fill="none" />
        <path d="M20 20 q10 -22 -4 -30" fill="none" />
      </g>
    </>
  )
}

function Marin() {
  return (
    <>
      <circle cx="384" cy="74" r="28" fill={GOLD} />
      {/* Mount Tam */}
      <path d="M40 210 L150 70 L210 150 L260 110 L360 210 Z" fill={NAVY} opacity="0.7" />
      <path d="M120 118 l30 -48 l24 32 Z" fill={WHITE} opacity="0.6" />
      {/* water */}
      <rect x="0" y="210" width="480" height="150" fill={SKY} />
      <path d="M0 210 q120 16 240 0 t240 0 v40 H0 Z" fill={NAVY} opacity="0.1" />
      {/* redwoods */}
      <g fill={NAVY}>
        <polygon points="60,210 74,150 88,210" />
        <polygon points="86,210 100,140 114,210" />
      </g>
      {/* sailboat */}
      <g transform="translate(250 214)">
        <path d="M0 20 h60 l-10 20 h-40 Z" fill={WHITE} stroke={NAVY} strokeWidth="2" />
        <line x1="30" y1="20" x2="30" y2="-22" stroke={NAVY} strokeWidth="3" />
        <path d="M30 -20 L58 16 L30 16 Z" fill={CORAL} />
      </g>
    </>
  )
}

function Oakland() {
  return (
    <>
      <circle cx="96" cy="76" r="30" fill={GOLD} />
      {/* Bay Bridge cables */}
      <g stroke={NAVY} strokeWidth="4" fill="none" opacity="0.5">
        <path d="M0 150 Q80 110 160 150" />
        <line x1="0" y1="150" x2="160" y2="150" />
        <line x1="40" y1="132" x2="40" y2="150" />
        <line x1="80" y1="124" x2="80" y2="150" />
        <line x1="120" y1="132" x2="120" y2="150" />
      </g>
      {/* water */}
      <rect x="0" y="214" width="480" height="146" fill={SKY} />
      {/* port cranes */}
      <g transform="translate(210 96)" stroke={NAVY} strokeWidth="6" fill="none" strokeLinejoin="round">
        <path d="M20 118 V40 h70 l16 -18 M90 40 v20" />
        <line x1="20" y1="118" x2="0" y2="118" />
        <line x1="20" y1="118" x2="40" y2="118" />
      </g>
      <g transform="translate(280 96)" stroke={NAVY} strokeWidth="6" fill="none" strokeLinejoin="round">
        <path d="M20 118 V40 h70 l16 -18 M90 40 v20" />
        <line x1="20" y1="118" x2="0" y2="118" />
        <line x1="20" y1="118" x2="40" y2="118" />
      </g>
      {/* containers */}
      <g>
        <rect x="196" y="196" width="40" height="20" fill={CORAL} />
        <rect x="238" y="196" width="40" height="20" fill={GOLD} />
        <rect x="216" y="174" width="40" height="20" fill={NAVY} />
      </g>
    </>
  )
}

function Diablo() {
  return (
    <>
      <circle cx="384" cy="78" r="28" fill={GOLD} />
      {/* Mount Diablo twin peak */}
      <path d="M20 220 L180 80 L230 130 L300 60 L460 220 Z" fill={NAVY} opacity="0.65" />
      {/* rolling hills */}
      <path d="M0 210 q120 -34 240 -6 t240 -10 V300 H0 Z" fill={GOLD} opacity="0.32" />
      <path d="M0 250 q140 -26 280 2 t200 -6 V360 H0 Z" fill={NAVY} opacity="0.12" />
      {/* little houses */}
      <g transform="translate(70 196)">
        <rect x="0" y="14" width="40" height="30" fill={WHITE} stroke={NAVY} strokeWidth="3" />
        <path d="M-4 14 L20 -4 L44 14 Z" fill={CORAL} stroke={NAVY} strokeWidth="3" strokeLinejoin="round" />
        <rect x="14" y="26" width="12" height="18" fill={NAVY} />
      </g>
      <g transform="translate(130 206)">
        <rect x="0" y="12" width="34" height="26" fill={WHITE} stroke={NAVY} strokeWidth="3" />
        <path d="M-4 12 L17 -4 L38 12 Z" fill={GOLD} stroke={NAVY} strokeWidth="3" strokeLinejoin="round" />
        <rect x="12" y="22" width="10" height="16" fill={NAVY} />
      </g>
    </>
  )
}

function SanDiego() {
  return (
    <>
      <circle cx="384" cy="80" r="36" fill={GOLD} />
      {/* sand */}
      <path d="M0 240 q120 -14 240 0 t240 0 V360 H0 Z" fill={GOLD} opacity="0.4" />
      {/* water */}
      <rect x="0" y="200" width="480" height="52" fill={SKY} />
      <path d="M0 216 q60 -12 120 0 t120 0 t120 0 t120 0" fill="none" stroke={WHITE} strokeWidth="4" opacity="0.7" />
      {/* pier */}
      <g stroke={NAVY} strokeWidth="6" strokeLinecap="round">
        <line x1="20" y1="212" x2="230" y2="212" />
        <line x1="50" y1="212" x2="50" y2="250" />
        <line x1="100" y1="212" x2="100" y2="250" />
        <line x1="150" y1="212" x2="150" y2="250" />
        <line x1="200" y1="212" x2="200" y2="250" />
      </g>
      {/* palms */}
      <g transform="translate(70 150)" stroke={NAVY} strokeWidth="6" strokeLinecap="round" fill="none">
        <line x1="0" y1="70" x2="0" y2="6" />
        <path d="M0 6 q-26 -6 -38 8" />
        <path d="M0 6 q26 -6 38 8" />
        <path d="M0 6 q-10 -24 6 -30" />
        <path d="M0 6 q10 -24 -6 -30" />
      </g>
      <g transform="translate(126 168)" stroke={NAVY} strokeWidth="5" strokeLinecap="round" fill="none">
        <line x1="0" y1="52" x2="0" y2="4" />
        <path d="M0 4 q-20 -4 -30 6" />
        <path d="M0 4 q20 -4 30 6" />
        <path d="M0 4 q-8 -18 4 -24" />
      </g>
    </>
  )
}

const scenes: Record<string, () => React.ReactElement> = {
  'golden-gate': GoldenGate,
  peninsula: Peninsula,
  'silicon-valley': SiliconValley,
  marin: Marin,
  oakland: Oakland,
  diablo: Diablo,
  'san-diego': SanDiego,
}

export default function CountyScene({ scene }: { scene: string }) {
  const Landmark = scenes[scene] ?? GoldenGate
  return (
    <Scene>
      <Landmark />
      <ClawMachine />
    </Scene>
  )
}
