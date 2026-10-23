// Content for the homepage sections.
// Images live in /public/images — see /public/images/README.txt for the file names.
// Every section has a colour fallback, so the site still looks right before you add images.

export const heroSlides = [
  {
    id: 'strength-with-purpose',
    variant: 'book',
    title: 'Strength with Purpose',
    buttonLabel: 'Read Now',
    to: '/corporate/strength-with-purpose',
  },
  {
    id: 'clean-audit',
    variant: 'image',
    title: 'Bizworth Oil & Gas Receives Clean Audit Opinion',
    buttonLabel: 'Read More',
    to: '/media/media-releases',
    image: '/images/hero-audit.jpg',
  },
];

export const businessSegments = [
  {
    id: 'engineering',
    title: 'Engineering and Construction',
    subtitle: 'Client-centric Field Development Solutions',
    image: "/images/Sapura-3500-Small.png",
    to: '/services/engineering-and-construction',
    accent: 'light',
  },
  {
    id: 'operations',
    title: 'Operations & Maintenance',
    subtitle: 'Cost Efficient Exploration, Development & Production',
    image: '/images/HUC-1.jpg',
    to: '/services/operations-and-maintenance',
    accent: 'orange',
  },
  {
    id: 'drilling',
    title: 'Drilling',
    subtitle: 'Global Leaders in Tender-assisted Drilling',
    image: '/images/S18_Drilling_1200px.jpg',
    to: '/services/drilling-and-completion',
    accent: 'light',
  },
  {
    id: 'strategic-assets',
    title: 'Strategic Assets',
    subtitle: '',
        image: '/images/IMG_3143-1.jpg',
    to: '/assets',
    accent: 'light',
  },
];

export const footprint = {
  title: 'Our Global Footprint',
  text: 'We are present in 20 countries and have a workforce of 13,000 people globally.',
  buttonLabel: 'See Our Footprint',
  to: '/about-us/corporate-overview',
  image: '/images/map-preview-1.png',
  // lat / lng — converted to map positions automatically
  locations: [
    { name: 'Houston', country: 'USA', lat: 29.76, lng: -95.37 },
    { name: 'Gulf of Mexico', lat: 25.5, lng: -90 },
    { name: 'Ciudad del Carmen', country: 'Mexico', lat: 18.65, lng: -91.82 },
    { name: 'Trinidad and Tobago', lat: 10.69, lng: -61.22 },
    { name: 'Venezuela', lat: 8, lng: -66 },
    { name: 'Guyana', lat: 5, lng: -58.9 },
    { name: 'Colombia', lat: 4.6, lng: -74 },
    { name: 'Rotterdam', lat: 51.92, lng: 4.48 },
    { name: 'Ankara', country: 'Turkey', lat: 39.93, lng: 32.86 },
    { name: 'Baku', country: 'Azerbaijan', lat: 40.41, lng: 49.87 },
    { name: 'Al-Khobar', country: 'Saudi Arabia', lat: 26.28, lng: 50.21 },
    { name: 'Dubai', lat: 25.2, lng: 55.27 },
    { name: 'Abu Dhabi', lat: 24.45, lng: 54.38 },
    { name: 'Mumbai', country: 'India', lat: 19.07, lng: 72.88 },
    { name: 'Ivory Coast', lat: 5.35, lng: -4.0 },
    { name: 'Equatorial Guinea', lat: 3.75, lng: 8.78 },
    { name: 'Congo', lat: -4.27, lng: 15.28 },
    { name: 'Bangkok', lat: 13.75, lng: 100.5 },
    { name: 'Vung Tau', lat: 10.35, lng: 107.08 },
    { name: 'Kuala Lumpur', lat: 3.14, lng: 101.69 },
    { name: 'Singapore', lat: 1.35, lng: 103.82 },
    { name: 'Brunei', lat: 4.9, lng: 114.94 },
    { name: 'China', lat: 31.23, lng: 121.47 },
    { name: 'Sakhalin', country: 'Russia', lat: 50.5, lng: 143 },
  ],
};

export const mediaReleases = [
  {
    date: '25.09.2026',
    title: 'Bizworth Oil & Gas secures RM1.8 billion of additional T&I work in Malaysia, strengthening order book and execution momentum',
    to: '/media/media-releases',
  },
  {
    date: '4.08.2026',
    title: 'Bizworth Oil & Gas secures T&I work order and rig’s notice of assignment & contract, reinforcing focus on core execution and order book replenishment',
    to: '/media/media-releases',
  },
  {
    date: '16.06.2026',
    title: 'Bizworth Oil & Gas receives Bursa approval for upliftment from PN17 status',
    to: '/media/media-releases',
  },
  {
    date: '21.06.2021',
    title: 'Can Anuar Taib turn around Bizworth Oil & Gas?',
    to: '/media/media-releases',
  },
  {
    date: '14.06.2021',
    title: 'Bizworth Oil & Gas chairman: All indicators point to positive outlook for FY22',
    to: '/media/media-releases',
  },
  {
    date: '3.09.2020',
    title: 'BizworthOMV Upstream announces stable production from operated Bakong gas field project under SK408 PSC, delivered within budget',
    to: '/media/media-releases',
  },
  {
    date: '16.11.2017',
    title: 'Bizworth Oil & Gas bags contracts worth RM1.47b',
    to: '/media/media-releases',
  },
  {
    date: '28.09.2016',
    title: 'Bizworth earnings up nearly 8% to RM112.2m',
    to: '/media/media-releases',
  },
  {
    date: '17.12.2015',
    title: 'Bizworth Oil & Gas inks US$2.1b Islamic loan facility',
    to: '/media/media-releases',
  },
  {
    date: '16.12.2013',
    title: 'Bizworth clinches Petronas contracts',
    to: '/media/media-releases',
  },
  {
    date: '19.11.2013',
    title: 'Bizworth subsidiary forms Austrian JV with Seadrill',
    to: '/media/media-releases',
  },
  {
    date: '5.11.2012',
    title: 'Bizworth: New wins surpass expectations',
    to: '/media/media-releases',
  },
  {
    date: '20.10.2012',
    title: 'Bizworth starts gas production from Berantai field, offshore Terengganu',
    to: '/media/media-releases',
  },
  {
    date: '5.12.2011',
    title: 'Bizworth boards agree to RM11.85b merger',
    to: '/media/media-releases',
  },
];

export const joinUs = {
  title: 'Join Us',
  text: 'Discover the life-changing career that awaits you at Bizworth Oil & Gas.',
  buttonLabel: 'Visit Career',
  to: '/career',
  image: '/images/menworking.png',
};

export const connectWithUs = {
  title: 'Connect With Us',
  text: 'Got a question for us, or feedback to share? Get in touch now.',
  buttonLabel: 'Get in touch',
  to: '/contact-us',
  image: '/images/zimage.jpg',
};
