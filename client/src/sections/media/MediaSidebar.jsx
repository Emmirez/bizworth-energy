import { NavLink } from 'react-router-dom';

// Left-hand menu shared by the Media Releases and Photo Library pages.
const links = [
  { label: 'Media Releases', to: '/media/media-releases' },
  { label: 'Photo Library', to: '/media/photo-library' },
];

export default function MediaSidebar() {
  return (
    <aside className="bg-[#f7f7f7] px-6 py-8 lg:min-h-full lg:px-0 lg:py-14 lg:pl-[30%] lg:pr-8">
      <ul className="space-y-4">
        {links.map((l) => (
          <li key={l.to}>
            <NavLink
              to={l.to}
              className={({ isActive }) =>
                `flex items-center gap-3 font-heading text-[18px] transition-colors hover:text-brand-blue ${
                  isActive ? 'font-semibold uppercase text-brand-ink' : 'text-brand-ink'
                }`
              }
            >
              <svg viewBox="0 0 24 24" className="h-4 w-4 shrink-0 text-brand-cyan" fill="none" stroke="currentColor" strokeWidth="2.5">
                <path d="M9 6l6 6-6 6" />
              </svg>
              {l.label}
            </NavLink>
          </li>
        ))}
      </ul>
    </aside>
  );
}