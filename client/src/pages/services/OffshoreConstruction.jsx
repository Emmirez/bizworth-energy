import { Link } from 'react-router-dom';

/* ---------- Images (in /public/images) ---------- */
const IMG = {
  hero: '/images/seap.jpg',
  chart: '/images/chartoil.png',
  assets: '/images/ship1.png',
  trackRecord: '/images/night.jpg',
  qhse: '/images/jet.jpg',
};

/* ---------- Links ---------- */
const LINKS = {
  trackRecord: '/services/engineering-and-construction/track-record',
  qhse: '/about-us/quality-health-safety-and-environment',
};

/* ---------- Content ---------- */
const capabilities = [
  'Subsea structures, manifolds, riser-bases, protection structures, etc.',
  'Subsea spools and tie-in systems',
  'Full subsea field installations hook-up, pre-commissioning and commissioning',
];

/* ---------- Small pieces ---------- */
const Para = ({ children }) => <p className="text-[17px] leading-[1.55] text-brand-ink">{children}</p>;

function Banner({ title, text, image, to, fallback }) {
  return (
    <div
      className="flex min-h-[295px] flex-col justify-center px-[18px] py-10 md:px-8"
      style={{ background: `linear-gradient(rgba(0,0,0,0.3), rgba(0,0,0,0.3)), url(${image}) center/cover no-repeat, ${fallback}` }}
    >
      <h2 className="font-heading text-[30px] font-semibold uppercase text-white">{title}</h2>
      <span className="mt-4 block h-[2px] w-[75px] bg-brand-orange" />
      <p className="mt-9 max-w-[900px] text-[17px] leading-[1.3] text-white">{text}</p>
      <div className="mt-5">
        <Link
          to={to}
          className="inline-flex h-[52px] min-w-[226px] items-center justify-center bg-brand-deep/80 px-8 font-heading text-[16px] font-bold text-white transition-colors hover:bg-brand-blue"
        >
          Learn More
        </Link>
      </div>
    </div>
  );
}

/* ---------- Page ---------- */
export default function OffshoreConstruction() {
  return (
    <>
      {/* Hero + title band */}
      <section
        className="relative flex min-h-[340px] flex-col justify-end md:min-h-[420px]"
        style={{
          background: `url(${IMG.hero}) center/cover no-repeat, linear-gradient(180deg, #8fc3ea 0%, #1f5fb0 100%)`,
        }}
      >
        <div className="bg-brand-blue/80">
          <div className="container-site py-9">
            <h1 className="max-w-[900px] font-heading text-[30px] font-extrabold leading-[1.1] text-brand-cyan md:text-[38px]">
              Offshore Construction &amp; Installation
            </h1>
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="bg-white pb-10 pt-5">
        <div className="container-site">
          <div className="mx-auto max-w-[1000px]">
            <Link
              to="/contact-us"
              className="inline-flex h-[54px] min-w-[226px] items-center justify-center border border-brand-deep bg-white px-8 font-heading text-[16px] font-bold text-brand-deep transition-colors hover:bg-brand-deep hover:text-white"
            >
              Contact Us
            </Link>

            <div className="mt-14">
              <Para>
                Our Offshore Construction and Subsea Services provide complete offshore construction and installation
                works for offshore platforms, submarine pipelines and Subsea facilities, Umbilicals, Risers and Flowlines
                (SURF).
              </Para>
            </div>

            <img
              src={IMG.chart}
              alt="Offshore construction and installation structure"
              className="mt-8 w-full max-w-[680px]"
            />

            <div className="mt-8 space-y-6">
              <Para>
                Our Transportation and Installation (T&amp;I) services include heavy lift, pipeline installation, jacket
                launch, floatover and deepwater projects. We also provide offshore diving and related underwater works
                including the design, manufacture and operation of Remotely Operated Vehicles (ROVs) through to the
                decommissioning services of offshore facilities.
              </Para>
              <Para>
                Bizworth Oil &amp; Gas draws from over three decades of experience at differing water depths and
                environments to provide efficient subsea engineering and construction services. We offer innovative
                solutions from Front-End Engineering Design, commissioning, the subsea market both in shallow and
                deepwater with our scope ranging from full Engineering, Procurement, Construction, Installation and
                Commissioning (EPCIC), to transportation and installation services for subsea facilities.
              </Para>
              <Para>Our capabilities include:</Para>
              <ul className="list-disc space-y-0.5 pl-12 text-[17px] leading-[1.55] text-brand-ink">
                {capabilities.map((c) => (
                  <li key={c}>{c}</li>
                ))}
              </ul>
              <Para>
                The execution of our projects are strongly supported by our own fleet of strategic vessels providing
                shallow water, deepwater, flexible pipelay, umbilicals, heavy lift, floatovers, transportation, diving and
                specialised services around the globe. Our markets span Southeast Asia, Australia, India, China, Russia,
                Mexico and Brazil. We believe in providing a cost-effective solution to clients and with full control of
                our strategic fleet, we are able to provide our clients with the right assets at the right time around
                the globe.
              </Para>
            </div>

            {/* Assets */}
            <h2 className="mt-6 font-heading text-[38px] font-medium uppercase text-brand-ink">Assets</h2>
            <Link to="/assets" className="mt-5 block">
              <img src={IMG.assets} alt="Bizworth construction vessel" className="w-full object-cover" />
            </Link>

            <hr className="mt-8 border-black/10" />
          </div>
        </div>
      </section>

      {/* Track Record + QHSE */}
      <section className="bg-white pb-6">
        <div className="container-site grid lg:grid-cols-2 lg:gap-5">
          <Banner
            title="Track Record"
            text="View our track record here to learn more about our capabilities."
            image={IMG.trackRecord}
            to={LINKS.trackRecord}
            fallback="linear-gradient(180deg, #4a4a6a 0%, #2b2b3a 100%)"
          />
          <Banner
            title="QHSE"
            text="Good Quality, Health, Safety and Environment (QHSE) practices are critical to achieve operational excellence for continued business success and sustainability."
            image={IMG.qhse}
            to={LINKS.qhse}
            fallback="linear-gradient(180deg, #6b8fbf 0%, #b5541f 100%)"
          />
        </div>
      </section>
    </>
  );
}