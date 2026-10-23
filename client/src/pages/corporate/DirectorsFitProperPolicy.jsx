import { Link } from 'react-router-dom';

/* ---------- Image (in /public/images) ---------- */
const HERO_IMAGE = '/images/rig.jpg';
const UPDATED = '2 October 2026';

/* ---------- Content ---------- */
const intro = [
  'Bizworth Oil & Gas Sdn. Bhd. (“BOG” or “Company”) is obliged to formulate a fit and proper policy for the appointment, re-appointment and/or re-election of Directors of the Company and its subsidiaries (“Group”) pursuant to the Main Market Listing Requirements of Bursa Malaysia Securities Berhad (“Listing Requirements”).',
  'The Directors’ Fit and Proper Policy (“Policy”) sets out the approach, guidelines and procedures to ensure a formal, rigorous and transparent process is being adhered for the appointment, re-appointment and/or re-election of the Directors of the Group.',
  'In the event of a conflict between the contents of this Policy and the relevant laws or regulations, the latter shall always take precedence.',
];

// Clause 2 — each criterion has groups, each group has points.
const criteria = [
  {
    title: 'Character and Integrity',
    groups: [
      {
        name: 'Probity',
        points: [
          'Is compliant with legal obligations, regulatory requirements and professional standards.',
          'Has not been obstructive, misleading or untruthful in dealings with regulatory bodies or a court.',
        ],
      },
      {
        name: 'Personal integrity',
        points: [
          'Has not perpetrated or participated in any business practices which are deceitful, oppressive, improper (whether unlawful or not), or which otherwise reflect discredit on his/her professional conduct.',
          'Service contract (i.e. in the capacity of Management or Director) had not been terminated in the past due to concerns on personal integrity.',
          'Has not abused other positions (i.e. political appointment) to facilitate government relations for the Company in a manner that contravenes the principles of good governance.',
        ],
      },
      {
        name: 'Financial integrity',
        points: [
          'Manages personal debts or financial affairs satisfactorily.',
          'Demonstrates ability to fulfil personal financial obligations as and when they fall due, either in Malaysia or elsewhere.',
        ],
      },
      {
        name: 'Reputation',
        points: [
          'Is of good repute in the financial and/or business community.',
          'Has not been the subject of civil or criminal proceedings or enforcement action, in managing or governing an entity for the past 10 years, either in Malaysia or elsewhere.',
          'Has not been substantially involved in the management of a business or company which has failed, where that failure has been occasioned in part by deficiencies in that management.',
          'Is not an active politician and has not held a position with high political influence in the past two (2) years.',
        ],
      },
    ],
  },
  {
    title: 'Experience and Competence',
    groups: [
      {
        name: 'Qualifications, training and skills',
        points: [
          'Possesses education qualification that is relevant to the skill set that the Director is earmarked to bring to bear onto the boardroom (i.e. a match to the Board’s skill set matrix).',
          'Has a considerable understanding on the workings of a corporation.',
          'Possesses general management skills as well as understanding of corporate governance and sustainability issues.',
          'Keeps knowledge current based on continuous professional development.',
          'Possesses management and leadership capabilities and a high level of emotional intelligence.',
        ],
      },
      {
        name: 'Relevant experience and expertise',
        points: [
          'Possesses relevant experience and expertise with due consideration given to past length of service, nature and size of business, responsibilities held, number of subordinates as well as reporting lines and delegated authorities.',
        ],
      },
      {
        name: 'Relevant past performance or track record',
        points: [
          'Had a career of occupying a high-level position in a comparable organization and was accountable for driving or leading the organization’s governance, business performance or operations.',
          'Possesses commendable past performance record as gathered from the results of the Board Effectiveness Evaluation.',
        ],
      },
    ],
  },
  {
    title: 'Time and Commitment',
    groups: [
      {
        name: 'Ability to discharge role having regard to other commitments',
        points: [
          'Able to devote sufficient time as a Board member, having factored other external obligations including concurrent board positions held by the Director across listed companies and/or non-listed companies (including not-for-profit organizations).',
          'The number of directorships held by any Board member at any one time shall not exceed five (5) in listed companies.',
        ],
      },
      {
        name: 'Participation and contribution in the Board',
        points: [
          'Without any reasonable justifications, must not be absent from board meetings and must meet the minimum 75% attendance.',
          'Demonstrates willingness to participate actively in Board activities.',
          'Demonstrates willingness to devote time and effort to understand the businesses and exemplifies readiness to participate in events outside the boardroom.',
          'Manifests passion in the vocation of a Director.',
          'Exhibits ability to articulate views independently, objectively and constructively.',
          'Exhibits open mindedness to the views of others and ability to make considered judgment after hearing the views of others.',
        ],
      },
    ],
  },
  {
    title: 'Policy on Tenure of Directorship',
    groups: [
      {
        name: '',
        points: [
          'The calculation of the tenure of appointment of an independent director be limited to not more than a cumulative period of nine (9) years commencing from the first (1st) date of appointment of the appointee to the Board of BOG, irrespective of any change in status as an independent director.',
        ],
      },
    ],
  },
];

