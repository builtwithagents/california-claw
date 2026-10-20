'use client'

import { useEffect } from 'react'
import { onEngaged } from '@/lib/engage'

/** Injects gtag.js on first interaction, or after 5 s as a fallback. */
export default function GtagLoader({ id }: { id: string }) {
  useEffect(
    () =>
      onEngaged(() => {
        const s = document.createElement('script')
        s.async = true
        s.src = `https://www.googletagmanager.com/gtag/js?id=${id}`
        document.head.appendChild(s)
      }, 5000),
    [id],
  )
  return null
}
