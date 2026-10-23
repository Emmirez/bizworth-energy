import { Link } from 'react-router-dom';

// Full-width 4-column panel shown under SERVICES on desktop.
export default function MegaMenu({ columns, open, onNavigate }) {
  return (
    <div
      className={`absolute inset-x-0 top-full border-b border-brand-blue/20 bg-white/95 shadow-[0_20px_40px_-20px_rgba(40,36,92,0.35)] backdrop-blur transition-all duration-200 ${
        open ? 'visible translate-y-0 opacity-100' : 'invisible -translate-y-1 opacity-0'
      }`}
    >
     <div className="mx-auto grid max-w-[1200px] grid-cols-3 px-10 py-12">
        {columns.map((col, i) => (
          <div
            key={col.path}
            className={`min-h-[330px] px-8 ${i > 0 ? 'border-l border-brand-blue' : 'pl-0'}`}
          >
            <Link
              to={col.path}
              onClick={onNavigate}
              className="inline border-b border-brand-blue pb-1 font-heading text-[17px] font-semibold uppercase leading-[32px] text-brand-ink hover:text-brand-blue"
            >
              {col.label}
            </Link>

            <ul className="mt-6 space-y-[6px]">
              {col.items.map((item) => (
                <li key={item.path}>
                  <Link
                    to={item.path}
                    onClick={onNavigate}
                    className={`block font-heading text-[17px] leading-[26px] hover:text-brand-blue ${
                      item.bold ? 'font-semibold uppercase text-brand-ink' : 'text-brand-ink/85'
                    }`}
                  >
                    {item.label}
                  </Link>
                  {item.children && (
                    <ul className="mt-[6px] space-y-[6px]">
                      {item.children.map((child) => (
                        <li key={child.path}>
                          <Link
                            to={child.path}
                            onClick={onNavigate}
                            className="block font-heading text-[17px] leading-[26px] text-brand-ink/85 hover:text-brand-blue"
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
        ))}
      </div>
    </div>
  );
}
