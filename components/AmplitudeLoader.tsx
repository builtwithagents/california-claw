'use client'

import { useEffect } from 'react'
import { onEngaged } from '@/lib/engage'
import { loadAmplitude } from '@/lib/amplitude'

/** Loads the Amplitude SDK on first interaction, or after 5 s as a fallback. */
export default function AmplitudeLoader({ apiKey }: { apiKey: string }) {
  useEffect(() => onEngaged(() => void loadAmplitude(apiKey), 5000), [apiKey])
  return null
}
