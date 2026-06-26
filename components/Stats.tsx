const stats = [
  { value: '100%', label: 'Free Service', description: 'No cost, ever' },
  { value: '24/7', label: 'Support', description: 'Always available' },
  { value: '10K+', label: 'Happy Players', description: 'And counting' },
  { value: '50+', label: 'Active Locations', description: 'Across California' },
]

export default function Stats() {
  return (
    <section className="bg-[#001833] border-y border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat) => (
            <div key={stat.label} className="text-center">
              <div className="text-4xl font-bold text-gradient mb-1">{stat.value}</div>
              <div className="text-white font-semibold mb-0.5">{stat.label}</div>
              <div className="text-slate-500 text-sm">{stat.description}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
