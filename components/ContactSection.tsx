'use client'

import { useActionState } from 'react'
import { submitContactForm, type FormState } from '@/app/actions'
import { Mail, Phone, CheckCircle2, AlertCircle } from 'lucide-react'

const initialState: FormState = {}

const inputStyles =
  'w-full px-4 py-3 rounded-2xl border-2 border-brand-navy/15 bg-brand-cream/50 focus:border-brand-navy focus:bg-white outline-none transition-all text-sm text-brand-navy placeholder:text-brand-navy/30'

export default function ContactSection() {
  const [state, action, pending] = useActionState(submitContactForm, initialState)

  return (
    <section id="contact" className="section-padding bg-white">
      <div className="max-w-6xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Left: Info */}
          <div>
            <div className="sticker text-xs px-4 py-1.5 mb-4 -rotate-1">GET STARTED</div>
            <h2 className="font-display text-4xl sm:text-5xl font-extrabold text-brand-navy mb-6 leading-tight">
              Ready for a <span className="highlight-gold">free</span>
              <br />
              claw machine?
            </h2>
            <p className="text-lg text-brand-navy/60 mb-8 leading-relaxed">
              Tell us about your location and we&apos;ll get back to you within 24 hours
              to discuss placement options. No commitment required.
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
            </div>

            <div className="bg-brand-cream border-2 border-brand-navy/10 rounded-3xl p-5">
              <p className="text-sm text-brand-navy font-bold mb-2">What happens next?</p>
              <ol className="space-y-1.5 text-sm text-brand-navy/70">
                <li>1. We review your request within 24 hours</li>
                <li>2. Quick call to discuss your space</li>
                <li>3. We schedule installation at your convenience</li>
              </ol>
            </div>
          </div>

          {/* Right: Form */}
          <div className="bg-white rounded-3xl border-2 border-brand-navy shadow-[8px_8px_0_#FDB515] p-8">
            {state.success ? (
              <div className="flex flex-col items-center text-center py-8">
                <div className="w-16 h-16 rounded-full bg-brand-gold/20 flex items-center justify-center mb-4">
                  <CheckCircle2 className="w-8 h-8 text-brand-navy" />
                </div>
                <h3 className="font-display text-xl font-bold text-brand-navy mb-2">Request sent! 🎉</h3>
                <p className="text-brand-navy/60">
                  We&apos;ll be in touch within 24 hours to discuss placement options.
                </p>
              </div>
            ) : (
              <form action={action} className="space-y-5">
                <h3 className="font-display text-xl font-bold text-brand-navy mb-6">
                  Request a Free Machine
                </h3>

                {state.error && (
                  <div className="flex items-start gap-2 bg-red-50 border-2 border-red-200 rounded-2xl p-4 text-red-700 text-sm">
                    <AlertCircle className="w-4 h-4 flex-shrink-0 mt-0.5" />
                    {state.error}
                  </div>
                )}

                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="name" className="block text-sm font-bold text-brand-navy mb-1.5">
                      Your Name <span className="text-brand-coral">*</span>
                    </label>
                    <input
                      id="name"
                      name="name"
                      type="text"
                      required
                      placeholder="Jane Smith"
                      className={inputStyles}
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-bold text-brand-navy mb-1.5">
                      Email <span className="text-brand-coral">*</span>
                    </label>
                    <input
                      id="email"
                      name="email"
                      type="email"
                      required
                      placeholder="jane@company.com"
                      className={inputStyles}
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="business" className="block text-sm font-bold text-brand-navy mb-1.5">
                    Business / Location Name <span className="text-brand-coral">*</span>
                  </label>
                  <input
                    id="business"
                    name="business"
                    type="text"
                    required
                    placeholder="UC Berkeley, Joe's Diner, etc."
                    className={inputStyles}
                  />
                </div>

                <div>
                  <label htmlFor="phone" className="block text-sm font-bold text-brand-navy mb-1.5">
                    Phone Number
                  </label>
                  <input
                    id="phone"
                    name="phone"
                    type="tel"
                    placeholder="(510) 555-0100"
                    className={inputStyles}
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-bold text-brand-navy mb-1.5">
                    Tell us about your space
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={3}
                    placeholder="Type of business, approximate sq footage, foot traffic..."
                    className={`${inputStyles} resize-none`}
                  />
                </div>

                <button type="submit" disabled={pending} className="btn-gold w-full px-8 py-3.5 disabled:opacity-60 disabled:cursor-not-allowed">
                  {pending ? 'Sending...' : 'Submit Request →'}
                </button>

                <p className="text-center text-xs text-brand-navy/40">
                  No commitment required. We&apos;ll reach out within 24 hours.
                </p>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}
