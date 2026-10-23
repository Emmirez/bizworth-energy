/* ---------- Content ---------- */
const HERO_IMAGE = '/images/bizworth.jpg';
const RULES_IMAGE = '/images/web.jpg';

const awards = [
  { by: 'Energy Council', title: 'APAC Company of the Year (Energy Services, Offshore and Marine)' },
  { by: 'Frost & Sullivan', title: 'Marginal Oil Fields Development Company of the Year Award' },
  { by: 'The Oil & Gas Year', title: 'New Upstream Player of the Year' },
];

/* ---------- Page ---------- */
export default function QHSE() {
  return (
    <>
      {/* Hero with awards + title band */}
      <section
        className="relative flex min-h-[680px] flex-col"
        style={{
          background: `linear-gradient(90deg, rgba(0,0,0,0.55) 0%, rgba(0,0,0,0.3) 55%, rgba(0,0,0,0.1) 100%), url(${HERO_IMAGE}) center/cover no-repeat, linear-gradient(135deg, #5b4a3a 0%, #b5541f 60%, #e8783a 100%)`,
        }}
      >
        <div className="container-site flex-1 pb-[180px] pt-6 lg:pt-16">
          <div className="grid gap-9 lg:grid-cols-3 lg:gap-12">
            {awards.map((a) => (
              <div key={a.by}>
                <p className="font-heading text-[20px] font-black uppercase text-white">{a.by}</p>
                <span className="mt-5 block h-[2px] w-[66px] bg-brand-orange" />
                <p className="mt-5 max-w-[420px] font-heading text-[27px] font-medium leading-[1.2] text-white">{a.title}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="absolute inset-x-0 bottom-0 bg-brand-blue/80">
          <div className="container-site py-6 md:py-9">
            <h1 className="max-w-[700px] font-heading text-[34px] font-extrabold leading-[1] text-brand-cyan md:text-[44px]">
              Quality, Health, Safety &amp; Environment
            </h1>
          </div>
        </div>
      </section>

      {/* 9 Life-Saving Rules */}
      <section className="bg-white pb-16 pt-6">
        <div className="container-site">
          <div className="mx-auto max-w-[1000px] border-t border-black/10 pt-6">
            <h2 className="font-heading text-[40px] font-extrabold leading-[1.1] text-brand-ink md:text-[46px]">
              9 Life-Saving Rules
            </h2>

            <p className="mt-6 text-[17px] leading-[1.5] text-brand-ink">
              The recent adoption of the Nine (9) Life Saving Rules, as developed by the International Association of
              Oil &amp; Gas Producers (IOGP), is another step to support our zero-injury goal. It will simplify yet make
              more robust and user-friendly our standards and procedures, backed up by the courage our employees have to
              exercise their STOP WORK Authority as empowered to all Bizworth Oil &amp; Gas employees by our Group CEO
              whenever the situation is deemed not safe. We will continue to further embed a strong safety culture,
              focusing on strengthening the capabilities of our employees as well as using new technology to make our
              systems simpler, smarter and more fit for purpose.
            </p>

            <img src={RULES_IMAGE} alt="IOGP Life-Saving Rules" className="mx-auto mt-4 w-full max-w-[760px]" />

            <p className="mt-6 indent-6 text-[17px] leading-[1.5] text-brand-ink">
              We uphold our commitment to the Industry-shared objective of improving the overall safety performance,
              achieved through cooperation and experience transfer with industry peers and government stakeholders. This
              collaboration enables not only an open sharing of lessons learnt to prevent harm elsewhere, but also the
              sharing and adoption of QHSE best-practices and initiatives across our industry, which drives a collective
              continuous improvement across our business and operating environment.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}