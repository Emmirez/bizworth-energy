import { Link } from 'react-router-dom';

/* ---------- Content ---------- */
const HERO_IMAGE = '/images/workers.jpg';

// Edit these figures to match Bizworth's own workforce data.
const stats = [
  { label: 'Global Presence in over', value: '20 countries', icon: 'globe' },
  { label: 'Multinational workforce of over', value: '37 nationalities', icon: 'flag' },
  { label: 'Women make up', value: '28% of our workforce', icon: 'person' },
  { label: 'Senior management comprising', value: '20% women', icon: 'case' },
];

const pillars = ['Pride in Results', 'Commitment to Collaboration', 'Spirit of Innovation.'];

/* ---------- Icons (line style in a cyan circle) ---------- */
function StatIcon({ name }) {
  const p = { fill: 'none', stroke: '#1fb6e8', strokeWidth: 2.2, strokeLinecap: 'round', strokeLinejoin: 'round' };
  const icons = {
    globe: (
      <>
        <circle cx="32" cy="32" r="15" {...p} />
        <path d="M24 22c3 2 2 6 5 7s4 4 2 6-1 5 1 6M40 20c-2 3 0 5 2 6s3 4 1 7M30 47c1-3 4-4 6-3" {...p} />
      </>
    ),
    flag: (
      <>
        <path d="M24 20l12 28" {...p} />
        <path d="M26 24c4-3 7 2 11-1l3-6c1 4 4 6 6 5l-6 10c-3 2-7-2-11 1" {...p} />
        <circle cx="23" cy="18" r="1.6" fill="#1fb6e8" />
      </>
    ),
    person: (
      <>
        <path d="M24 28c0-7 4-11 8-11s8 4 8 11c0 5-3 9-8 9s-8-4-8-9z" {...p} />
        <path d="M25 26c4 0 8-3 9-6 1 3 3 5 6 6" {...p} />
        <path d="M18 50c1-7 6-11 14-11s13 4 14 11" {...p} />
      </>
    ),
    case: (
      <>
        <rect x="18" y="24" width="28" height="20" rx="1" {...p} />
        <path d="M27 24v-3h10v3M18 32h28M27 30v5M37 30v5" {...p} />
      </>
    ),
  };
  return (
    <span className="flex h-[124px] w-[124px] items-center justify-center rounded-full border-[3px] border-brand-cyan">
      <svg viewBox="0 0 64 64" className="h-16 w-16" aria-hidden="true">
        {icons[name]}
      </svg>
    </span>
  );
}

const Wrap = ({ children, className = '' }) => (
  <div className={`mx-auto max-w-[1440px] px-5 md:px-8 lg:px-[120px] xl:px-[360px] ${className}`}>{children}</div>
);

