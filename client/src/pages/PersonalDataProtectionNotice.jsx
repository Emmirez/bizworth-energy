import { Link } from 'react-router-dom';
import { company } from '../data/company';

/* ---------- Content ---------- */
const HERO_IMAGE = '/images/workers.jpg';
const LAST_UPDATED = '02 Oct 2026';
const NAME = company.name; // Bizworth Oil & Gas Sdn. Bhd.
const SHORT = company.shortName; // Bizworth Oil & Gas

const purposes = [
  'to communicate with you;',
  'to respond to your inquiries;',
  'internal record keeping and activities;',
  'to provide services to you;',
  'to improve our services;',
  'to customize this website according to your interests;',
  'to assess your job application;',
  'to better understand your needs as our customer;',
  'for security and fraud prevention purposes;',
  'for the purposes of statistical analysis of data;',
  'for profiling your preferences;',
  'for finance and marketing activities;',
  'for the purposes of our corporate governance;',
  'for the purposes of our corporate exercises;',
  'for the purposes of complying with the Companies Act 2016;',
  'internal investigations, compliance, audit or security purposes including, without limitation, crime detection, prevention and prosecution.',
];

const sections = [
  {
    title: '1. Statement',
    body: [
      `The Personal Data Protection Act 2010 (“the Act”) is an Act that is passed by the Malaysian government to regulate the processing of personal data in a commercial transaction. To comply with the Act, ${NAME} (“we” or “us” or “our”) are required to manage the personal data that we collect from you.`,
      `${SHORT} respects your privacy and does not sell, rent or loan any identifiable information collected on this site. Any information that you give will be treated in a careful and secure manner. It will not be used in ways to which you have not consented.`,
      'This statement explains how we may collect and use information about you through our website.',
      `By voluntarily providing us with your personal information such as your name, e-mail address, telephone number and address (“Personal Information”), you are consenting to our use of it in accordance with this Policy. If you provide Personal Information, you acknowledge and agree that such Personal Information may be transferred from your current location to the offices and servers of ${NAME} and shall be used by us for business purposes only.`,
    ],
  },
  {
    title: '2. Information We Get From Your Use of Our Website',
    body: [
      'When you interact with us through our website, we may automatically collect or receive and store certain personally non-identifiable information such as the type of internet browsers you use or the website from which you linked to this website. Such information is collected passively using various technologies and cannot presently be used to specifically identify you and it is only used to assist us in providing an effective service on this website. We may from time to time supply third parties with this non-personal data for uses in connection with this website.',
    ],
  },
  { title: '3. Use of Your Personal Information', purposes: true },
  {
    title: '4. Processing of Personal Data',
    body: [
      `${SHORT} is a global operation, but its businesses are managed through companies located in various regions. When you provide information to ${SHORT}, your Personal Information may be transferred to locations outside Malaysia or disclosed to any member of the ${SHORT} group of companies, business partners and/or service providers, who may be located within or outside Malaysia. We will ensure that any ${SHORT} operation complies in all respects with local legislation and applies the same global standards with regard to the security of the data.`,
      'Apart from the Purposes, we will not use your Personal Information for other purposes unless with your consent or where we are legally entitled or required to do so or if we believe that such action is necessary to protect and/or defend our rights, property or personal safety of those of our users or customers or other individual.',
    ],
  },
  {
    title: '5. Disclosure of Your Personal Information',
    body: [
      `Please be informed that your personal data may be disclosed, disseminated and/or transferred to companies within ${SHORT} (including the holding company, subsidiaries, associated, related and affiliated companies as well as their subsidiaries, associated and affiliated companies, both local and international), whether present or future (collectively, “the Group”) or to any third party organizations or persons for the purpose of fulfilling our obligations to you in respect of the Purposes and all such other purposes that are related to the Purposes and also in providing integrated services, maintaining and storing records.`,
      'To this end, we are committed in ensuring the confidentiality, protection, security and accuracy of your personal data made available to us. It is your obligation to ensure that all personal data submitted to us and retained by us are accurate, not misleading, updated and complete in all aspects. For the avoidance of doubt, we and/or the Group and/or its employees or authorized officers or agents will not be responsible for any personal data submitted by you to us that is inaccurate, misleading, incomplete and not updated.',
      'Further, we may request your assistance to procure the consent of third parties whose personal data is made available by you to us and you hereby agree to use your best endeavours to do so.',
    ],
  },
  {
    title: '6. Personal Data Retention Period',
    body: [
      'We will store your personal data for no longer than is necessary for the purposes for which it was collected or provided to us (unless a legal or insurance obligation requires us to keep it for longer period such as operational, legal, regulatory, tax or accounting requirements). Any personal data retained by us shall be destroyed and/or deleted from our records and system in accordance with our retention policy in the event such data is no longer required for the said Purposes.',
    ],
  },
  { title: '7. Your Rights to Personal Data', rights: true },
  {
    title: '8. Cookies',
    body: [
      'Cookies are text files that are placed in your computer or device to identify your computer or device to our server. Generally, cookies themselves only record those areas of the site that have been visited by the computer or device in question, and the duration. Many websites do this whenever a user visits their site in order to track traffic flow.',
      'We use “cookies” to store and track information about you and your use of our website.',
      'Our cookie and information retrieved from our cookie is used in line with the uses set out in this Policy.',
      'Most cookies are “session cookies,” meaning that they are automatically deleted from your computer or device at the end of a session. You are always free to decline cookies if your computer or device permits, however, if you reject the use of cookies you will still be able to visit our website but some of the functions may not work correctly.',
    ],
  },
  {
    title: '9. Changes to This Privacy Notice',
    body: [
      'Our Personal Data Protection Policy may change from time to time. As a result, at times it may be necessary for us to make changes to this Privacy Notice. We reserve the right to update, revise or modify this Privacy Notice at any time and from time to time without prior notice. Please review this Privacy Notice and especially before you provide us any of your Personal Information. This Policy was last updated on the date indicated above.',
      'We trust that you will consent to the processing of your personal data and that you declare that you have read, understood and accepted the statements and terms herein.',
    ],
  },
];

