import ContactInfo from '../sections/contact/ContactInfo';
import ContactForm from '../sections/contact/ContactForm';

/* ---------- Image (in /public/images) ---------- */
const HERO_IMAGE = '/images/seap.jpg';

export default function ContactUs() {
  return (
    <>
      {/* Hero + title band */}
      <section
        className="relative flex min-h-[340px] flex-col justify-end md:min-h-[420px]"
        style={{ background: `url(${HERO_IMAGE}) center/cover no-repeat, linear-gradient(135deg, #6fa3d8 0%, #2e27c3 100%)` }}
      >
        <div className="bg-brand-blue/75">
          <div className="container-site py-9">
            <h1 className="font-heading text-[32px] font-extrabold leading-[1.1] text-brand-cyan md:text-[42px]">Contact Us</h1>
          </div>
        </div>
      </section>

      <section className="bg-white py-14 md:py-20">
        <div className="container-site grid gap-10 lg:grid-cols-[1fr_1.4fr]">
          <ContactInfo />
          <ContactForm />
        </div>
      </section>
    </>
  );
}