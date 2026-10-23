import { Link } from 'react-router-dom';

/* ---------- Content ---------- */
const HERO_IMAGE = '/images/main.jpg';

const LINKS = {
  trackRecord: '/services/engineering-and-construction/track-record',
  yard: '/assets/engineering-and-construction',
  assets: '/assets/engineering-and-construction',
};

const facts = [
  { label: 'Location', value: 'LNG Module Fabrication Yard' },
  { label: 'Client', value: 'International EPC contractor' },
  { label: 'Duration', value: '2/12/2011 to 28/2/2016' },
  { label: 'Project Scope', value: 'Fabrication, Transportation' },
];

const sections = [
  {
    title: 'Ambitious 30 Structure Fabrication Project',
    paragraphs: [
      'This LNG module project launched in December 2011 with a goal of building 30 structures in 3 years. In order to achieve this ambitious target, 10–12 structures had to be built simultaneously, which spreads the focus and increases the elements of risk. The project involves piping fabrication works supported by an automation system, as well as establishment of all associated production and storage facilities. There is also an available jetty within the site for load-outs and incoming shipments.',
      'The quantity of piping required is huge and had never been undertaken previously. This required careful planning and use of our limited yard construction space.',
    ],
  },
  {
    title: 'High Labour Intensity',
    paragraphs: [
      'Such a large-scale undertaking required a total workforce of 8,000, which included the formation of an experienced, dedicated and proactive Project Management Team of 500 to manage the work.',
      'Due to this, a major challenge was met in assembling a large team of capable and experienced subcontractors in a very short time. We had to mobilise many foreign workers and manage the language and cultural barriers.',
    ],
  },
  {
    title: 'Real-Time Problem Solving',
    paragraphs: [
      'The construction methodology differs from the oil & gas norm, and the amount of modification and rectification during the construction period overlapped with constant design changes. As it was our first experience with this client, there was also a need for improvisation to existing Bizworth procedures and management aspects.',
      'Co-location and integration of client and Bizworth teams enabled more efficient project management.',
    ],
  },
  {
    title: 'High Quality Product with an Excellent Safety Record',
    paragraphs: [
      'Modules were delivered to site in Australia in line with the strict requirements of the Australian Quarantine and Inspection Service (AQIS). The project achieved an excellent record of 27 million man-hours without a single Lost Time Injury (LTI).',
    ],
  },
];

const TextLink = ({ to, children }) => (
  <Link to={to} className="font-semibold text-brand-blue underline-offset-2 hover:underline">
    {children}
  </Link>
);

/* ---------- Page ---------- */
export default function CaseStudyMultipleStructures() {
  return (
    <>
      {/* Hero + title band */}
      <section
        className="relative flex min-h-[340px] flex-col justify-end md:min-h-[420px]"
        style={{ background: `url(${HERO_IMAGE}) center/cover no-repeat, linear-gradient(135deg, #1f4fa8 0%, #2e27c3 100%)` }}
      >
        <div className="bg-brand-blue/80">
          <div className="container-site py-9">
            <h1 className="font-heading text-[30px] font-extrabold leading-[1.1] text-brand-cyan md:text-[42px]">
              Case Study: Multiple Structures
            </h1>
          </div>
        </div>
      </section>

      <section className="bg-white pb-16 pt-5">
        <div className="container-site">
          <Link
            to="/contact-us"
            className="inline-flex h-[54px] min-w-[226px] items-center justify-center border border-brand-deep bg-white px-8 font-heading text-[16px] font-bold text-brand-deep transition-colors hover:bg-brand-deep hover:text-white"
          >
            Contact Us
          </Link>

          <div className="mt-12 grid gap-12 lg:grid-cols-[1fr_340px] lg:gap-14">
            {/* Story */}
            <div className="space-y-12 text-[17px] leading-[1.6] text-brand-ink">
              {sections.map((s) => (
                <article key={s.title}>
                  <h2 className="font-heading text-[26px] font-bold leading-[1.2] text-brand-ink md:text-[32px]">{s.title}</h2>
                  <span className="mb-6 mt-4 block h-[2px] w-[66px] bg-brand-orange" />
                  <div className="space-y-5">
                    {s.paragraphs.map((p) => (
                      <p key={p.slice(0, 30)}>{p}</p>
                    ))}
                  </div>
                </article>
              ))}

              <div className="space-y-3 border-t border-black/10 pt-8">
                <p>
                  Read more about our fabrication capabilities and{' '}
                  <TextLink to={LINKS.trackRecord}>track record</TextLink>.
                </p>
                <p>
                  You can also view further information about our <TextLink to={LINKS.yard}>main fabrication yard here</TextLink>.
                </p>
              </div>
            </div>

            {/* Quick facts */}
            <aside className="self-start lg:sticky lg:top-32">
              <div className="bg-gradient-to-b from-[#0d8fcf] to-[#1e5aa8] p-7 text-white">
                <h2 className="font-heading text-[22px] font-bold uppercase tracking-wide">Quick Facts</h2>
                <span className="mt-4 block h-[2px] w-[66px] bg-brand-orange" />
                <dl className="mt-6 divide-y divide-white/20">
                  {facts.map((f) => (
                    <div key={f.label} className="py-4">
                      <dt className="font-heading text-[13px] font-semibold uppercase tracking-wider text-white/70">{f.label}</dt>
                      <dd className="mt-1 text-[17px]">{f.value}</dd>
                    </div>
                  ))}
                </dl>
              </div>
              <Link
                to={LINKS.assets}
                className="mt-5 flex h-[54px] items-center justify-center border border-brand-deep bg-white px-8 font-heading text-[16px] font-bold text-brand-deep transition-colors hover:bg-brand-deep hover:text-white"
              >
                View Assets
              </Link>
            </aside>
          </div>
        </div>
      </section>
    </>
  );
}