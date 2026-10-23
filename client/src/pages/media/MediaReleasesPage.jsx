import { useMemo, useState } from 'react';
import MediaSidebar from '../../sections/media/MediaSidebar';
import { mediaReleases } from '../../data/home';

// Releases come from src/data/home.js (the same list as the homepage).
const yearOf = (date) => date.split('.').pop();

export default function MediaReleasesPage() {
  const years = useMemo(() => [...new Set(mediaReleases.map((r) => yearOf(r.date)))].sort((a, b) => b - a), []);
  const [year, setYear] = useState('All');
  const list = year === 'All' ? mediaReleases : mediaReleases.filter((r) => yearOf(r.date) === year);

  return (
    <>
      {/* Title band */}
      <section className="bg-brand-blue">
        <div className="mx-auto max-w-[1600px] px-5 py-12 md:px-8 md:py-14 lg:pl-[13%]">
          <h1 className="font-heading text-[32px] font-semibold text-white md:text-[40px]">Media Releases</h1>
        </div>
      </section>

      <section className="grid bg-white lg:grid-cols-[30%_1fr]">
        <MediaSidebar />

        <div className="px-5 py-10 md:px-8 lg:px-14 lg:py-12">
          <div className="max-w-[1000px]">
            {/* Year filter */}
            {years.length > 1 && (
              <div className="mb-8 flex flex-wrap gap-2">
                {['All', ...years].map((y) => (
                  <button
                    key={y}
                    type="button"
                    onClick={() => setYear(y)}
                    className={`h-9 min-w-[64px] px-4 font-heading text-[14px] font-semibold transition-colors ${
                      year === y ? 'bg-brand-blue text-white' : 'bg-brand-mist text-brand-ink hover:bg-brand-blue/10'
                    }`}
                  >
                    {y}
                  </button>
                ))}
              </div>
            )}

            <ul className="border-t border-black/10">
              {list.map((r) => (
                <li key={r.date + r.title} className="grid gap-2 border-b border-black/10 py-6 md:grid-cols-[170px_1fr] md:gap-6">
                  <span className="font-heading text-[15px] font-semibold text-brand-blue">{r.date}</span>
                  <p className="text-[17px] uppercase leading-[1.6] text-brand-ink">{r.title}</p>
                </li>
              ))}
            </ul>

            {list.length === 0 && <p className="py-10 text-brand-muted">No media releases for this year.</p>}
          </div>
        </div>
      </section>
    </>
  );
}