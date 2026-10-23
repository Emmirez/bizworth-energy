import { Link } from 'react-router-dom';

/* ---------- Images (in /public/images) ---------- */
const IMG = {
  hero: '/images/night.jpg',
  assets: '/images/sea.jpg',
  caseStudy: '/images/seaship.jpg',
  caseStudy2: '/images/workers.jpg',
  trackRecord: '/images/night.jpg',
  qhse: '/images/jet.jpg',
};

/* ---------- Links ---------- */
const LINKS = {
  caseStudy: '/services/engineering-and-construction/case-studies/large-structures',
  caseStudy2: '/services/engineering-and-construction/case-studies/multiple-structures',
  trackRecord: '/services/engineering-and-construction/track-record',
  qhse: '/about-us/quality-health-safety-and-environment',
};

/* ---------- Content ---------- */
const procurementCapabilities = [
  'Complete involvement from Concept to Commissioning',
  'Wide spectrum of vendor database and market knowledge',
  'Confidentiality and data integrity',
  'Adequate use of embedded IT systems for effective and on-time procurement',
  'Ongoing process of evolution and vendor development',
  'Global network of suppliers and service providers',
  'Customer focus and involvement',
];

const yardCapabilities = [
  'Offshore structures (inclusive of Central Processing Platforms, Wellhead Platforms, Compression Modules, etc.)',
  'Jackets and Topsides',
  'Process modules for Floating Production, Storage and Offloading (FPSO) as well as Floating, Drilling, Production, Storage, and Offloading (FDPSO) vessels',
  'Mobile Offshore Production Units (MOPU)',
  'Process Skids and System',
  'Subsea Deepwater Manifold',
  'Onshore processing facilities i.e. Liquified Natural Gas Process Modules and Pipe racks',
  'Testing and Pre-Commissioning',
];

const keyAssets = [
  'A 273-acre Fabrication Yard in Lumut, Perak with a fully integrated computerised yard management system linking its engineering, planning, quality management, procurement, warehouse and component production centres together',
  '- State-of-the-art data tracking tools for error-free tracking of documents, materials and components',
  '- Automation and computer-controlled systems ensure optimal efficiency during mass production of components',
  'A 20-acre fabrication facility in Teluk Kalong and another 3 acres at its Kemaman Supply Base provides fully-fledged fabrication, logistics’ support and supply bases for the Group’s operations off the East Coast of Peninsular Malaysia',
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

const Heading = ({ children }) => (
  <h2 className="font-heading text-[30px] font-medium leading-[1.2] text-brand-ink md:text-[36px]">{children}</h2>
);

const Para = ({ children }) => <p className="text-[17px] leading-[1.55] text-brand-ink">{children}</p>;

function CyanCard({ title, items, underline = false }) {
  return (
    <div className="bg-[#00c2ef] px-6 pb-10 pt-6">
      <h3 className="font-heading text-[22px] font-bold text-brand-ink">{title}</h3>
      {underline && <span className="mt-3 block h-[2px] w-[75px] bg-brand-orange" />}
      <div className={`${underline ? 'mt-4 space-y-7' : 'mt-8 space-y-7'} text-[17px] leading-[1.8] text-brand-ink`}>
        {items.map((item) => (
          <p key={item}>{item}</p>
        ))}
      </div>
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
export default function EPC() {
  return (
    <>
      {/* Hero + title band */}
      <section
        className="relative flex min-h-[340px] flex-col justify-end md:min-h-[420px]"
        style={{
          background: `url(${IMG.hero}) center/cover no-repeat, linear-gradient(180deg, #5a5a7a 0%, #2b2b3a 100%)`,
        }}
      >
        <div className="bg-brand-blue/80">
          <div className="container-site py-9">
            <h1 className="max-w-[900px] font-heading text-[30px] font-extrabold leading-[1.1] text-brand-cyan md:text-[38px]">
              Engineering, Procurement and Construction (EPC)
            </h1>
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="bg-white pb-10 pt-5">
        <div className="container-site">
          <div className="mx-auto max-w-[1000px]">
            <OutlineButton to="/contact-us">Contact Us</OutlineButton>

            {/* Engineering */}
            <div className="mt-11 space-y-6">
              <Heading>Engineering</Heading>
              <Para>
                At Bizworth Oil &amp; Gas, we provide our clients with a holistic approach to engineering. Our
                comprehensive activities range from initial conceptualisation, process simulation, studies, development
                and analysis, to optimise solutions, computer run-throughs and three-dimensional modelling as well as
                multi-disciplined and detailed engineering designs.
              </Para>
            </div>

            {/* Procurement */}
            <div className="mt-8 space-y-6">
              <Heading>Procurement</Heading>
              <Para>
                We take pride in engaging in thorough turnkey and project management to ensure our final product exceeds
                stringent international safety and quality standards, whilst adhering to our client’s expectations of
                cost-effectiveness and practical application.
              </Para>
              <Para>
                From acquiring the best equipment to engaging the most qualified task force, Bizworth Oil &amp; Gas offers
                an extensive range of vital procurement services to ensure that every project is completed within budget
                and time period, according to our client’s specifications.
              </Para>
              <Para>
                Leveraging on our global resources and workforce, we set the industry standard for procurement and
                logistics services. Since our inception, we have successfully met every project’s budget and requirements
                and we continue to set new benchmarks for project management and client satisfaction.
              </Para>
              <CyanCard title="Our Capabilities" items={procurementCapabilities} underline />
            </div>

            {/* Construction / Fabrication / Yard */}
            <div className="mt-10 space-y-6">
              <Heading>Construction/Yard</Heading>
              <Para>
                Bizworth Oil &amp; Gas operates several fabrication yards, onshore and offshore logistics’ bases as well
                as provides bonded facilities at our Kemaman Supply Base and Labuan to support offshore services and other
                fabrication works. Local resource support is vital to long-term sustainability and efficiency of
                operations.
              </Para>
              <div className="grid gap-6 md:grid-cols-2">
                <CyanCard title="Our Capabilities" items={yardCapabilities} />
                <CyanCard title="Key Assets" items={keyAssets} />
              </div>
            </div>

            {/* Assets */}
            <h2 className="mt-10 font-heading text-[34px] font-medium uppercase text-brand-ink">Assets</h2>
            <img src={IMG.assets} alt="Bizworth heavy-lift vessel at sea" className="mt-5 w-full object-cover" />
            <div className="mt-6">
              <OutlineButton to="/assets">View Assets</OutlineButton>
            </div>

            <hr className="my-6 border-black/10" />

            {/* Case Studies */}
            <h2 className="font-heading text-[34px] font-medium uppercase text-brand-ink">Case Studies</h2>
             <div className="mt-5 grid gap-10 md:grid-cols-2 md:gap-8">
              {[
                { title: 'Large Structures', image: IMG.caseStudy, to: LINKS.caseStudy, alt: 'Large structure fabrication yard' },
                { title: 'Multiple Structures', image: IMG.caseStudy2, to: LINKS.caseStudy2, alt: 'Multiple module fabrication' },
              ].map((c) => (
                <div key={c.to}>
                  <img src={c.image} alt={c.alt} className="aspect-[16/10] w-full object-cover" />
                  <p className="mt-6 text-[17px] text-brand-ink">{c.title}</p>
                  <div className="mt-5">
                    <OutlineButton to={c.to}>View Case Study</OutlineButton>
                  </div>
                </div>
              ))}
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