// Clauses 3–9. Lines starting with '- ' become bullet points.
const clauses = [
  {
    title: '3. The Assessment',
    lines: [
      '- A person who has been identified for appointment as a Director or for re-appointment/re-election as a Director shall be required to make the fit and proper declaration in such form(s) as the BNRC may from time to time prescribe or approve.',
      '- The assessment should take into consideration the suitability of candidates against considerations such as competencies, commitment, contribution and performance, including the current composition of Board and Board committees (where applicable), mix of skills and experiences of Directors whilst taking into account the current and future needs of the Group, boardroom diversity (including gender diversity) and other soft attributes required as Directors. The assessment should be exercised objectively in the best interests of the Group.',
      '- The evaluation will be based on the fit and proper criteria set out in Clause 2 above. The criteria shall be assessed individually, as well as collectively, taking into account their relative importance. Failure to meet one criterion on its own does not necessarily mean failure to meet the fit and proper criteria.',
      '- The results of the assessment are part of BOG’s internal documents and shall not be disclosed or provided to any other party.',
    ],
  },
  {
    title: '4. Procedures',
    lines: [
      '- In the course of assessing the candidates, the BNRC shall apply the fit and proper criteria set out in Clause 2 above and may utilise such Fit and Proper Assessment Form as developed from time to time, which includes self-evaluation forms by the candidates assessed to assist in such assessment.',
      '- Additionally, the BNRC shall have the authority to engage and employ such third-party external service providers that are required to assist in the assessment of the proposed candidates, including but not limited to background checks, checks on bankruptcy and financial defaults and checks on past employment.',
    ],
  },
  {
    title: '5. Assistance to the BNRC',
    lines: [
      'In implementing this Policy, the BNRC shall have access to the assistance of the Group Company Secretary, Group People Division, Group Legal & Governance and such other division or department in BOG as required.',
    ],
  },
  {
    title: '6. Review of this Policy',
    lines: [
      'The BNRC will review this Policy periodically to ensure that it continues to remain relevant, appropriate and consistent with the Group’s practices, Malaysian Code on Corporate Governance, Listing Requirements or any other applicable regulatory requirements. Any revisions to this Policy as recommended by the BNRC will be submitted to the Board of the Company for consideration and approval.',
    ],
  },
  {
    title: '7. Risk Evaluation',
    lines: [
      'Breaches and/or non-compliance of the Listing Requirements may lead to penalty or any actions deemed appropriate imposed by Bursa Malaysia (see Paragraph 16.19 Listing Requirements) on the Company’s Management, directors and officers.',
    ],
  },
  {
    title: '8. Disclosure of this Policy',
    lines: [
      'This Policy is authorized to and shall be published on BOG’s website for public information as required by the provisions of Listing Requirements.',
    ],
  },
  {
    title: '9. Document Control',
    lines: [
      'Published electronic versions of documents are the only valid versions. Paper printouts serve as information only. Where there is a need to use controlled paper copies, this shall be defined and controlled locally by each respective site / location.',
      'This Version 1 shall supersede all previous versions of this Policy.',
    ],
  },
];

/* ---------- Small pieces ---------- */
function ClauseTitle({ children }) {
  return (
    <>
      <h2 className="font-heading text-[24px] font-bold text-brand-ink md:text-[28px]">{children}</h2>
      <span className="mb-6 mt-4 block h-[2px] w-[66px] bg-brand-orange" />
    </>
  );
}

