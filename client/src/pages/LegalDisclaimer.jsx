import { Link } from 'react-router-dom';
import { company } from '../data/company';

/* ---------- Content ---------- */
const HERO_IMAGE = '/images/sea.jpg';
const N = company.shortName; // Bizworth Oil & Gas

const paragraphs = [
  `The contents of these pages are copyright © ${company.name} ${company.year}. You may download to a local hard disk and print extracts from this for your personal use. You may also re-copy downloaded extracts to others provided you do not do so for profit.`,
  'However, reproduction of part or all of the contents in any form is prohibited unless for personal use. None of the content of this web page may be copied or otherwise incorporated into or stored in any other website, electronic retrieval system, publication or other work in any form (whether hard copy, electronic or other). For the avoidance of doubt, framing of this site or any part of it is not permitted without express permission.',
  'Notwithstanding the above, caching of this site is permitted by an information service provider acting in the normal course of its business.',
  'ENQUIRIES',
  `${N} will use reasonable efforts to include up-to-date and accurate information in this website, but makes no representations, warranties, or assurances as to the accuracy, currency or completeness of the information provided. ${N} shall not be liable for any damages or injury resulting from your access to, or inability to access, this website, or from your reliance on any information provided at this website.`,
  `Please note that the documents and information available on this website are provided as a service only and are not the official versions of ${N}’s disclosure documents as required by any applicable securities, financial services, company law or any other legal requirements. In addition, website content may not always be the most current source for company information.`,
  'Internet software or transmission problems could produce inaccurate or incomplete copies of various documents when downloaded and displayed on a user’s computer.',
  'The information and documents available on this website are not intended to provide specific legal, accounting, investment/financial or tax advice to any user.',
  `This website may provide links or references to other sites. ${N} makes no representations, warranties or assurances as to any information in such sites and has no responsibility for their content, accuracy, currency or completeness and shall not be liable for any damages or injury arising from that content, accuracy, currency or completeness. Any links to other sites are provided merely as a convenience to the users of this website.`,
  `Any communications you send to this website or otherwise to ${N} by electronic mail are on a non-confidential basis, and ${N} is under no obligation to refrain from reproducing, publishing or otherwise using them in any way or for any purpose. ${N} shall be free to use the content of any such communication, including any ideas, inventions, concepts, techniques or know-how disclosed therein, for any purpose including developing, manufacturing and/or marketing goods and services.`,
  `The sender of communications to this website or otherwise to ${N} shall be responsible for the content and information contained therein, including its truthfulness and accuracy.`,
  `This website is provided as a service to its visitors. ${N} reserves the right to delete, modify or supplement the content of this site at any time for any reason without notification to anyone.`,
];

/* ---------- Page ---------- */
export default function LegalDisclaimer() {
  return (
    <>
      {/* Hero + title band */}
      <section
        className="relative flex min-h-[300px] flex-col justify-end md:min-h-[380px]"
        style={{ background: `url(${HERO_IMAGE}) center/cover no-repeat, linear-gradient(135deg, #6fa3d8 0%, #2e27c3 100%)` }}
      >
        <div className="bg-brand-blue/75">
          <div className="container-site py-9">
            <h1 className="font-heading text-[32px] font-extrabold leading-[1.1] text-brand-cyan md:text-[42px]">Legal Disclaimer</h1>
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

          <div className="mt-12 max-w-[1000px] space-y-6 text-[17px] leading-[1.6] text-brand-ink">
            {paragraphs.map((p) =>
              p === 'ENQUIRIES' ? (
                <p key={p}>
                  Any enquiries should be directed to us through our{' '}
                  <Link to="/contact-us" className="font-semibold text-brand-blue hover:underline">
                    Contact Us
                  </Link>{' '}
                  page.
                </p>
              ) : (
                <p key={p.slice(0, 30)}>{p}</p>
              )
            )}
          </div>
        </div>
      </section>
    </>
  );
}