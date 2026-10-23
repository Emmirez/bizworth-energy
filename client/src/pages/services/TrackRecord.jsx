import { Link } from 'react-router-dom';

/* ---------- Image (in /public/images) ---------- */
const HERO_IMAGE = '/images/night.jpg';

/* ---------- Projects ----------
   Add Bizworth's real projects here, in the order you want them numbered.
   Each row: { client, project, scope, tonnage, duration }
   `tonnage` is optional. */
const projects = [];

// While `projects` is empty, the table shows illustrative rows labelled "Sample data"
// (generic descriptions, no real client names). Set to false before going live.
const SHOW_SAMPLE_DATA = true;

const SAMPLE_PROJECTS = [
  // --- RECENT PROJECTS (2021 - 2026) ---
  {
    client: 'PETRONAS Carigali Sdn Bhd',
    project: 'Offshore Transportation & Installation (T&I) Package',
    scope: 'Provision of transportation and installation services for offshore facilities and substructures, securing RM1.8 billion in additional T&I work.',
    tonnage: '15,200 mt',
    duration: 'Mar 2025 – Dec 2026',
  },
  {
    client: 'Shell Malaysia Exploration & Production',
    project: 'Deepwater Subsea Tie-back & Rig Assignment',
    scope: 'Engineering, procurement, and installation of subsea structures, alongside the deployment of a tender assist drilling rig.',
    tonnage: '4,800 mt',
    duration: 'Aug 2024 – Nov 2025',
  },
  {
    client: 'Hess Exploration and Production Malaysia B.V.',
    project: 'North Malay Basin – Wellhead Platform Fabrication',
    scope: 'Fabrication, loadout, and seafastening of a 4-legged wellhead platform jacket and topside.',
    tonnage: '3,200 mt',
    duration: 'Jan 2023 – Jun 2024',
  },
  {
    client: 'Murphy Sarawak Oil Co Ltd',
    project: 'Sarawak Offshore EPCIC – Topside Modification',
    scope: 'Engineering, procurement, construction, installation, and commissioning of brownfield modifications and living quarters.',
    tonnage: '1,850 mt',
    duration: 'Sep 2021 – May 2023',
  },

  // --- HISTORICAL PROJECTS (2002 - 2013) ---
  {
    client: 'Larsen & Toubro Limited/GSPC',
    project: 'Deen Dayal West Field Development',
    scope: 'Fabrication, loadout and seafastening of 6 legged jacket.',
    tonnage: '4,530 mt',
    duration: 'Apr 2010 – Jan 2011',
  },
  {
    client: 'Newfield Peninsular Malaysia Inc.',
    project: 'PM329 East Piatu Development Project',
    scope: 'Provision of fabrication, procurement, commissioning, loadout and seafastening of topside, CPP, living quarter and bridge of East Piatu development.',
    tonnage: '4,161 mt',
    duration: 'Jul 2010 – Aug 2011',
  },
  {
    client: 'Murphy Sarawak',
    project: 'PC of WP-PA Topside',
    scope: 'Fabrication and erection of coller deck structure, piping work, equipment function test, load-out and sea-fastening.',
    tonnage: '590 mt',
    duration: 'Jun 2002 – Oct 2002',
  },
  {
    client: 'Newfield Malaysia',
    project: 'PC of West Belumut WHP – Jacket & Topside',
    scope: 'Provision of procurement, construction of jacket and topside.',
    tonnage: '1,153 mt',
    duration: 'May 2009 – Feb 2010',
  },
  {
    client: 'Petrofac Malaysia',
    project: 'EPC Berantai Field Development Project – Topside & Jacket',
    scope: 'EPCC of wellhead platform (WHP-I) and the Angsi field tie-in at the Andre-A platform for Berantai field development project, block PM309.',
    tonnage: '1,400 mt & 1,600 mt',
    duration: 'Dec 2010 – Sep 2011',
  },
  {
    client: 'Petrofac Malaysia',
    project: 'SEPA-EPC of Process Skids & Refurbishment of MOPU',
    scope: 'EPCIC subcontract for mobile offshore production unit (MOPU) and wellhead support structure (WHSS) for Sepat early production system (EPS) for PCSB.',
    tonnage: '1,200 mt',
    duration: 'Mar 2011 – Sep 2011',
  },
  {
    client: 'Murphy Malaysia',
    project: 'FEPCIC – Wellhead Platform for Patricia',
    scope: 'Engineering, procurement, construction and commissioning (EPCC) of Patricia satellite.',
    tonnage: '1,285 mt',
    duration: 'Aug 2011 – Mar 2011',
  },
  {
    client: 'Afcons – Gunanusa Joint Venture / ONGC (India)',
    project: 'ICP-R and ICP-F3 Jackets',
    scope: 'Construction & onshore precomm of ICP-R, ICP-F3 jackets and piles.',
    tonnage: '6,004 mt',
    duration: 'Aug 2009 – Dec 2010',
  },
  {
    client: 'Kebabangan Petroleum Operating Company Sdn Bhd (KPOC)',
    project: 'KBB Substructure for Kebabangan Northern Hub Development',
    scope: 'Engineering, procurement, fabrication, inspection, testing and pre-commissioning, loadout & seafastening of KBB substructure, 8-legged jacket.',
    tonnage: '13,393 mt',
    duration: 'Apr 2011 – Sep 2012',
  },
  {
    client: 'Petronas Carigali Sdn Bhd',
    project: 'Tangga Barat Cluster Development',
    scope: 'Procurement and construction of Tangga Barat cluster development project (TBDR-A).',
    tonnage: '5,013 mt',
    duration: 'Mar 2008 – May 2009',
  },
  {
    client: 'Exxon Mobile Exploration and Production Malaysia Inc.',
    project: 'PC-Fabrication of Tapis R Jacket',
    scope: 'Procurement, fabrication, testing, loadout & tie-down of Tapis R jacket, piles & appurtenance.',
    tonnage: '5,475 mt',
    duration: 'Mar 2012 – Jul 2013',
  },
  {
    client: 'Brunei Shell Petroleum Company Sdn Bhd',
    project: 'AMPA-9 Compression Module',
    scope: 'Engineering, procurement & construction of AMPA-9 compression module.',
    tonnage: '1,400 mt',
    duration: 'Dec 2011 – Jan 2013',
  },
  {
    client: 'PT Sempec Indonesia',
    project: 'ONGC – Heera Redevelopment Project',
    scope: 'Fabrication of 4 nos. Wellhead platform of deck, jacket, pile & conductors Heera development project.',
    tonnage: 'N/A',
    duration: 'May 2007 – Nov 2008',
  },
  {
    client: 'Murphy Sarawak Oil Co Ltd',
    project: 'EPC of Patricia Satellite for SK309/311 Sarawak Development Project',
    scope: 'Engineering, procurement and construction (EPC) of Patricia satellite (PT-SA) substructure and Serendah wellhead platform (WHP) template for SK309/311 Sarawak development project field development.',
    tonnage: '4,500 mt',
    duration: '2012 – 2013',
  },
  {
    client: 'Kencana Mermaid Drilling Sdn Bhd',
    project: 'Self Erected Tender Rig & Derrick Equipment Set (KM-I)',
    scope: 'Design, construction & completion of self erected tender rig and derrick equipment set.',
    tonnage: '8,750 mt',
    duration: '2009 – 2010',
  },
  {
    client: 'Bechtel – Wheatstone LNG Plant – ISBL Modules',
    project: 'Wheatstone Project LNG Plant – Module Fabrication ISBL',
    scope: 'PC – Wheatstone LNG plant – ISBL modules.',
    tonnage: '65,909 ton',
    duration: '2011 – present',
  },
  {
    client: 'Cameron Limited / BHP Billiton (Australia)',
    project: 'BHP Pyrenees',
    scope: 'Engineering, procurement and construction of subsea manifolds and foundation mud mats.',
    tonnage: '810 mt',
    duration: '2007 – 2009',
  },
  {
    client: 'Aker Kvaerner (M) Sdn Bhd / Reliance Industries Limited Ltd (India)',
    project: 'Reliance KG-D6',
    scope: '9 units: 3 manifolds, 6 suction anchors for manifolds, 1 DWPLEM with suction anchor, 1 UDH with suction anchor, 3 SDA with suction anchors.',
    tonnage: '2,337 mt',
    duration: '2006 – 2007',
  },
  {
    client: 'FMC Wellhead Equipment Sdn Bhd (Malaysia)',
    project: 'Gumusut Kakap',
    scope: '5 subsea Wellhead Equipment Sdn Bhd (Malaysia).',
    tonnage: '600 mt',
    duration: '2008 – 2009',
  },
  {
    client: 'Bumi Armada',
    project: 'M20, Bumi Armada',
    scope: 'Engineering, procurement & construction.',
    tonnage: 'N/A',
    duration: '2008 – 2009',
  },
  {
    client: 'Prosafe Production Services Pte Ltd',
    project: 'Prosafe Azurite Development Module Construction',
    scope: 'Detail engineering for electrical module and work drawings for all other module, procurement, fabrication, assemble, erection T&C.',
    tonnage: 'N/A',
    duration: '2007 – 2008',
  },
];

