/* ---------- Content ---------- */
// Replace each name with the real Bizworth leader. Photos go in /public/images.
const leaders = [
  { name: 'Dato\' Nurul Ain binti Hassan', role: 'Group Chief Executive Officer', image: '/images/woman1.jpg' },
  { name: 'Dato\' Tan Wei Loon', role: 'Group Chief Financial Officer', image: '/images/men5.jpg' },
  { name: 'Ir. Ahmad Syafiq bin Roslan', role: 'Group Chief Operating Officer & Chief Executive Officer, Drilling', image: '/images/men6.jpg' },
  { name: 'Puan Nur Aisyah binti Kamaruddin', role: 'Chief People Officer', image: '/images/woman4.jpg' },
  { name: 'Datin Priya a/p Subramaniam', role: 'Chief General Counsel', image: '/images/leader5.jpg' },
];

/* ---------- Page ---------- */
export default function LeadershipTeam() {
  return (
    <>
      {/* Title band */}
      <section className="bg-brand-blue">
        <div className="container-site py-12 text-center md:py-14">
          <h1 className="font-heading text-[32px] font-black uppercase text-white md:text-[44px]">Leadership Team</h1>
        </div>
      </section>

      {/* Leaders grid */}
      <section className="bg-white pb-20 pt-9">
        <div className="mx-auto grid max-w-[1500px] gap-9 px-5 sm:grid-cols-2 md:px-8 lg:grid-cols-4 lg:gap-[38px] lg:px-10">
          {leaders.map((l) => (
            <article key={l.image} className="flex flex-col self-start border border-black/10 bg-white">
              <div className="aspect-[328/346] overflow-hidden bg-brand-mist">
                <img src={l.image} alt={l.name} className="h-full w-full object-cover object-top" loading="lazy" />
              </div>
              <div className="px-5 pb-6 pt-6 text-center">
                <h2 className="font-heading text-[22px] font-semibold uppercase leading-[1.2] text-brand-ink">{l.name}</h2>
                <p className="mt-3 text-[17px] leading-[1.25] text-brand-ink/90">{l.role}</p>
              </div>
            </article>
          ))}
        </div>
      </section>
    </>
  );
}