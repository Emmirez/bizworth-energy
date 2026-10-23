import { Link } from 'react-router-dom';

/* ---------- Images (in /public/images) ---------- */
const IMG = {
  hero: '/images/sapura.png',
  engineering: '/images/engineer.png',
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
  engineering: `${base}/engineering`,
  epc: `${base}/epcic/engineering-procurement-and-construction-epc`,
  offshore: `${base}/epcic/offshore-construction-and-installation`,
  hookup: '/services/operations-and-maintenance/hook-up-and-commissioning',
  wellIntervention: `${base}/well-intervention-and-decommissioning`,
  operations: '/services/operations-and-maintenance',
  trackRecord: `${base}/track-record`,
  qhse: '/about-us/quality-health-safety-and-environment',
};

const epcicTiles = [
  { title: 'Engineering, Procurement and Construction (EPC)', image: IMG.epc, to: LINKS.epc },
  { title: 'Offshore Construction and Installation', image: IMG.offshore, to: LINKS.offshore },
  { title: 'Hook-up and Commissioning', image: IMG.hookup, to: LINKS.hookup },
];

/* ---------- Small pieces ---------- */
function OutlineButton({ to, children }) {
  return (
    <Link
      to={to}
      className="inline-flex h-[48px] min-w-[202px] items-center justify-center border border-brand-deep bg-white px-8 font-heading text-[15px] font-bold text-brand-deep transition-colors hover:bg-brand-deep hover:text-white"
    >
      {children}
    </Link>
  );
}

function SolidButton({ to, children, className = '' }) {
  return (
    <Link
      to={to}
      className={`inline-flex h-[48px] min-w-[202px] items-center justify-center bg-brand-deep/85 px-8 font-heading text-[15px] font-bold text-white transition-colors hover:bg-brand-blue ${className}`}
    >
      {children}
    </Link>
  );
}

const Heading = ({ children }) => (
  <h2 className="font-heading text-[38px] font-extrabold leading-[1.15] text-brand-ink md:text-[44px]">{children}</h2>
);

const Text = ({ children }) => <p className="mt-6 text-[16px] leading-[1.5] text-brand-ink md:text-[17px]">{children}</p>;

const Divider = () => <hr className="my-9 border-black/10" />;

function Banner({ title, text, image, to, fallback }) {
  return (
    <div
      className="flex min-h-[290px] flex-col justify-center px-[18px] py-10 md:px-8"
      style={{ background: `linear-gradient(rgba(0,0,0,0.25), rgba(0,0,0,0.25)), url(${image}) center/cover no-repeat, ${fallback}` }}
    >
      <h2 className="font-heading text-[30px] font-semibold uppercase text-white">{title}</h2>
      <span className="mt-4 block h-[2px] w-[66px] bg-brand-orange" />
      <p className="mt-9 max-w-[520px] text-[16px] leading-[1.3] text-white">{text}</p>
      <div className="mt-3">
        <SolidButton to={to}>Learn more</SolidButton>
      </div>
    </div>
  );
}

