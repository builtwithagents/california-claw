/**
 * Run `cb` once the visitor first interacts (scroll, touch, click, key), or
 * after `fallbackMs` if they never do. Used to keep non-essential work
 * (analytics, the hero clip) out of the initial page load.
 */
const EVENTS = ['scroll', 'pointerdown', 'touchstart', 'keydown'] as const

export function onEngaged(cb: () => void, fallbackMs: number): () => void {
  let done = false
  const run = () => {
    if (done) return
    done = true
    cleanup()
    cb()
  }
  const timer = window.setTimeout(run, fallbackMs)
  const cleanup = () => {
    window.clearTimeout(timer)
    EVENTS.forEach((e) => window.removeEventListener(e, run))
  }
  EVENTS.forEach((e) => window.addEventListener(e, run, { once: true, passive: true }))
  return cleanup
}