function Lines({ lines }) {
  const bullets = lines.filter((l) => l.startsWith('- ')).map((l) => l.slice(2));
  const paras = lines.filter((l) => !l.startsWith('- '));
  return (
    <div className="space-y-4">
      {paras.map((p) => (
        <p key={p.slice(0, 30)}>{p}</p>
      ))}
      {bullets.length > 0 && (
        <ul className="list-disc space-y-3 pl-7">
          {bullets.map((b) => (
            <li key={b.slice(0, 30)}>{b}</li>
          ))}
        </ul>
      )}
    </div>
  );
}

/* ---------- Page ---------- */
export default function DirectorsFitProperPolicy() {
  return (
    <>
      {/* Hero + title band */}
      <section
        className="relative flex min-h-[340px] flex-col justify-end md:min-h-[420px]"
        style={{
          background: `url(${HERO_IMAGE}) center/cover no-repeat, linear-gradient(135deg, #6fa3d8 0%, #2e27c3 100%)`,
        }}
      >
        <div className="bg-brand-blue/80">
          <div className="container-site py-9">
            <h1 className="max-w-[900px] font-heading text-[28px] font-extrabold leading-[1.15] text-brand-cyan md:text-[38px]">
              Bizworth Oil &amp; Gas’s Director Fit and Proper Policy
            </h1>
          </div>
        </div>
      </section>

      <section className="bg-white pb-16 pt-5">
        <div className="container-site">
          <Link
            to="/contact-us"
            className="inline-flex h-[54px] min-w-[226px] items-center justify-center border border-brand-deep bg-white px-8 font-heading text-[16px] font-bold text-brand-deep transition-colors hover:bg-brand-deep hover:text-white"
          >
            Contact Us
          </Link>

          <div className="mx-auto mt-12 max-w-[960px] space-y-12 text-[16px] leading-[1.7] text-brand-ink md:text-[17px]">
            <p className="font-heading text-[14px] font-semibold uppercase tracking-wider text-brand-muted">
              Updated: {UPDATED}
            </p>

            {/* Introduction */}
            <article>
              <ClauseTitle>Introduction</ClauseTitle>
              <Lines lines={intro} />
            </article>

            {/* 1. Purpose */}
            <article>
              <ClauseTitle>1. Purpose</ClauseTitle>
              <p>This Policy serves as a guide:</p>
              <ul className="mt-4 list-disc space-y-3 pl-7">
                <li>
                  to ensure all Directors of the Group have the necessary character, experience, integrity, competence and
                  time to effectively discharge their role as Directors of the Group; and
                </li>
                <li>
                  to the Board Nomination and Remuneration Committee of the Company (“BNRC”), the Board of Directors
                  (“Board”) of the Group in conducting the necessary assessment on candidates before appointment, or on
                  existing Directors of the Group seeking for re-appointment and/or re-election.
                </li>
              </ul>
            </article>

            {/* 2. Fit and Proper Criteria */}
            <article>
              <ClauseTitle>2. Fit and Proper Criteria</ClauseTitle>
              <p>
                In assessing the candidates identified to be appointed as Directors of the Group (“Candidates”) and/or any
                existing Directors of the Group seeking for re-appointment and/or re-election (“Existing Directors”), the
                BNRC will take into consideration the following criteria:
              </p>
              <div className="mt-8 space-y-6">
                {criteria.map((c) => (
                  <div key={c.title} className="bg-[#00c2ef] px-6 pb-8 pt-6 md:px-8">
                    <h3 className="font-heading text-[21px] font-bold text-brand-ink md:text-[23px]">{c.title}</h3>
                    <div className="mt-5 space-y-6">
                      {c.groups.map((g) => (
                        <div key={g.name || c.title}>
                          {g.name && <p className="font-heading text-[17px] font-semibold text-brand-navy">{g.name}</p>}
                          <ul className="mt-2 list-disc space-y-2 pl-7 text-[16px] leading-[1.65]">
                            {g.points.map((pt) => (
                              <li key={pt.slice(0, 30)}>{pt}</li>
                            ))}
                          </ul>
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </article>

            {/* 3–9 */}
            {clauses.map((c) => (
              <article key={c.title}>
                <ClauseTitle>{c.title}</ClauseTitle>
                <Lines lines={c.lines} />
              </article>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}