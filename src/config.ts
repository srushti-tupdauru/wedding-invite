/** Wedding invitation content */

const publicAsset = (path: string) =>
  `${import.meta.env.BASE_URL}${path.replace(/^\/+/, '')}`

export const site = {
  couple: {
    bride: 'Srushti',
    groom: 'Pritam',
    monogramLogo: publicAsset('nd-logo-envelope.png'),
  },
  wedding: {
    /** Countdown target — Shubh Vivah time */
    targetISO: '2026-12-18T12:35:00',
    reception: {
      dateISO: '2026-12-17T18:00:00',
      dateDisplay: '17 December 2026',
      timeDisplay: '6:00 PM onwards',
      label: 'Engagement',
    },
    muhurtham: {
      dateDisplay: '18 December 2026',
      timeDisplay: '12:35 PM IST',
      label: 'Shubh Vivah',
    },
  },
  envelope: {
    sealColor: '#c2410c',
    sealLogo: publicAsset('logo-seal.png'),
    animations: {
      initialFadeInDuration: 1.1,
      sealClickToFadeOutDelay: 950,
      flapOpeningDuration: 1.35,
      fadeOutDuration: 1.15,
      hoverLiftDistance: 8,
      containerScaleOnOpen: 1.015,
      containerScaleDuration: 1.3,
    },
  },
  audio: {
    backgroundMusic: publicAsset(
      'wedding_website_tune.mpeg',
    ),
    volume: 0.16,
    fadeInDuration: 2600,
  },
  /** Full-bleed hero (temple) — file in /public */
  hero: {
    image: publicAsset('temple-background.png'),
    tagline: "We're getting married",
  },
  /** Subtle full-page texture behind invitation content — kolam / pattern PNG in /public */
  invitation: {
    backgroundImage: publicAsset('bg-rose-kolam.png'),
  },
  scrollStory: {
    brideApproach: publicAsset('bride-1left-cutout.png'),
    groomApproach: publicAsset('groom-1left-cutout.png'),
    garlandMoment: publicAsset('bride-groom-center-cutout.png'),
    finalMoment: publicAsset('bride-groom-center2-cutout.png'),
    celebrationSound: publicAsset('party-popper.wav'),
  },
  venue: {
    name: 'Ajinkyatara Resort',
    addressLine: 'Manjri',
    city: 'Pune',
    region: 'Maharashtra',
    image: publicAsset('wedding-hall.png'),
    coordinates: {
      latitude: 18.499148,
      longitude: 73.989355,
    },
    mapsLink:
      'https://share.google/bo2Pxsx3C07icY51N',
    /** Google Maps embed (no API key) */
    mapsEmbedUrl:
      'https://maps.google.com/maps?q=18.499148604193557,73.98935561534373&hl=en&z=17&output=embed',
    description:
      'Join us at Ajinkyatara Resort in Manjri, Pune — a beautiful setting for our engagement and wedding celebrations with family and friends.',
  },
  featuredSections: [
    {
      id: 1,
      title: 'Engagement',
      description:
        'An evening of warmth, music, and togetherness as we begin the celebrations with everyone we love.',
      image: publicAsset('engagement.png'),
      imagePositionClass: 'object-center',
    },
    {
      id: 2,
      title: 'Shubh Vivah',
      description:
        'Sacred rituals and blessings woven into every moment of our wedding.',
      image: publicAsset('shaadi.png'),
      imagePositionClass: 'object-center',
    },
  ],
  eventSchedule: [
    {
      id: 1,
      time: '17 Dec · 6:00 PM',
      title: 'Engagement',
      description: '6:00 PM onwards — celebrations',
      /** Diya — lamps & auspicious light for the evening celebration */
      image: publicAsset('engagement-logo.jpg'),
      calendarEventId: 'reception',
    },
    {
      id: 2,
      time: '18 Dec · 12:35 PM',
      title: 'Shubh Vivah',
      description: 'Auspicious wedding ceremony',
      /** Om — sacred symbol for the wedding ceremony (replaces generic chapel) */
      image: publicAsset('shaadi-logo.jpg'),
      calendarEventId: 'muhurtham',
    },
  ],
  calendarEvents: [
    {
      id: 'reception',
      title: 'Srushti & Pritam Engagement',
      startUtc: '20261217T123000Z',
      endUtc: '20261217T173000Z',
      description:
        'Engagement celebration for Srushti and Pritam. Celebrations from 6:00 PM onwards.',
      filename: 'Pritam-Srushti-engagement.ics',
    },
    {
      id: 'muhurtham',
      title: 'Srushti & Pritam Shubh Vivah',
      startUtc: '20261218T070500Z',
      endUtc: '20261218T090500Z',
      description:
        'Shubh Vivah — auspicious wedding ceremony for Srushti and Pritam.',
      filename: 'Pritam-Srushti-shubh-vivah.ics',
    },
  ],
  translations: {
    welcome:
      'We joyfully invite you to celebrate our wedding. Your presence will make our day complete as we take our vows surrounded by family and friends.',
    countdown: 'Countdown to Shubh Vivah',
    countdownSubtitle: '18 December 2026 · 12:35 PM IST',
    getDirections: 'Open in Google Maps',
    scrollText: 'Scroll',
    mapHeading: 'Venue location',
    withLove: 'With love & blessings',
    copyright:
      'Srushti <span class="text-gold-600">&</span> Pritam',
  },
  rsvp: {
    heading: 'RSVP',
    message:
      'Share your details and send your RSVP to us.',
    sheetSubmitUrl:
      'https://script.google.com/macros/s/AKfycbxvaSEZH8GcmL1G4VdgR7BxMKW4ualcLK56u1hPMiekT_ch43siSBHqbM4sxOTGsvcG/exec',
    sheetUrl:
      'https://docs.google.com/spreadsheets/d/1v-lzcZs_RO7_PxpATcrxe3ym_TvEF68qvCun628EslM/edit?usp=sharing',
    phoneDisplay: '9175259325',
    whatsappLink:
      'https://wa.me/9175259325?text=Hi%20Srushti%2C%20I%20would%20like%20to%20RSVP%20for%20the%20wedding.',
  },
} as const
