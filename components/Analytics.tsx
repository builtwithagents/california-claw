import Script from 'next/script'
import GtagLoader from '@/components/GtagLoader'
import AmplitudeLoader from '@/components/AmplitudeLoader'
import { trackAmplitude } from '@/lib/amplitude'

export const GA_ID = 'G-RMQHHWC6S6'
// Amplitude browser API keys are public by design (they ship in page JS).
export const AMPLITUDE_KEY = 'f8150f5e0f71f0464a65e2db2b712793'

/**
 * GA4 and Amplitude without slowing the page. The tiny inline stub defines
 * `gtag` right away, so the page view and any events (like form leads) queue
 * in dataLayer from the start. The ~175 KB gtag.js library and the Amplitude
 * SDK load on the visitor's first scroll or tap, or after a few seconds if
 * they never interact, and then send everything that queued.
 */
export default function Analytics() {
  return (
    <>
      <Script id="ga-init" strategy="afterInteractive">
        {`window.dataLayer=window.dataLayer||[];function gtag(){dataLayer.push(arguments);}window.gtag=gtag;gtag('js',new Date());gtag('config','${GA_ID}');`}
      </Script>
      <GtagLoader id={GA_ID} />
      <AmplitudeLoader apiKey={AMPLITUDE_KEY} />
    </>
  )
}

/** Send an event to GA4 and Amplitude; queues safely if either hasn't loaded yet. */
export function trackEvent(name: string, params: Record<string, unknown>) {
  const w = window as typeof window & { gtag?: (...args: unknown[]) => void }
  w.gtag?.('event', name, params)
  trackAmplitude(name, params)
}
