import { Link } from 'react-router-dom';

/* ---------- Content ---------- */
const HERO_IMAGE = '/images/seaship.jpg';

const LINKS = {
  trackRecord: '/services/engineering-and-construction/track-record',
  yard: '/assets/engineering-and-construction',
  assets: '/assets/engineering-and-construction',
};

const facts = [
  { label: 'Location', value: 'Lumut Fabrication Yard' },
  { label: 'Client', value: 'Offshore operator' },
  { label: 'Duration', value: '18 months' },
  { label: 'Project Scope', value: 'Fabrication, Transportation' },
];

const sections = [
  {
    title: 'Fabrication of the 8-Legged Jacket',
    paragraphs: [
      'At 14,000 tons and 150m in height, the 8-Legged Jacket is the largest single structure we have fabricated to date. 1.8 million man-hours were invested into the project and it took a full 18 months from commencement to completion. Transportation required the use of one of our largest cargo barges, the Bizworth 650.',
    ],
  },
  {
    title: 'A Challenging & High-Risk Project',
    paragraphs: [
      'In a project of this magnitude and complexity, careful planning at every stage is essential. The structure must be built in a very specific sequence. The 8-Legged Jacket is more than twice the height of the average jacket, which required development of strict working procedures for lifts exceeding 2 cranes and 20 tons of weight. At this elevation, the wind factor is also unusually high.',
    ],
  },
  {
    title: 'Best-In-Class People Management & Safety Measures',
    paragraphs: [
      'At its peak, we had to rapidly mobilise a workforce of over 1,000 personnel, made possible by our long-term alliance with our in-house subcontractors.',
      'A strict HSE management system was needed to maintain our impeccable safety record considering the large size of the structure being fabricated. Keeping the team focused on a project running for such a long duration was central to its success.',
      'Above all else, this project shows that our fabrication yard is capable of building any type or size of substructure.',
    ],
  },
];

const TextLink = ({ to, children }) => (
  <Link to={to} className="font-semibold text-brand-blue underline-offset-2 hover:underline">
    {children}
  </Link>
);

/* ---------- Page ---------- */
export default function CaseStudyLargeStructures() {
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
              Case Study: Large Structures
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
                  Read more about our large structure fabrication capabilities and{' '}
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