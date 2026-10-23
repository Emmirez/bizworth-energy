import { Link } from 'react-router-dom';

/* ---------- Content ----------
   Images are /public/images/assetsN.jpg.
   Lumut, MV Gemia and KPV Kapas reuse the same photos as the Engineering and Construction assets page. */
const img = (n) => `/images/assets${n}.jpg`;

const groups = [
  {
    title: 'HUC & Brownfield Rejuvenation',
    showAll: '/assets',
    items: [
      { name: 'Bizworth Duyong', image: img(45) },
      { name: 'Lumut Fabrication Yard', image: img(1) },
      { name: 'KPV Redang', image: img(46) },
      { name: 'Labuan Shipyard', image: img(47) },
      { name: 'MV Gemia', image: img(20) },
      { name: 'KPV Kapas', image: img(19) },
    ],
  },
  {
    title: 'Turbine Maintenance Centre',
    items: [{ name: 'Bizworth Technology Solutions Sdn Bhd', image: img(48) }],
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
export default function OperationsMaintenanceAssets() {
  return (
    <>
      {/* Title band */}
      <section className="bg-brand-blue">
        <div className="container-site py-12 md:py-14">
          <h1 className="font-heading text-[30px] font-semibold text-white md:text-[36px]">Operations &amp; Maintenance</h1>
        </div>
      </section>

      {/* Asset groups */}
      <section className="bg-white pb-16 pt-4">
        <div className="mx-auto max-w-[1140px] px-5 md:px-8">
          {groups.map((g) => (
            <div key={g.title} className="mt-8">
              <h2 className="border-b border-black/10 pb-5 font-heading text-[30px] font-extrabold leading-[1.15] text-brand-ink md:text-[34px]">
                {g.title}
              </h2>
              <div className="mt-6 grid gap-6 sm:grid-cols-2 lg:grid-cols-3 lg:gap-x-[38px] lg:gap-y-[38px]">
                {g.items.map((item) => (
                  <AssetCard key={item.image} {...item} />
                ))}
              </div>
              {g.showAll && (
                <Link
                  to={g.showAll}
                  className="mt-9 inline-flex h-[54px] min-w-[186px] items-center justify-center border border-brand-deep bg-white px-8 font-heading text-[18px] font-bold text-brand-deep transition-colors hover:bg-brand-deep hover:text-white"
                >
                  Show All
                </Link>
              )}
            </div>
          ))}
        </div>
      </section>
    </>
  );
}