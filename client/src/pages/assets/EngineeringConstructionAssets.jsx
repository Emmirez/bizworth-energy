/* ---------- Content ----------
   Images are /public/images/assets1.jpg – assets44.jpg, numbered in page order. */
const img = (n) => `/images/assets${n}.jpg`;

const groups = [
  {
    title: 'Fabrication Yards',
    items: [
      { name: 'Lumut Fabrication Yard', image: img(1) },
      { name: 'Kemaman Fabrication Yard', image: img(2) },
      { name: 'Teluk Kalong Fabrication Yard', image: img(3) },
    ],
  },
  {
    title: 'Derrick Lay Vessels',
    items: [
      { name: 'Bizworth 3500', image: img(4) },
      { name: 'Bizworth 1200', image: img(5) },
      { name: 'Bizworth 2000', image: img(6) },
    ],
  },
  {
    title: 'Pipelay Vessels',
    items: [
      { name: 'Bizworth Rubi', image: img(7) },
      { name: 'Bizworth Jade', image: img(8) },
      { name: 'Bizworth Esmeralda', image: img(8) },
      { name: 'Bizworth Ônix', image: img(9) },
      { name: 'Bizworth Topázio', image: img(11) },
      { name: 'Bizworth Diamante', image: img(12) },
    ],
  },
  {
    title: 'Offshore Wind Enabling Assets',
    items: [
      { name: 'Lumut Fabrication Yard', image: img(13) },
      { name: 'Bizworth 3500', image: img(14) },
    ],
  },
  {
    title: 'Subsea Construction Vessel',
    items: [
      { name: 'Bizworth Constructor', image: img(4) },
    ],
  },
  {
    title: 'Diving Support Vessels',
    items: [
      { name: 'Bizworth Jane', image: img(4) },
      { name: 'Bizworth Conquest', image: img(17) },
    ],
  },
  {
    title: 'Anchor Handling Tug Supply Vessels',
    items: [
      { name: 'MV Gemia', image: img(25) },
      { name: 'KPV Kapas', image: img(19) },
    ],
  },
  {
    title: 'Accommodation Boats & Barges',
    items: [
      { name: 'Bizworth Accommodation Barge 1', image: img(20) },
      { name: 'Bizworth Accommodation Barge 2', image: img(19) },
      { name: 'Bizworth Accommodation Barge 3', image: img(25) },
      { name: 'Bizworth Accommodation Barge 4', image: img(23) },
      { name: 'Bizworth Accommodation Barge 5', image: img(24) },
      { name: 'Bizworth Accommodation Barge 6', image: img(25) },
    ],
  },
  {
    title: 'Floatover Launch Barge',
    items: [
      { name: 'Bizworth FLB-1', image: img(26) },
    ],
  },
  {
    title: 'ROVs',
    items: [
      { name: 'Typhoon', image: img(27) },
      { name: 'SMD Atom', image: img(28) },
      { name: 'Sea Eye Tiger', image: img(29) },
      { name: 'Nomad', image: img(30) },
      { name: 'Navigator', image: img(31) },
    ],
  },
  {
    title: 'Survey Vessels',
    items: [
      { name: 'Bizworth Wira', image: img(25) },
    ],
  },
  {
    title: 'Diving System',
    items: [
      { name: 'SM2 DX300 Saturation Diving System', image: img(33) },
      { name: 'Surface Air Diving System (Class)', image: img(34) },
      { name: 'Surface Air Diving System - 4 system', image: img(35) },
      { name: 'Surface Air Diving System - 2 system', image: img(36) },
      { name: 'SM1 DX300 Saturation Diving System', image: img(37) },
      { name: '9-Man Classed Saturated System - 200m', image: img(38) },
    ],
  },
  {
    title: 'Well Services',
    items: [
      { name: 'Subsea Intervention Device (SID)', image: img(39) },
      { name: 'Intervention Compensation System (ICS)', image: img(40) },
      { name: 'AXE Cutting System', image: img(41) },
      { name: 'Cement Injection Tool (CIT)', image: img(42) },
      { name: 'Subsea Top Drive (SSTD)', image: img(43) },
      { name: 'Vessel Deployment System', image: img(44) },
    ],
  },
];

/* ---------- Small pieces ---------- */
function AssetCard({ name, image }) {
  return (
    <div
      className="group relative flex aspect-[328/245] items-end overflow-hidden"
      style={{ background: `url(${image}) center/cover no-repeat, linear-gradient(135deg, #6fa3d8 0%, #2e27c3 100%)` }}
    >
      <div className="w-full bg-brand-blue/80 px-6 pb-3 pt-4 transition-colors group-hover:bg-brand-blue/90">
        <p className="font-heading text-[17px] font-medium leading-[1.4] text-white">{name}</p>
        <span className="mt-1.5 block h-[2px] w-[62px] bg-brand-orange" />
      </div>
    </div>
  );
}

/* ---------- Page ---------- */
export default function EngineeringConstructionAssets() {
  return (
    <>
      {/* Title band */}
      <section className="bg-brand-blue">
        <div className="container-site py-12 md:py-14">
          <h1 className="font-heading text-[30px] font-semibold text-white md:text-[36px]">Engineering and Construction</h1>
        </div>
      </section>

      {/* Asset groups */}
      <section className="bg-white pb-16 pt-4">
        <div className="mx-auto max-w-[1140px] px-5 md:px-8">
          {groups
            .filter((g) => g.items.length > 0)
            .map((g) => (
              <div key={g.title} className="mt-8">
                <h2 className="border-b border-black/10 pb-5 font-heading text-[30px] font-extrabold leading-[1.15] text-brand-ink md:text-[34px]">
                  {g.title}
                </h2>
                <div className="mt-6 grid gap-6 sm:grid-cols-2 lg:grid-cols-3 lg:gap-x-[38px] lg:gap-y-[38px]">
                  {g.items.map((item) => (
                    <AssetCard key={item.image} {...item} />
                  ))}
                </div>
              </div>
            ))}
        </div>
      </section>
    </>
  );
}