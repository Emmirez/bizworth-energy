import { Link } from 'react-router-dom';

/* ---------- Image (in /public/images) ---------- */
const HERO_IMAGE = '/images/sea.jpg';

/* ---------- Content ----------
   Line formats:
   '## text'  sub-heading      '- text'  bullet point
   '> text'   indented          '>> text' double indented
   anything else = normal paragraph  */
const sections = [
  {
    id: 'introduction',
    title: 'Introduction',
    lines: [
      'The Terms of Reference (“TOR”) and functions of the Board of Directors’ (“Board”) Nomination and Remuneration Committee of Bizworth Oil & Gas Sdn. Bhd. (“BOG”) (“BNRC” or “Committee”) are prepared based on the Main Market Listing Requirements of Bursa Malaysia Securities Berhad (“Bursa Malaysia”) (“MMLR”) and the Malaysian Code on Corporate Governance 2017 (“Code”). The TOR and the functions of the BNRC shall be approved by the Board.',
    ],
  },
  {
    id: 'objective',
    title: '1. Objective',
    lines: [
      'The principal objectives of the BNRC are to assist the Board of Directors (“the Board”) in its responsibilities in respect of the following:',
      '> (a) Address business continuity of the Company and the Group by having in place a succession plan for the Board and Senior Management.',
      '> (b) Consider potential candidates and nominate suitable persons to the Board.',
      '> (c) Recommend on the appointment of Board members and Board Committee members.',
      '> (d) Assess the performance of the Board members as a whole and as individuals as well as Board Committees on an on-going basis, taking into consideration the Group’s performance in managing material sustainability risks and opportunities based on the Bursa Malaysia’s Common Material Matters relevant to the BNRC, including in the Group Scorecard.',
      '> (e) Responsible for recommending to the Board the remuneration and reward framework for Executive Directors and Senior Management to allow the Company to attract and retain its Executive Directors and Senior Management giving due regard to the financial situation and performance of the Company.',
      '> (f) Assess and recommend the remuneration packages of the Group Chief Executive Officer (“GCEO”), Executive Directors, Non-Executive Directors of BOG.',
      '> (g) Assist in reviewing and recommending the annual bonus payment rate and increment range to all employees of BOG and its subsidiaries (collectively “the Group”) based on the Group’s policy.',
      '> (h) Administer the Share Issuance Scheme, the Share Bonus Scheme and Executive Share Option Scheme (“ESOS”) in accordance with the By-Laws and the Guidelines, respectively.',
      '> (i) Review the Group’s Sustainability matters under the purview of the BNRC for disclosure in the Company’s Annual Report.',
    ],
  },
  {
    id: 'composition',
    title: '2. Composition and Size',
    lines: [
      'The Board shall elect the BNRC members from among its members and shall comprise at least three (3) and a maximum of four (4) members, all of whom are non-executive directors with majority of them being independent directors.',
      'The Board Chairman and Alternate Directors shall not serve as the Chairman or members of the BNRC.',
      'In the event of any vacancy in the BNRC resulting in non-compliance with the TOR or regulatory requirements, the Board shall fill the vacancy within three (3) months.',
    ],
  },
  {
    id: 'chairman',
    title: '3. Chairman',
    lines: [
      'The Chairman of the BNRC shall be elected from amongst the BNRC members. The Chairman shall be an Independent Non-Executive Director. In the absence of the BNRC Chairman, the BNRC members present shall elect a Chairman for the meeting from amongst the BNRC members present who is an Independent Non-Executive Director.',
      'All members of the BNRC, including the Chairman, shall hold office so long as they serve as Directors of the Company.',
    ],
  },
  {
    id: 'secretary',
    title: '4. Secretary',
    lines: [
      'The Company Secretary or other appropriate senior officers of BOG shall act as the secretary of the BNRC (“the Secretary”).',
      'The Secretary, together with the Chairman of the BNRC, shall be responsible for drawing up the notice and agenda for the meeting and the notice, agenda and relevant documents shall be distributed to members and other attendees of the BNRC at least three (3) working days, or shorter notice, due to extenuating circumstances, prior to the meeting. Consent from all members of the BNRC shall be obtained for any meetings of BNRC called shorter than this notice period.',
      'The Secretary shall also be responsible for keeping the minutes of meetings of the BNRC and circulating them to the BNRC members.',
    ],
  },
  {
    id: 'meetings',
    title: '5. Meetings',
    lines: [
      'The BNRC may meet for the despatch of business, adjourn and otherwise regulate the meetings at least once in a financial year or more frequent as deemed necessary. The Chairman of the BNRC or any other members of the BNRC may call for additional meetings at any time by giving at least three (3) working days prior notice unless consent for shorter notice is obtained from all members.',
      'The quorum for all meetings of the BNRC shall not be less than two members, majority of whom are independent directors.',
      'The BNRC may, from time to time, regulate its own procedure and conduct of its meeting. Attendance at a meeting may be by being present in person or by participating in the meeting by video or teleconference. Members of the BNRC who participate in a meeting of the BNRC by video or teleconference or any communication equipment shall be deemed to be present in person at the meeting and shall be entitled to vote or be counted in a quorum accordingly.',
      'The BNRC should record its deliberations in terms of issues discussed and conclusions in discharging its duties and responsibilities, with the minutes kept and distributed to each member of BNRC and the Board. The Chairman of the BNRC shall provide the Board with a report of the BNRC meetings at the next Board meeting after the conclusion of each BNRC meeting.',
      'In its deliberations, the BNRC shall take cognisance of the MMLR and the Code, and any other pertinent regulations and laws, as well as revisions which may come into force from time to time.',
    ],
  },
  {
    id: 'circular-resolution',
    title: '6. Circular Resolution',
    lines: [
      'A circular resolution in writing (if only deemed necessary by the BNRC Chairman) shall be valid and effectual if it is approved and signed by ALL members of the BNRC as if it had been passed at a meeting of the BNRC. All such resolutions shall be described as Board Nomination and Remuneration Committee Members’ Circular Resolution(s).',
      'Any discussions including any concerns raised and the rationale for the decisions so made in the resolution, shall be tabled at the BNRC meeting taking place immediately after the passing of the resolution, for a formal record keeping of the same.',
      'Any such resolution may consist of several documents in like form, each signed by one or more BNRC members.',
    ],
  },
  {
    id: 'rights',
    title: '7. Rights and Authorities',
    lines: [
      'In carrying out its duties and responsibilities, the BNRC shall:',
      '> (a) Have explicit authority to investigate any matter within its terms of reference.',
      '> (b) Have the resources which it needs to perform its duties.',
      '> (c) Have full, free and unrestricted access to any information, records, properties and personnel of the Group which it requires in the course of performing its duties.',
      '> (d) Be able to obtain independent professional or other advice in the performance of its duties at the cost of the Company; and',
      '> (e) Be able to invite outsiders with relevant experience to attend its meetings if necessary.',
    ],
  },
  {
    id: 'duties',
    title: '8. Duties and Responsibilities',
    lines: [
      'The duties and responsibilities of BNRC are as determined by the Board from time to time which include the following:',
      '## 8.1 Nomination',
      '8.1.1 To determine the criteria for Board membership, including qualities, experience, skills, expertise, education background and qualifications, competencies, integrity, contribution, level of commitment in terms of time and other qualities, based on the directors’ fit and proper policy adopted by the Company that will best qualify a candidate to serve on the Board.',
      '8.1.2 To review annually and recommend to the Board with regard to the structure, size, tenure, directorships, balance and composition of the Board and Committees including the required mix of skills and experience, core competencies which the Directors should bring to the Board and other qualities to function effectively and efficiently.',
      '8.1.3 To identify, consider, review, evaluate and recommend to the Board any new Board appointment, whether of executive or non-executive position, to fill board vacancies as and when arises. In identifying candidates for directorship, the BNRC may rely on recommendations from existing Board members and major shareholders, as well as independent search firms and other external sources.',
      'The BNRC shall recommend to the Board with regard to the candidate for directorship, based on the following:',
      '- skills, knowledge, expertise and experience;',
      '- education background, qualifications and professionalism;',
      '- competency;',
      '- integrity and objectivity;',
      '- in the case of candidates for the position of independent non-executive directors, the candidates’ ability to discharge such responsibilities/function as expected from an independent non-executive director;',
      '- diversity targets in the boardroom to include diversity in gender, ethnicity and age;',
      '- level of commitment, resources and time that the recommended candidate can contribute to the existing Board and Group;',
      '- ability to work together with other members of the Board for the best interest of the Company; and',
      '- any other criteria as set out in the applicable directors’ fit & proper policy adopted by the Company.',
      'The ultimate decision on the appointment of directors to the Board is the responsibility of the Board after due consideration of the recommendations of the BNRC.',
      '8.1.4 To recommend to the Board the duties and responsibilities of the Directors, including membership and Chairmanship of the Board Committees.',
      '8.1.5 To review annually the term of office and performance of the Board Audit Committee and each of its members to determine whether such Board Audit Committee and members have carried out their duties in accordance with their terms of reference.',
      '8.1.6 To annually evaluate the Board and Board Committees including but not limited to the following:',
      '- the effectiveness of the Board Committees (including its size and composition);',
      '- the effectiveness of the Board as a whole;',
      '- skills and contributions of each individual Director; and',
      '- the independence of the Independent Directors, particularly when there are any new interests or relationships that surface.',
      'All assessments and evaluations carried out by the BNRC in the discharge of all its functions shall be properly documented and conducted at least once a year either internally or via other independent sources.',
      '8.1.7 To review the results of the evaluation and recommend to the Board the initiatives/improvements moving forward, to enhance the effectiveness of the Board.',
      '8.1.8 To be entitled to the services of the Company Secretary who must ensure that all appointments are properly made and all necessary information is obtained from the directors, both for BOG’s own records and for the purposes of meeting statutory obligations, as well as obligations arising from the MMLR or other regulatory requirements.',
      '8.1.9 To determine appropriate trainings for Directors, review the fulfillment of such training and disclose details in the annual report as appropriate, in accordance with Bursa Malaysia’s requirements on Continuing Education.',
      '8.1.10 To consider and recommend to the Board:',
      '- candidates for re-election of retiring Directors by shareholders under the annual retirement and re-election provisions;',
      '- whether the Independent Director(s) should remain independent or be re-designated, after the assessment of Independent Director(s) be conducted and concluded;',
      '- matters relating to the continuation in office of any Director at any time, including the suspension or termination of service of the Executive Director as an employee of the company subject to the provisions of the law and his/her service contract; and',
      '- the re-appointment of any Non-Executive Director at the conclusion of his/her term of office having given due regard to his/her performance and the ability to continue to contribute to the Board in terms of knowledge, skills and experience required.',
      '8.1.11 To establish appropriate framework and plans for succession at Board level to ensure that the Board is comprised of Directors with the skills and experience relevant to the Company’s strategic direction and objectives.',
      '8.1.12 To establish appropriate framework and plans for succession at Senior Management level including GCEO and Executive Directors to ensure that the Senior Management is comprised of individuals with the skills and experience relevant to the Company’s strategic direction and objectives.',
      '8.1.13 To consider and examine such other matters as the BNRC considers appropriate.',
      '8.1.14 To consider other matters as referred to the BNRC by the Board.',
      '## 8.2 Remuneration',
      '8.2.1 Establish and recommend: (i) the remuneration structure and policy for GCEO and Executive Director(s); (ii) their terms of employment or contract of employment/service, any benefit, pension or incentive scheme entitlement; (iii) other bonuses, fees and expenses; any compensation payable on the termination of their service contract by the Company and to review for changes to the policy, as necessary. The GCEO and Executive Director(s) should play no part in decisions involving their own remuneration.',
      '8.2.2 Ensure that a strong link is maintained between the level of remuneration and individual performance against agreed targets, the performance-related elements of remuneration forming a significant proportion of the total remuneration package of GCEO and Executive Director(s).',
      '8.2.3 Review with the GCEO and the Executive Director(s), their performance against these objectives as well as contribution to the corporate strategy.',
      '8.2.4 Review and recommend the proposed remuneration framework and packages of Non-Executive Directors to the Board and for approval by the shareholders at Annual General Meeting as relevant.',
      '8.2.5 Annually review and recommend the bonus payment rate and salary increment range to all employees of the Group based on the Group’s policy.',
      '8.2.6 Review and recommend to the Board regarding any proposed new employees’ share option scheme to be given to the Directors and employees and/or amendments to the existing scheme.',
      '8.2.7 Assist the Board in discharging their responsibilities relating to, amongst others, compensation strategy, management development and other compensation arrangement.',
      '8.2.8 Ensure corporate accountability and governance in respect of the Board remuneration and compensation function.',
      '8.2.9 Review the remuneration policies, framework and procedures for Directors, Senior Management and employees every two (2) years.',
      '8.2.10 Consider and examine such other matters as the BNRC considers appropriate.',
      '## 8.3 Long-Term Incentive Plan (“LTIP”)',
      '8.3.1 The rights, authorities, duties and responsibilities of the BNRC in relation to LTIP are as stipulated in the following documents which are attached as Appendix I (being an integral part of this TOR):',
      '> (a) The By-Laws of the Share Issuance Scheme;',
      '> (b) The Guidelines of the Share Bonus Scheme; and',
      '> (c) The By-Laws of BOG ESOS.',
    ],
  },
  {
    id: 'review',
    title: '9. Review of the BNRC',
    lines: [
      'The Board shall review the term of office and performance of BNRC annually to determine whether the BNRC has carried out its duties in accordance with its terms of reference.',
    ],
  },
  {
    id: 'amendment',
    title: '10. Amendment of the Terms of Reference',
    lines: [
      'Any amendment to the TOR of the BNRC, shall first be presented to the Board for approval. Upon the Board’s approval, the said amendment shall form part of the TOR of the BNRC, of which shall be considered duly amended.',
    ],
  },
  {
    id: 'discrepancies',
    title: '11. Discrepancies',
    lines: [
      'In the event of any discrepancies between the TOR and other relevant Acts, Guidelines, Circulars or other documents issued by relevant regulators (collectively “Regulators’ Documents”), the Regulators’ Documents shall prevail.',
    ],
  },
  {
    id: 'publication',
    title: '12. Publication of the Terms of Reference',
    lines: [
      'The TOR of the BNRC shall be made available on BOG’s website.',
    ],
  },
];

