import Link from 'next/link'
import { MapPin } from 'lucide-react'
import { counties } from '@/lib/counties'

export default function ServiceAreas() {
  return (
    <section id="service-areas" className="section-padding bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-14">
          <p className="text-violet-600 font-semibold text-sm uppercase tracking-wider mb-3">
            Where We Operate
          </p>
          <h2 className="text-4xl sm:text-5xl font-bold text-slate-900 mb-4">
            Serving all of California
          </h2>
          <p className="text-lg text-slate-500 max-w-xl mx-auto">
            From the Bay Area to Southern California — if you&apos;re in one of these counties,
            we can have a machine at your door.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
          {counties.map((county) => (
            <Link
              key={county.slug}
              href={`/${county.slug}`}
              className="group card-hover flex items-start gap-3 bg-slate-50 hover:bg-violet-50 border border-slate-200 hover:border-violet-200 rounded-xl p-4 transition-colors"
            >
              <div className="w-8 h-8 rounded-lg bg-white border border-slate-200 group-hover:border-violet-200 group-hover:bg-violet-50 flex items-center justify-center flex-shrink-0 transition-colors">
                <MapPin className="w-4 h-4 text-violet-500" />
              </div>
              <div>
                <div className="font-semibold text-slate-900 group-hover:text-violet-700 transition-colors text-sm">
                  {county.name}
                </div>
                <div className="text-slate-400 text-xs mt-0.5">{county.city}</div>
              </div>
            </Link>
          ))}
        </div>

        <div className="mt-10 text-center">
          <p className="text-slate-500 text-sm">
            Don&apos;t see your county?{' '}
            <a href="#contact" className="text-violet-600 hover:text-violet-500 font-medium underline underline-offset-2 transition-colors">
              Reach out anyway — we&apos;re expanding fast.
            </a>
          </p>
        </div>
      </div>
    </section>
  )
}
