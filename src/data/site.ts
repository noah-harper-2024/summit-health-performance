/**
 * Central site configuration.
 *
 * Edit this one file to update business info, the booking link, social links,
 * and contact details everywhere on the site.
 */
export const SITE = {
  name: 'Summit Health & Performance',
  shortName: 'Summit Health & Performance',
  tagline: 'Sports chiropractic to help you move better, perform higher, and train without limits.',
  description:
    'Summit Health & Performance is a sports chiropractic clinic in Huntsville, AL led by Dr. Seth Graham. We help active adults and youth athletes fix the root cause of pain so they can move, train, and compete at their best.',

  // The "Book Now" destination. Used by every Book Now button on the site.
  bookingUrl: 'https://summitchiroperformance.janeapp.com/#staff_member/1',

  // Contact details
  phone: '256-947-2660',
  phoneHref: 'tel:+12569472660',
  email: 'info@thesummitchiropractic.com',
  address: {
    street: '3070 Leeman Ferry Rd SW',
    city: 'Huntsville',
    state: 'AL',
    zip: '35801',
    full: '3070 Leeman Ferry Rd SW, Huntsville, AL 35801',
  },
  mapsUrl:
    'https://www.google.com/maps/search/?api=1&query=3070+Leeman+Ferry+Rd+SW,+Huntsville,+AL',

  // Hours of operation — edit as needed.
  hours: [
    { days: 'Monday', time: '8:00 AM – 6:00 PM' },
    { days: 'Tuesday', time: '8:00 AM – 6:00 PM' },
    { days: 'Wednesday', time: '8:00 AM – 6:00 PM' },
    { days: 'Thursday', time: '8:00 AM – 6:00 PM' },
    { days: 'Friday', time: '8:00 AM – 12:00 PM' },
    { days: 'Saturday – Sunday', time: 'Closed' },
  ],

  // Social links
  social: {
    instagram: 'https://www.instagram.com/summithealthandperformance_/',
    instagramHandle: '@summithealthandperformance_',
  },
} as const;

// Primary navigation. Add or reorder pages here.
export const NAV_LINKS = [
  { label: 'Home', href: '/' },
  { label: 'About', href: '/about/' },
  { label: 'Services', href: '/services/' },
  { label: 'Blog', href: '/blog/' },
  { label: 'Contact', href: '/contact/' },
] as const;
