import { Link } from 'react-router-dom';

// Title banner used at the top of every inner page.
export default function PageBanner({ title, trail = [], image }) {
  const bg = image
    ? `linear-gradient(90deg, rgba(40,36,92,0.95) 0%, rgba(40,36,92,0.7) 60%, rgba(46,39,195,0.5) 100%), url(${image}), #28245c`
    : 'linear-gradient(110deg, #28245c 0%, #28245c 55%, #2e27c3 100%)';

  return (
    <section className="relative overflow-hidden" style={{ background: bg, backgroundSize: 'cover', backgroundPosition: 'center' }}>
      <div className="absolute -right-24 top-1/2 h-[380px] w-[380px] -translate-y-1/2 rounded-full bg-brand-cyan/20" />
      <div className="container-site relative py-16 md:py-24">
        <nav className="mb-4 flex flex-wrap items-center gap-2 font-heading text-xs font-semibold uppercase tracking-wider text-white/60">
          <Link to="/" className="hover:text-brand-cyan">Home</Link>
          {trail.map((t) => (
            <span key={t} className="flex items-center gap-2">
              <span>/</span>
              <span>{t}</span>
            </span>
          ))}
        </nav>
        <h1 className="max-w-4xl text-3xl font-extrabold uppercase leading-tight text-brand-cyan md:text-5xl">
          {title}
        </h1>
      </div>
      <span className="absolute bottom-0 right-0 h-0 w-0 border-b-[44px] border-l-[44px] border-b-brand-orange border-l-transparent" />
    </section>
  );
}
