'use client'

import { useActionState } from 'react'
import { submitContactForm, type FormState } from '@/app/actions'
import { Mail, Phone, CheckCircle2, AlertCircle } from 'lucide-react'

const initialState: FormState = {}

export default function ContactSection() {
  const [state, action, pending] = useActionState(submitContactForm, initialState)

  return (
    <section id="contact" className="section-padding bg-slate-50">
      <div className="max-w-6xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Left: Info */}
          <div>
            <p className="text-[#003262] font-semibold text-sm uppercase tracking-wider mb-3">
              Get Started
            </p>
            <h2 className="text-4xl sm:text-5xl font-bold text-slate-900 mb-6 leading-tight">
              Ready for a free
              <br />
              <span className="text-gradient-navy">claw machine?</span>
            </h2>
            <p className="text-lg text-slate-500 mb-8 leading-relaxed">
              Tell us about your location and we&apos;ll get back to you within 24 hours
              to discuss placement options. No commitment required.
            </p>

            <div className="space-y-4 mb-8">
              <div className="flex items-center gap-3 text-slate-700">
                <div className="w-10 h-10 rounded-xl bg-[#003262]/10 flex items-center justify-center flex-shrink-0">
                  <Phone className="w-5 h-5 text-[#003262]" />
                </div>
                <div>
                  <p className="text-xs text-slate-500 mb-0.5">Call or text us</p>
                  <a href="tel:+15105064159" className="font-semibold hover:text-[#003262] transition-colors">
                    (510) 506-4159
                  </a>
                </div>
              </div>
              <div className="flex items-center gap-3 text-slate-700">
                <div className="w-10 h-10 rounded-xl bg-[#003262]/10 flex items-center justify-center flex-shrink-0">
                  <Mail className="w-5 h-5 text-[#003262]" />
                </div>
                <div>
                  <p className="text-xs text-slate-500 mb-0.5">Email us directly</p>
                  <a href="mailto:team@californiaclaw.com" className="font-semibold hover:text-[#003262] transition-colors">
                    team@californiaclaw.com
                  </a>
                </div>
              </div>
            </div>

            <div className="bg-[#003262]/5 border border-[#003262]/15 rounded-2xl p-5">
              <p className="text-sm text-[#003262] font-semibold mb-1">What happens next?</p>
              <ol className="space-y-1.5 text-sm text-[#003262]/80">
                <li>1. We review your request within 24 hours</li>
                <li>2. Quick call to discuss your space</li>
                <li>3. We schedule installation at your convenience</li>
              </ol>
            </div>
          </div>

          {/* Right: Form */}
          <div className="bg-white rounded-2xl border border-slate-200 shadow-sm p-8">
            {state.success ? (
              <div className="flex flex-col items-center text-center py-8">
                <div className="w-16 h-16 rounded-full bg-emerald-50 flex items-center justify-center mb-4">
                  <CheckCircle2 className="w-8 h-8 text-emerald-500" />
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-2">Request sent!</h3>
                <p className="text-slate-500">
                  We&apos;ll be in touch within 24 hours to discuss placement options.
                </p>
              </div>
            ) : (
              <form action={action} className="space-y-5">
                <h3 className="text-xl font-bold text-slate-900 mb-6">Request a Free Machine</h3>

                {state.error && (
                  <div className="flex items-start gap-2 bg-red-50 border border-red-100 rounded-xl p-4 text-red-700 text-sm">
                    <AlertCircle className="w-4 h-4 flex-shrink-0 mt-0.5" />
                    {state.error}
                  </div>
                )}

                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-slate-700 mb-1.5">
                      Your Name <span className="text-red-400">*</span>
                    </label>
                    <input
                      id="name"
                      name="name"
                      type="text"
                      required
                      placeholder="Jane Smith"
                      className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-[#003262] focus:ring-2 focus:ring-[#003262]/10 outline-none transition-all text-sm"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-slate-700 mb-1.5">
                      Email <span className="text-red-400">*</span>
                    </label>
                    <input
                      id="email"
                      name="email"
                      type="email"
                      required
                      placeholder="jane@company.com"
                      className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-[#003262] focus:ring-2 focus:ring-[#003262]/10 outline-none transition-all text-sm"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="business" className="block text-sm font-medium text-slate-700 mb-1.5">
                    Business / Location Name <span className="text-red-400">*</span>
                  </label>
                  <input
                    id="business"
                    name="business"
                    type="text"
                    required
                    placeholder="UC Berkeley, Joe's Diner, etc."
                    className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-[#003262] focus:ring-2 focus:ring-[#003262]/10 outline-none transition-all text-sm"
                  />
                </div>

                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-slate-700 mb-1.5">
                    Phone Number
                  </label>
                  <input
                    id="phone"
                    name="phone"
                    type="tel"
                    placeholder="(510) 555-0100"
                    className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-[#003262] focus:ring-2 focus:ring-[#003262]/10 outline-none transition-all text-sm"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-slate-700 mb-1.5">
                    Tell us about your space
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={3}
                    placeholder="Type of business, approximate sq footage, foot traffic..."
                    className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-[#003262] focus:ring-2 focus:ring-[#003262]/10 outline-none transition-all text-sm resize-none"
                  />
                </div>

                <button
                  type="submit"
                  disabled={pending}
                  className="w-full btn-gold disabled:opacity-60 disabled:cursor-not-allowed px-8 py-3.5 rounded-xl shadow-md shadow-yellow-100"
                >
                  {pending ? 'Sending...' : 'Submit Request →'}
                </button>

                <p className="text-center text-xs text-slate-400">
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
