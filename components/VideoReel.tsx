import LoopVideo from '@/components/LoopVideo'

const clips = [
  {
    name: 'purple-lounge',
    label: 'A purple-lit claw machine in a lounge, tilting up from the cabinet to the plush on top',
    caption: 'Purple cabinet, city window',
    note: 'Super Mini',
  },
  {
    name: 'joy-catcher',
    label: 'A neon Joy Catcher claw machine in a tea house, the claw moving over a pile of plush',
    caption: 'The full-size Joy Catcher mid-grab',
    note: 'Full-size',
  },
  {
    name: 'diner',
    label: 'A green-lit claw machine beside arcade cabinets on a checkered diner floor',
    caption: 'Diner corner, next to the arcade cabinets',
    note: 'Super Mini',
  },
  {
    name: 'waterfall',
    label: 'A blue-lit claw machine in front of a waterfall mural, pushing in toward the plush',
    caption: 'A blue cabinet against a mural wall',
    note: 'Super Mini',
  },
]

export default function VideoReel() {
  return (
    <section className="section-padding bg-brand-sky overflow-hidden">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-wrap items-end justify-between gap-x-10 gap-y-3 mb-10">
          <h2 className="font-display text-4xl sm:text-5xl font-extrabold text-brand-navy leading-[1.02] max-w-xl">
            See them in action.
          </h2>
          <p className="text-brand-navy/75 text-lg max-w-xs">
            Phone clips from real placements. No renders, no stock footage.
          </p>
        </div>
      </div>

      {/* Scroll-snap strip on small screens; a plain row once it fits. */}
      <ul className="max-w-6xl mx-auto flex lg:grid lg:grid-cols-4 gap-5 overflow-x-auto lg:overflow-visible snap-x snap-mandatory pb-4 pr-6 -mx-4 px-4 sm:mx-auto sm:px-0 [scrollbar-width:none]">
        {clips.map((clip) => (
          <li key={clip.name} className="snap-start flex-shrink-0 w-[62%] sm:w-[40%] lg:w-auto">
            <figure>
              <div className="photo-frame-navy aspect-[9/16]">
                <LoopVideo name={clip.name} label={clip.label} />
              </div>
              <figcaption className="mt-3 px-1">
                <span className="block text-sm font-bold text-brand-navy leading-snug">
                  {clip.caption}
                </span>
                <span className="block text-xs text-brand-navy/65 mt-0.5">{clip.note}</span>
              </figcaption>
            </figure>
          </li>
        ))}
      </ul>
    </section>
  )
}
