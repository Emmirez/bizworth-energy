/* ---------- Content ---------- */
// Replace each name with the real Bizworth director. Photos go in /public/images.
const directors = [
  { name: 'Tan Sri Dato\' Ahmad Faisal bin Abdul Rahman', role: 'Chairman,\nNon-Independent Non-Executive Director', image: '/images/men1.jpg' },
  { name: 'Dato\' Nurul Ain binti Hassan', role: 'Non-Independent Executive Director / Group Chief Executive Officer', image: '/images/woman1.jpg' },
  { name: 'Datuk Lim Chee Keong', role: 'Senior Independent Non-Executive Director', image: '/images/men2.jpg' },
  { name: 'Puan Siti Zubaidah binti Mohd Yusof', role: 'Independent Non-Executive Director', image: '/images/woman2.jpg' },
  { name: 'Dato\' Seri Ramesh a/l Krishnan', role: 'Non-Independent Non-Executive Director', image: '/images/men3.jpg' },
  { name: 'Dr. Tan Wei Ming', role: 'Independent Non-Executive Director', image: '/images/men4.jpg' },
  { name: 'Datin Farah Hanim binti Zulkifli', role: 'Independent Non-Executive Director', image: '/images/woman3.jpg' },
];

/* ---------- Page ---------- */
export default function BoardOfDirectors() {
  return (
    <>
      {/* Title band */}
      <section className="bg-brand-blue">
        <div className="container-site py-12 text-center md:py-14">
          <h1 className="font-heading text-[32px] font-black uppercase text-white md:text-[44px]">Board of Directors</h1>
        </div>
      </section>

      {/* Directors grid */}
      <section className="bg-white pb-20 pt-9">
        <div className="mx-auto grid max-w-[1500px] gap-9 px-5 sm:grid-cols-2 md:px-8 lg:grid-cols-4 lg:gap-[38px] lg:px-10">
          {directors.map((d) => (
            <article key={d.image} className="flex flex-col self-start border border-black/10 bg-white">
              <div className="aspect-[328/346] overflow-hidden bg-brand-mist">
                <img src={d.image} alt={d.name} className="h-full w-full object-cover object-top" loading="lazy" />
              </div>
              <div className="px-5 pb-6 pt-6 text-center">
                <h2 className="font-heading text-[22px] font-semibold uppercase leading-[1.2] text-brand-ink">{d.name}</h2>
                <p className="mt-3 whitespace-pre-line text-[17px] leading-[1.25] text-brand-ink/90">{d.role}</p>
              </div>
            </article>
          ))}
        </div>
      </section>
    </>
  );
}