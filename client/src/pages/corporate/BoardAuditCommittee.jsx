import { Link } from 'react-router-dom';

/* ---------- Image (in /public/images) ---------- */
const HERO_IMAGE = '/images/seap.jpg';

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
      'The Terms of Reference (“TOR”) and functions of the Board of Directors’ (“the Board”) Audit Committee (“BAC” or “the Committee”) are prepared based on the Main Market Listing Requirements of Bursa Malaysia Securities Berhad (“Bursa Securities”) (“Listing Requirements”) and the Malaysian Code on Corporate Governance 2021 (“MCCG 2021”). The TOR should be approved by the Board.',
    ],
  },
  {
    id: 'objectives',
    title: '1. Objectives of the Committee',
    lines: [
      '1.1 The BAC shall assist the Board of Bizworth Oil & Gas Sdn. Bhd. (“BOG”):',
      '> (a) in complying with specified accounting standards and required disclosures as administered by Bursa Securities, the relevant accounting standards bodies, and any other laws and regulations as amended from time to time;',
      '> (b) in presenting a balanced and understandable assessment of BOG’s financial position and prospects;',
      '> (c) in establishing a formal and transparent arrangement for maintaining an appropriate relationship with the external auditors and internal auditors;',
      '> (d) in maintaining a sound system of internal controls, risk management, sustainability initiatives and governance to safeguard BOG, its subsidiaries and associates (collectively “the Group”);',
      '> (e) in acting upon the Board’s request to investigate and report any issues or concerns in regard to the Group;',
      '> (f) in promoting and strengthening the confidence of the public in the Group’s reported results;',
      '> (g) in overseeing the assurance process of annual sustainability reporting; and',
      '> (h) in overseeing the integrity and governance practices of BOG, including the effectiveness of the whistleblowing policy and framework.',
    ],
  },
  {
    id: 'composition',
    title: '2. Composition and Size',
    lines: [
      '2.1 The BAC shall be appointed by the Board from among its members and shall comprise at least three (3) members, all of whom are non-executive directors with majority of them being independent directors.',
      '2.2 The BAC members must have the required skills to engage with the Management and auditors and be prepared to ask key and probing questions about the Group’s financial and operational risks, compliance with approved financial reporting standards and other relevant regulatory requirements.',
      '2.3 All BAC members should be financially literate with at least one (1) member of the BAC being:',
      '> (a) a member of the Malaysian Institute of Accountants (“MIA”); or',
      '> (b) if he/she is not a member of the MIA, he/she must have at least three (3) years’ working experience and:',
      '>> (i) he/she must have passed the examinations specified in Part 1 of the First Schedule of the Accountants Act 1967; or',
      '>> (ii) he/she must be a member of one of the associations of accountants specified in Part II of the First Schedule of the Accountants Act 1967; or',
      '> (c) fulfils such other requirements as prescribed or approved by Bursa Securities.',
      '2.4 No alternate director shall be appointed as a member of the BAC.',
      '2.5 In the event of any vacancy resulting in non-compliance of the minimum of three (3) members, the Board shall, upon the recommendation of the Board Nomination and Remuneration Committee, appoint such number of members to fill the vacancy within three (3) months of the event.',
      '2.6 A key audit partner(s) (including engagement partner, individual responsible on the engagement of quality control review, and other audit partners, if any, on the engagement team who make key decisions or judgements on significant matters with respect to the audit of the financial statements on which the auditor will express an opinion) responsible for the external audit of the Company and the Group may be appointed as a member of the Committee provided he/she has observed a three (3) years cooling-off period prior to his/her appointment as member of the Committee.',
    ],
  },
  {
    id: 'chairman',
    title: '3. Chairman',
    lines: [
      '3.1 The Chairman of the BAC shall be approved by the Board and shall be an independent non-executive director who is not the Chairman of the Board. In the absence of the BAC Chairman, the BAC members present shall elect a Chairman for the meeting from amongst the BAC members present who is an independent non-executive director.',
      'All members of the BAC, including the Chairman, shall hold office so long as they serve as Directors of the Company.',
      '3.2 The Chairman should assume, amongst others, the following responsibilities:',
      '> (a) To steer the BAC to achieve the goals it sets;',
      '> (b) To consult the Company Secretary of BOG for guidance on matters related to the BAC’s responsibilities under the applicable rules and regulations, to which they are subject to;',
      '> (c) To organise and present the agenda for BAC meetings based on input from members of the BAC for discussion on matters raised;',
      '> (d) To provide leadership to the BAC and ensure proper flow of information to the BAC by reviewing the adequacy of and timing for the making available of documentation;',
      '> (e) To ensure that all members are encouraged to play their role in its activities;',
      '> (f) To ensure that consensus is reached on every BAC resolution and where considered necessary, call for a vote; and',
      '> (g) To manage the processes and working of the BAC and ensure that the BAC discharges its responsibilities without interference from the Management.',
    ],
  },
  {
    id: 'secretary',
    title: '4. Secretary',
    lines: [
      '4.1 The Company Secretary or other appropriate senior officer of BOG shall act as the secretary of the BAC and shall be responsible, in conjunction with the Chairman, for drawing up the agenda and circulating it together to all members of the BAC two (2) weeks before the meeting date. Consent from all members of the BAC shall be obtained for any meetings of BAC called shorter than this notice period.',
      '4.2 Meeting papers and relevant information on the agenda items shall be circulated at least five (5) working days before the meeting, with exception to financial results which shall be circulated at least three (3) working days before the meeting, or a shorter period due to extenuating circumstances, prior to the meeting.',
      '4.3 The Company Secretary shall also be responsible for keeping the minutes of meetings of the BAC and circulating them to the BAC members.',
    ],
  },
  {
    id: 'meetings',
    title: '5. Meetings',
    lines: [
      '5.1 The BAC shall meet at least five (5) times in a financial year. Additional meetings may be called at any time if so requested by any BAC member, the Management, internal auditors or external auditors.',
      '5.2 The quorum for each BAC meeting shall be three (3) persons, with the majority comprised of independent directors. In any event, majority of independent directors must be present to form a quorum.',
      '5.3 The BAC may regulate its own procedure, in particular in the conduct of the BAC meeting, including attendance at a meeting in person or by participating in the meeting by video or teleconference.',
      '5.4 Members of the BAC who participate in a meeting of the BAC by teleconference or any communication equipment shall be deemed to be present in person at the meeting and shall be entitled to vote or be counted in a quorum accordingly.',
      '5.5 The BAC should record its deliberations, in terms of the issues discussed, and the conclusion in discharging its duties and responsibilities, with the minutes kept and distributed to each member of the BAC and of the Board. The Chairman of the BAC shall provide the Board with a report of the BAC meetings at the next appropriate Board meeting.',
    ],
  },
  {
    id: 'circular-resolution',
    title: '6. Circular Resolution',
    lines: [
      '6.1 A circular resolution in writing (if only deemed necessary by the BAC Chairman) shall be valid and effectual if it is approved and signed by ALL members of the BAC as if it had been passed at a meeting of the BAC. All such resolutions shall be described as Audit Committee Members’ Circular Resolution(s).',
      '6.2 Any discussions, including any concerns raised and the rationale for the decisions so made, in the resolution, shall be tabled at the BAC meeting taking place immediately after the passing of the resolution, for a formal record keeping of the same.',
      '6.3 Any such resolution may consist of several documents in like form, each signed by one or more BAC members.',
    ],
  },
  {
    id: 'rights',
    title: '7. Rights and Authorities',
    lines: [
      '7.1 The BAC shall have the following rights in carrying out its duties and responsibilities:',
      '> (a) Explicit authority to investigate any matter within its TOR;',
      '> (b) Access to the resources which are required to perform its duties;',
      '> (c) Full, free and unrestricted access to any information, records, properties and personnel of the Group;',
      '> (d) Direct communication channels with the external auditors and internal auditors;',
      '> (e) Right to meet and discuss with the internal auditors without the attendance of other directors and/or employees of BOG, whenever deemed necessary;',
      '> (f) Right to meet and discuss with the external auditors at least twice a year without the attendance of other directors and/or employees of BOG, whenever deemed necessary;',
      '> (g) Upon request of the external auditors, convene a meeting of the BAC to consider any matter the external auditors believe should be brought to the attention of the directors or shareholders;',
      '> (h) Obtain independent professional or other advice and to invite external parties with relevant experience to attend the BAC meetings (if required) and to brief the BAC thereof;',
      '> (i) Authority to invite other directors and/or employees of the Group to attend BAC meetings specific to the relevant agenda;',
      '> (j) Immediate access to reports on findings and recommendations from the Group Internal Audit (“GIA”) in respect of any fraud or irregularities discovered and referred to GIA by the Management;',
      '> (k) Immediate access to reports on findings and recommendations from Group Integrity and Governance in respect of any investigation pertaining to whistleblowing allegations reported via the BOG whistleblowing channel or any other channels;',
      '> (l) To intervene whenever the Management or members of the Board are implicated in a possible fraud, illegal act or violation of the code of conduct; and',
      '> (m) To promptly report to Bursa Securities where a matter reported by the BAC to the Board has not been satisfactorily resolved resulting in a breach of the Listing Requirements.',
    ],
  },
  {
    id: 'duties',
    title: '8. Duties and Responsibilities',
    lines: [
      '8.1 The duties and responsibilities of the BAC shall be:',
      '## (a) Assessing the Control Environment',
      '> (i) determine whether the Management has implemented policies ensuring that controls in place are adequate, and functioning properly to address the risks;',
      '> (ii) determine the adequacy and effectiveness of risk management framework and its implementation; and',
      '> (iii) review the adequacy and integrity of the Group’s internal control systems and management information systems, including systems for compliance with the applicable laws, rules, directives and guidelines.',
      '## (b) Overseeing Financial Reporting',
      'BAC to review the quarterly results and year end financial statements, before approval by the Board, focusing particularly on:',
      '> (i) changes in or implementation of accounting policies and practices;',
      '> (ii) significant and unusual events;',
      '> (iii) significant adjustments arising from audit;',
      '> (iv) the going concern assumption; and',
      '> (v) compliance with accounting standards and other legal requirements.',
      '## (c) Discussing the following with the external auditors',
      '> (i) their audit plan and scope of audit;',
      '> (ii) their evaluation of the system of internal controls and management information system;',
      '> (iii) their audit report and the Management’s response including problems and reservations arising from their interim or final audits and any other matter the auditors may wish to discuss without the presence of the Management, where necessary;',
      '> (iv) the assistance given by the employees to the external auditors; and',
      '> (v) the coordination where more than one audit firm is involved.',
      '## (d) External Auditors',
      'BAC will be governed by a set of policy and procedure to assess the suitability, objectivity and independence of external auditors that, amongst others:',
      '> (i) to consider the appointment and re-appointment of the external auditors, the appropriateness of audit fees to support a quality audit and any questions of resignation and dismissal before making recommendation to the Board;',
      '> (ii) to approve the extent of non-audit work to be performed by the external auditors to ensure that the provision of non-audit services does not impair their independence and objectivity and appropriateness of the level of fees and to avoid situations where the external auditors inadvertently assume the responsibilities of Management in the course of providing non-audit services;',
      '> (iii) to obtain written assurance from the external auditors confirming that they are, and have been, independent throughout the conduct of the audit engagement in accordance with the terms of all relevant professional and regulatory requirements; and',
      '> (iv) to perform annual evaluation on the performance of the external auditors in terms of their:',
      '- competencies, audit quality and resource capacity of the external auditor in relation to the audit; and',
      '- governance and leadership structure as well as measures undertaken by the external auditors to uphold audit quality and manage risks including matters covered in transparency reporting or any other reporting requirements under any relevant oversight Board or regulatory bodies.',
      '## (e) Group Internal Audit (“GIA”)',
      '> (i) Review and approve the GIA Charter, which defines the independence, purpose, authority, scope and responsibility of the internal audit function in the Group;',
      '> (ii) Review the adequacy of the scope, functions, competency and resources of the internal audit function, and ensure it has the necessary authority to carry out its work;',
      '> (iii) Review GIA’s Annual Audit Plan;',
      '> (iv) Review the results of the internal audit work or investigation undertaken and where necessary ensure that appropriate actions are taken on the recommendations of the internal audit function;',
      '> (v) The reports of GIA should include management commentary prior to submission to the BAC;',
      '> (vi) The annual performance review of the Group Chief Internal Auditor (“GCIA”) should be decided by the BAC;',
      '> (vii) Be informed, referred to and agree on the initiation, commencement and mechanism of any disciplinary proceedings or investigations, including the nature and reasons for the said disciplinary proceedings or investigations, as well as the subsequent findings and proposed disciplinary actions against the GCIA and senior staff members of GIA. As employees of BOG, GCIA and senior staff members of GIA are subject to BOG’s human resource policies and procedures, including disciplinary proceedings or investigations and actions;',
      '> (viii) Review the assistance and co-operation given by the employees of the Group to the internal auditors. The GIA function should be independent of the activities they audit and should be performed with impartiality, proficiency and due professional care. The BOG Board or the BAC should determine the merit of the internal audit function;',
      '> (ix) Take cognizance of resignations of GIA members and provide the resigning staff member an opportunity to submit his reasons for resigning; and',
      '> (x) Recommend to the Board, the appointment and / or dismissal (including termination and removal) of the GCIA, in consultation with the Group Chief Executive Officer of the Company.',
      '## (f) Group Integrity and Governance (“GIG”)',
      '> (i) Review and approve the GIG Charter which defines independence, purpose, authority, scope and responsibilities of its function;',
      '> (ii) Review GIG’s core functions, its competency and resources of its function, and ensure it has the necessary authority to carry out its work;',
      '> (iii) Review GIG’s update on complaints and ensuing investigation on whistleblowing cases, and where necessary ensure that appropriate actions are taken on the recommendations by GIG;',
      '> (iv) Review BAC papers, policy matters and/or initiatives by GIG, ensuring that they are supported by the GCEO’s recommendations prior to deliberation by the BAC;',
      '> (v) Review the annual performance of the Group Chief Integrity & Governance Officer (“GCIG”);',
      '> (vi) Be informed of, review and decide on the initiation, conduct and approach of any disciplinary proceedings or investigations involving the GCIG and senior staff of GIG, including the nature and basis of such proceedings, as well as the findings and proposed disciplinary actions. Such matters shall remain subject to BOG’s human resource policies and procedures;',
      '> (vii) Review the assistance and co-operation given by the employees of the Group to the GIG. The GIG function should be independent of the activities they investigate, and such investigations should be conducted in a fair manner and without any presumption of guilt;',
      '> (viii) Take cognizance of resignations of GIG members and provide the resigning staff member an opportunity to submit his reasons for resigning; and',
      '> (ix) Recommend to the Board, the appointment and / or dismissal (including termination and removal) of the GCIG, in consultation with the Group Chief Executive Officer of the Company.',
      '## (g) Reviewing Conflict of Interest Situations and Related Party Transactions (“RPTs”)',
      '> (i) Ensure that Management establishes adequate processes and procedures to monitor, track and identify RPTs. Such a framework should be able to provide sufficient assurance that RPTs and conflict of interest situations, including recurrent related party transactions, are identified, evaluated, presented for review and approval and reported, where required.',
      '> (ii) Review conflict of interest situations or RPTs and determine the following:',
      '>> (a) whether the transaction is in the best interest of BOG;',
      '>> (b) whether the transaction is fair, reasonable and on normal commercial terms; and',
      '>> (c) that the transaction is not detrimental to the interest of minority shareholders.',
      '## (h) Sustainability',
      'To perform the following in relation to sustainability:',
      '> (i) Ensure consistency and connectivity of sustainability related disclosures across financial reporting and other public disclosures;',
      '> (ii) Ensure the internal audit function has adequately incorporated sustainability into its audit plan; and',
      '> (iii) Review the results of assurance of the Sustainability Statement and approve the Statement of Assurance which forms part of the Sustainability Statement.',
      '## (i) Other Matters',
      '> (i) To assess the adequacy and effectiveness of the system of internal control, risk management, anti-corruption, whistleblowing and governance processes of the Group;',
      '> (ii) To report to the Board its activities, significant results and findings;',
      '> (iii) To seek continuing professional education to keep abreast of developments not only in the area of financial reporting but also in regulatory compliance, technology, business risks and the implications of significant changes that may affect the Group;',
      '> (iv) To keep abreast of the latest corporate governance guidelines in relation to the BAC and the Board as a whole; and',
      '> (v) To consider other subject matter as defined appropriate or as defined by the Board.',
    ],
  },
  {
    id: 'review',
    title: '9. Review of BAC',
    lines: [
      'The Board Nomination and Remuneration Committee must review the term of office and performance of the BAC and each of its members annually to determine whether the BAC and members have carried out their duties in accordance with their terms of reference.',
    ],
  },
  {
    id: 'amendment',
    title: '10. Amendment of the Terms of Reference',
    lines: [
      'Any amendment to the TOR of the BAC, as proposed by the BAC or any other third party, shall first be presented to the Board for approval. Upon the Board’s approval, the said amendment shall form part of the TOR of the BAC, of which shall be considered duly amended.',
    ],
  },
  {
    id: 'publication',
    title: '11. Publication of Terms of Reference',
    lines: [
      'The TOR of the BAC shall be made available on BOG’s website.',
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
export default function BoardAuditCommittee() {
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
              Terms of Reference for Board Audit Committee
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