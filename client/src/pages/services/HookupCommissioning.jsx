import { Link } from 'react-router-dom';

/* ---------- Images (in /public/images) ---------- */
const IMG = {
  hero: '/images/rig.jpg',
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
  'Preparation of Detail Work-Packing and Work Scheduling',
  'Onshore Pre-Commissioning and Ship-Loose Items Verification',
  'Management of Marine Spread',
  'Offshore installation and Hook-up of Ship-Loose items',
  'Management of third party specialists',
  'Commissioning',
  'System handover and start-up',
  'Final documentation',
];

const resources = [
  'Over 2,000 experienced personnel from top management to tradesmen consisting of Project Managers, Operation Team Leaders, Project Engineers, Planning and Work-Packing Engineers as well as Field Engineers (approximately 250 personnel)',
  'Up-to-date planning, scheduling and completion management software',
  'Own fleet of marine vessels',
  'Established fabrication yards and logistics’ bases located close to major oil fields within East and West Malaysia',
];

/* ---------- Small pieces ---------- */
const TextLink = ({ to, children }) => (
  <Link to={to} className="text-brand-muted underline-offset-2 hover:text-brand-blue hover:underline">
    {children}
  </Link>
);

function CyanCard({ title, items }) {
  return (
    <div className="bg-[#00c2ef] px-6 pb-14 pt-6">
      <h2 className="font-heading text-[22px] font-bold text-brand-ink">{title}</h2>
      <span className="mt-3 block h-[2px] w-[75px] bg-brand-orange" />
      <ul className="mt-16 list-disc pl-12 text-[17px] leading-[1.8] text-brand-ink">
        {items.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
    </div>
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
export default function HookupCommissioning() {
  return (
    <>
      {/* Hero + title band */}
      <section
        className="relative flex min-h-[340px] flex-col justify-end md:min-h-[420px]"
        style={{
          background: `url(${IMG.hero}) center/cover no-repeat, linear-gradient(135deg, #c9a227 0%, #8fb0d6 100%)`,
        }}
      >
        <div className="bg-brand-blue/70">
          <div className="container-site py-9">
            <h1 className="font-heading text-[30px] font-extrabold leading-[1.1] text-brand-cyan md:text-[38px]">
              Hook-up &amp; Commissioning
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

            <div className="mt-14 space-y-6 text-[17px] leading-[1.55] text-brand-ink">
              <p>
                Bizworth Oil &amp; Gas provides Hook-up and Commissioning (HUC) services for new and existing facilities
                in the oil and gas industry. We deliver a full work scope capability across major HUC platforms supported
                by a matured and well-rounded organisation with complete support departments such as Procurement,
                Logistics, Health, Safety and Environment, Quality Assurance and Quality Control and Human Resource and
                Manpower.
              </p>
              <p>
                Drawing from our proven capabilities, extensive experience and strength of resources – our 2,000-strong
                workforce, comprehensive fleet of marine vessels and strategically located fabrication yards – we have set
                ourselves apart for delivering synergy and harnessing the very best of capabilities to deliver complete
                solutions to customers globally.
              </p>
              <p>
                We have completed major greenfield and brownfield projects as well as Enhanced Oil Recovery (EOR) projects
                for various oil and gas operators as well as for Engineering, Procurement, Construction, Installation and
                Commissioning (EPCIC), and Front-End Engineering Design (FEED), Engineering, Procurement, Construction,
                Installation and Commissioning (FEPCIC) contracts. View our{' '}
                <TextLink to={LINKS.trackRecord}>full track record</TextLink> here to know more about our HUC
                capabilities.
              </p>
            </div>

            <div className="mt-6 space-y-6">
              <CyanCard title="Our Capabilities" items={capabilities} />
              <CyanCard title="Our Resources" items={resources} />
            </div>

            <p className="mt-14 text-[17px] leading-[1.55] text-brand-ink">
              We maintain the highest standards of Quality Health, Safety and Environment (QHSE) throughout our HUC
              operations as proven by our industry-leading record. Find out more about our{' '}
              <TextLink to={LINKS.qhse}>risk management systems and certifications</TextLink>.
            </p>

            {/* Assets */}
            <h2 className="mt-6 font-heading text-[38px] font-medium uppercase text-brand-ink">Assets</h2>
            <img src={IMG.assets} alt="Bizworth offshore support vessel" className="mt-5 w-full object-cover" />
            <div className="mt-6">
              <Link
                to="/assets"
                className="inline-flex h-[54px] min-w-[226px] items-center justify-center border border-brand-deep bg-white px-8 font-heading text-[16px] font-bold text-brand-deep transition-colors hover:bg-brand-deep hover:text-white"
              >
                View Assets
              </Link>
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