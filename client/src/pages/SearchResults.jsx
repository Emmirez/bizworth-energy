import { Link, useSearchParams } from 'react-router-dom';
import PageBanner from '../components/ui/PageBanner';
import { flattenNavigation } from '../data/navigation';

export default function SearchResults() {
  const [params] = useSearchParams();
  const query = (params.get('q') || '').trim();
  const q = query.toLowerCase();

  const results = q
    ? flattenNavigation().filter(
        (item) => item.label.toLowerCase().includes(q) || item.trail.join(' ').toLowerCase().includes(q)
      )
    : [];

  return (
    <>
      <PageBanner title={query ? `Search: ${query}` : 'Search'} trail={['Search']} />
      <section className="bg-white py-14">
        <div className="container-site max-w-4xl">
          <p className="text-[15px] text-brand-muted">
            {results.length} result{results.length === 1 ? '' : 's'} found
          </p>
          <ul className="mt-6 divide-y divide-black/10 border-y border-black/10">
            {results.map((r) => (
              <li key={r.path}>
                <Link to={r.path} className="block py-4 hover:text-brand-blue">
                  <span className="block font-heading text-[12px] uppercase tracking-wider text-brand-muted">
                    {r.trail.join(' / ') || 'Main menu'}
                  </span>
                  <span className="font-heading text-[17px] font-semibold">{r.label}</span>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </section>
    </>
  );
}
