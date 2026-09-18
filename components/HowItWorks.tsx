import SectionHeading from '@/components/SectionHeading'

const steps = [
  {
    title: 'Apply online',
    description:
      'Fill out the form with your location details. We review every request within 24 hours and follow up to talk through placement.',
  },
  {
    title: 'We install everything',
    description:
      'Our team delivers, installs, and configures the machine. We handle permits, electrical, and setup — you just watch it happen.',
  },
  {
    title: 'Watch the fun begin',
    description:
      'Your customers start playing right away. We keep it stocked with fresh prizes and fully maintained, month after month.',
  },
]

export default function HowItWorks() {
  return (
    <section className="section-padding bg-white">
      <div className="max-w-6xl mx-auto">
        <SectionHeading
          label="The process"
          title={
            <>
              Up and running in <span className="highlight-gold">days</span>
            </>
          }
          lede="From first hello to happy customers in three steps."
          className="mb-12"
        />

        <ol className="grid md:grid-cols-3 gap-px bg-brand-navy/10 border border-brand-navy/10 rounded-3xl overflow-hidden">
          {steps.map((step, i) => (
            <li key={step.title} className="bg-white p-7 sm:p-8">
              <span className="font-display text-5xl font-extrabold text-brand-gold leading-none">
                {String(i + 1).padStart(2, '0')}
              </span>
              <h3 className="font-display text-xl font-bold text-brand-navy mt-4 mb-2">
                {step.title}
              </h3>
              <p className="text-brand-navy/60 leading-relaxed">{step.description}</p>
            </li>
          ))}
        </ol>

        <div className="mt-10">
          <a href="#contact" className="btn-gold px-8 py-4 text-lg">
            Start your application
          </a>
        </div>
      </div>
    </section>
  )
}
