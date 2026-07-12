'use client'

import { useActionState, useState } from 'react'
import { submitRequestForm, type FormState } from '@/app/actions'
import { CheckCircle2, AlertCircle } from 'lucide-react'

const initialState: FormState = {}

const inputStyles =
  'w-full px-4 py-3 rounded-2xl border-2 border-brand-navy/15 bg-brand-cream/50 focus:border-brand-navy focus:bg-white outline-none transition-all text-sm text-brand-navy placeholder:text-brand-navy/30'

type RequestType = 'machine' | 'event'

const typeOptions: { value: RequestType; label: string }[] = [
  { value: 'machine', label: 'I want a free machine for my business location' },
  { value: 'event', label: 'I want to rent for an event' },
]

const copy: Record<RequestType, { title: string; button: string; footer: string; success: string }> = {
  machine: {
    title: 'Request a Free Machine',
    button: 'Request My Free Machine →',
    footer: "No commitment required. We'll reach out within 24 hours.",
    success: "We'll be in touch within 24 hours to discuss placement options.",
  },
  event: {
    title: 'Book Your Event',
    button: 'Request My Rental →',
    footer: "No payment now. We'll confirm availability and pricing within 24 hours.",
    success: "We'll be in touch within 24 hours to lock in your event date.",
  },
}

export default function RequestForm({
  defaultType = 'machine',
  defaultCity = '',
}: {
  defaultType?: RequestType
  defaultCity?: string
}) {
  const [state, action, pending] = useActionState(submitRequestForm, initialState)
  const [requestType, setRequestType] = useState<RequestType>(defaultType)
  const c = copy[requestType]

  return (
    <div className="bg-white rounded-3xl border-2 border-brand-navy shadow-[8px_8px_0_#FDB515] p-8">
      {state.success ? (
        <div className="flex flex-col items-center text-center py-8">
          <div className="w-16 h-16 rounded-full bg-brand-gold/20 flex items-center justify-center mb-4">
            <CheckCircle2 className="w-8 h-8 text-brand-navy" />
          </div>
          <h3 className="font-display text-xl font-bold text-brand-navy mb-2">Request sent! 🎉</h3>
          <p className="text-brand-navy/60">{c.success}</p>
        </div>
      ) : (
        <form action={action} className="space-y-5">
          <input type="hidden" name="requestType" value={requestType} />

          <h3 className="font-display text-xl font-bold text-brand-navy mb-2">{c.title}</h3>

          {state.error && (
            <div className="flex items-start gap-2 bg-red-50 border-2 border-red-200 rounded-2xl p-4 text-red-700 text-sm">
              <AlertCircle className="w-4 h-4 flex-shrink-0 mt-0.5" />
              {state.error}
            </div>
          )}

          <div>
            <label className="block text-sm font-bold text-brand-navy mb-2">
              What are you looking for? <span className="text-brand-coral">*</span>
            </label>
            <div className="space-y-2">
              {typeOptions.map((option) => (
                <label
                  key={option.value}
                  className={`flex items-center gap-3 px-4 py-3 rounded-2xl border-2 cursor-pointer transition-colors ${
                    requestType === option.value
                      ? 'border-brand-navy bg-brand-cream'
                      : 'border-brand-navy/15 hover:border-brand-navy/30'
                  }`}
                >
                  <input
                    type="radio"
                    name="requestTypeChoice"
                    value={option.value}
                    checked={requestType === option.value}
                    onChange={() => setRequestType(option.value)}
                    className="w-4 h-4 accent-brand-navy flex-shrink-0"
                  />
                  <span className="text-sm font-semibold text-brand-navy">{option.label}</span>
                </label>
              ))}
            </div>
          </div>

          <div className="grid sm:grid-cols-2 gap-4">
            <div>
              <label htmlFor="name" className="block text-sm font-bold text-brand-navy mb-1.5">
                Name <span className="text-brand-coral">*</span>
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
              <label htmlFor="phone" className="block text-sm font-bold text-brand-navy mb-1.5">
                Phone
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
              <label htmlFor="city" className="block text-sm font-bold text-brand-navy mb-1.5">
                City
              </label>
              <input
                id="city"
                name="city"
                type="text"
                defaultValue={defaultCity}
                placeholder="San Francisco"
                className={inputStyles}
              />
            </div>
          </div>

          <div>
            <label htmlFor="notes" className="block text-sm font-bold text-brand-navy mb-1.5">
              Notes
            </label>
            <textarea
              id="notes"
              name="notes"
              rows={3}
              placeholder="Anything else we should know?"
              className={`${inputStyles} resize-none`}
            />
          </div>

          <button
            type="submit"
            disabled={pending}
            className="btn-gold w-full px-8 py-3.5 disabled:opacity-60 disabled:cursor-not-allowed"
          >
            {pending ? 'Sending...' : c.button}
          </button>

          <p className="text-center text-xs text-brand-navy/40">{c.footer}</p>
        </form>
      )}
    </div>
  )
}
