import { Link } from 'react-router-dom';
import { mediaReleases } from '../../data/home';
import Button from '../../components/ui/Button';

export default function MediaReleases() {
  return (
    <div className="h-full bg-brand-gray px-6 py-8 md:px-[26px]">
      <h2 className="font-heading text-[26px] font-semibold uppercase text-brand-ink md:text-[30px]">
        Latest Media Releases
      </h2>

      <ul className="mt-8">
        {mediaReleases.map((release) => (
          <li key={release.date} className="border-b border-black/10">
            <Link
              to={release.to}
              className="grid grid-cols-1 gap-1 py-4 transition-colors hover:text-brand-blue md:grid-cols-[210px_1fr] md:items-center md:gap-0"
            >
              <span className="text-[16px] text-brand-ink/90">{release.date}.</span>
              <span className="text-[16px] uppercase leading-[1.65] text-brand-ink/90">{release.title}</span>
            </Link>
          </li>
        ))}
      </ul>

      <div className="mt-6 flex justify-center">
        <Button to="/media/media-releases" variant="outline" className="min-w-[228px]">
          View all
        </Button>
      </div>
    </div>
  );
}