/* ---------- Page ---------- */
export default function EngineeringConstruction() {
  return (
    <>
      {/* Hero */}
      <section
        className="relative flex min-h-[690px] flex-col md:min-h-[720px]"
        style={{
          background: `linear-gradient(90deg, rgba(23,22,107,0.15) 0%, rgba(23,22,107,0.55) 100%), url(${IMG.hero}) center/cover no-repeat, linear-gradient(135deg, #1f4fa8 0%, #2e27c3 100%)`,
        }}
      >
        <div className="container-site flex flex-1 flex-col items-end pb-[160px] pt-14 text-right md:pt-20">
          <h1 className="max-w-[640px] font-heading text-[42px] font-black uppercase leading-[1.03] text-white md:text-[56px]">
            Client-centric Field Development Solutions
          </h1>
          <p className="mt-14 max-w-[560px] text-[16px] leading-[1.3] text-white md:text-[17px]">
            Combining the strengths of our experienced and proven project team with our assets, Bizworth Oil &amp; Gas’s
            Engineering and Construction business successfully undertakes integrated offshore development projects that
            deliver maximum economic benefits to clients.
          </p>
          <SolidButton to={LINKS.engineering} className="mt-6">
            Learn more
          </SolidButton>
        </div>

        <div className="absolute inset-x-0 bottom-0 bg-brand-blue/80">
          <div className="container-site py-8 md:py-10">
            <p className="max-w-[600px] font-heading text-[34px] font-extrabold leading-[1] text-brand-cyan md:text-[44px]">
              Engineering and Construction
            </p>
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="bg-white pb-12 pt-4">
        <div className="container-site">
          <div className="mx-auto max-w-[1000px]">
            {/* Engineering */}
            <div className="mt-2">
              <OutlineButton to="/contact-us">Contact Us</OutlineButton>
            </div>
            <div className="mt-4">
              <Heading>Engineering</Heading>
              <Text>
                Bizworth Oil &amp; Gas provides high-end engineering services to offshore oil and gas projects across the
                globe. Leveraging on the combination of our highly experienced team, advanced technology and global
                knowledge networks, we enable clients to maximise return on investment in remote, hostile and deepwater
                environments.
              </Text>
              <div className="mt-6">
                <OutlineButton to={LINKS.engineering}>Learn more</OutlineButton>
              </div>
              <img src={IMG.engineering} alt="Bizworth engineers at work" className="mt-4 w-full object-cover" />
            </div>

            <Divider />

            {/* EPCIC */}
            <Heading>Engineering, Procurement, Construction, Installation and Commissioning (EPCIC)</Heading>
            <Text>
              Bizworth Oil &amp; Gas’s Engineering and Construction business provides end-to-end, turnkey EPCIC solutions
              for the energy industry. Supported by our in-house engineering team, fabrication yards, strategic assets and
              capability in subsea, transportation and installation of structure and pipelines, we deliver high quality
              products across the full EPCIC spectrum.
            </Text>

            <div className="mt-6 grid gap-1 md:grid-cols-3 md:gap-3">
              {epcicTiles.map((t) => (
                <Link
                  key={t.title}
                  to={t.to}
                  className="group relative flex min-h-[90px] items-end overflow-hidden px-[22px] pb-3 pt-6 md:min-h-[220px]"
                  style={{ background: `url(${t.image}) center/cover no-repeat, #2e27c3` }}
                >
                  <span className="absolute inset-0 bg-brand-blue/45 transition-colors group-hover:bg-brand-blue/65" />
                  <span className="relative">
                    <span className="block font-heading text-[19px] font-semibold leading-[1.25] text-white">{t.title}</span>
                    <span className="mt-2 block h-[2px] w-[56px] bg-white/80" />
                  </span>
                </Link>
              ))}
            </div>

            {/* Assets */}
            <h2 className="mt-8 font-heading text-[34px] font-medium uppercase text-brand-ink">Assets</h2>
            <img src={IMG.assets} alt="Bizworth construction vessel" className="mt-5 w-full object-cover" />
            <div className="mt-6">
              <OutlineButton to="/assets">View Assets</OutlineButton>
            </div>

            <Divider />

            {/* Well Intervention */}
            <Heading>Well Intervention and Decommissioning</Heading>
            <Text>
              We provide cost-effective Light Well Intervention (LWI) services for the subsea energy industry. These cover
              the full life cycle of the field, from Front-End Engineering Design (FEED) study to installation,
              maintenance, abandonment and full decommissioning of subsea production facilities.
            </Text>
            <div className="mt-6">
              <OutlineButton to={LINKS.wellIntervention}>Learn More</OutlineButton>
            </div>

            <Divider />

            {/* Operations and Maintenance */}
            <Heading>Operations and Maintenance</Heading>
            <Text>
              Bizworth Oil &amp; Gas has an extensive range of offshore support services to ensure we always provide the
              best solution and services to our clients. Our primary activities consist of subsea services, diving
              services, geotechnical and geophysical services, offshore platform maintenance as well as offshore support
              vessels.
            </Text>
            <div className="mt-6">
              <OutlineButton to={LINKS.operations}>Learn More</OutlineButton>
            </div>
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
            fallback="linear-gradient(180deg, #8fb0d6 0%, #b5541f 100%)"
          />
        </div>
      </section>
    </>
  );
}