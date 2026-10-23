import { Link } from 'react-router-dom';

/* ---------- Images (in /public/images) ---------- */
const IMG = {
  hero: '/images/complaince.jpg',
  conduct: '/images/men-at-work.jpg',
};

/* ---------- Links (pages to build later) ---------- */
const base = '/corporate/compliance-and-business-ethics';
const LINKS = {
  codeOfConduct: `${base}/code-of-ethical-conduct`,
  antiBribery: `${base}/anti-bribery-anti-corruption`,
  whistleblowingPolicy: `${base}/whistleblowing-policy`,
  whistleblowingPortal: `${base}/whistleblowing-portal`,
};

/* ---------- Small pieces ---------- */
function SectionTitle({ children, line = 'bg-black/20' }) {
  return (
    <>
      <h2 className="font-heading text-[32px] font-semibold uppercase leading-[1.1] text-brand-ink md:text-[40px]">
        {children}
      </h2>
      <span className={`mt-6 block h-[1px] w-[75px] ${line}`} />
    </>
  );
}

function SolidButton({ to, children, className = '' }) {
  return (
    <Link
      to={to}
      className={`inline-flex h-[52px] min-w-[214px] items-center justify-center bg-brand-deep px-8 font-heading text-[17px] font-bold text-white transition-colors hover:bg-brand-blue ${className}`}
    >
      {children}
    </Link>
  );
}

function PolicyCard({ title, children }) {
  return (
    <div className="flex flex-col bg-gradient-to-r from-[#0d8fcf] to-[#1e5aa8] px-6 py-14 text-white md:px-10 md:py-20 xl:px-[105px]">
      <h3 className="font-heading text-[28px] font-semibold uppercase leading-[1.15]">{title}</h3>
      <span className="mt-6 block h-[2px] w-[75px] bg-brand-orange" />
      <div className="mt-12 flex flex-1 flex-col text-[18px] leading-[1.35]">{children}</div>
    </div>
  );
}

/* ---------- Page ---------- */
export default function ComplianceEthics() {
  return (
    <>
      {/* Hero + title band */}
      <section
        className="relative flex min-h-[340px] flex-col justify-end md:min-h-[420px]"
        style={{
          background: `url(${IMG.hero}) center/cover no-repeat, linear-gradient(135deg, #6fa3d8 0%, #2e27c3 100%)`,
        }}
      >
        <div className="bg-brand-blue/80">
          <div className="container-site py-9">
            <h1 className="font-heading text-[30px] font-extrabold leading-[1.1] text-brand-cyan md:text-[38px]">
              Compliance &amp; Business Ethics
            </h1>
          </div>
        </div>
      </section>

      <div className="bg-white pb-16 pt-14">
        <div className="container-site">
          <div className="mx-auto max-w-[1060px]">
            {/* Ethics & Integrity */}
            <SectionTitle>Ethics &amp; Integrity</SectionTitle>
            <div className="mt-10 space-y-6 font-heading text-[22px] font-bold leading-[1.3] text-brand-ink md:text-[26px]">
              <p>
                As a key player in the oil and gas industry, we uphold the highest standards of ethical business
                practices to live up to the expectations of our stakeholders and comply with the relevant applicable laws
                in the countries where we operate.
              </p>
              <p>
                Our success is grounded in our collective commitment to our core values which includes safe, honesty,
                agile, respect, and professional. Hence, we believe in sound corporate governance by upholding ethics and
                integrity to ensure smooth business operations.
              </p>
            </div>

            {/* Code of Ethical Conduct */}
            <div className="mt-24 grid items-center gap-10 lg:grid-cols-[1.3fr_1fr]">
              <div>
                <SectionTitle>Code of Ethical Conduct</SectionTitle>
                <p className="mt-10 text-[17px] leading-[1.55] text-brand-ink">
                  Our Code of Ethical Conduct sets the tone on how the Group’s business is conducted globally that applies
                  to all members of the organisation. We aim to act responsibly, accountably and with transparency in all
                  areas of operation. The areas covered by the Code of Ethical Conduct are anti-corruption and bribery,
                  gifts and hospitality, conflict of interest, fair competition, whistleblowing and sanctions for
                  violations.
                </p>
                <SolidButton to={LINKS.codeOfConduct} className="mt-6 bg-[#4a4a8f] hover:bg-brand-deep">
                  Learn more
                </SolidButton>
              </div>
              <img src={IMG.conduct} alt="Bizworth team at work" className="w-full object-cover" />
            </div>

            {/* Policies */}
            <div className="mt-24">
              <SectionTitle line="bg-brand-orange">Policies</SectionTitle>
              <div className="mt-10 grid gap-[3px] md:grid-cols-2">
                <PolicyCard title="Anti-Bribery Anti Corruption">
                  <p>
                    We conduct all our business in an honest and ethical manner and take a zero-tolerance approach to
                    bribery and corruption and are committed to acting professionally, fairly and with integrity in all
                    our business dealings and relationships. We are also committed to upholding all laws relevant to
                    countering bribery and corruption in Malaysia and all other jurisdictions in which it operates.
                  </p>
                  <div className="mt-8">
                    <SolidButton to={LINKS.antiBribery}>Learn more</SolidButton>
                  </div>
                </PolicyCard>

                <PolicyCard title="Whistleblowing">
                  <p>
                    We are committed to maintaining an open working environment, honest communication is the expectation
                    and not the exception. The Whistleblowing Policy is intended to provide a formal, confidential channel
                    for disclosure on any concerns over an improper conduct and/or wrongdoing which could adversely impact
                    Bizworth Oil &amp; Gas Group, Bizworth Oil &amp; Gas Employees, the public or the environment without
                    fear of being subject to detrimental action.
                  </p>
                  <div className="mt-8 flex flex-col items-start gap-6">
                    <SolidButton to={LINKS.whistleblowingPolicy} className="min-w-[258px]">
                      Read Our Policy
                    </SolidButton>
                    <SolidButton to={LINKS.whistleblowingPortal} className="min-w-[316px]">
                      Whistleblowing Portal
                    </SolidButton>
                  </div>
                </PolicyCard>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}