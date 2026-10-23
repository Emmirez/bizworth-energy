/* ---------- Content ---------- */
const HERO_IMAGE = '/images/mixed.png';
const STRUCTURE_IMAGE = '/images/menworking.png';

/* ---------- Page ---------- */
export default function GroupStructure() {
  return (
    <>
      {/* Hero + title band */}
      <section
        className="relative flex min-h-[300px] flex-col justify-end md:min-h-[420px] lg:min-h-[480px]"
        style={{
          background: `url(${HERO_IMAGE}) center/cover no-repeat, linear-gradient(180deg, #8fb0d6 0%, #3d6fa8 55%, #1f4f8a 100%)`,
        }}
      >
        <div className="bg-brand-blue/80">
          <div className="container-site py-9 md:py-10">
            <h1 className="max-w-[700px] font-heading text-[34px] font-extrabold leading-[1] text-brand-cyan md:text-[44px]">
              Group Organisational Structure
            </h1>
          </div>
        </div>
      </section>

      {/* Structure card */}
      <section className="bg-white pb-16 pt-4">
        <div className="container-site">
          <div className="mx-auto max-w-[1100px] bg-gradient-to-r from-[#0d8fcf] to-[#1e5aa8] px-4 pb-6 pt-12 md:px-10 md:pb-10">
            <h2 className="mx-auto max-w-[300px] text-center font-heading text-[32px] font-bold uppercase leading-[1.1] text-white md:max-w-none md:text-[38px]">
              Group Organisation Structure
            </h2>
            <span className="mx-auto mt-6 block h-[2px] w-[66px] bg-brand-orange" />

            <a
              href={STRUCTURE_IMAGE}
              target="_blank"
              rel="noreferrer"
              className="mt-8 block overflow-hidden rounded-md bg-[#e2e2e2]"
              title="Open full size"
            >
              <img
                src={STRUCTURE_IMAGE}
                alt="Bizworth Oil & Gas group organisation structure"
                className="mx-auto block w-full"
              />
            </a>
          </div>
        </div>
      </section>
    </>
  );
}