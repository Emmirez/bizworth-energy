import { Link } from 'react-router-dom';

// Standard dropdown for About Us, Assets, Corporate and Media on desktop.
export default function DropdownMenu({ items, open, onNavigate }) {
  return (
    <div
      className={`absolute left-1/2 top-full w-[380px] -translate-x-1/2 border-t-2 border-brand-blue bg-white/95 py-4 shadow-[0_20px_40px_-20px_rgba(40,36,92,0.35)] backdrop-blur transition-all duration-200 ${
        open ? 'visible opacity-100' : 'invisible opacity-0'
      }`}
    >
      <ul>
        {items.map((item) => (
          <li key={item.path}>
              {item.header ? (
              <span className="block px-6 pb-1 pt-[9px] font-heading text-[15px] font-semibold text-brand-ink">
                {item.label}
              </span>
            ) : (
              <Link
                to={item.path}
                onClick={onNavigate}
                className="block px-6 py-[9px] font-heading text-[15px] text-brand-ink hover:bg-brand-mist hover:text-brand-blue"
              >
                {item.label}
              </Link>
            )}
            {item.children && (
              <ul className="pb-1">
                {item.children.map((child) => (
                  <li key={child.path}>
                    <Link
                      to={child.path}
                      onClick={onNavigate}
                      className="block py-[7px] pl-10 pr-6 font-heading text-[14px] text-brand-ink/75 hover:bg-brand-mist hover:text-brand-blue"
                    >
                      {child.label}
                    </Link>
                  </li>
                ))}
              </ul>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
}