/* ---------- Page ---------- */
export default function Career() {
  return (
    <>
      {/* Hero + "Who we are" band */}
      <section
        className="relative flex min-h-[560px] flex-col md:min-h-[700px]"
        style={{
          background: `linear-gradient(rgba(0,0,0,0.25), rgba(0,0,0,0.25)), url(${HERO_IMAGE}) center/cover no-repeat, linear-gradient(135deg, #c9a227 0%, #3d5f8a 100%)`,
        }}
      >
        <div className="flex flex-1 flex-col items-center justify-center px-5 pb-[110px] text-center">
          <h1 className="font-heading text-[40px] font-black leading-[1.1] text-white drop-shadow-[0_2px_8px_rgba(0,0,0,0.35)] md:text-[64px]">
            Build Your Career with Us
          </h1>
          <p className="mt-6 max-w-[720px] text-[18px] leading-[1.5] text-white drop-shadow md:text-[21px]">
            Our company was built on the dedication and passion of our people. Join us and become part of our highly
            skilled and passionate team of professionals.
          </p>
        </div>
        <div className="absolute inset-x-0 bottom-0 bg-brand-blue/75">
          <Wrap className="py-7">
            <h2 className="font-heading text-[32px] font-extrabold text-brand-cyan md:text-[40px]">Who we are</h2>
          </Wrap>
        </div>
      </section>

      {/* Who we are text */}
      <section className="bg-white py-10">
        <Wrap>
          <div className="space-y-6 text-[17px] leading-[1.55] text-brand-ink">
            <p>
              Bizworth Oil &amp; Gas is a global integrated energy services and solutions provider operating across the
              entire upstream value chain, including renewables. The Group’s spectrum of capabilities covers exploration,
              development, production, rejuvenation, decommissioning, and abandonment.
            </p>
            <p>
              With a multinational workforce with over 37 nationalities, versatile strategic assets, and strong project
              management capabilities, the Group today delivers its integrated solutions and expertise in over 20
              countries. This includes Malaysia, China, Australia, Brazil, the United States of America, as well as those
              in Western Africa and the Middle East.
            </p>
          </div>
        </Wrap>
      </section>

      {/* Stats */}
      <section className="bg-[#f0f0f0] py-12 md:py-14">
        <div className="mx-auto grid max-w-[1200px] grid-cols-1 gap-10 px-5 sm:grid-cols-2 lg:grid-cols-4">
          {stats.map((s) => (
            <div key={s.label} className="flex flex-col items-center text-center">
              <StatIcon name={s.icon} />
              <p className="mt-5 text-[16px] text-brand-ink">{s.label}</p>
              <p className="font-heading text-[28px] leading-[1] text-brand-ink md:text-[30px]">{s.value}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Mission & Our Way */}
      <section className="bg-gradient-to-r from-[#00b8e6] via-[#0f7fc2] to-[#2a3a9a] py-12 pb-20 md:py-14 md:pb-28">
        <Wrap>
          <h2 className="font-heading text-[30px] font-bold uppercase text-white md:text-[40px]">Our Mission and Our Way</h2>
          <span className="mt-6 block h-[1px] w-[75px] bg-white/50" />
          <div className="mt-10 space-y-6 text-[18px] leading-[1.4] text-white">
            <p>Delivering Solutions Safely.</p>
            <p>
              “Our Way” is the heartbeat of our operations at Bizworth Oil &amp; Gas, rooted in the foundational values of
              being Honest, Accountable, and Respectful.
            </p>
            <p>This philosophy isn’t just words; it’s a commitment to excellence and standing by these pillars:</p>
            <ul className="list-disc pl-12">
              {pillars.map((p) => (
                <li key={p}>{p}</li>
              ))}
            </ul>
          </div>
        </Wrap>
      </section>

      {/* Why join us + fraud warning */}
      <section className="bg-white py-10 md:py-12">
        <Wrap>
          <h2 className="font-heading text-[34px] font-extrabold uppercase text-brand-ink md:text-[44px]">Why Join Us?</h2>
          <p className="mt-6 text-[17px] leading-[1.55] text-brand-ink">
            Bizworth Oil &amp; Gas is an international company with employees and clients from the world over. We offer
            opportunities to enhance your career across a full range of exciting roles in the upstream oil and gas
            industry: Fabrication, hook-up and commissioning, drilling services, renewables, production and exploration,
            geotechnical and geophysical survey, installation of pipelines and facilities, marine, diving and remotely
            operated underwater vehicle (ROV) services, operations and maintenance services.
          </p>

          <h2 className="mt-10 font-heading text-[30px] font-extrabold text-brand-ink md:text-[44px]">
            Beware of Recruitment Frauds
          </h2>
          <div className="mt-6 space-y-6 text-[17px] leading-[1.55] text-brand-ink">
            <p>
              Bizworth Oil &amp; Gas (“The Group” or “Company”) has been made aware of individuals or organisations that
              impersonate and/or falsely use Bizworth Oil &amp; Gas’s name or the Company employee’s identity in an attempt
              to recruit on behalf of The Group.
            </p>
            <p>
              Jobseekers and/or members of the public are engaged through various communication formats such as but not
              limited to social media, e-mail, text messages and others offering employment opportunities with Bizworth
              Oil &amp; Gas.
            </p>
            <p>
              Bizworth Oil &amp; Gas never asks candidates for payment at any stage of recruitment. If you are unsure whether
              an offer is genuine, please verify it with us directly before responding.
            </p>
          </div>
        </Wrap>
      </section>

      {/* Explore opportunities */}
      <section className="bg-[#f0f0f0] py-12 md:py-16">
        <Wrap>
          <h2 className="font-heading text-[30px] font-semibold uppercase text-brand-ink md:text-[40px]">
            Explore Career Opportunities
          </h2>
          <span className="mt-6 block h-[2px] w-[75px] bg-brand-orange" />
          <p className="mt-8 text-[17px] leading-[1.55] text-brand-ink">
            We are always looking for talented, safety-minded people to join our teams onshore and offshore. To ask about
            current openings or send us your details, get in touch with our team.
          </p>
          <Link
            to="/contact-us"
            className="mt-8 inline-flex h-[54px] min-w-[226px] items-center justify-center bg-brand-deep px-8 font-heading text-[16px] font-bold text-white transition-colors hover:bg-brand-blue"
          >
            Contact Us
          </Link>
        </Wrap>
      </section>
    </>
  );
}