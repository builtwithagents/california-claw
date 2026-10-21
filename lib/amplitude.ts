/**
 * Amplitude, loaded on demand. The SDK is a separate chunk that is only
 * fetched by `loadAmplitude`, so it stays out of the initial page load.
 * Events tracked before it loads wait in a queue and are sent once it does.
 */
type AmplitudeSdk = typeof import('@amplitude/analytics-browser')

let sdk: AmplitudeSdk | null = null
let loading = false
const queue: [string, Record<string, unknown>][] = []

export async function loadAmplitude(apiKey: string) {
  if (sdk || loading) return
  loading = true
  const mod = await import('@amplitude/analytics-browser')
  mod.init(apiKey, {
    autocapture: {
      pageViews: { trackHistoryChanges: 'all' },
      sessions: true,
      attribution: true,
      formInteractions: false,
      fileDownloads: false,
      elementInteractions: false,
    },
  })
  sdk = mod
  queue.splice(0).forEach(([name, props]) => mod.track(name, props))
}

export function trackAmplitude(name: string, props: Record<string, unknown>) {
  if (sdk) sdk.track(name, props)
  else queue.push([name, props])
}
