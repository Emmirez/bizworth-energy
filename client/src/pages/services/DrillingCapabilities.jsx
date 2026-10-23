import { Link } from 'react-router-dom';

/* ---------- Images (in /public/images) — reusing the Drilling assets photos ---------- */
const IMG = {
  hero: '/images/assets54.jpg',
  tenderAssist: '/images/assets57.jpg',
  semiTender: '/images/assets52.jpg',
};

/* ---------- Content ---------- */
const assetTiles = [
   { title: 'Tender Assist Rigs', image: IMG.tenderAssist, to: '/services/drilling-and-completion/drilling-capabilities/tender-assist-rigs' },
  { title: 'Semi Tender Rigs', image: IMG.semiTender, to: '/services/drilling-and-completion/drilling-capabilities/semi-tender-rigs' },
];

const benefits = [
  {
    text: 'Ability to self-raise, remove its own drilling package and then rig-up on the same package on another platform, resulting in increased efficiency and sustainability when drilling development wells',
  },
  {
    text: 'Reduced Capital Expenditure (CAPEX) and Operating Expenditure (OPEX) for our partners over the full duration of the fields due to:',
    sub: [
      'Multiple wells drilled from one area, reducing time between wells and improving personnel and logistics’ planning synergies',
      'Much shorter well duration resulting in improved performances in batch-drilling, Simultaneous Operations (SIMOP) and dry tree operations',
      'Improved maintenance plans',
      'Higher utilisation rate of the drilling equipment due to its mobility',
    ],
  },
];

/* ---------- Small pieces ---------- */
const Heading = ({ children }) => (
  <h2 className="font-heading text-[30px] font-extrabold leading-[1.15] text-brand-ink md:text-[36px]">{children}</h2>
);

/* ---------- Page ---------- */
export default function DrillingCapabilities() {
  return (
    <>
      {/* Hero + title band */}
      <section
        className="relative flex min-h-[300px] flex-col justify-end md:min-h-[400px]"
        style={{
          background: `url(${IMG.hero}) center/cover no-repeat, linear-gradient(180deg, #a9c6ec 0%, #3d5fc4 100%)`,
        }}
      >
        <div className="bg-brand-blue/80">
          <div className="container-site py-9">
            <h1 className="max-w-[500px] font-heading text-[34px] font-extrabold leading-[1.05] text-brand-cyan md:text-[42px]">
              Drilling Capabilities
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

          <div className="mt-8 grid gap-12 lg:grid-cols-[1fr_330px] lg:gap-10">
            {/* Main text */}
            <div className="space-y-12 text-[17px] leading-[1.55] text-brand-ink">
              <div className="space-y-6">
                <p>
                  As the leader of our segment, our Tender-Assist Drilling (TAD) rigs are capable of providing development
                  drilling, well completion, workovers as well as plug and abandonment operations in waters as shallow as
                  30 ft. to as deep as 6,000 ft, with drilling depth of up to 30,000 ft.
                </p>
                <p>
                  Typically the TAD is stationed next to a platform. The main benefits of TAD are the drilling package
                  self-erecting capability, large storage capacities for tubular and fluids, and offline capabilities. Once
                  the drilling operations are completed, it can then rig-down and move on to another platform for different
                  operations. This translates to efficiency and sustainability for the client.
                </p>
                <p>
                  When the drilling package is in operation, the TAD is stationary on eight-point mooring system and
                  provides power and other services that support the well operations.
                </p>
              </div>

              <div className="space-y-6">
                <Heading>Types of Tender Rigs</Heading>
                <p>
                  We own and operate the world’s largest fleet of TAD rigs. They can be categorised into two types, i.e. the
                  mono-hull tender-assist drilling rig (barge tender) and the semi-submersible tender-assist drilling rig
                  (semi-tender). Both units carry the same equipment but the semi-tender is capable of operating in deeper
                  waters and harsher environments.
                </p>
              </div>

              <div className="space-y-6">
                <Heading>Benefits and Advantages of Tender Assist Drilling Rigs</Heading>
                <p>
                  There are two types of Tender Assist Drilling (TAD) rigs – tender rigs and semi-tender rigs. Both carry
                  the same equipment but the latter can operate in far deeper depths and harsher environment.
                </p>
                <p>
                  Typically, the TAD is stationed next to the platform and its drilling package is lifted onto the platform.
                  While the drilling package is in operation, the TAD is stationary whilst providing power and other
                  services that support operations.
                </p>
                <p>Other benefits and advantages include:</p>
                <ul className="list-disc space-y-2 pl-7">
                  {benefits.map((b) => (
                    <li key={b.text.slice(0, 30)}>
                      {b.text}
                      {b.sub && (
                        <ul className="mt-2 list-[circle] space-y-1 pl-7">
                          {b.sub.map((s) => (
                            <li key={s.slice(0, 30)}>{s}</li>
                          ))}
                        </ul>
                      )}
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Assets sidebar */}
            <aside>
              <h2 className="font-heading text-[34px] font-medium uppercase text-brand-ink md:text-[38px]">Assets</h2>
              <div className="mt-6 grid gap-3 sm:grid-cols-2 lg:grid-cols-1">
                {assetTiles.map((t) => (
                  <Link
                    key={t.title}
                    to={t.to}
                    className="group relative flex aspect-square items-end overflow-hidden"
                    style={{ background: `url(${t.image}) center/cover no-repeat, linear-gradient(135deg, #6fa3d8 0%, #2e27c3 100%)` }}
                  >
                    <span className="absolute inset-0 bg-gradient-to-t from-brand-blue/80 via-brand-blue/20 to-transparent transition-colors group-hover:from-brand-blue/95" />
                    <span className="relative px-6 pb-6">
                      <span className="block font-heading text-[22px] font-bold text-white">{t.title}</span>
                      <span className="mt-2 block h-[2px] w-[62px] bg-white/80" />
                    </span>
                  </Link>
                ))}
              </div>
            </aside>
          </div>
        </div>
      </section>
    </>
  );
}