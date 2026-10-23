import { Link } from 'react-router-dom';
import { company } from '../../data/company';

/* ---------- Content ---------- */
const HERO_IMAGE = '/images/complaince.jpg';
const PORTAL = '/corporate/compliance-and-business-ethics/whistleblowing-portal';

// Lines starting with '- ' become bullet points.
const sections = [
  {
    id: 'policy-statement',
    title: '1. Policy Statement',
    lines: [
      `${company.name} and its subsidiaries (“the Group”) conduct all business in an honest and ethical manner. We take a zero-tolerance approach to bribery and corruption and are committed to acting professionally, fairly and with integrity in all our business dealings and relationships, wherever we operate.`,
      'We are committed to upholding all laws relevant to countering bribery and corruption, including the Malaysian Anti-Corruption Commission Act 2009 and the laws of every other jurisdiction in which the Group operates.',
    ],
  },
  {
    id: 'scope',
    title: '2. Scope',
    lines: [
      'This Policy applies to:',
      '- all directors, officers and employees of the Group, whether permanent, contract or temporary;',
      '- agents, consultants, contractors, suppliers, joint venture partners and any other third party acting for or on behalf of the Group.',
    ],
  },
  {
    id: 'what-is-bribery',
    title: '3. What Is Bribery and Corruption?',
    lines: [
      'Bribery is offering, promising, giving, requesting or accepting anything of value, directly or indirectly, to improperly influence a decision or to obtain or retain a business advantage.',
      'Anything of value includes cash, gifts, hospitality, travel, employment offers, donations, discounts, favours or any other benefit. Corruption is the abuse of entrusted power for private gain.',
    ],
  },
  {
    id: 'prohibited-conduct',
    title: '4. Prohibited Conduct',
    lines: [
      'You must not:',
      '- offer, promise, give or authorise a bribe to any person, including public officials and private individuals;',
      '- request, agree to receive or accept a bribe or any improper benefit;',
      '- make facilitation payments to speed up routine government actions such as permits, licences or customs clearance;',
      '- use agents, intermediaries or family members to do anything you are not permitted to do yourself;',
      '- falsify, conceal or misrepresent any record, invoice or transaction;',
      '- threaten or retaliate against anyone who refuses to engage in bribery or raises a concern.',
    ],
  },
  {
    id: 'gifts-hospitality',
    title: '5. Gifts, Hospitality and Entertainment',
    lines: [
      'Gifts and hospitality must be reasonable, proportionate, infrequent and given or received openly. They must never be offered or accepted to influence a business decision.',
      '- Cash and cash equivalents (vouchers, gift cards) must never be given or accepted.',
      '- No gifts or hospitality may be exchanged with parties involved in an ongoing tender or contract negotiation.',
      '- All gifts and hospitality must be declared and recorded in line with the Group’s procedures.',
    ],
  },
  {
    id: 'donations-sponsorships',
    title: '6. Political Contributions, Donations and Sponsorships',
    lines: [
      '- The Group does not make contributions to political parties, politicians or candidates.',
      '- Charitable donations and sponsorships must be legitimate, transparent, properly approved and never used as a disguised bribe.',
    ],
  },
  {
    id: 'third-parties',
    title: '7. Third Parties and Due Diligence',
    lines: [
      'The Group may be held responsible for the actions of those acting on its behalf. Before engaging a third party, appropriate due diligence must be carried out, and contracts should include anti-bribery and corruption provisions.',
      'Third parties are expected to comply with this Policy and to report any suspected breach.',
    ],
  },
  {
    id: 'records',
    title: '8. Books, Records and Internal Controls',
    lines: [
      'All transactions must be recorded accurately, completely and in a timely manner. The Group maintains internal controls, monitoring and audits to prevent and detect bribery and corruption.',
    ],
  },
  {
    id: 'training',
    title: '9. Training and Communication',
    lines: [
      'All employees receive anti-bribery and corruption training appropriate to their role, and this Policy is communicated to business partners at the start of the relationship and when it is updated.',
    ],
  },
  {
    id: 'reporting',
    title: '10. Reporting Concerns',
    lines: [
      'If you are offered or asked for a bribe, or suspect that a breach of this Policy has occurred, report it immediately to your superior, Group Integrity & Governance, or confidentially and anonymously through the Whistleblowing Portal.',
      'No one will suffer detrimental action for refusing to take part in bribery or for raising a concern in good faith.',
    ],
    portal: true,
  },
  {
    id: 'consequences',
    title: '11. Consequences of Non-Compliance',
    lines: [
      'Any breach of this Policy may result in disciplinary action up to and including dismissal or termination of contract. Bribery and corruption are also criminal offences that may result in fines and imprisonment for individuals and the Group, and matters may be reported to the relevant authorities.',
    ],
  },
  {
    id: 'review',
    title: '12. Review of this Policy',
    lines: [
      'This Policy is reviewed periodically by the Board to ensure it remains effective and consistent with applicable laws, regulations and best practices.',
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
export default function AntiBriberyPolicy() {
  return (
    <>
      {/* Hero + title band */}
      <section
        className="relative flex min-h-[300px] flex-col justify-end md:min-h-[380px]"
        style={{ background: `url(${HERO_IMAGE}) center/cover no-repeat, linear-gradient(135deg, #6fa3d8 0%, #2e27c3 100%)` }}
      >
        <div className="bg-brand-blue/80">
          <div className="container-site py-9">
            <h1 className="font-heading text-[30px] font-extrabold leading-[1.1] text-brand-cyan md:text-[42px]">Anti-Bribery and Anti-Corruption Policy</h1>
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

            {/* Policy text */}
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