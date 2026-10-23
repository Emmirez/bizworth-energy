import { Link } from 'react-router-dom';

/* ---------- Content ---------- */
const HERO_IMAGE = '/images/works.jpg';

const services = [
  'Major inspection, repair and maintenance of platforms, pipelines, Floating Production Storage and Offloading (FPSO) vessels, Floating Storage and Offloading (FSO) vessels etc.',
  'Inspection and testing of Mobile Offshore Production Unit jacking systems',
  'Installation, repair and inspection of subsea facilities',
  'Rigless suspension of wells',
  'Wellhead severance and recovery (below mud line)',
  'Flushing of facilities and flowlines',
  'Mothballing and preservation of facilities',
  'Decommissioning of facilities',
  'Rigless intervention, plug and abandonment',
];

const expertise = ['Well abandonment', 'Platform removal', 'Flowline disconnection', 'Flowline and umbilical recovery'];

/* ---------- Small pieces ---------- */
function InfoCard({ title, children }) {
  return (
    <div className="bg-[#00c2ef] px-6 pb-10 pt-6">
      <h2 className="font-heading text-[24px] font-semibold text-brand-ink">{title}</h2>
      <div className="mt-4 text-[17px] leading-[1.8] text-brand-ink">{children}</div>
    </div>
  );
}

/* ---------- Page ---------- */
export default function WellIntervention() {
  return (
    <>
      {/* Hero + title band */}
      <section
        className="relative flex min-h-[340px] flex-col justify-end md:min-h-[420px]"
        style={{
          background: `url(${HERO_IMAGE}) center/cover no-repeat, linear-gradient(135deg, #d9631f 0%, #5a4a3a 100%)`,
        }}
      >
        <div className="bg-brand-blue/80">
          <div className="container-site py-9">
            <h1 className="max-w-[900px] font-heading text-[30px] font-extrabold leading-[1.1] text-brand-cyan md:text-[38px]">
              Well Intervention &amp; Decommissioning
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

          <div className="mt-28 max-w-[900px] space-y-6 text-[17px] leading-[1.55] text-brand-ink">
            <p>
              We provide cost-effective Light Well Intervention (LWI) services for the subsea oil and gas industry. This
              includes Riserless Light Well Intervention (RLWI) and subsea well abandonment.
            </p>
            <p>
              RLWI technology enables work to be performed on subsea wells without the use of a conventional drill rig
              with marine riser. All operations can be performed from a mono-hull vessel of opportunity, offering
              significant cost savings when compared to a rig-based solution. The higher availability and fast
              mobilisation/ transit times of mono-hull vessels add to the operator’s benefit.
            </p>
            <p>
              In decommissioning, we provide turnkey engineering, survey and offshore decommissioning services with
              extensive experiences within the Group and associate companies.
            </p>
          </div>

          <div className="mt-6 grid gap-6 md:grid-cols-3">
            <InfoCard title="Our Services">
              <ul className="mt-12 list-disc space-y-7 pl-12">
                {services.map((s) => (
                  <li key={s}>{s}</li>
                ))}
              </ul>
            </InfoCard>
            <InfoCard title="Our Expertise">
              <ul className="mt-12 list-disc pl-12">
                {expertise.map((e) => (
                  <li key={e}>{e}</li>
                ))}
              </ul>
            </InfoCard>
            <InfoCard title="Our Resources">
              <p className="mt-6">
                We possess a full suite of tools and a proven track record for performing RLWI and subsea well
                abandonment, simultaneously offering significant cost savings, higher availability and fast mobilisation/
                transit times of mono-hull vessels.
              </p>
            </InfoCard>
          </div>
        </div>
      </section>
    </>
  );
}