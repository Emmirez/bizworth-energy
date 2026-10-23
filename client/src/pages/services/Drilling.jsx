import { Link } from 'react-router-dom';

/* ---------- Content ---------- */
const HERO_IMAGE = '/images/S18_Drilling_1200px.jpg';

const paragraphs = [
  'With more than five decades of experience in tender assist drilling operations, our drilling segment is the world’s leading tender rig owner and operator. We have the world’s largest fleet of tender assist drilling rigs.',
  'Headquartered in Malaysia with operations across the globe, the division comprises over 1,500 highly skilled and competent employees represented by over 25 nationalities. We are proud of our strong heritage which serves as the foundation for our continued innovation and drive to bring the best drilling solutions to our clients.',
  'Our journey in tender assist drilling began in Asia in the 1970s with Bizworth Tender Rigs. Since then, we have expanded our presence to Africa and the Americas and are consistently looking to venture into new international markets.',
  'As the pioneer in the tender drilling industry, our mission is to provide our partners with the safest operations, paired with sustainable technical solutions for the most efficient and cost-effective delivery for our clients’ development drilling programme.',
  'We continuously upgrade our assets in tandem with the latest technology to position ourselves at the cutting edge and thereby provide the best economic benefit to our clients. We are able to offer flexibility to operate in both shallow and deepwater as well as benign and harsh environments globally.',
  'Above all, we are a solutions provider, whether it’s overcoming technical challenges, pioneering a world first, or crafting new commercial models, we deliver innovative, forward-thinking solutions.',
];

/* ---------- Page ---------- */
export default function Drilling() {
  return (
    <>
      {/* Hero + title band */}
      <section
        className="relative flex min-h-[340px] flex-col justify-end md:min-h-[420px]"
        style={{
          background: `url(${HERO_IMAGE}) center/cover no-repeat, linear-gradient(180deg, #a9c6ec 0%, #3d5fc4 100%)`,
        }}
      >
        <div className="bg-brand-blue/80">
          <div className="container-site py-9">
            <h1 className="font-heading text-[32px] font-extrabold leading-[1.1] text-brand-cyan md:text-[42px]">Drilling</h1>
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="bg-white pb-16 pt-5">
        <div className="container-site">
          <div className="mx-auto max-w-[1000px]">
            <Link
              to="/contact-us"
              className="inline-flex h-[54px] min-w-[226px] items-center justify-center border border-brand-deep bg-white px-8 font-heading text-[16px] font-bold text-brand-deep transition-colors hover:bg-brand-deep hover:text-white"
            >
              Contact Us
            </Link>

            <div className="mt-14 space-y-6 text-[17px] leading-[1.6] text-brand-ink">
              {paragraphs.map((p) => (
                <p key={p.slice(0, 30)}>{p}</p>
              ))}
            </div>

            <div className="mt-10">
              <Link
                to="/assets/drilling"
                className="inline-flex h-[54px] min-w-[226px] items-center justify-center bg-brand-deep px-8 font-heading text-[16px] font-bold text-white transition-colors hover:bg-brand-blue"
              >
                View Our Rigs
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}