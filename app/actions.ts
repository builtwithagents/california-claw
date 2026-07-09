'use server'

import { Resend } from 'resend'

const resend = new Resend(process.env.RESEND_API_KEY)

export type FormState = {
  success?: boolean
  error?: string
}

export async function submitContactForm(
  _prev: FormState,
  formData: FormData
): Promise<FormState> {
  const name = (formData.get('name') as string)?.trim()
  const email = (formData.get('email') as string)?.trim()
  const business = (formData.get('business') as string)?.trim()
  const phone = (formData.get('phone') as string)?.trim()
  const message = (formData.get('message') as string)?.trim()

  if (!name || !email || !business) {
    return { error: 'Please fill in your name, email, and business name.' }
  }

  if (!process.env.RESEND_API_KEY) {
    console.error('RESEND_API_KEY is not set')
    return { error: 'Email service is not configured. Please call us directly.' }
  }

  try {
    await resend.emails.send({
      from: 'California Claw <noreply@californiaclaw.com>',
      to: ['team@californiaclaw.com'],
      replyTo: email,
      subject: `New Machine Request from ${business}`,
      html: `
        <div style="font-family: sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #7c3aed;">New Claw Machine Request</h2>
          <table style="width: 100%; border-collapse: collapse;">
            <tr><td style="padding: 8px; font-weight: bold;">Name</td><td style="padding: 8px;">${name}</td></tr>
            <tr><td style="padding: 8px; font-weight: bold;">Email</td><td style="padding: 8px;">${email}</td></tr>
            <tr><td style="padding: 8px; font-weight: bold;">Business</td><td style="padding: 8px;">${business}</td></tr>
            <tr><td style="padding: 8px; font-weight: bold;">Phone</td><td style="padding: 8px;">${phone || 'Not provided'}</td></tr>
            <tr><td style="padding: 8px; font-weight: bold; vertical-align: top;">Message</td><td style="padding: 8px;">${message || 'No message'}</td></tr>
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

export async function submitRentalForm(
  _prev: FormState,
  formData: FormData
): Promise<FormState> {
  const name = (formData.get('name') as string)?.trim()
  const email = (formData.get('email') as string)?.trim()
  const phone = (formData.get('phone') as string)?.trim()
  const eventDate = (formData.get('eventDate') as string)?.trim()
  const eventType = (formData.get('eventType') as string)?.trim()
  const packageChoice = (formData.get('package') as string)?.trim()
  const message = (formData.get('message') as string)?.trim()

  if (!name || !email || !eventDate) {
    return { error: 'Please fill in your name, email, and event date.' }
  }

  if (!process.env.RESEND_API_KEY) {
    console.error('RESEND_API_KEY is not set')
    return { error: 'Email service is not configured. Please call us directly.' }
  }

  try {
    await resend.emails.send({
      from: 'California Claw <noreply@californiaclaw.com>',
      to: ['team@californiaclaw.com'],
      replyTo: email,
      subject: `New Rental Request from ${name}`,
      html: `
        <div style="font-family: sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #003262;">New Claw Machine Rental Request</h2>
          <table style="width: 100%; border-collapse: collapse;">
            <tr><td style="padding: 8px; font-weight: bold;">Name</td><td style="padding: 8px;">${name}</td></tr>
            <tr><td style="padding: 8px; font-weight: bold;">Email</td><td style="padding: 8px;">${email}</td></tr>
            <tr><td style="padding: 8px; font-weight: bold;">Phone</td><td style="padding: 8px;">${phone || 'Not provided'}</td></tr>
            <tr><td style="padding: 8px; font-weight: bold;">Event Date</td><td style="padding: 8px;">${eventDate}</td></tr>
            <tr><td style="padding: 8px; font-weight: bold;">Event Type</td><td style="padding: 8px;">${eventType || 'Not provided'}</td></tr>
            <tr><td style="padding: 8px; font-weight: bold;">Package</td><td style="padding: 8px;">${packageChoice || 'Not specified'}</td></tr>
            <tr><td style="padding: 8px; font-weight: bold; vertical-align: top;">Message</td><td style="padding: 8px;">${message || 'No message'}</td></tr>
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
