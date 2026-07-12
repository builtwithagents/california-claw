import { Mail, Phone, Clock } from 'lucide-react'
import RequestForm from '@/components/RequestForm'

export default function ContactSection() {
  return (
    <section id="contact" className="section-padding bg-white">
      <div className="max-w-6xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Left: Info */}
          <div>
            <div className="sticker text-xs px-4 py-1.5 mb-4 -rotate-1">GET STARTED</div>
            <h2 className="font-display text-4xl sm:text-5xl font-extrabold text-brand-navy mb-6 leading-tight">
              Ready to get the <span className="highlight-gold">claws</span>
              <br />
              out?
            </h2>
            <p className="text-lg text-brand-navy/60 mb-8 leading-relaxed">
              Whether it&apos;s a free machine for your business or a rental for your next
              event, tell us what you need and we&apos;ll get back to you within 24 hours.
            </p>

            <div className="space-y-4 mb-8">
              <div className="flex items-center gap-3">
                <div className="w-11 h-11 rounded-2xl bg-brand-gold/20 flex items-center justify-center flex-shrink-0">
                  <Phone className="w-5 h-5 text-brand-navy" />
                </div>
                <div>
                  <p className="text-xs text-brand-navy/50 mb-0.5">Call or text us</p>
                  <a
                    href="tel:+15105064159"
                    className="font-bold text-brand-navy hover:text-brand-gold-dark transition-colors"
                  >
                    (510) 506-4159
                  </a>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-11 h-11 rounded-2xl bg-brand-gold/20 flex items-center justify-center flex-shrink-0">
                  <Mail className="w-5 h-5 text-brand-navy" />
                </div>
                <div>
                  <p className="text-xs text-brand-navy/50 mb-0.5">Email us directly</p>
                  <a
                    href="mailto:team@californiaclaw.com"
                    className="font-bold text-brand-navy hover:text-brand-gold-dark transition-colors"
                  >
                    team@californiaclaw.com
                  </a>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-11 h-11 rounded-2xl bg-brand-gold/20 flex items-center justify-center flex-shrink-0">
                  <Clock className="w-5 h-5 text-brand-navy" />
                </div>
                <div>
                  <p className="text-xs text-brand-navy/50 mb-0.5">Hours</p>
                  <p className="font-bold text-brand-navy">Open daily, 9am–9pm</p>
                </div>
              </div>
            </div>

            <div className="bg-brand-cream border-2 border-brand-navy/10 rounded-3xl p-5">
              <p className="text-sm text-brand-navy font-bold mb-2">What happens next?</p>
              <ol className="space-y-1.5 text-sm text-brand-navy/70">
                <li>1. We review your request within 24 hours</li>
                <li>2. Quick call to go over the details</li>
                <li>3. We get you set up — placement or event delivery</li>
              </ol>
            </div>
          </div>

          {/* Right: Form */}
          <RequestForm defaultType="machine" />
        </div>
      </div>
    </section>
  )
}
