// Single source of truth for every link in the header, mobile menu and search.
// To add a new page later: create the page file, add its <Route> in App.jsx.
// Links without a page yet automatically show the "Coming Soon" page.

export const slugify = (text) =>
  text
    .toLowerCase()
    .replace(/&/g, 'and')
    .replace(/[’'()]/g, '')
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-|-$/g, '');

const link = (base, label, extra = {}) => ({
  label,
  path: `${base}/${slugify(label)}`,
  ...extra,
});

/* ---------------- SERVICES (mega menu) ---------------- */
const ec = '/services/engineering-and-construction';
const om = '/services/operations-and-maintenance';
const dc = '/services/drilling-and-completion';


export const servicesColumns = [
  {
    label: 'Engineering and Construction',
    path: ec,
    items: [
      link(ec, 'Engineering', { bold: true }),
      link(ec, 'EPCIC', {
        bold: true,
        children: [
          link(`${ec}/epcic`, 'Engineering, Procurement and Construction (EPC)'),
          link(`${ec}/epcic`, 'Offshore Construction & Installation'),
        ],
      }),
      link(ec, 'Well Intervention & Decommissioning', { bold: true }),
    ],
  },
  {
    label: 'Operations and Maintenance',
    path: om,
    items: [
      link(om, 'Hook-up & Commissioning'),
      link(om, 'Topside Maintenance'),
      link(om, 'Subsea Services'),
      link(om, 'Brownfield Rejuvenation'),
      link(om, 'Offshore Support Vessels'),
      link(om, 'Geosurvey & Geotechnical'),
    ],
  },
  {
    label: 'Drilling & Completion',
    path: dc,
    items: [
      link(dc, 'Drilling Capabilities', {
        bold: true,
        children: [
          link(`${dc}/drilling-capabilities`, 'Tender Assist Rigs'),
          link(`${dc}/drilling-capabilities`, 'Semi-Tender Rigs'),
        ],
      }),
    ],
  },

];

/* ---------------- MAIN NAVIGATION ---------------- */
export const navigation = [
  { label: 'Home', path: '/' },
  {
    label: 'About Us',
    path: '/about-us',
    children: [
      link('/about-us', 'Corporate Overview'),
      link('/about-us', 'Quality, Health, Safety & Environment'),
      link('/about-us', 'Group Organisational Structure'),
      link('/about-us', 'Board of Directors'),
      link('/about-us', 'Leadership Team'),
    ],
  },
  {
    label: 'Services',
    path: '/services',
    mega: true,
    columns: servicesColumns,
  },
  {
    label: 'Assets',
    path: '/assets',
    children: [
      link('/assets', 'Engineering and Construction'),
      link('/assets', 'Operations & Maintenance'),
      link('/assets', 'Drilling'),
    ],
  },
  {
    label: 'Corporate',
    path: '/corporate',
    children: [
      link('/corporate', 'Strength with Purpose'),
      // link('/corporate', '15th AGM 2026', {
      //   children: [
      //     link('/corporate/15th-agm-2026', '15th AGM Minutes'),
      //     link('/corporate/15th-agm-2026', 'Appendix 1'),
      //   ],
      // }),
      link('/corporate', 'Compliance & Business Ethics'),
        link('/corporate', 'Governance', {
        header: true, // shown as a heading, not a link
        children: [
          link('/corporate/governance', 'Board Charter'),
          link('/corporate/governance', 'Director’s Fit and Proper Policy'),
          link('/corporate/governance', 'Terms of Reference for Board Audit Committee'),
          link('/corporate/governance', 'Terms of Reference for Board Nomination & Remuneration Committee'),
          link('/corporate/governance', 'Terms of Reference for Board Risk Management Committee'),
        ],
      }),
    ],
  },
  { label: 'Investors', path: '/investors' },
  {
    label: 'Media',
    path: '/media',
    children: [
      link('/media', 'Media Releases'),
      link('/media', 'Photo Library'),
    ],
  },
  { label: 'Career', path: '/career' },
  { label: 'Contact Us', path: '/contact-us' },
];

export const footerLinks = [
  { label: 'Privacy Policy', path: '/privacy-policy' },
  { label: 'Legal Disclaimer', path: '/legal-disclaimer' },
  { label: 'Contact Us', path: '/contact-us' },
];

/* ---------------- HELPERS ---------------- */

// Children of a top-level item, with the Services mega menu flattened
// into nested groups (used by the mobile menu and landing pages).
export const getChildren = (item) => {
  if (item.mega) {
    return item.columns.map((col) => ({
      label: col.label,
      path: col.path,
      children: col.items.flatMap((i) => [
        { label: i.label, path: i.path },
        ...(i.children || []),
      ]),
    }));
  }
  return item.children || [];
};

// Every link on the site as a flat list: { label, path, trail: [parent labels] }
export const flattenNavigation = () => {
  const out = [];
  const walk = (items, trail) => {
    items.forEach((item) => {
      if (!item.header) out.push({ label: item.label, path: item.path, trail });
      const kids = trail.length === 0 ? getChildren(item) : item.children || [];
      if (kids.length) walk(kids, [...trail, item.label]);
    });
  };
  walk(navigation, []);
  footerLinks.forEach((l) => {
    if (!out.find((o) => o.path === l.path)) out.push({ ...l, trail: [] });
  });
  return out;
};

export const findNavItem = (pathname) => {
  const clean = pathname.replace(/\/+$/, '') || '/';
  return flattenNavigation().find((i) => i.path === clean) || null;
};

export const getSection = (path) => navigation.find((n) => n.path === path);
