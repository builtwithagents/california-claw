import { ImageResponse } from 'next/og'

export const alt = 'California Claw — Free claw machines for your business'
export const size = { width: 1200, height: 630 }
export const contentType = 'image/png'

// Branded social-share card (auto-wired into og:image and twitter:image by Next).
export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          padding: '80px',
          background: 'linear-gradient(135deg, #001833 0%, #003262 100%)',
        }}
      >
        <div style={{ display: 'flex', alignItems: 'center', gap: 18, marginBottom: 36 }}>
          <div
            style={{
              width: 56,
              height: 56,
              borderRadius: 12,
              background: '#FDB515',
              color: '#003262',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              fontSize: 34,
              fontWeight: 800,
            }}
          >
            C
          </div>
          <div style={{ color: 'white', fontSize: 30, fontWeight: 700 }}>California Claw</div>
        </div>

        <div style={{ display: 'flex' }}>
          <div
            style={{
              background: '#FDB515',
              color: '#003262',
              padding: '8px 22px',
              borderRadius: 999,
              fontSize: 24,
              fontWeight: 700,
            }}
          >
            100% FREE TO HOST
          </div>
        </div>

        <div
          style={{
            color: 'white',
            fontSize: 64,
            fontWeight: 800,
            lineHeight: 1.1,
            marginTop: 28,
            maxWidth: 960,
          }}
        >
          Get a free claw machine for your business.
        </div>

        <div style={{ color: '#cbd5e1', fontSize: 28, marginTop: 28 }}>
          We install, maintain &amp; restock it — at zero cost to you.
        </div>
      </div>
    ),
    size
  )
}
