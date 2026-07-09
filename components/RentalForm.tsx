'use client'

import { useActionState } from 'react'
import { submitRentalForm, type FormState } from '@/app/actions'
import { CheckCircle2, AlertCircle } from 'lucide-react'

const initialState: FormState = {}

const inputStyles =
  'w-full px-4 py-3 rounded-2xl border-2 border-brand-navy/15 bg-brand-cream/50 focus:border-brand-navy focus:bg-white outline-none transition-all text-sm text-brand-navy placeholder:text-brand-navy/30'

const packages = [
  '1 Hour — $200',
  '2 Hours — $350',
  '3 Hours — $500',
  '4+ Hours — Custom quote',
  'Mini machine — Custom quote',
  'Not sure yet',
]

export default function RentalForm() {
  const [state, action, pending] = useActionState(submitRentalForm, initialState)

  return (
    <div className="bg-white rounded-3xl border-2 border-brand-navy shadow-[8px_8px_0_#FDB515] p-8">
      {state.success ? (
        <div className="flex flex-col items-center text-center py-8">
          <div className="w-16 h-16 rounded-full bg-brand-gold/20 flex items-center justify-center mb-4">
            <CheckCircle2 className="w-8 h-8 text-brand-navy" />
          </div>
          <h3 className="font-display text-xl font-bold text-brand-navy mb-2">Request sent! 🎉</h3>
          <p className="text-brand-navy/60">
            We&apos;ll be in touch within 24 hours to lock in your event date.
          </p>
        </div>
      ) : (
        <form action={action} className="space-y-5">
          <h3 className="font-display text-xl font-bold text-brand-navy mb-6">Book Your Event</h3>

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
                placeholder="jane@email.com"
                className={inputStyles}
              />
            </div>
          </div>

          <div className="grid sm:grid-cols-2 gap-4">
            <div>
              <label htmlFor="eventDate" className="block text-sm font-bold text-brand-navy mb-1.5">
                Event Date <span className="text-brand-coral">*</span>
              </label>
              <input
                id="eventDate"
                name="eventDate"
                type="date"
                required
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
          </div>

          <div className="grid sm:grid-cols-2 gap-4">
            <div>
              <label htmlFor="eventType" className="block text-sm font-bold text-brand-navy mb-1.5">
                Event Type
              </label>
              <input
                id="eventType"
                name="eventType"
                type="text"
                placeholder="Birthday, corporate, wedding..."
                className={inputStyles}
              />
            </div>
            <div>
              <label htmlFor="package" className="block text-sm font-bold text-brand-navy mb-1.5">
                Package
              </label>
              <select id="package" name="package" defaultValue="" className={inputStyles}>
                <option value="" disabled>
                  Choose a package
                </option>
                {packages.map((pkg) => (
                  <option key={pkg} value={pkg}>
                    {pkg}
                  </option>
                ))}
              </select>
            </div>
          </div>

          <div>
            <label htmlFor="message" className="block text-sm font-bold text-brand-navy mb-1.5">
              Tell us about your event
            </label>
            <textarea
              id="message"
              name="message"
              rows={3}
              placeholder="Location, guest count, indoor/outdoor, anything else..."
              className={`${inputStyles} resize-none`}
            />
          </div>

          <button
            type="submit"
            disabled={pending}
            className="btn-gold w-full px-8 py-3.5 disabled:opacity-60 disabled:cursor-not-allowed"
          >
            {pending ? 'Sending...' : 'Request My Rental →'}
          </button>

          <p className="text-center text-xs text-brand-navy/40">
            No payment now. We&apos;ll confirm availability and pricing within 24 hours.
          </p>
        </form>
      )}
    </div>
  )
}
