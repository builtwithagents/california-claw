const stats = [
  { value: '100%', label: 'Free service', emoji: '💸', rotate: '-rotate-1' },
  { value: '24/7', label: 'Support', emoji: '📞', rotate: 'rotate-1' },
  { value: '10K+', label: 'Happy players', emoji: '🎉', rotate: '-rotate-1' },
  { value: '50+', label: 'Locations', emoji: '📍', rotate: 'rotate-1' },
]

export default function Stats() {
  return (
    <section className="bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-5">
          {stats.map((stat) => (
            <div
              key={stat.label}
              className={`${stat.rotate} bg-brand-cream border-2 border-brand-navy/10 rounded-3xl py-6 px-4 text-center hover:rotate-0 hover:border-brand-navy transition-all duration-200`}
            >
              <div className="text-2xl mb-1">{stat.emoji}</div>
              <div className="font-display text-4xl font-extrabold text-brand-navy">{stat.value}</div>
              <div className="text-brand-navy/60 font-semibold text-sm">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