/* ---------- Renders the line formats above ---------- */
function renderText(text) {
  // Bold the defined term in lines like “Act” means ...
  const m = text.match(/^(“[^”]+”(?: or the “[^”]+”)?)(\s(?:means|is defined).*)$/);
  if (m) {
    return (
      <>
        <strong className="font-semibold">{m[1]}</strong>
        {m[2]}
      </>
    );
  }
  return text;
}

function SectionBody({ lines }) {
  const out = [];
  let bullets = [];
  const flush = (key) => {
    if (bullets.length) {
      out.push(
        <ul key={`ul-${key}`} className="list-disc space-y-2 pl-7">
          {bullets.map((b) => (
            <li key={b}>{b}</li>
          ))}
        </ul>
      );
      bullets = [];
    }
  };

  lines.forEach((line, i) => {
    if (line.startsWith('- ')) {
      bullets.push(line.slice(2));
      return;
    }
    flush(i);
    if (line.startsWith('## ')) {
      out.push(
        <h3 key={i} className="pt-3 font-heading text-[19px] font-bold text-brand-ink">
          {line.slice(3)}
        </h3>
      );
    } else if (line.startsWith('>> ')) {
      out.push(<p key={i} className="pl-12 md:pl-16">{line.slice(3)}</p>);
    } else if (line.startsWith('> ')) {
      out.push(<p key={i} className="pl-6 md:pl-8">{line.slice(2)}</p>);
    } else {
      out.push(<p key={i}>{renderText(line)}</p>);
    }
  });
  flush('end');
  return <div className="space-y-4 text-[16px] leading-[1.7] text-brand-ink md:text-[17px]">{out}</div>;
}

/* ---------- Page ---------- */
export default function BoardNominationRemunerationCommittee() {
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
            <h1 className="max-w-[900px] font-heading text-[28px] font-black uppercase leading-[1.15] text-white md:text-[38px]">
              Terms of Reference for Board Nomination and Remuneration Committee
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

            {/* Charter text */}
            <div className="max-w-[900px] space-y-12">
              {sections.map((s) => (
                <article key={s.id} id={s.id} className="scroll-mt-32">
                  <h2 className="font-heading text-[24px] font-bold text-brand-ink md:text-[28px]">{s.title}</h2>
                  <span className="mb-6 mt-4 block h-[2px] w-[66px] bg-brand-orange" />
                  <SectionBody lines={s.lines} />
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}