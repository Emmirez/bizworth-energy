import { useState } from 'react';

/* ---------- Content ---------- */
const HERO_IMAGE = '/images/corporate.jpg';
const OURWAY_IMAGE = '/images/ourway.png';

const aboutText = [
  'Driven by our purpose to enable a sustainable world through energy solutions, Bizworth Oil & Gas operates globally as an integrated energy services and solutions provider.',
  'From exploration to rejuvenation, we cover the entire upstream value chain, including renewables. With our highly skilled workforce, world-class assets, and project management expertise, we deliver integrated solutions and sustainable energy innovations across over 10 countries.',
];

const pillars = ['Pride in Results', 'Commitment to Collaboration', 'Spirit of Innovation.'];

/* ---------- Small pieces ---------- */
const Line = ({ color = 'bg-brand-orange/80' }) => <span className={`mx-auto mt-6 block h-[2px] w-[66px] ${color}`} />;

function Statement({ label, statement }) {
  return (
    <div className="text-center">
      <h2 className="font-heading text-[30px] font-medium uppercase text-brand-ink">{label}</h2>
      <Line />
      <p className="mx-auto mt-8 max-w-[300px] font-heading text-[30px] font-bold uppercase leading-[1.15] text-brand-ink">
        {statement}
      </p>
      <Line />
    </div>
  );
}

/* ---------- Page ---------- */
export default function CorporateOverview() {
  const [imgFailed, setImgFailed] = useState(false);

  return (
    <>
      {/* Hero */}
      <section
        className="flex min-h-[540px] flex-col items-center justify-center px-5 md:min-h-[620px] lg:min-h-[680px]"
        style={{
          background: `linear-gradient(180deg, rgba(0,0,0,0) 30%, rgba(0,0,0,0.25) 100%), url(${HERO_IMAGE}) center/cover no-repeat, linear-gradient(180deg, #6fa3d8 0%, #3d5f8a 45%, #4a4a4a 100%)`,
        }}
      >
        <h1 className="max-w-[900px] text-center font-heading text-[40px] font-black leading-[1.1] text-white drop-shadow-[0_2px_8px_rgba(0,0,0,0.35)] md:text-[56px] lg:text-[64px]">
          Who We Are, What We do and How We Do It
        </h1>
      </section>

      {/* Title band */}
      <div className="bg-brand-blue/90">
        <div className="container-site py-8 md:py-10">
          <h2 className="font-heading text-[30px] font-bold text-brand-cyan md:text-[40px]">Corporate Overview</h2>
        </div>
      </div>

      {/* Cards: stacked on mobile, 3 columns on desktop */}
      <section className="bg-white py-3 lg:py-10">
        <div className="container-site grid lg:grid-cols-3 lg:gap-6">
          {/* About Us */}
          <div className="border-b border-black/10 pb-6 pt-3 lg:border-0 lg:p-0">
            <div className="h-full bg-gradient-to-r from-[#0d8fcf] to-[#1e5aa8] px-[18px] py-12 text-white md:px-10">
              <h2 className="text-center font-heading text-[30px] font-bold uppercase md:text-[34px]">About Us</h2>
              <Line color="bg-white/50" />
              <div className="mt-10 space-y-6 text-[17px] leading-[1.3]">
                {aboutText.map((p) => (
                  <p key={p.slice(0, 20)}>{p}</p>
                ))}
              </div>
            </div>
          </div>

          {/* Vision & Mission */}
          <div className="border-b border-black/10 py-6 lg:border-0 lg:p-0">
            <div className="h-full space-y-[110px] bg-[#f0f0f0] px-6 py-12">
              <Statement label="Our Vision" statement="Your Trusted Energy Solutions Partner" />
              <Statement label="Our Mission" statement="Safely Delivering Solutions" />
            </div>
          </div>

          {/* Our Way */}
          <div className="pt-6 lg:p-0">
            <div className="h-full bg-[#f0f0f0] px-[18px] py-12 md:px-8">
              <Statement label="Our Way" statement="Values & Culture" />
              <div className="mt-12 flex justify-center">
                {imgFailed ? (
                  <p className="font-heading text-[40px] font-bold uppercase text-brand-navy">
                    Our<span className="text-brand-cyan">Way</span>
                  </p>
                ) : (
                  <img
                    src={OURWAY_IMAGE}
                    alt="Our Way"
                    className="max-h-[110px] max-w-[280px] object-contain mix-blend-multiply"
                    onError={() => setImgFailed(true)}
                  />
                )}
              </div>
              <div className="mt-10 space-y-6 text-[16px] leading-[1.3] text-brand-ink">
                <p>
                  “Our Way” is the heartbeat of our operations at Bizworth Oil &amp; Gas, rooted in the foundational
                  values of being Honest, Accountable, and Respectful.
                </p>
                <p>This philosophy isn’t just words; it’s a commitment to excellence and standing by these pillars:</p>
                <ul className="list-disc space-y-0.5 pl-11">
                  {pillars.map((p) => (
                    <li key={p}>{p}</li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}