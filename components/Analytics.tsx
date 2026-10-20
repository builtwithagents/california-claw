import Script from 'next/script'

export const GA_ID = 'G-RMQHHWC6S6'

/**
 * GA4 without slowing the first paint. The tiny inline stub defines
 * `gtag` straight away, so events (like form leads) queue in dataLayer
 * from the start. The ~175 KB gtag.js library itself loads only once the
 * browser is idle after the page has loaded.
 */
export default function Analytics() {
  return (
    <>
      <Script id="ga-init" strategy="afterInteractive">
        {`window.dataLayer=window.dataLayer||[];function gtag(){dataLayer.push(arguments);}window.gtag=gtag;gtag('js',new Date());gtag('config','${GA_ID}');`}
      </Script>
      <Script src={`https://www.googletagmanager.com/gtag/js?id=${GA_ID}`} strategy="lazyOnload" />
    </>
  )
}

/** Send a GA4 event; queues safely if gtag.js hasn't loaded yet. */
export function trackEvent(name: string, params: Record<string, unknown>) {
  const w = window as typeof window & { gtag?: (...args: unknown[]) => void }
  w.gtag?.('event', name, params)
}