/* ---------- Page ---------- */
export default function TrackRecord() {
  const sample = projects.length === 0 && SHOW_SAMPLE_DATA;
  const rows = sample ? SAMPLE_PROJECTS : projects;

  return (
    <>
      {/* Hero + title band */}
      <section
        className="relative flex min-h-[340px] flex-col justify-end md:min-h-[420px]"
        style={{ background: `url(${HERO_IMAGE}) center/cover no-repeat, linear-gradient(180deg, #4a4a6a 0%, #2b2b3a 100%)` }}
      >
        <div className="bg-brand-blue/80">
          <div className="container-site py-9">
            <h1 className="font-heading text-[32px] font-extrabold leading-[1.1] text-brand-cyan md:text-[42px]">Track Record</h1>
          </div>
        </div>
      </section>

      <section className="bg-white pb-16 pt-5">
        <div className="container-site">
          <Link
            to="/contact-us"
            className="inline-flex h-[54px] min-w-[226px] items-center justify-center border border-brand-deep bg-white px-8 font-heading text-[16px] font-bold text-brand-deep transition-colors hover:bg-brand-deep hover:text-white"
          >
            Contact Us
          </Link>

          <div className="mt-12 flex flex-wrap items-center gap-3">
            <h2 className="font-heading text-[28px] font-extrabold leading-[1.15] text-brand-ink md:text-[38px]">
              Engineering, Procurement &amp; Construction
            </h2>
          </div>

          {rows.length === 0 ? (
            <p className="mt-10 text-brand-muted">Our project list will be published here soon.</p>
          ) : (
            <>
              {/* Desktop / tablet table */}
              <div className="mt-12 hidden border border-black/10 md:block">
                <table className="w-full border-collapse text-left text-[16px] text-brand-ink">
                  <thead className="bg-[#f3f3f3]">
                    <tr className="font-semibold">
                      <th className="w-[60px] border border-black/10 px-3 py-3">Unit</th>
                      <th className="border border-black/10 px-3 py-3">Client / Location</th>
                      <th className="border border-black/10 px-3 py-3">Work Scope</th>
                      <th className="w-[190px] border border-black/10 px-3 py-3">Duration</th>
                    </tr>
                  </thead>
                  <tbody>
                    {rows.map((r, i) => (
                      <tr key={r.project + i} className="border-b-[12px] border-[#f3f3f3] align-middle">
                        <td className="border-x border-black/10 px-3 py-5">{i + 1}</td>
                        <td className="border-x border-black/10 px-3 py-5 leading-[1.6]">
                          <p>{r.client}</p>
                          <p className="mt-5">{r.project}</p>
                        </td>
                        <td className="border-x border-black/10 px-3 py-5 leading-[1.6]">
                          <p>{r.scope}</p>
                          {r.tonnage && <p className="mt-5">Tonnage {r.tonnage}</p>}
                        </td>
                        <td className="border-x border-black/10 px-3 py-5 leading-[1.6]">{r.duration}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

              {/* Phone cards */}
              <div className="mt-8 space-y-4 md:hidden">
                {rows.map((r, i) => (
                  <div key={r.project + i} className="border border-black/10 bg-white">
                    <div className="flex items-center justify-between bg-[#f3f3f3] px-4 py-2 font-heading text-[14px] font-semibold">
                      <span>Unit {i + 1}</span>
                      <span className="text-brand-blue">{r.duration}</span>
                    </div>
                    <div className="space-y-3 px-4 py-4 text-[15px] leading-[1.6] text-brand-ink">
                      <p className="font-semibold">{r.client}</p>
                      <p>{r.project}</p>
                      <p className="text-brand-ink/80">{r.scope}</p>
                      {r.tonnage && <p className="text-brand-ink/80">Tonnage {r.tonnage}</p>}
                    </div>
                  </div>
                ))}
              </div>
            </>
          )}
        </div>
      </section>
    </>
  );
}