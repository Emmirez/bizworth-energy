import { useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { company } from '../../data/company';

/* ---------- Content ---------- */
const HERO_IMAGE = '/images/men-at-work.jpg';
const N = company.shortName;
const PORTAL = '/corporate/compliance-and-business-ethics/whistleblowing-portal';

// Lines starting with '- ' become bullet points.
const sections = [
  {
    id: 'introduction',
    title: '1. Introduction',
    lines: [
      `This Code of Ethical Conduct (“Code”) sets the tone on how the business of ${company.name} and its subsidiaries (“the Group”) is conducted globally. It applies to all members of the organisation, including directors, officers, employees and contract staff, wherever they are located.`,
      'We aim to act responsibly, accountably and with transparency in all areas of operation. The Code does not cover every situation; where it is silent, you are expected to use good judgement and seek guidance when in doubt.',
    ],
  },
  {
    id: 'core-values',
    title: '2. Our Core Values',
    lines: [
      'Our conduct is guided by our core values:',
      '- Safe: we never compromise on the health and safety of our people, our partners and the environment.',
      '- Honesty: we are truthful and transparent in everything we do.',
      '- Agile: we adapt quickly and responsibly to change.',
      '- Respect: we treat everyone with dignity and fairness.',
      '- Professional: we deliver on our commitments with integrity and excellence.',
    ],
  },
  {
    id: 'anti-corruption',
    title: '3. Anti-Corruption and Bribery',
    lines: [
      `${N} takes a zero-tolerance approach to bribery and corruption in any form, whether direct or through third parties.`,
      '- Do not offer, give, request or accept any bribe, kickback or improper payment to obtain or retain business or any advantage.',
      '- Do not make facilitation payments to speed up routine government actions.',
      '- Ensure agents, consultants, contractors and business partners acting on our behalf follow the same standards.',
      '- Record all transactions accurately and completely in the Group’s books and records.',
      'We comply with all laws relevant to countering bribery and corruption in Malaysia and in every jurisdiction in which we operate.',
    ],
  },
  {
    id: 'gifts-hospitality',
    title: '4. Gifts and Hospitality',
    lines: [
      'Modest gifts and hospitality can help build good business relationships, but they must never influence, or appear to influence, a business decision.',
      '- Only give or accept gifts and hospitality that are reasonable, infrequent and appropriate to the occasion.',
      '- Never give or accept cash or cash equivalents such as vouchers or gift cards.',
      '- Do not give or accept gifts during a tender or contract negotiation with the other party.',
      '- Declare gifts and hospitality in line with the Group’s gifts and hospitality procedure.',
    ],
  },
  {
    id: 'conflict-of-interest',
    title: '5. Conflict of Interest',
    lines: [
      'A conflict of interest arises when personal interests, relationships or activities interfere, or appear to interfere, with your duty to act in the best interests of the Group.',
      '- Avoid situations where your personal interests conflict with those of the Group.',
      '- Declare any actual, potential or perceived conflict of interest to your superior as soon as it arises.',
      '- Do not use your position, Group property or confidential information for personal gain.',
      '- Obtain approval before taking up outside employment or directorships that may affect your duties.',
    ],
  },
  {
    id: 'fair-competition',
    title: '6. Fair Competition',
    lines: [
      'We compete vigorously but fairly, and we comply with all applicable competition and anti-trust laws.',
      '- Do not agree with competitors to fix prices, rig bids, divide markets or customers, or limit supply.',
      '- Do not share commercially sensitive information with competitors.',
      '- Obtain competitive information only through lawful and ethical means.',
    ],
  },
  {
    id: 'information-assets',
    title: '7. Confidential Information and Company Assets',
    lines: [
      '- Protect the Group’s confidential information and that of our clients and partners, and only use it for legitimate business purposes.',
      '- Handle personal data in line with the Personal Data Protection Act 2010 and the Group’s Personal Data Protection Notice.',
      '- Use Group assets, including equipment, systems and funds, responsibly and only for business purposes.',
    ],
  },
  {
    id: 'whistleblowing',
    title: '8. Whistleblowing',
    lines: [
      'We are committed to an open working environment where honest communication is the expectation and not the exception. Anyone who suspects improper conduct or a breach of this Code is encouraged to raise it.',
      '- Concerns may be raised with your superior, management, or confidentially and anonymously through our Whistleblowing Portal.',
      '- All reports are treated in confidence and investigated fairly and without any presumption of guilt.',
      '- No one will suffer detrimental action for raising a concern in good faith.',
    ],
    portal: true,
  },
  {
    id: 'sanctions',
    title: '9. Sanctions for Violations',
    lines: [
      'Breaches of this Code are taken seriously. Depending on the nature of the breach, violations may result in disciplinary action up to and including termination of employment or contract, and may be reported to the relevant authorities where required by law.',
      'Knowingly making a false report, or retaliating against a person who raises a concern in good faith, is itself a breach of this Code.',
    ],
  },
  {
    id: 'review',
    title: '10. Review of the Code',
    lines: [
      'This Code will be reviewed periodically by the Board to ensure it remains relevant and consistent with applicable laws, regulations and best practices.',
    ],
  },
];

/* ---------- Small pieces ---------- */
function Lines({ lines }) {
  const out = [];
  let bullets = [];
  const flush = (k) => {
    if (bullets.length) {
      out.push(
        <ul key={`ul-${k}`} className="list-disc space-y-2 pl-7">
          {bullets.map((b) => (
            <li key={b.slice(0, 30)}>{b}</li>
          ))}
        </ul>
      );
      bullets = [];
    }
  };
  lines.forEach((l, i) => {
    if (l.startsWith('- ')) return bullets.push(l.slice(2));
    flush(i);
    out.push(<p key={i}>{l}</p>);
    return null;
  });
  flush('end');
  return <div className="space-y-4">{out}</div>;
}

/* ---------- Page ---------- */
// Other addresses that open this page at a specific section
const JUMP_TO = { 'whistleblowing-policy': 'whistleblowing' };

export default function CodeOfEthicalConduct() {
  const { pathname } = useLocation();

  useEffect(() => {
    const target = JUMP_TO[pathname.split('/').pop()];
    const el = target && document.getElementById(target);
    if (el) setTimeout(() => el.scrollIntoView({ behavior: 'smooth', block: 'start' }), 50);
  }, [pathname]);

  return (
    <>
      {/* Hero + title band */}
      <section
        className="relative flex min-h-[300px] flex-col justify-end md:min-h-[380px]"
        style={{ background: `url(${HERO_IMAGE}) center/cover no-repeat, linear-gradient(135deg, #6fa3d8 0%, #2e27c3 100%)` }}
      >
        <div className="bg-brand-blue/80">
          <div className="container-site py-9">
            <h1 className="font-heading text-[30px] font-extrabold leading-[1.1] text-brand-cyan md:text-[42px]">Code of Ethical Conduct</h1>
          </div>
        </div>
      </section>

      <section className="bg-white pb-16 pt-5">
        <div className="container-site">
          <Link
            to="/corporate/compliance-and-business-ethics"
            className="inline-flex h-[54px] min-w-[226px] items-center justify-center border border-brand-deep bg-white px-8 font-heading text-[16px] font-bold text-brand-deep transition-colors hover:bg-brand-deep hover:text-white"
          >
            ← Compliance &amp; Business Ethics
          </Link>

          <div className="mt-12 grid gap-10 lg:grid-cols-[240px_1fr] lg:gap-14">
            {/* Contents (desktop) */}
            <aside className="hidden lg:block">
              <nav className="sticky top-32 border-l-2 border-brand-blue/20 pl-5">
                <p className="font-heading text-[13px] font-bold uppercase tracking-wider text-brand-muted">Contents</p>
                <ul className="mt-4 space-y-3">
                  {sections.map((s) => (
                    <li key={s.id}>
                      <a href={`#${s.id}`} className="font-heading text-[15px] text-brand-ink hover:text-brand-blue">
                        {s.title}
                      </a>
                    </li>
                  ))}
                </ul>
              </nav>
            </aside>

            {/* Code text */}
            <div className="max-w-[900px] space-y-12 text-[16px] leading-[1.7] text-brand-ink md:text-[17px]">
              {sections.map((s) => (
                <article key={s.id} id={s.id} className="scroll-mt-32">
                  <h2 className="font-heading text-[24px] font-bold text-brand-ink md:text-[28px]">{s.title}</h2>
                  <span className="mb-6 mt-4 block h-[2px] w-[66px] bg-brand-orange" />
                  <Lines lines={s.lines} />
                  {s.portal && (
                    <Link
                      to={PORTAL}
                      className="mt-6 inline-flex h-[52px] items-center justify-center bg-brand-deep px-8 font-heading text-[16px] font-bold text-white transition-colors hover:bg-brand-blue"
                    >
                      Go to Whistleblowing Portal
                    </Link>
                  )}
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}