import { Link } from 'react-router-dom';

/* ---------- Image (in /public/images) ---------- */
const HERO_IMAGE = '/images/workers.jpg';

/* ---------- Content ----------
   Line formats:
   '## text'  sub-heading      '- text'  bullet point
   '> text'   indented          '>> text' double indented
   anything else = normal paragraph  */
const sections = [
  {
    id: 'definitions',
    title: '1. Definitions and Interpretation',
    lines: [
      '1.1 In this Terms of Reference, where the context so admits the following expressions shall have the following meanings:',
      '“Board” means the Board of Directors of BOG.',
      '“BRSC” means the Board Risk and Sustainability Committee.',
      '“Company Secretary” means the Company Secretary of BOG.',
      '“BOG” or the “Company” means Bizworth Oil & Gas Sdn. Bhd.',
      '“HSE” means Health, Safety and Environment.',
      '“Independent Director” means an independent director as defined in Chapter 1 of the Listing Requirements.',
      '“Listing Requirements” means the Main Market Listing Requirements of Bursa Malaysia Securities Berhad, including any amendments made from time to time.',
      '“Member” means a member of the BRSC as appointed pursuant to this Terms of Reference.',
      '“Secretary” means the Secretary of the BRSC.',
      '“Terms of Reference” means the terms of reference of the BRSC.',
      '“HSE Risk” means the combination of the likelihood of an occurrence of a hazardous event or exposure(s) and the severity of injury or ill health or environmental impact.',
      '1.2 In this Terms of Reference, unless the context otherwise requires:',
      '> 1.2.1 words importing the masculine gender shall include the feminine, neuter genders and vice versa; and',
      '> 1.2.2 words importing the singular shall include the plural and vice versa.',
    ],
  },
  {
    id: 'objective',
    title: '2. Objective',
    lines: [
      'The principal objective of the BRSC is to assist the Board in discharging its roles and responsibilities. The Board strives to ensure that the principles of the Malaysian Code on Corporate Governance 2021 (including any amendments, revisions or any updates thereto) are adhered to by the Group in all aspects of its business dealings displaying integrity and transparency with the objective to safeguard the investments of shareholders and ultimately enhancing shareholder value.',
    ],
  },
  {
    id: 'composition',
    title: '3. Composition and Size',
    lines: [
      '3.1 The BRSC members shall be appointed by the Board from among its non-executive members and shall consist of no fewer than three (3) members, the majority of whom shall be Independent Directors.',
      '3.2 The BRSC members shall collectively possess the relevant experience to effectively discharge their responsibilities in overseeing the Company’s key risk and sustainability matters.',
      '3.3 The Board Chairman and Alternate Directors shall not serve as the Chairman or members of the BRSC.',
      '3.4 In the event that a vacancy in the BRSC results in non-compliance with this Terms of Reference or regulatory requirements, the Board shall fill the vacancy within three (3) months.',
    ],
  },
  {
    id: 'chairman',
    title: '4. Chairman',
    lines: [
      'The Chairman of the BRSC shall be elected by the members of the BRSC from amongst the BRSC members. The Chairman shall be a Non-Executive Director. Should the Chairman be absent from any meeting, one of the members shall be elected as Chairman by the BRSC members.',
      'All members of the BRSC, including the Chairman, shall only hold office so long as they serve as Directors of the Company.',
    ],
  },
  {
    id: 'secretary',
    title: '5. Secretary',
    lines: [
      '5.1 The Company Secretary or other appropriate senior officer of BOG shall act as the Secretary of the BRSC and shall be responsible, with the advice of the Chairman, for drawing up the agenda and circulating it to all members of the BRSC at least three (3) working days prior to the meeting. Consent from all members of the BRSC shall be obtained for any meetings of BRSC called shorter than the notice period.',
      '5.2 Meeting papers and relevant information on the agenda items shall be circulated at least three (3) days before the meeting, or a shorter period due to extenuating circumstances, prior to the meeting.',
      '5.3 The Company Secretary shall also be responsible for keeping the minutes of meetings of the BRSC and circulating them to the BRSC members.',
    ],
  },
  {
    id: 'meetings',
    title: '6. Meetings',
    lines: [
      '6.1 The BRSC may meet together for the despatch of business, adjourn and otherwise regulate the meetings quarterly or more frequent as deemed necessary. The Chairman of the BRSC or any other members of the BRSC may call for additional meetings at any time by giving at least three (3) days prior notice unless consent for shorter notice is obtained from all members.',
      '6.2 The quorum for all meetings of the BRSC shall not be less than two (2) members.',
      '6.3 The BRSC may regulate its own procedures, in particular the conduct of the BRSC meetings, including attendance at a meeting by being present in person or by participating in the meeting by means of video or teleconference.',
      '6.4 Members of the BRSC who participate in a meeting of the BRSC by means of a teleconference or any communication equipment shall be deemed to be present in person at the meeting and shall be entitled to vote and be counted in a quorum accordingly.',
      '6.5 The BRSC shall record its deliberations, in terms of the issues discussed, and the conclusions in discharging its duties and responsibilities, with the minutes kept and distributed to each member of the BRSC and of the Board. The Chairman of the BRSC shall provide the Board with a report of the BRSC meetings, at the next Board meeting after the conclusion of each BRSC meeting. The books containing minutes of proceedings of any meetings of the BRSC shall be kept by the Company at the registered office of the Company and shall be opened for inspection to any member of the BRSC or the Board.',
    ],
  },
  {
    id: 'circular-resolution',
    title: '7. Circular Resolution',
    lines: [
      '7.1 A circular resolution in writing (if only deemed necessary by Chairman of the BRSC) shall be valid and effectual if it is approved and signed by a majority of members of the BRSC as if it had been passed at a meeting of the BRSC. All such resolutions shall be described as “Board Risk and Sustainability Committee Members Circular Resolution/(s)”.',
      '7.2 Any discussion, including any concern raised and the rationale for the decisions so made, in the resolution, shall be tabled at the BRSC meeting taking place immediately after the passing of the resolution, for notation.',
      '7.3 Any such resolution may consist of several documents in like form, each signed by one or more BRSC members.',
    ],
  },
  {
    id: 'rights',
    title: '8. Rights and Authorities',
    lines: [
      'In carrying out its duties and responsibilities, the BRSC shall:',
      '> (a) have explicit authority to investigate any matter within its terms of reference;',
      '> (b) have the resources which it needs to perform its duties;',
      '> (c) have full, free and unrestricted access to any information, records, properties and personnel of the Group which it requires in the course of performing its duties;',
      '> (d) be able to obtain independent professional or other advice in the performance of its duties at the cost of the Company; and',
      '> (e) be able to invite outsiders with relevant experience to attend its meetings if necessary.',
    ],
  },
  {
    id: 'duties',
    title: '9. Duties and Responsibilities',
    lines: [
      '9.1 The Board delegates to BRSC which shall assume the following responsibilities:',
      '> 9.1.1 oversee the assessment of processes relating to the Company’s risk and controls to ensure the effectiveness of the Group’s Risk Management and HSE practices;',
      '> 9.1.2 provide oversight on sustainability strategies, issues, communication plan and decisions involving the Group in compliance with the relevant standards, governance and regulatory requirements; and',
      '> 9.1.3 to approve the appointment of the Chief Risk Officer.',
      '## Risk Management and HSE',
      'The BRSC shall determine that Management has implemented policies in ensuring that the Group’s risks are identified and evaluated and that the control measures which are in place are adequate and properly functioning in addressing the risks.',
      'During the risk assessment process, the following shall be considered:',
      '- the principal risks and the process of identification, evaluation and management of the principal risks;',
      '- the effectiveness of internal control systems deployed by Management to address those risks;',
      '- corrective and mitigation measures undertaken to remedy failures and/or weaknesses;',
      '- further requirements for extensive monitoring;',
      '- ability of the Group to meet changes in significant risks and respond to constant changes to the business and/or external environment;',
      '- scope and quality of Management’s on-going risks monitoring and the work of internal audit and other assurance service providers on the robustness of the risk management process;',
      '- communication and monitoring of risk assessment results to the Board; and',
      '- actual and potential impact of any failure/ weakness, particularly those related to financial performance/ conditions affecting the Group.',
      'The BRSC’s role in the oversight of risk management and review of the adequacy and integrity of the Group’s control environment includes ensuring that Management performs the following:',
      '- submission of periodical divisional risk updates to the BRSC;',
      '- providing the necessary information required to support the rating of each risk identified;',
      '- upholding a culture that emphasises integrity;',
      '- embedding a holistic risk management framework in all aspects of the Group’s activities;',
      '- applying the Board’s acceptable “risk appetite”, i.e. the extent of risk the Board is prepared to accept in achieving the Company’s objective;',
      '- evaluating the principal risks and ensuring these risks are appropriately communicated to Management;',
      '- establishing the risk management and risk mitigating strategies for the business in general;',
      '- conceiving and adopting a befitting scheme of delegation of Board responsibilities to committees;',
      '- ensuring timely and regular receipt of reports from Management on principal risks and that appropriate follow-up measures are implemented on timely basis;',
      '- adopting risk management as part of the Board’s own decision-making culture;',
      '- conducting quarterly review of HSE performance and risk issues raised by business divisions and monitoring progress of action plans implemented especially that of high probability or significant impact to business divisions and the Group;',
      '- ensuring compliance with applicable laws, standards and any other HSE requirements that are legally binding;',
      '- emphasising the need on conducting HSE due diligence in business decisions;',
      '- ensuring mechanisms are in place to enable Board of joint ventures not under the Group operational control, to formally monitor and assess HSE policy implementation and HSE performance in line with the Group HSE MS; and',
      '- influencing internal and external views on HSE.',
      'The BRSC shall remain focused on the Group’s principal risks and ensure the implementation of appropriate systems to identify and manage these risks that threaten the business. Whilst these risks may be strategic in nature, the BRSC shall ensure appropriate controls, encompassing those that are of operational and compliance in nature, are in place and working as intended.',
      'Care shall be exercised in the implementation of control measures. Unless it is deemed necessary, the implementation shall not require BRSC’s involvement but rather the BRSC shall be the navigator while the implementation process is to be handled by the Management.',
      '## Sustainability',
      'The BRSC shall carry out its duties and responsibilities in relation to sustainability as follows:',
      '- review and recommend to the Board sustainability strategies, priorities and targets;',
      '- review and recommend to the Board Environmental, Social and Governance (“ESG”) factors to be integrated into the Company’s investment decision making process;',
      '- identify and recommend to the Board a designated person within management, to provide dedicated focus to manage sustainability strategically, including the integration of sustainability considerations in the operations of the company;',
      '- ensure that appropriate action be taken to keep BRSC members and the Board abreast with and understanding the sustainability issues relevant to the Company and its business, including climate-related risks and opportunities;',
      '- receive reports and review sustainability strategies, priorities and targets as well as performance to be communicated to internal and external stakeholders; and',
      '- provide report to the Board on issues or decisions relating to sustainability.',
    ],
  },
  {
    id: 'management-endorsement',
    title: '10. Management Endorsement',
    lines: [
      'The Head of Division and Group Chief Risk Officer shall be required to endorse the risk registers prior to submission to the BRSC. This promotes the philosophy that it is the people who work in the area who should be involved in the planning, implementing and monitoring the controls in their areas of responsibility.',
    ],
  },
  {
    id: 'compliance-review',
    title: '11. Compliance Review',
    lines: [
      'The effectiveness of the controls may be reviewed by designated independent officers such as Risk Officers, HSE officers or Internal Auditors.',
    ],
  },
  {
    id: 'review',
    title: '12. Review of the BRSC',
    lines: [
      'The Board shall review the term of office and performance of BRSC and each of its members annually to determine whether the BRSC and the members have carried out their duties in accordance with their terms of reference.',
    ],
  },
  {
    id: 'amendments',
    title: '13. Amendments to the Terms of Reference',
    lines: [
      'Any amendment to the Terms of Reference of the BRSC, as proposed by the BRSC or any other third party, shall first be presented to the Board for approval. Upon the Board’s approval, the said amendment shall form part of the Terms of Reference of the BRSC, of which shall be considered duly amended.',
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
export default function BoardRiskCommittee() {
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
              Terms of Reference for Board Risk and Sustainability Committee
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