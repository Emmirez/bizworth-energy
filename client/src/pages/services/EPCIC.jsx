import { Link } from 'react-router-dom';

/* ---------- Images (in /public/images) ---------- */
const IMG = {
  hero: '/images/sapura.png',
  epc: '/images/sapura.png',
  offshore: '/images/IMG_3143-1.jpg',
  hookup: '/images/mixed.png',
  assets: '/images/ship.jpg',
  trackRecord: '/images/night.jpg',
  qhse: '/images/workers.jpg',
};

/* ---------- Links ---------- */
const base = '/services/engineering-and-construction';
const LINKS = {
  epc: `${base}/epcic/engineering-procurement-and-construction-epc`,
  offshore: `${base}/epcic/offshore-construction-and-installation`,
  hookup: '/services/operations-and-maintenance/hook-up-and-commissioning',
  trackRecord: `${base}/track-record`,
  qhse: '/about-us/quality-health-safety-and-environment',
};

const tiles = [
  {
    title: 'Engineering, Procurement and Construction (EPC)',
    text: 'A holistic approach covering multi-disciplined engineering, turnkey procurement and fabrication at our own yards.',
    image: IMG.epc,
    to: LINKS.epc,
  },
  {
    title: 'Offshore Construction and Installation',
    text: 'Transportation and installation of offshore structures, subsea systems and pipelines using our strategic assets.',
    image: IMG.offshore,
    to: LINKS.offshore,
  },
  {
    title: 'Hook-up and Commissioning',
    text: 'Bringing new and existing facilities safely on stream, from mechanical completion through to start-up.',
    image: IMG.hookup,
    to: LINKS.hookup,
  },
];

/* ---------- Small pieces ---------- */
function OutlineButton({ to, children }) {
  return (
    <Link
      to={to}
      className="inline-flex h-[54px] min-w-[226px] items-center justify-center border border-brand-deep bg-white px-8 font-heading text-[16px] font-bold text-brand-deep transition-colors hover:bg-brand-deep hover:text-white"
    >
      {children}
    </Link>
  );
}

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
export default function EPCIC() {
  return (
    <>
      {/* Hero + title band */}
      <section
        className="relative flex min-h-[340px] flex-col justify-end md:min-h-[420px]"
        style={{
          background: `url(${IMG.hero}) center/cover no-repeat, linear-gradient(135deg, #1f4fa8 0%, #2e27c3 100%)`,
        }}
      >
        <div className="bg-brand-blue/80">
          <div className="container-site py-9">
            <h1 className="max-w-[900px] font-heading text-[30px] font-extrabold leading-[1.1] text-brand-cyan md:text-[38px]">
              Engineering, Procurement, Construction, Installation and Commissioning (EPCIC)
            </h1>
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="bg-white pb-10 pt-5">
        <div className="container-site">
          <div className="mx-auto max-w-[1000px]">
            <OutlineButton to="/contact-us">Contact Us</OutlineButton>

            <div className="mt-11 space-y-6">
              <h2 className="font-heading text-[30px] font-medium leading-[1.2] text-brand-ink md:text-[36px]">EPCIC</h2>
              <p className="text-[17px] leading-[1.55] text-brand-ink">
                Bizworth Oil &amp; Gas’s Engineering and Construction business provides end-to-end, turnkey EPCIC
                solutions for the energy industry. Supported by our in-house engineering team, fabrication yards,
                strategic assets and capability in subsea, transportation and installation of structure and pipelines, we
                deliver high quality products across the full EPCIC spectrum.
              </p>
            </div>

            {/* Tiles */}
            <div className="mt-8 grid gap-6 md:grid-cols-3">
              {tiles.map((t) => (
                <Link key={t.title} to={t.to} className="group flex flex-col bg-[#00c2ef]">
                  <div
                    className="relative flex min-h-[200px] items-end px-5 pb-4"
                    style={{ background: `url(${t.image}) center/cover no-repeat, #2e27c3` }}
                  >
                    <span className="absolute inset-0 bg-brand-blue/40 transition-colors group-hover:bg-brand-blue/60" />
                    <span className="relative block h-[2px] w-[56px] bg-white/80" />
                  </div>
                  <div className="flex flex-1 flex-col px-5 pb-7 pt-5">
                    <h3 className="font-heading text-[20px] font-bold leading-[1.25] text-brand-ink">{t.title}</h3>
                    <p className="mt-3 text-[16px] leading-[1.6] text-brand-ink">{t.text}</p>
                    <span className="mt-auto pt-5 font-heading text-[14px] font-bold text-brand-deep group-hover:underline">
                      Learn more →
                    </span>
                  </div>
                </Link>
              ))}
            </div>

            {/* Assets */}
            <h2 className="mt-10 font-heading text-[34px] font-medium uppercase text-brand-ink">Assets</h2>
            <img src={IMG.assets} alt="Bizworth construction vessel" className="mt-5 w-full object-cover" />
            <div className="mt-6">
              <OutlineButton to="/assets">View Assets</OutlineButton>
            </div>

            <hr className="mt-6 border-black/10" />
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