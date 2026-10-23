import { useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';

/* ---------- Content ---------- */
const HERO_IMAGE = '/images/main.jpg';

const LINKS = {
  trackRecord: '/services/engineering-and-construction/track-record',
  qhse: '/about-us/quality-health-safety-and-environment',
  assets: '/assets',
};

const brownfieldWorks = [
  'Launcher and Receiver',
  'Riser tie-in and installation of new equipment and piping works',
  'Valve overhaul, repair and recertification',
  'Piping rerouting and replacement',
  'Structural repair, strengthening and maintenance',
  'Painting works and surface protection',
  'Electrical and Instrumentation Works',
  'Vessel cleaning',
  'Plant Turnaround',
];

const people = [
  'Highly specialised and experienced engineers in water and chemical injection',
  'More than 2,000 experienced personnel from Project Management Team (PMT) to construction personnel',
];

const topsideServices = [
  'Detailed site survey',
  'Preparation of construction engineering, work-packing and work scheduling',
  'Procurement',
  'Onshore prefabrication of installation items',
  'Logistics and custom clearance',
  'Offshore fabrication, installation and hook-up of prefabricated items',
  'Management of Marine Spread, laydown and storage facilities, shore support and supply bases',
  'Management of Third Party Specialists',
  'Commissioning',
  'System Handover and Start-Up',
];

const rovCategories = [
  {
    title: 'ROV Design and Manufacture',
    items: [
      'Holds a number of patents and industry awards that recognise market sector competence and excellence',
      'Clear leader in ROV and intervention technology driven by innovation to exceed client’s needs and challenges within the drilling support and production environment',
    ],
  },
  {
    title: 'ROV Operations',
    items: [
      'Comprehensive service consisting of drilling support, subsea completions, field intervention, pipelay barge support, field construction, field abandonment and environmental surveys',
    ],
  },
  {
    title: 'Intervention Tooling',
    items: [
      'Strong focus on evolving existing tools and developing new tooling systems to meet client’s individual needs',
      'Ability to integrate software and electronic control systems with dynamic hydraulic and mechanical hardware to successfully deliver any tooling project from the storyboard to the seafloor',
    ],
  },
  {
    title: 'Offshore Survey',
    items: [
      'We conduct offshore positioning services, geophysical surveys, construction support, and drilling support',
      'All our services are executed with tailored technology to collect quality useable information and provide rapid data delivery to our clients',
    ],
  },
];

const subseaCapabilities = [
  'Subsea structures, manifolds, riser-bases, protection structures, etc.',
  'Subsea spools and tie-in systems',
  'Full subsea field installations hook-up, pre-commissioning and commissioning',
];

const vessels = ['Accommodation Workboats and Barges', 'Anchor Handling Tugs/ Supply Vessels', 'Diving Support Vessels'];

const systemIntegration = [
  'Topside Equipment: Offshore Telecommunications and Network Services, Offshore Pedestal Crane, Instrument & Controls',
  'Subsea Systems & Intervention: Subsea Umbilicals, Risers, and Flowlines (SURF) – SSIV, ILT, PLEM, Wellhead Control Modules (WCM), Hydraulic Power Units (HPU) and Subsea Well Intervention',
  'Power Systems: Offshore and Onshore Power Systems and Battery Energy Storage Solutions',
];

const maintenanceServices = [
  'Comprehensive Onshore Plant Maintenance Services',
  'Equipment and Tooling Rental',
  'Crane Operations and Services',
  'Asset Preservation, Storage, and Maintenance Solutions',
];

const techExpertise = [
  'End-to-end service delivery from design, supply, and fabrication to deployment and commissioning',
  'Bespoke solutions tailored for oil and gas installations',
  'Extensive experience integrating complex systems to optimise operational performance',
];

/* ---------- Small pieces ---------- */
const TextLink = ({ to, children }) => (
  <Link to={to} className="font-semibold text-brand-blue underline-offset-2 hover:underline">
    {children}
  </Link>
);

function Section({ id, title, children }) {
  return (
    <section id={id} className="scroll-mt-28 border-t border-black/10 pt-9">
      <h2 className="font-heading text-[30px] font-extrabold leading-[1.15] text-brand-ink md:text-[38px]">{title}</h2>
      <div className="mt-6 space-y-6 text-[17px] leading-[1.6] text-brand-ink">{children}</div>
    </section>
  );
}

const SubHeading = ({ children }) => (
  <h3 className="pt-2 font-heading text-[22px] font-bold text-brand-ink">{children}</h3>
);

function List({ items }) {
  return (
    <ul className="list-disc space-y-3 pl-6">
      {items.map((item) => (
        <li key={item}>{item}</li>
      ))}
    </ul>
  );
}

function Card({ title, children }) {
  return (
    <div className="bg-[#00c2ef] px-6 pb-8 pt-6">
      <h3 className="font-heading text-[22px] font-semibold text-brand-ink">{title}</h3>
      <div className="mt-5 text-[16px] leading-[1.7] text-brand-ink">{children}</div>
    </div>
  );
}

/* ---------- Page ---------- */
export default function OperationsMaintenance() {
  const { pathname } = useLocation();

  // Opened from a sub-link (e.g. /topside-maintenance)? Scroll to that section.
  useEffect(() => {
    const id = pathname.split('/').pop();
    const el = document.getElementById(id);
    if (el) setTimeout(() => el.scrollIntoView({ behavior: 'smooth', block: 'start' }), 50);
  }, [pathname]);

  return (
    <>
      {/* Hero + title band */}
      <section
        className="relative flex min-h-[340px] flex-col justify-end md:min-h-[420px]"
        style={{
          background: `url(${HERO_IMAGE}) center/cover no-repeat, linear-gradient(135deg, #6fa3d8 0%, #2e27c3 100%)`,
        }}
      >
        <div className="bg-brand-blue/80">
          <div className="container-site py-9">
            <h1 className="font-heading text-[30px] font-extrabold leading-[1.1] text-brand-cyan md:text-[38px]">
              Operations and Maintenance
            </h1>
          </div>
        </div>
      </section>

      <div className="bg-white pb-16 pt-5">
        <div className="container-site">
          <div className="mx-auto max-w-[1100px] space-y-12">
            <Link
              to="/contact-us"
              className="inline-flex h-[54px] min-w-[226px] items-center justify-center border border-brand-deep bg-white px-8 font-heading text-[16px] font-bold text-brand-deep transition-colors hover:bg-brand-deep hover:text-white"
            >
              Contact Us
            </Link>

            {/* Topside Maintenance */}
            <Section id="topside-maintenance" title="Topside Maintenance">
              <p>
                Bizworth Oil &amp; Gas has extensive capabilities in brownfield works ranging from major upgrading,
                modification and rejuvenation, to topside life extension preventive and corrective maintenance works,
                with a strong focus on minimal disruption to operations.
              </p>
              <p>We have an extensive portfolio of working with established global clients on various topside maintenance projects.</p>
              <p>
                View our <TextLink to={LINKS.trackRecord}>full track record</TextLink> to learn more about our
                capabilities.
              </p>
              <p>
                We ensure high standards of Quality, Health, Safety and Environment (QHSE) on all projects and are
                committed to ensuring the health and safety of our people as well as protection of the environment, as is
                demonstrated by our industry-leading HSE record.
              </p>
              <div className="grid gap-6 md:grid-cols-3">
                <Card title="Our Services">
                  <List items={topsideServices} />
                </Card>
                <Card title="Our Expertise">
                  <List items={brownfieldWorks} />
                </Card>
                <Card title="Our Resources">
                  <List items={people} />
                  <p className="mt-5 font-semibold">Supported by Assets</p>
                  <p className="mt-1">Own fleet of marine vessels and fabrication yards located in close proximity to each project.</p>
                </Card>
              </div>
            </Section>

            {/* Subsea Services */}
            <Section id="subsea-services" title="Subsea Services">
              <p>
                Bizworth Oil &amp; Gas offers comprehensive subsea services ranging from Inspection, Repair and
                Maintenance (IRM) services on offshore platforms, rigs, subsea pipelines and state-of-the-art subsea
                facilities to subsea construction work.
              </p>
              <p>
                Our IRM services utilise strategic in-house assets from DP-2 support vessels, diving systems and Remotely
                Operated Vehicles (ROVs) to maximise the life expectancy and performance levels of offshore platforms,
                pipelines, and other subsea systems.
              </p>

              <SubHeading>Remotely Operated Vehicles (ROVs)</SubHeading>
              <p>
                Bizworth Oil &amp; Gas’s world-class ROVs are developed and built by the Group’s subsidiary, Bizworth Marine Technology. To
                learn more about our ROVs, <TextLink to={LINKS.assets}>click here</TextLink>.
              </p>
              <p>
                We have built a solid reputation over the past 12 years in designing, manufacturing, servicing and
                offshore operation of specialised subsea intervention tooling. We hold a number of patents for ROV design,
                pipeline inspection and underwater density measurement as an example of our ongoing commitment to tooling
                innovation and technology development.
              </p>
              <p>Our main services can be divided into four service categories:</p>
              <div className="grid gap-6 md:grid-cols-2">
                {rovCategories.map((c) => (
                  <Card key={c.title} title={c.title}>
                    <List items={c.items} />
                  </Card>
                ))}
              </div>

              <SubHeading>Diving Services</SubHeading>
              <p>
                Bizworth Oil &amp; Gas’s underwater diving services offer subsea Inspection, Repair and Maintenance (IRM)
                as well as light construction services under its subsidiary, Bizworth Subsea Services Sdn. Bhd.
              </p>
              <p>
                We provide pipeline survey, platform IRM work, grout bag pipeline support, frond mat installation,
                wellhead intervention, rock dumping for pipeline scour prevention, diving operations assistance and diver
                observation as well as drilling support services through our fleet of ROVs.
              </p>
              <p>
                We also operate a fleet of diving vessels and saturation systems as well as a survey source for conducting
                underwater services on top of subsea inspection and engineering services.
              </p>

              <SubHeading>Subsea Construction</SubHeading>
              <p>
                Bizworth Oil &amp; Gas draws from over three decades of experience at different water depths and
                environments providing efficient subsea engineering and construction services. We offer innovative
                solutions from Front-End Engineering Design, commissioning, to subsea markets in both shallow and
                deepwater with our scope of services ranging from full Engineering, Procurement, Construction,
                Installation and Commissioning (EPCIC) to transportation and installation for subsea facilities. Our
                capabilities include:
              </p>
              <List items={subseaCapabilities} />
            </Section>

            {/* Brownfield Rejuvenation */}
            <Section id="brownfield-rejuvenation" title="Brownfield Rejuvenation">
              <p>
                We have extensive capabilities in brownfield modification, upgrading, rejuvenation and maintenance works,
                with a proven capability in working in Simultaneous Operation (SIMOP) mode to minimise disruption to
                operations.
              </p>
              <p>
                We ensure high standards of Quality, Health, Safety and Environment (QHSE) on all projects, and are
                committed to ensuring the health and safety of our people, as well as protection of the environment, as is
                demonstrated by our industry-leading HSE record. Find out more about our{' '}
                <TextLink to={LINKS.qhse}>risk management systems and certifications</TextLink>.
              </p>
              <p>
                We have an extensive portfolio of working with high-profile global clients on various topside maintenance
                projects. View our <TextLink to={LINKS.trackRecord}>full track record</TextLink> to learn more about our
                capabilities.
              </p>
              <div className="grid gap-6 md:grid-cols-2">
                <Card title="Main Brownfield Activities">
                  <List items={brownfieldWorks} />
                </Card>
                <Card title="Our People">
                  <List items={people} />
                </Card>
              </div>
            </Section>

            {/* Offshore Support Vessels */}
            <Section id="offshore-support-vessels" title="Offshore Support Vessels">
              <p>
                Bizworth Oil &amp; Gas owns and operates a fleet of offshore support vessels to support client activities
                across the oil and gas value chain. Our vessels consist of:
              </p>
              <List items={vessels} />
              <p>
                Please see our <TextLink to={LINKS.assets}>asset catalogue</TextLink> for more information on our vessels.
              </p>
              <div>
                <Link
                  to={LINKS.assets}
                  className="inline-flex h-[54px] min-w-[226px] items-center justify-center bg-brand-deep px-8 font-heading text-[16px] font-bold text-white transition-colors hover:bg-brand-blue"
                >
                  Go to Assets Directory
                </Link>
              </div>
            </Section>

            {/* Technology Solutions */}
            <Section id="technology-solutions" title="Technology Solutions">
              <p>
                Bizworth Oil &amp; Gas’s Technology Solutions focuses on delivering specialised services in equipment
                technology, system integration, and asset maintenance across onshore and offshore operations.
              </p>
              <p>
                We provide independent, comprehensive maintenance solutions tailored to meet the needs of a wide range of
                industries, with a strong emphasis on efficiency, reliability, and operational excellence. Our technology
                solutions team is committed to upholding the highest standards of Quality, Health, Safety, and Environment
                (QHSE) across all our services, ensuring the safety of our personnel and the protection of the
                environment.
              </p>
              <p>
                We have a strong track record of successful project execution, supporting our clients through every phase
                from design and fabrication to commissioning and maintenance.
              </p>
              <div className="grid gap-6 md:grid-cols-3">
                <Card title="System Integration Solutions">
                  <p className="mb-4">
                    Through strategic partnerships with leading manufacturers, we provide integrated system solutions
                    covering Engineering (technical specifications, datasheet), Procurement, Equipment Integration &amp;
                    Testing, and Offshore Commissioning Services for the following:
                  </p>
                  <List items={systemIntegration} />
                </Card>
                <Card title="Maintenance Services">
                  <List items={maintenanceServices} />
                </Card>
                <Card title="Our Expertise">
                  <List items={techExpertise} />
                </Card>
              </div>
              <p>
                At Bizworth Oil &amp; Gas’s Technology Solutions, we combine technical expertise with innovative solutions
                to support our clients’ success across a range of challenging environments.
              </p>
            </Section>

            {/* Geosurvey and Geotechnical */}
            <Section id="geosurvey-and-geotechnical" title="Geosurvey and Geotechnical">
              <p>
                Our geotechnical and related services provide detailed information to our clients on the soil properties
                at the seabed which is pivotal for guiding engineering foundation design and operational evaluation. We are
                able to provide accurate data on the seabed profile and its contours for safe navigation and to facilitate
                construction work. These operations are supported by our own in-house geotechnical and geophysical survey
                vessels which are able to operate in shallow or deepwater.
              </p>
            </Section>

            {/* Others */}
            <Section id="others" title="Others">
              <SubHeading>Gas Turbines</SubHeading>
              <p>
                Bizworth Oil &amp; Gas repairs and maintains heavy duty gas turbines and rotating equipment, operationalises
                petrol stations, as well as oil and gas field management. We build our foundation through strategic equity
                partnerships with renowned global names in the industry and have made our mark as a leading player in the
                business.
              </p>
            </Section>
          </div>
        </div>
      </div>
    </>
  );
}