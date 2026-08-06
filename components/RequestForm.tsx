'use client'

import { useState } from 'react'
import { CheckCircle2, AlertCircle } from 'lucide-react'

const WEB3FORMS_ENDPOINT = 'https://api.web3forms.com/submit'
const ACCESS_KEY = process.env.NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY

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
  const [requestType, setRequestType] = useState<RequestType>(defaultType)
  const [pending, setPending] = useState(false)
  const [success, setSuccess] = useState(false)
  const [error, setError] = useState<string | null>(null)
  const c = copy[requestType]

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault()
    setError(null)

    if (!ACCESS_KEY) {
      console.error('NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY is not set')
      setError('Form is not configured. Please call us directly.')
      return
    }

    const formData = new FormData(event.currentTarget)
    const name = (formData.get('name') as string)?.trim()
    const email = (formData.get('email') as string)?.trim()
    const phone = (formData.get('phone') as string)?.trim()
    const city = (formData.get('city') as string)?.trim()
    const notes = (formData.get('notes') as string)?.trim()

    if (!name || !email) {
      setError('Please fill in your name and email.')
      return
    }

    const isEvent = requestType === 'event'
    setPending(true)

    try {
      const res = await fetch(WEB3FORMS_ENDPOINT, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
        body: JSON.stringify({
          access_key: ACCESS_KEY,
          subject: isEvent
            ? `New Event Rental Request from ${name}`
            : `New Free Machine Request from ${name}`,
          from_name: 'California Claw Website',
          replyto: email,
          botcheck: formData.get('botcheck') ? 'true' : '',
          Type: isEvent ? 'Event rental' : 'Free machine for business',
          Name: name,
          Email: email,
          Phone: phone || 'Not provided',
          City: city || 'Not provided',
          Notes: notes || 'No notes',
        }),
      })

      const result = await res.json()

      if (!res.ok || !result.success) {
        console.error('Web3Forms error:', res.status, result)
        setError('Failed to send your request. Please try again or call us directly.')
        return
      }

      setSuccess(true)
    } catch (err) {
      console.error('Web3Forms request failed:', err)
      setError('Failed to send your request. Please try again or call us directly.')
    } finally {
      setPending(false)
    }
  }

  return (
    <div className="bg-white rounded-3xl border-2 border-brand-navy shadow-[8px_8px_0_#FDB515] p-8">
      {success ? (
        <div className="flex flex-col items-center text-center py-8">
          <div className="w-16 h-16 rounded-full bg-brand-gold/20 flex items-center justify-center mb-4">
            <CheckCircle2 className="w-8 h-8 text-brand-navy" />
          </div>
          <h3 className="font-display text-xl font-bold text-brand-navy mb-2">Request sent! 🎉</h3>
          <p className="text-brand-navy/60">{c.success}</p>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="space-y-5">
          {/* Honeypot — hidden from users, bots that tick it get rejected by Web3Forms */}
          <input
            type="checkbox"
            name="botcheck"
            tabIndex={-1}
            autoComplete="off"
            className="hidden"
            style={{ display: 'none' }}
            aria-hidden="true"
          />

          <h3 className="font-display text-xl font-bold text-brand-navy mb-2">{c.title}</h3>

          {error && (
            <div className="flex items-start gap-2 bg-red-50 border-2 border-red-200 rounded-2xl p-4 text-red-700 text-sm">
              <AlertCircle className="w-4 h-4 flex-shrink-0 mt-0.5" />
              {error}
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