/* ---------- Page ---------- */
export default function PersonalDataProtectionNotice() {
  return (
    <>
      <section
        className="relative flex min-h-[300px] flex-col justify-end md:min-h-[380px]"
        style={{ background: `url(${HERO_IMAGE}) center/cover no-repeat, linear-gradient(135deg, #b5541f 0%, #2e27c3 100%)` }}
      >
        <div className="bg-brand-blue/70">
          <div className="container-site py-9">
            <h1 className="font-heading text-[28px] font-extrabold uppercase leading-[1.1] text-brand-cyan md:text-[38px]">
              Personal Data Protection Notice
            </h1>
          </div>
        </div>
      </section>

      <section className="bg-white pb-16 pt-5">
        <div className="container-site">
          <Link
            to="/privacy-policy"
            className="inline-flex h-[54px] min-w-[226px] items-center justify-center border border-brand-deep bg-white px-8 font-heading text-[16px] font-bold text-brand-deep transition-colors hover:bg-brand-deep hover:text-white"
          >
            ← Back to Privacy Policy
          </Link>

          <div className="mt-10 max-w-[1000px] space-y-12 text-[17px] leading-[1.6] text-brand-ink">
            <p className="font-heading text-[14px] font-semibold uppercase tracking-wider text-brand-muted">
              This Personal Data Protection Notice was last updated on {LAST_UPDATED}.
            </p>

            {sections.map((s) => (
              <article key={s.title}>
                <h2 className="font-heading text-[22px] font-bold uppercase text-brand-ink md:text-[26px]">{s.title}</h2>
                <span className="mb-6 mt-4 block h-[2px] w-[66px] bg-brand-orange" />

                {s.body && (
                  <div className="space-y-5">
                    {s.body.map((p) => (
                      <p key={p.slice(0, 30)}>{p}</p>
                    ))}
                  </div>
                )}

                {s.purposes && (
                  <>
                    <p>The purposes for which your personal data may be used are, but not limited to:</p>
                    <ol className="mt-4 list-decimal space-y-1.5 pl-8">
                      {purposes.map((p) => (
                        <li key={p}>{p}</li>
                      ))}
                    </ol>
                    <p className="mt-4">(collectively “Purposes”)</p>
                  </>
                )}

                {s.rights && (
                  <p>
                    If you have any questions about our privacy policies, want to exercise your right to see a copy of the
                    information that we hold about you, or think that information we hold about you may need to be
                    corrected, please contact our data protection officer through our{' '}
                    <Link to="/contact-us" className="font-semibold text-brand-blue hover:underline">
                      Contact Us
                    </Link>{' '}
                    page or write to us at {company.address}
                  </p>
                )}
              </article>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}