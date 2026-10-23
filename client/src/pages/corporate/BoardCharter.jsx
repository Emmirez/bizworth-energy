import { Link } from 'react-router-dom';

/* ---------- Image (in /public/images) ---------- */
const HERO_IMAGE = '/images/S18_Drilling_1200px.jpg';

/* ---------- Content ----------
   Line formats:
   '## text'  sub-heading      '- text'  bullet point
   '> text'   indented          '>> text' double indented
   anything else = normal paragraph  */
const sections = [
  {
    id: 'preamble',
    title: '1. Preamble',
    lines: [
      'The continuous enhancement of corporate governance practices is pivotal towards realising the objectives of transparency, accountability, integrity, effective performance and value creation for Bizworth Oil & Gas Sdn. Bhd. and its subsidiaries, which are ultimately driven by the quest to harness investor interest and increase shareholder value. It is with the aim of enshrining the principles and best practices of corporate governance as promulgated by the Malaysian Code on Corporate Governance 2021 that this Board Charter is established.',
      'Whilst the Charter serves as a reference point for the activities of the Board of Directors and its Committees, it should not be construed as a blueprint for Board operations. Just as each organisation has its own corporate culture, the dynamics of the Board are unique. The dynamics may shift as the composition of the Board changes, and Directors of the Company should always be open to new opportunities and ready to confront new challenges brought about by the changes.',
      'This Charter is designed to provide guidance and clarity for Directors and Management with regard to the role of the Board and its Committees, the requirements of Directors in carrying out their stewardship role and in discharging their fiduciary duties towards the Company as well as the Board’s operating practices.',
    ],
  },
  {
    id: 'interpretation',
    title: '2. Interpretation',
    lines: [
      'In this Charter:',
      '“Act” means Companies Act 2016;',
      '“AGM” means Annual General Meeting;',
      '“Board” means the Board of Directors of BOG;',
      '“Bursa Securities” means Bursa Malaysia Securities Berhad;',
      '“Business” means the business of the Company and all its subsidiaries;',
      '“Chairman” means the Chairman of the Board and is used in a gender-neutral sense;',
      '“Charter” means the Board Charter of BOG;',
      '“Code” means the Malaysian Code on Corporate Governance 2021;',
      '“Company Secretary” means the secretary(ies) or the person(s) normally exercising the functions of a Company Secretary under Section 235 of the Companies Act 2016;',
      '“Group” means the Company and all its subsidiaries;',
      '“GCEO” means Group Chief Executive Officer;',
      '“Independent Director” is defined in accordance with Paragraph 1.01 and Practice Note 13 of the Bursa Securities Listing Requirements. An Independent Director is one who is independent of Management and free from any business or other relationship, which could interfere with the exercise of independent judgement or the ability to act in the best interest of the Company. Without limiting the generality of the foregoing, an Independent Director is one who:',
      '> (a) [deleted];',
      '> (b) is not, and has not been within the last 3 years, an officer (except as an independent Director) of the Company or any other related corporation of the Company. For this purpose, “officer” has the meaning given in Section 2 of the Act;',
      '> (c) is not a major shareholder of the Company or any related corporation of the Company;',
      '> (d) is not a family member of any executive Director, officer or major shareholder of the Company or any related corporation of the Company. For this purpose, “family member” means the spouse, parent, brother (and his spouse), sister (and her spouse), child, adopted child or step child (including their respective spouses);',
      '> (e) is not acting as a nominee or representative of any executive Director or major shareholder of the Company or any related corporation of the Company;',
      '> (f) has not been engaged as an adviser by the Company or any related corporation of the Company under such circumstances as prescribed by Bursa Securities or is not presently a partner, Director (except as an Independent Director) or major shareholder, as the case may be, of a firm or corporation which provides professional advisory services to the Company or any related corporation of the Company under such circumstances as prescribed by Bursa Securities; or',
      '> (g) has not engaged in any transaction with the Company or any related corporation of the Company under such circumstances as prescribed by Bursa Securities or is not presently a partner, Director or major shareholder, as the case may be, of a firm or corporation (other than subsidiaries of the applicant or listed issuer) which has engaged in any transaction with the Company or any related corporation of the Company under such circumstances as prescribed by Bursa Securities.',
      'In respect of paragraph (e) above, nominee means a person who has been designated to act for another in his or her place. It denotes a person who is accustomed, or is under an obligation, whether formal or informal, to act in accordance with the directions, instructions or wishes of another person.',
      'A nominee or representative of major shareholders who fulfils all requirements of the definition of “Independent Director” except for the said paragraph (e), may nevertheless be considered as an “Independent Director” if:',
      '> (a) the major shareholder’s aggregate shareholding in the Company or any related corporation of the Company, directly or indirectly, is not more than 15% of the issued and paid-up capital (excluding treasury shares) of the Company or any related corporation of the Company;',
      '> (b) the major shareholder is not deemed to be a promoter of the Company or any related corporation of the Company; and',
      '> (c) the major shareholder is either:',
      '>> (i) a statutory institution who is managing funds belonging to the general public; or',
      '>> (ii) an entity established as a collective investment scheme, such as closed-end funds, unit trusts or investment funds (but excluding investment holding companies).',
      'In relation to paragraph (f) above, it is prescribed that a person who is proposed to be or is an Independent Director is disqualified from being an Independent Director if he:',
      '> (a) had personally provided professional advisory services to the Company or any related corporation of the Company within the last 3 years; or',
      '> (b) is presently a partner, Director (except as an Independent Director) or major shareholder, as the case may be, of a firm or corporation (hereinafter referred to as “Entity”) which has provided professional advisory services to the Company or any related corporation of the Company within the last 3 years; and',
      'the consideration of which in aggregate exceeds 5% of the gross revenue on a consolidated basis (where applicable) of the Independent Director or the Entity or RM1 million, whichever is the higher.',
      'Where the Entity is a corporation, the computation of the gross revenue of the Entity shall be based on its annual audited financial statements for the last 3 financial years. Where the service is rendered by Independent Director personally or by an Entity other than a corporation, the computation of the gross revenue must be based on the income tax returns of the Independent Director or the Entity, as the case may be, submitted to the Inland Revenue Board for the last 3 years.',
      'In relation to paragraph (g), it is prescribed that the Independent Director is disqualified from being an Independent Director if he:',
      '> (a) had engaged personally in transactions with the Company or any related corporation of the Company (other than for board service as an independent Director) within the last 3 years; or',
      '> (b) is presently a partner, Director, a major shareholder, of an Entity (other than subsidiaries of the Company) which has engaged in transactions with the Company within the last 3 years; and',
      'the consideration of which in aggregate exceeds 5% of the gross revenue on a consolidated basis (where applicable) of the Independent Director or the Entity or RM1 million, whichever is the higher.',
      'Where the Entity is a corporation, the computation of the gross revenue of the Entity shall be based on its annual audited financial statements for the last 3 financial years. Where the service is rendered by the Independent Director personally or by an Entity other than a corporation, the computation of the gross revenue must be based on the income tax returns of the independent Director or the Entity, as the case may be, submitted to the Inland Revenue Board for the last 3 years.',
      'However, “transactions” as stated above shall exclude transactions:',
      '> (a) on normal commercial terms entered into between the Company or any related corporation of the Company, and the Independent Director or between the Company or any related corporation of the Company and an Entity where the Independent Director is also a Director, major shareholder or partner:',
      '>> (i) for personal use of the Independent Director; or',
      '>> (ii) for personal investment of the Independent Director but not for the purpose of carrying on a trade or business;',
      '> (b) on normal commercial terms entered into between the Company or any related corporation of the Company, and an Entity where the Independent Director is also a Director (and not a major shareholder) but is not involved in the said transactions;',
      '> (c) for the following goods and services, provided that they are sold or rendered based on a non-negotiable fixed price or rate, which is published or publicly quoted and the material terms including the prices or charges are applied consistently to all customers or classes of customers:',
      '>> (i) provision or usage of public utility services such as water, electricity and telecommunications and data, postal or courier services, services by licensed institutions as defined under the Financial Services Act 2013 (other than professional advisory services which are subject to the above paragraph), insurance, unit trusts, stockbroking services, public transport, education, medical services, provision or usage of tolled highways, hotel facilities and recreational services, provision or consumption of fuel on retail or food and beverage at eateries, provision or purchase of goods at retail outlets such as supermarkets, hypermarkets or departmental stores; and',
      '>> (ii) such other types of goods or services that may be prescribed by the Bursa Securities from time to time.',
      '“Listing Requirements” means Bursa Securities Main Market Listing Requirements;',
      '“Management” means the management personnel of the Company;',
      '“BOG” or the “Company” means Bizworth Oil & Gas Sdn. Bhd.;',
      '“BOG Group” or the “Group” means BOG and its group of companies;',
      '“Shareholders” means shareholders of the Company.',
    ],
  },
  {
    id: 'role-of-the-board',
    title: '3. Role of the Board',
    lines: [
      '3.1 The Board is responsible for the stewardship of BOG’s business and affairs on behalf of its shareholders with a view to enhance long term investor interest and shareholder value while taking into account the interests of other stakeholders and maintaining high standards of transparency, accountability and integrity, as well as keeping informed on the sustainability issues relevant to the company and its business, including climate-related risks and opportunities.',
      '3.2 The Board reserves a formal schedule of matters for its decision to ensure that the direction and control of the Company is firmly in its hands. These matters include:',
      '- strategic issues and planning, including performance reviews;',
      '- appointment of the GCEO and ensuring the top management team have the requisite skills, values, attitudes and energy essential to long term success;',
      '- acquisition and disposal of shares (quoted and unquoted), businesses, mergers and acquisitions;',
      '- material service expenditure;',
      '- financial performance report;',
      '- write-off of bad debts and assets; and',
      '- disposal of assets.',
      '3.3 The principal responsibilities of the Board are to:',
      '- appoint the GCEO;',
      '- review and adopt a strategic business development plan for the Group’s long-term direction, formulate business objectives and strategies including strategies that promote sustainability for the Group; and to ensure that it has adequate resources to meet its objectives and that it maintains an effective/sound risk management framework; to review and implement the Company’s internal control system; and to monitor its performance and ensure that it acts ethically and meets its responsibilities to shareholders and other stakeholders;',
      '- provide strategic oversight and direction on Environmental, Social, and Governance (ESG) matters;',
      '- oversee the conduct of the Group’s businesses and evaluate whether or not the businesses are being properly managed;',
      '- identify principal risks and ensure the implementation of appropriate systems to manage these risks;',
      '- implement succession planning, including appointing, training, fixing the compensation of and, where appropriate, replacing the GCEO and Non-Independent Executive Directors of the Company;',
      '- oversee the development and implementation of investor relations programme or shareholder communication policy for the Group;',
      '- review the adequacy and integrity of the Group’s internal control systems and management information systems, including systems for compliance with applicable laws, regulations, rules, directives and guidelines; and',
      '- oversee strategies relating to the health, safety and environment, and compliance with the relevant laws, rules and regulations. The Board also places emphasis on the formulation of strategies to promote sustainable development in areas covering economics, environment and social development.',
      '3.4 The day-to-day management of the Company shall be in the hands of the GCEO.',
    ],
  },
  {
    id: 'board-structure',
    title: '4. Board Structure',
    lines: [
      '## 4.1 Board balance and mix',
      '4.1.1 In line with the Code, the Board recognises the importance of independence and objectivity from Management in its decision-making process. At least half of the Board shall comprise independent non-executive Directors and shall disclose this on an annual basis in the Annual Report of the Company. Further, in line with Listing Requirements, at least one (1) woman Director shall be appointed on the Board.',
      '4.1.2 Whilst the Company’s Constitution stipulate a minimum of two (2) Directors, the Board is cognizant of the need to keep its size at a reasonable level vis-a-vis the needs of the Company in order to be effective. Accordingly, the Board shall, from time to time, examine its size with a view to determine the impact of its number upon its effectiveness and which fairly reflects the investment in the Company by shareholders other than the significant shareholder(s).',
      '4.1.3 The Board shall consider the need for its composition to reflect a range of skill mix, experience and expertise. High levels of professional skills, knowledge, expertise, experience and appropriate personal qualities are prerequisites for directorship in the Company. Without limiting the generality of the foregoing, the qualifications for Board memberships are the ability to make informed business decisions and recommendations, an entrepreneurial talent for contributing to the creation of shareholder value, relevant experience, the ability to appreciate the wider picture especially business trends, ability to ask probing operational related questions, possess high ethical standards, sound practical sense, and total commitment to furthering the interests of shareholders and the achievement of the Company’s goals.',
      '4.1.4 The Board shall have in place a clearly accepted division of power and responsibilities at the head of the Company to ensure a balance of power and authority. For this purpose, the positions of Chairman of the Board and the GCEO are to be held by different Directors of the Company.',
      '4.1.5 The Board identifies and appoints from amongst its members, a senior independent non-executive Director to whom the concerns of Directors and Shareholders of the Company may be conveyed. The name of the senior independent non-executive Director will be disclosed in the Annual Report of the Company.',
      '4.1.6 A person who is an active politician and has held a position with high political influence in the past two (2) years shall not be appointed, re-appointed, elected or re-elected or continue to serve as a Director of the Company. A person is considered an “active politician” if he/she is a Member of Parliament, State Assemblyman or holds a position at the Supreme Council or division level in a political party.',
      '## 4.2 Role of the Chairman',
      'The Chairman carries out a leadership role in the conduct of the Board and its relations to shareholders and other stakeholders. The Chairman of the Board shall not be a member of any BOG Board Committees.',
      'The Chairman is primarily responsible for:',
      '- representing the Board to shareholders;',
      '- ensuring the adequacy and integrity of the governance process;',
      '- maintaining regular dialogue with the GCEO over all operational matters and consulting with the remainder of the Board members promptly over any matter that give him cause for major concern;',
      '- functioning as a facilitator at meetings of the Board to ensure that no member, whether executive or non-executive, dominates the discussion; that appropriate discussions take place and that relevant opinions amongst members are forthcoming. The Chairman ensures that discussions result in logical and understandable outcomes;',
      '- ensuring that all Directors are enabled and encouraged to participate at Board meetings. This includes ensuring that all relevant issues are on the agenda and that all Directors receive timely and relevant information tailored to their needs and that they are properly briefed on issues arising at Board meetings;',
      '- ensuring that Management look beyond their executive functions and accept their full share of responsibilities on governance;',
      '- guiding and mediating Board actions with respect to organisational priorities and governance concerns;',
      '- undertaking the primary responsibility for organising information necessary for the Board to deal with items on the agenda and for providing this information to Directors on a timely basis; and',
      '- performing other responsibilities assigned by the Board from time to time.',
      '## 4.3 Roles of GCEO',
      '4.3.1 The Company is headed by the GCEO.',
      '4.3.2 The positions of GCEO in essence is to ensure the effective development and implementation of the Group’s strategic plan and policies reviewed and adopted by the Board as well as to manage the daily conduct of the business to ensure its smooth operations.',
      '4.3.3 The GCEO is accountable to the Board for the achievement of the Group’s goals and objectives and observance of Management’s limits.',
      '4.3.4 The common roles of GCEO, among others, are as follows:',
      '- planning, directing and controlling Management in the different aspects of the business operations, in so far as it relates to their respective portfolios, in a cost effective manner;',
      '- effectively represent the interest of the Company with stakeholders like major clients, potential clients, government and their agencies, investors, potential investors, and industries at large, to ensure general goodwill towards the Company and cooperation in planned development;',
      '- responsible for providing leadership and direction in the establishment, implementation and evaluation of Group-wide Health, Safety and Environmental management system resulting in a safe and secure environment for Group;',
      '- assures the Group that its corporate identity and services provided are of high standards and are reflective of market environment; and',
      '- assist the Chairman in compiling and organising information necessary for the Board to deal with the agenda and for providing this information to Directors on a timely basis.',
      '4.3.5 At each of its scheduled meetings, the Board should expect to receive from or through the GCEO:',
      '- summary reports, subject to the threshold set by the Board in the Limit of Authority, on the performance and activities of the Company and its subsidiaries and specific proposals for strategic investments, tender participation, capital expenditure, acquisitions and disposals;',
      '- strategic reviews of divisional performance in pursuit of the Company’s plans; and',
      '- give such assurances as the Board considers necessary to confirm that Management’s limits are being observed,',
      'under their respective portfolio.',
      '4.3.6 The GCEO is expected to act within all specific authorities and limits delegated to him by the Board.',
      '4.3.7 Generally, the GCEO is responsible to the Board for the following:',
      '- providing executive leadership and strategic role over management of the Group’s operations and certain support services functions directly linked to operations like Quality, Health, Safety and Environment Management (QHSE) and supply chain, covering, inter-alia, the development of a strategic plan, an annual operating plan and budget, performance benchmark against approved plans to gauge Management’s performance and the analysis of management reports, for each operating division and relevant support service function;',
      '- developing long term strategic and short term profit plans to promote sustainable development, designed to ensure that the Group’s requirements for growth, profitability and return on capital are achieved; and',
      '- oversee the human resource of the organisation with respect to key positions in the Group hierarchy and ensure the general well-being of employees, determination of remuneration as well as terms and conditions of employment for Senior Management and the issues pertaining to discipline of all employees.',
      '## 4.4 Role of Senior Independent Non-Executive Director',
      '4.4.1 Serve as a sounding Board to the Chairman;',
      '4.4.2 Serve as a designated contact for consultation and direct communication with shareholders on areas that cannot be resolved through normal channels of contact with the Chairman;',
      '4.4.3 Serve as the principal conduit between the Independent Non-Executive Directors (“INED”) and the Chairman on sensitive issues;',
      '4.4.4 Ensure all INEDs have the opportunity to provide input on agenda, and advise the Chairman on quality, quantity and timeliness of the information submitted by the management that is necessary or appropriate for the INEDs to perform their duties effectively;',
      '4.4.5 To ensure the effective implementation of the Company’s Whistleblowing Policy;',
      '4.4.6 To chair the Company’s Complaints Investigation Committee as identified in the Company’s Whistleblowing Policy.',
      '## 4.5 Role of the other Executive Directors (if applicable)',
      '4.5.1 The role and scope of responsibility of each Executive Director shall be as approved by the Board at each of their appointment.',
      '## 4.6 Role of Individual Directors',
      '4.6.1 Directors are expected to comply with the legal, statutory and equitable responsibilities when discharging their fiduciary duties as Directors. The duties of the Directors include:',
      '- acting in good faith and in the best interests of the Company;',
      '- acting with reasonable care, skill and diligence subject to the business judgement rule;',
      '- avoiding any conflict of interest with the Company in a personal or professional capacity, including improper use of the property, information, opportunity of the Company or position as a director;',
      '- compliance with the Act, the Listing Requirements and other relevant statutory requirements; and',
      '- devoting sufficient time to carry out his or her duties and to attend Board and Board Committee meetings, General Meetings and Directors’ continuous development programmes and trainings.',
      '## 4.7 Tenure of Directors',
      '4.7.1 Pursuant to the Company’s Constitution, all Directors must retire once at least every three (3) years but shall be eligible for re-election.',
      '4.7.2 The tenure of the GCEO (and Executive Directors, if applicable) is tied to their executive office.',
      '4.7.3 The tenure of an INED on the Board shall not exceed a cumulative period of nine (9) years, commencing from the date of their first appointment to the Board of BOG, regardless of any subsequent change from Independent Director to Non-Independent Director.',
      '4.7.4 The Board may from time to time establish limitation on tenure of Directors based on the prevailing guidelines, requirements and recommendations by the relevant authorities, bodies, laws, acts and/or any policy imposed by the major shareholders.',
      '## 4.8 Company Secretary',
      '4.8.1 The appointment and removal of Company Secretary is a matter for the Board as a whole. The Board recognises that the Company Secretary shall be suitably qualified and capable of carrying out the duties required of the post. On a periodic basis at least once annually, the Company Secretary’s performance shall be appraised by the Board.',
      '4.8.2 The Company Secretary shall provide unhindered advice and services for the Directors as and when the need arises, to enhance the effective functioning of the Board and to ensure regulatory compliance.',
      '4.8.3 Other responsibilities of the Company Secretary shall include:',
      '- ensuring that Board procedures (especially those enshrined in the Company’s Constitution) and applicable rules are observed;',
      '- maintaining records of the Board and ensure effective management of the organisation records;',
      '- preparing comprehensive minutes to document Board and shareholder meeting proceedings and ensure conclusions are accurately recorded; and',
      '- carrying out other functions as deemed appropriate by the Board from time to time.',
      '## 4.9 Board Committees',
      '4.9.1 The Board has the right to establish Committees from time to time in the discharge of its duties and responsibilities. Where a Committee is formed, specific terms of reference of the Committee shall be established in writing to cover matters such as the objective, composition, functions, roles and responsibilities of the Committee, including whether the Committee has the power to decide or to make recommendation to the Board on specific matters;',
      '4.9.2 A number of standing Committees with specific written terms of reference has been established as follows:',
      '> (a) Board Audit Committee (“BAC”)',
      '> The primary objective of the BAC is to assist the Board in fulfilling its fiduciary duties relating to corporate accounting and reporting practices of the Company and Group. In accordance with the Listing Requirements, the Board Nomination and Remuneration Committee (“BNRC”) shall review the terms of office and performance of the BAC and each of its members annually to determine whether the BAC has carried out its duties in accordance with its terms of reference.',
      '> (b) Board Nomination and Remuneration Committee (“BNRC”)',
      '> The primary objectives of BNRC are to address business continuity of the Company and the Group by having in place a succession plan for the Board, GCEO and Senior Management. The BNRC considers potential candidates and nominate suitable persons to be GCEO and to the Board as well as recommends the appointment of Board members and Board Committee members. The BNRC also assesses the performance of the Board members as a whole and as individuals as well as Board Committees on an on-going basis.',
      '> In addition, it is also responsible for recommending to the Board the remuneration and reward framework for GCEO, other Executive Directors (if applicable) and Senior Management to allow the Company to attract and retain its GCEO, Executive Directors and Senior Management giving due regard to the financial situation and performance of the Company. The BNRC will assess and recommend the remuneration packages of GCEO, Executive Directors (if applicable) and Non-Executive Directors of BOG, and to assist in reviewing and recommending the annual bonus payment rate and increment range to all employees of BOG and its subsidiaries based on the Group’s policy.',
      '> The BNRC will administer the Share Issuance Scheme, the Share Bonus Scheme and Executive Share Option Scheme in accordance with the By-Laws and the Guidelines, respectively.',
      '> (c) Board Risk and Sustainability Committee (“BRSC”)',
      '> The BRSC is tasked to assist the Board in ensuring that a sound system of risk management including Health, Safety and Environment (HSE) risk is maintained and to address and manage the Group’s key areas of risk within acceptable risk profile to increase the likelihood that the Group’s policies and business objectives will be achieved. The BRSC also assist the Board in overseeing sustainability strategies, issues, communication plan and decisions involving the Group in compliance with the relevant standards, governance and regulatory requirements.',
      '## 4.10 The Board’s Relationship with Shareholders and Stakeholders',
      '4.10.1 The Board shall maintain an effective communications policy that enables both the Board and Management to communicate effectively with shareholders, stakeholders and the general public.',
      '4.10.2 The Board shall regularly evaluate economic, political, social and legal issues and any other relevant external matters that may influence or affect the development of the business or the interest of Shareholders and, if thought appropriate, will take outside expert advice on these matters.',
      '4.10.3 The Board shall oversee the development and implementation of investor relations programme or Shareholder communication policy for the Company. The policy is to ensure that it effectively interprets the operations of the Company to the Shareholders. It shall also accommodate feedback from Shareholders, which should be taken into account in determining the Company’s business decisions.',
      '4.10.4 It is the role of the Board to ensure that the Annual General Meeting (“AGM”) and Extraordinary General Meetings (“EGM”) of the Company are conducted in an efficient manner and serve as a crucial mechanism in shareholder communications. This includes the supply of comprehensive and timely information to shareholders and the encouragement of active participation at the AGM and EGM. The Board shall focus its efforts on the following to enhance the value of the AGM and EGM:',
      '- ensure that each item of special business included in the notice is accompanied by a full explanation of the effects of the proposed resolution;',
      '- for re-election of Directors, ensure that the notice of meeting states which Directors are standing for election or re-election with a brief description to include matters such as age, relevant experience, list of directorships, date of appointment to the Board, details of participation in Board Committees and the fact that a particular Director is independent, if relevant;',
      '- ensure that the Chairman provides reasonable time for discussion at the meeting upon presentation of the Company’s operations in the financial year and future prospects of the Group. Where appropriate, the Chairman shall also undertake to provide the inquirer with a written response to any significant question which cannot be answered immediately; and',
      '- ensure that there is a channel of communication through the Company Secretary on feedback and queries from shareholders.',
    ],
  },
  {
    id: 'board-processes',
    title: '5. Board Processes',
    lines: [
      'The conduct of the Directors shall be consistent with their duties and responsibilities to the Company and, indirectly, to Shareholders. The Board will be disciplined in carrying out its role, with emphasis on strategic issues and policy.',
      '## 5.1 Board meetings',
      '5.1.1 Meetings shall be conducted at least on a quarterly basis. If additional meetings are to be convened, a Director may request for such a meeting to table matters of urgency, and the Company Secretary, upon the request of the Board Chairman or any one (1) Director with the agreement of the Chairman, shall convene a meeting. The Company Secretary shall prepare and distribute a timetable with outline agenda items for all required to attend the meetings.',
      '5.1.2 Directors shall use their best endeavours to attend Board meetings and to prepare thoroughly. Members are expected to participate fully, frankly and constructively in Board meetings, discussions and other activities and to bring the benefit of their particular knowledge, skills and abilities to the Board table.',
      '5.1.3 Directors who are unable to attend a meeting shall advise the Secretary accordingly.',
      '5.1.4 Board discussions shall be open and constructive, recognizing that genuinely-held differences of opinion can, in such circumstances, bring greater clarity and lead to better decisions. The Chairman shall, nevertheless, seek a consensus in the Board but may, where considered necessary, call for a majority vote. All discussions and their record will remain confidential unless there is a specific direction from the Board to the contrary, or such disclosure as required by law.',
      '5.1.5 Other officers of the Company may be invited to attend for particular items within their responsibility. The Board may also invite external parties such as auditors, solicitors and consultants when the need arises.',
      '## 5.2 Agenda',
      '5.2.1 The notice for a Board meeting shall be given in writing at least five (5) working days, or shorter notice, due to extenuating circumstances, prior to the meeting. The Chairman, in conjunction with the GCEO and the Company Secretary, shall undertake the primary responsibility for preparing the meeting agenda. The Agenda may be issued separately from the notice not less than three (3) working days prior to the meeting. In the event issues requiring the Board’s decision arise between meetings, such issues shall be resolved through circular resolution subsequent to discussions being held amongst the Board members, either via teleconference, videoconference, email, etc. in order for the Board as a whole to be apprised on such matters and obtain their view points before arriving at a decision. Such circular resolution in writing shall be valid and effectual if it is signed or approved by letter, telex, facsimile or telegram by all members of the Board and such discussions, including any concerns raised and the rationale for the decisions so made in the resolution shall be tabled at the immediate next Board meeting for formal record keeping.',
      '## 5.3 Meeting papers',
      '5.3.1 To allow sufficient time for Directors to review and understand the relevant agenda items, Board papers and relevant information on the agenda items shall be circulated at least three (3) working days prior to the meeting, or a shorter period due to extenuating circumstances, prior to the meeting. When there is a need to table a report, a brief summary of findings and/or recommendations shall be prepared.',
      '5.3.2 Minutes shall be prepared within ten (10) days following a Board meeting and shall be circulated in draft form to the Chairman. The draft minutes vetted by the Chairman shall be re-circulated with the Board papers in readiness for signing at the following meeting. The Board shall record its deliberations, in terms of issues discussed, and the conclusions reached in discharging its duties. If one or more Directors request for their opinion to be noted, the Company Secretary shall comply with the request.',
      '## 5.4 Access to information',
      '5.4.1 A record of submissions, papers and materials presented to the Board shall be maintained and held by the Company Secretary, together with minutes of meetings, and shall be accessible to the Directors upon request.',
      '5.4.2 All Directors (executive and non-executive) have the same right of access to information relevant to the furtherance of their duties and responsibilities as Directors of the Company.',
      '## 5.5 Independent professional advice',
      '5.5.1 The Board, as a whole, as well as any Director is entitled to obtain independent professional advice relating to the affairs of the Group or to his responsibilities as a Director.',
      '5.5.2 If a Director considers such advice necessary for the discharge of his duties and responsibilities as Director and for the benefit of the Company, such Director shall first discuss it with the Chairman and, having done so, shall be free to proceed, where appropriate.',
      '5.5.3 Subject to the prior approval of the Chairman, the cost of the advice shall be reimbursed by BOG but the Director concerned shall ensure, so far as it is practicable, that the cost is reasonable.',
      '## 5.6 Annual Board and Directors’ Assessment',
      '5.6.1 The Board, through the BNRC, shall conduct an annual assessment of the effectiveness of the Board and its Committees in compliance with applicable regulatory requirements. Where such assessment is not undertaken in any given year, the Board shall provide clear and appropriate justification for the omission.',
      '## 5.7 Directors’ Remuneration',
      '5.7.1 Directors’ remuneration is governed by a set of principles and guidelines applicable to the Company. In determining the amount of compensation to be paid to the Directors, the Board is guided by the market and industry practices and the skills, expertise and responsibilities of the Directors.',
      '## 5.8 Induction process and continuous development programmes and trainings',
      '5.8.1 The objective of the induction process is to facilitate Directors in their understanding of the Group, its culture and operations.',
      '5.8.2 The induction of Directors shall include (but is not limited to) the following:',
      '- time with other officers of the Company (in particular the Chairman, the Company Secretary and, if the Independent Director is a functional specialist, his counterpart);',
      '- furnishing of a copy of the previous Board minutes for at least the past six (6) months, the business/ strategic plan, pertinent management reports, profile of key competitors and significant reports by management consultants on areas of Board responsibilities;',
      '- visits to key sites (including overseas locations if such business units are integral and significant to the Group); and',
      '- an induction programme of about 1 to 2 days, focusing on the above key elements, and also presentations from various divisions within the Group on their strengths, weaknesses and aspirations.',
      '5.8.3 All Directors shall ensure that they keep abreast of regulatory changes, other developments and broad business trends. The Board, through the BNRC, shall evaluate the training needs of its Directors on a continuous basis and ensure all Directors have access to appropriate continuing professional development programme.',
      '## 5.9 Directors’ external commitments and conflict of interest',
      '5.9.1 The Company’s Constitution stipulate that a Director who is in any way, whether directly or indirectly, interested in a contract or proposed contract with the Company shall declare his interest in accordance with the provisions of the Act. The Director concerned shall not participate in deliberations and shall abstain himself from casting his vote in any matter arising therefrom, except for the circumstances provided under Article 112 of the Company’s Constitution.',
      '5.9.2 Should there be an actual, potential or perceived conflict of interest between the Company or a related corporation and a Director, or an associate of a Director as a spouse or other family members, the Director involved shall make full disclosure and act honestly in the best interest of the Company.',
      '5.9.3 An actual, potential or perceived conflict of interest shall not necessarily disqualify an individual Director from the Board provided that full disclosure of the interest has been made in good faith and with due honesty.',
      '5.9.4 For the purpose of the above-mentioned paragraphs, the Directors shall perform an annual self-declaration on independence (in respect of those who are independent non-executive Directors) and conflict of interest for the Company’s records.',
      '## 5.10 Other Board Appointments',
      '5.10.1 Any Director, while holding office, and subject always to the limitation on numbers of directorship as imposed by the Act or the Listing Requirements, is at liberty to accept other board appointments so long as the appointments are not in conflict with the interest of the Business and does not detrimentally affect the Director’s performance as a Board member.',
      '5.10.2 The Secretary should be informed once the new appointment takes place.',
      '## 5.11 Representation of the Company',
      '5.11.1 The Board looks to the Chairman, GCEO and selected Management to speak on behalf of BOG and to manage the communication of information to shareholders, investors, other stakeholders and the public in an orderly and effective manner while adhering, at all times, to relevant laws and regulatory requirements. The Board authorises the GCEO to be the official spokesperson for BOG.',
      '## 5.12 The Company’s Constitution and Management’s limits',
      '5.12.1 The Board operates pursuant to the powers conferred by the Company’s Constitution, including any changes thereof as approved by shareholders at General Meeting.',
      '5.12.2 Management is expected to act within all specific authorities delegated to it by the Board.',
      '5.12.3 Management is expected not to cause or permit any practice, activity or decision that is contrary to commonly accepted good business practices or the Company’s Code of Ethics and professional ethics.',
      '## 5.13 Indemnities and Insurance',
      '5.13.1 The Company shall provide Directors with, and will pay the premiums for, indemnity and insurance cover while acting in their capacities as Directors.',
      '## 5.14 Review of the Board Charter',
      '5.14.1 The Board Charter will be periodically reviewed by the Board and updated in accordance with the needs of the Company and any new regulations that may have impact on the discharge of the Board’s responsibilities.',
      '5.14.2 The Board Charter shall be made available on BOG’s website.',
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
export default function BoardCharter() {
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
            <h1 className="font-heading text-[32px] font-black uppercase leading-[1.1] text-white md:text-[42px]">
              Board Charter
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