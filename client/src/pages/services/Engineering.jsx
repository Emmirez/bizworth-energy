import { Link } from 'react-router-dom';

/* ---------- Content ---------- */
const HERO_IMAGE = '/images/eng.png';

const services = [
  'Engineering and Project Management Consultancy (PMC) services',
  'Process and system design',
  'Piping and mechanical design',
  'Electrical and Instrumentation design',
  'Civil and structural design',
  'Fabrication and construction engineering',
  'Load-out/ Sea-fastening/ Transportation analysis',
];

const expertise = [
  'Field development',
  'Subsea system and pipelines',
  'Floating structures',
  'Risers',
  'Flow assurance',
  'Advanced engineering (materials and corrosion, geomechanics)',
  'Integrity Management',
];

/* ---------- Small pieces ---------- */
function InfoCard({ title, children }) {
  return (
    <div className="bg-[#00c2ef] px-6 pb-10 pt-6">
      <h2 className="font-heading text-[24px] font-semibold text-brand-ink">{title}</h2>
      <div className="mt-4 text-[17px] leading-[1.8] text-brand-ink">{children}</div>
    </div>
  );
}

function BulletList({ items }) {
  return (
    <ul className="mt-12 list-disc space-y-7 pl-12">
      {items.map((item) => (
        <li key={item}>{item}</li>
      ))}
    </ul>
  );
}

/* ---------- Page ---------- */
export default function Engineering() {
  return (
    <>
      {/* Hero + title band */}
      <section
        className="relative flex min-h-[340px] flex-col justify-end md:min-h-[420px]"
        style={{
          background: `url(${HERO_IMAGE}) center/cover no-repeat, linear-gradient(135deg, #c0392b 0%, #8a8a8a 100%)`,
        }}
      >
        <div className="bg-brand-blue/70">
          <div className="container-site py-9">
            <h1 className="font-heading text-[34px] font-extrabold leading-[1] text-brand-cyan md:text-[44px]">
              Engineering
            </h1>
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="bg-white pb-16 pt-5">
        <div className="container-site">
          <Link
            to="/contact-us"
            className="inline-flex h-[54px] min-w-[226px] items-center justify-center border border-brand-deep bg-white px-8 font-heading text-[16px] font-bold text-brand-deep transition-colors hover:bg-brand-deep hover:text-white"
          >
            Contact Us
          </Link>

          <div className="mt-20 max-w-[900px] space-y-6 text-[17px] leading-[1.6] text-brand-ink">
            <p>
              Bizworth Oil &amp; Gas provides a convenient, single point of contact to our in-house, multidisciplined
              engineering resources. This core division covers a wide range of essential capabilities including Front-End
              Engineering Design (FEED), detailed design, construction engineering, transportation and installation
              engineering, and hook-up and commissioning engineering.
            </p>
            <p>
              We are able to offer the best solution to our clients with our highly experienced team, innovative
              technology and global knowledge networks.
            </p>
          </div>

          <div className="mt-6 grid gap-6 md:grid-cols-3">
            <InfoCard title="Our Services">
              <BulletList items={services} />
            </InfoCard>
            <InfoCard title="Our Expertise">
              <BulletList items={expertise} />
            </InfoCard>
            <InfoCard title="Our People">
              <p className="mt-6">
                Cross-functional team with fabrication and installation experience to ensure we provide our clients with
                a logical and constructible design that is best fit for purpose
              </p>
            </InfoCard>
          </div>
        </div>
      </section>
    </>
  );
}