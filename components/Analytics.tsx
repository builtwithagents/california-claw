import Script from 'next/script'
import GtagLoader from '@/components/GtagLoader'

export const GA_ID = 'G-RMQHHWC6S6'

/**
 * GA4 without slowing the page. The tiny inline stub defines `gtag` right
 * away, so the page view and any events (like form leads) queue in
 * dataLayer from the start. The ~175 KB gtag.js library loads on the
 * visitor's first scroll or tap, or after a few seconds if they never
 * interact, and then sends everything that queued.
 */
export default function Analytics() {
  return (
    <>
      <Script id="ga-init" strategy="afterInteractive">
        {`window.dataLayer=window.dataLayer||[];function gtag(){dataLayer.push(arguments);}window.gtag=gtag;gtag('js',new Date());gtag('config','${GA_ID}');`}
      </Script>
      <GtagLoader id={GA_ID} />
    </>
  )
}

/** Send a GA4 event; queues safely if gtag.js hasn't loaded yet. */
export function trackEvent(name: string, params: Record<string, unknown>) {
  const w = window as typeof window & { gtag?: (...args: unknown[]) => void }
  w.gtag?.('event', name, params)
}
