import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

/* ---------- Content ----------
   Images are /public/images/assetsN.jpg (continuing the numbering: 49–59). */
const img = (n) => `/images/assets${n}.jpg`;

const groups = [
  {
    id: 'semi-tender-rigs',
    title: 'Semi-Tender Rigs',
    items: [
      { name: 'Bizworth Alliance', image: img(49) },
      { name: 'Bizworth Berani', image: img(50) },
      { name: 'Bizworth Esperanza', image: img(51) },
      { name: 'Bizworth Jaya', image: img(52) },
      { name: 'Bizworth Pelaut', image: img(53) },
    ],
  },
  {
    id: 'tender-assist-rigs',
    title: 'Tender Assist Rigs',
    items: [
      { name: 'Bizworth T-9', image: img(54) },
      { name: 'Bizworth T-10', image: img(55) },
      { name: 'Bizworth T-11', image: img(56) },
      { name: 'Bizworth T-12', image: img(57) },
      { name: 'Bizworth T-17', image: img(58) },
      { name: 'Bizworth T-18', image: img(59) },
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
export default function DrillingAssets() {
  const { pathname } = useLocation();

  // Opened from Tender Assist Rigs / Semi-Tender Rigs? Scroll to that group.
  useEffect(() => {
    const el = document.getElementById(pathname.split('/').pop());
    if (el) setTimeout(() => el.scrollIntoView({ behavior: 'smooth', block: 'start' }), 50);
  }, [pathname]);

  return (
    <>
      {/* Title band */}
      <section className="bg-brand-blue">
        <div className="container-site py-12 md:py-14">
          <h1 className="font-heading text-[30px] font-semibold text-white md:text-[36px]">Drilling</h1>
        </div>
      </section>

      {/* Asset groups */}
      <section className="bg-white pb-16 pt-4">
        <div className="mx-auto max-w-[1140px] px-5 md:px-8">
          {groups.map((g) => (
               <div key={g.title} id={g.id} className="mt-8 scroll-mt-32">
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