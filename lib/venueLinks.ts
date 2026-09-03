/**
 * Maps a county page's venue card to the placement guide written for that kind
 * of business, so "Laundromats" on the San Francisco page points at the
 * laundromat guide rather than sitting there as inert copy.
 *
 * Only genuine topical matches get a link. Venue types with no guide of their
 * own (campuses, shopping centers, rec centers) stay unlinked instead of all
 * pointing at the same hub with the same anchor text.
 */
const venueGuides: { match: RegExp; href: string; label: string }[] = [
  {
    match: /laundr/i,
    href: '/blog/free-claw-machine-in-your-laundromat',
    label: 'How it works in a laundromat',
  },
  {
    match: /boba|milk tea|dessert|ice cream|caf(e|é)|coffee/i,
    href: '/blog/free-claw-machine-for-your-boba-shop',
    label: 'How it works in a boba shop',
  },
  {
    match: /restaurant|taquer|taco|eater|diner|food hall|pizza|brewer|taproom|barcade|bars?\b|pub\b/i,
    href: '/blog/free-claw-machine-for-your-restaurant',
    label: 'How it works in a restaurant',
  },
]

export type VenueGuide = { href: string; label: string }

export function getVenueGuide(title: string): VenueGuide | undefined {
  const hit = venueGuides.find((v) => v.match.test(title))
  return hit && { href: hit.href, label: hit.label }
}
