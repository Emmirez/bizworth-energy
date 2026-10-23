import { Link } from 'react-router-dom';

/* ---------- Content ---------- */
const HERO_IMAGE = '/images/strength.png';

// Figures already used elsewhere on the site — update if they change.
const stats = [
  { value: '20', label: 'Countries of operation' },
  { value: '13,000', label: 'People in our global workforce' },
  { value: '30+', label: 'Years of offshore experience' },
  { value: '3', label: 'Core business segments' },
];

const pillars = [
  {
    title: 'Safety First',
    text: 'Every project starts and ends with the wellbeing of our people, our clients and the environment. Our STOP WORK Authority empowers every employee to act whenever a situation is deemed unsafe.',
  },
  {
    title: 'Delivering With Discipline',
    text: 'We focus on core execution and order book replenishment, completing projects on time, within budget and to stringent international standards.',
  },
  {
    title: 'Our People',
    text: 'Our strength lies in a highly skilled, multidisciplinary workforce whose experience spans engineering, construction, drilling and production.',
  },
  {
    title: 'Sustainable Energy',
    text: 'From exploration to rejuvenation and renewables, we apply our capabilities to enable a sustainable world through energy solutions.',
  },
];

const segments = [
  { label: 'Engineering and Construction', to: '/services/engineering-and-construction' },
  { label: 'Operations and Maintenance', to: '/services/operations-and-maintenance' },
  { label: 'Drilling & Completion', to: '/services/drilling-and-completion' },
  
];

/* ---------- Small pieces ---------- */
const Line = ({ className = '' }) => <span className={`block h-[2px] w-[75px] bg-brand-orange ${className}`} />;

/* ---------- Page ---------- */
export default function StrengthWithPurpose() {
  return (
    <>
      {/* Hero + title band */}
      <section
        className="relative flex min-h-[340px] flex-col justify-end overflow-hidden md:min-h-[440px]"
        style={{ background: `url(${HERO_IMAGE}) center/cover no-repeat, #28245c` }}
      >
        <div className="bg-brand-blue/80">
          <div className="container-site py-9">
            <h1 className="font-heading text-[32px] font-extrabold leading-[1.1] text-brand-cyan md:text-[42px]">
              Strength with Purpose
            </h1>
          </div>
        </div>
      </section>

      {/* Intro */}
      <section className="bg-white py-14 md:py-20">
        <div className="container-site">
          <div className="mx-auto max-w-[900px] text-center">
            <h2 className="font-heading text-[28px] font-bold uppercase leading-[1.2] text-brand-ink md:text-[36px]">
              Built on Experience. Driven by Purpose.
            </h2>
            <Line className="mx-auto mt-6" />
            <p className="mt-8 text-[17px] leading-[1.7] text-brand-ink">
              Strength with Purpose is the theme that guides Bizworth Oil &amp; Gas. It reflects the depth of our
              capabilities across the upstream value chain and the clear direction behind everything we do: delivering
              safe, reliable and cost-effective energy solutions for our clients, value for our stakeholders and growth for
              our people.
            </p>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="bg-brand-navy py-14">
        <div className="container-site grid grid-cols-2 gap-y-10 lg:grid-cols-4">
          {stats.map((s) => (
            <div key={s.label} className="px-3 text-center">
              <p className="font-heading text-[40px] font-black leading-none text-brand-cyan md:text-[52px]">{s.value}</p>
              <Line className="mx-auto mt-4 w-[50px]" />
              <p className="mt-4 text-[15px] leading-snug text-white/85 md:text-[16px]">{s.label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Pillars */}
      <section className="bg-white py-14 md:py-20">
        <div className="container-site">
          <h2 className="font-heading text-[28px] font-semibold uppercase text-brand-ink md:text-[36px]">Our Pillars</h2>
          <Line className="mt-5" />
          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {pillars.map((p, i) => (
              <div key={p.title} className="flex flex-col bg-[#00c2ef] px-6 pb-8 pt-7">
                <span className="font-heading text-[44px] font-black leading-none text-brand-navy/25">0{i + 1}</span>
                <h3 className="mt-3 font-heading text-[21px] font-bold leading-tight text-brand-ink">{p.title}</h3>
                <p className="mt-4 text-[16px] leading-[1.65] text-brand-ink">{p.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Segments */}
      <section className="bg-gradient-to-r from-[#0d8fcf] to-[#1e5aa8] py-14 md:py-16">
        <div className="container-site">
          <h2 className="font-heading text-[28px] font-semibold uppercase text-white md:text-[34px]">Where Our Strength Lies</h2>
          <Line className="mt-5" />
          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {segments.map((s) => (
              <Link
                key={s.to}
                to={s.to}
                className="group flex items-center justify-between border border-white/40 px-6 py-6 text-white transition-colors hover:bg-white hover:text-brand-deep"
              >
                <span className="font-heading text-[17px] font-semibold leading-snug">{s.label}</span>
                <span className="ml-4 text-[22px] transition-transform group-hover:translate-x-1">→</span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Report notice */}
      <section className="bg-white py-14 md:py-20">
        <div className="container-site">
          <div className="mx-auto flex max-w-[1000px] flex-col items-start gap-8 border border-black/10 bg-brand-mist px-6 py-10 md:flex-row md:items-center md:justify-between md:px-12">
            <div>
              <h2 className="font-heading text-[24px] font-bold uppercase text-brand-ink md:text-[28px]">Annual Report</h2>
              <Line className="mt-4" />
              <p className="mt-5 max-w-[520px] text-[16px] leading-[1.6] text-brand-ink">
                Our annual report will be published here. For shareholder and investor enquiries in the meantime, please
                visit Investor Relations or get in touch with our team.
              </p>
            </div>
            <div className="flex flex-col gap-4 sm:flex-row md:flex-col">
              <Link
                to="/investors"
                className="inline-flex h-[52px] min-w-[226px] items-center justify-center bg-brand-deep px-8 font-heading text-[16px] font-bold text-white transition-colors hover:bg-brand-blue"
              >
                Investor Relations
              </Link>
              <Link
                to="/contact-us"
                className="inline-flex h-[52px] min-w-[226px] items-center justify-center border border-brand-deep bg-white px-8 font-heading text-[16px] font-bold text-brand-deep transition-colors hover:bg-brand-deep hover:text-white"
              >
                Contact Us
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}