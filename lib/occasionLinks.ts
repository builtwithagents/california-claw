const occasionLinks: { match: RegExp; href: string }[] = [
  { match: /wedding/i, href: '/blog/renting-a-claw-machine-for-a-wedding' },
  { match: /birthday/i, href: '/blog/claw-machine-rental-for-a-birthday-party' },
  { match: /corporate|office|campus/i, href: '/blog/renting-a-claw-machine-for-the-office' },
  { match: /part(y|ies)/i, href: '/blog/claw-machine-rental-for-a-birthday-party' },
]

export function getOccasionHref(label: string): string | undefined {
  return occasionLinks.find((o) => o.match.test(label))?.href
}
