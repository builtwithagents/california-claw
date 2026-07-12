'use server'

import { Resend } from 'resend'

const resend = new Resend(process.env.RESEND_API_KEY)

export type FormState = {
  success?: boolean
  error?: string
}

export async function submitRequestForm(
  _prev: FormState,
  formData: FormData
): Promise<FormState> {
  const requestType = (formData.get('requestType') as string)?.trim()
  const name = (formData.get('name') as string)?.trim()
  const email = (formData.get('email') as string)?.trim()
  const phone = (formData.get('phone') as string)?.trim()
  const city = (formData.get('city') as string)?.trim()
  const notes = (formData.get('notes') as string)?.trim()

  if (!name || !email) {
    return { error: 'Please fill in your name and email.' }
  }

  if (!process.env.RESEND_API_KEY) {
    console.error('RESEND_API_KEY is not set')
    return { error: 'Email service is not configured. Please call us directly.' }
  }

  const isEvent = requestType === 'event'

  try {
    await resend.emails.send({
      from: 'California Claw <noreply@californiaclaw.com>',
      to: ['team@californiaclaw.com'],
      replyTo: email,
      subject: isEvent ? `New Event Rental Request from ${name}` : `New Free Machine Request from ${name}`,
      html: `
        <div style="font-family: sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #003262;">${isEvent ? 'New Claw Machine Rental Request' : 'New Free Claw Machine Request'}</h2>
          <table style="width: 100%; border-collapse: collapse;">
            <tr><td style="padding: 8px; font-weight: bold;">Type</td><td style="padding: 8px;">${isEvent ? 'Event rental' : 'Free machine for business'}</td></tr>
            <tr><td style="padding: 8px; font-weight: bold;">Name</td><td style="padding: 8px;">${name}</td></tr>
            <tr><td style="padding: 8px; font-weight: bold;">Email</td><td style="padding: 8px;">${email}</td></tr>
            <tr><td style="padding: 8px; font-weight: bold;">Phone</td><td style="padding: 8px;">${phone || 'Not provided'}</td></tr>
            <tr><td style="padding: 8px; font-weight: bold;">City</td><td style="padding: 8px;">${city || 'Not provided'}</td></tr>
            <tr><td style="padding: 8px; font-weight: bold; vertical-align: top;">Notes</td><td style="padding: 8px;">${notes || 'No notes'}</td></tr>
          </table>
        </div>
      `,
    })
    return { success: true }
  } catch (err) {
    console.error('Resend error:', err)
    return { error: 'Failed to send your request. Please try again or call us directly.' }
  }
}
