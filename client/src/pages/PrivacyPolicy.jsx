import { Link } from 'react-router-dom';
import { company } from '../data/company';

/* ---------- Image (in /public/images) ---------- */
const HERO_IMAGE = '/images/workers.jpg';
const NOTICE_LINK = '/privacy-policy/personal-data-protection-notice';

/* ---------- Content ---------- */
const sections = [
  {
    title: 'Personal Data Protection Notice (English)',
    paragraphs: [
      `The Personal Data Protection Act 2010 (“the Act”) is an Act that is passed by the Malaysian government to regulate the processing of personal data in commercial transactions. To comply with the Act, ${company.name} (“we” or “us” or “our”) are required to manage the personal data that we collect from you.`,
      `${company.shortName} respects your privacy and does not sell, rent or loan any identifiable information collected on this site. Any information that you give will be treated in a careful and secure manner. It will not be used in ways to which you have not consented.`,
      'This statement explains how we may collect and use information about you through our website.',
      `Please click below to read ${company.shortName}’s full Personal Data Protection Notice.`,
    ],
    button: 'Personal Data Protection Notice',
  },
  {
    title: 'Notis Perlindungan Data Peribadi (Bahasa Malaysia)',
    paragraphs: [
      `Akta Perlindungan Data Peribadi 2010 (“Akta”) ialah Akta yang telah diluluskan oleh kerajaan Malaysia untuk mengawal selia pemprosesan data peribadi dalam transaksi komersial. Untuk mematuhi Akta tersebut, ${company.name} (“kami”) dikehendaki menguruskan data peribadi yang kami kumpul daripada anda.`,
      `${company.shortName} menghormati privasi anda dan kami tidak menjual, menyewa atau meminjamkan sebarang maklumat yang dikenal pasti yang dikumpul di laman web ini. Sebarang maklumat yang anda berikan akan dikendalikan dengan cara yang berhati-hati dan selamat. Ia tidak akan digunakan dengan sebarang cara tanpa persetujuan anda.`,
      'Kenyataan ini menerangkan cara kami mengumpul dan menggunakan maklumat anda melalui tapak web kami.',
      `Sila klik di bawah untuk membaca Notis Perlindungan Data Peribadi penuh ${company.shortName}.`,
    ],
    button: 'Notis Perlindungan Data Peribadi',
  },
];

/* ---------- Page ---------- */
export default function PrivacyPolicy() {
  return (
    <>
      {/* Hero + title band */}
      <section
        className="relative flex min-h-[340px] flex-col justify-end md:min-h-[420px]"
        style={{ background: `url(${HERO_IMAGE}) center/cover no-repeat, linear-gradient(135deg, #b5541f 0%, #2e27c3 100%)` }}
      >
        <div className="bg-brand-blue/70">
          <div className="container-site py-9">
            <h1 className="font-heading text-[32px] font-extrabold leading-[1.1] text-brand-cyan md:text-[42px]">Privacy Policy</h1>
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

          <div className="mt-12 max-w-[1000px] space-y-16">
            {sections.map((s) => (
              <article key={s.title}>
                <h2 className="font-heading text-[28px] font-bold leading-[1.2] text-brand-ink md:text-[34px]">{s.title}</h2>
                <div className="mt-10 space-y-6 text-[17px] leading-[1.55] text-brand-ink">
                  {s.paragraphs.map((p) => (
                    <p key={p.slice(0, 30)}>{p}</p>
                  ))}
                </div>
                <Link
                  to={NOTICE_LINK}
                  className="mt-8 inline-flex h-[54px] items-center justify-center bg-brand-deep px-8 font-heading text-[16px] font-bold text-white transition-colors hover:bg-brand-blue"
                >
                  {s.button}
                </Link>
              </article>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}