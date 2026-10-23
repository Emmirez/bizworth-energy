import { Link, useLocation } from 'react-router-dom';
import { getChildren } from '../../data/navigation';

function Chevron({ up }) {
  return (
    <svg
      viewBox="0 0 24 24"
      className={`h-4 w-4 text-brand-cyan transition-transform duration-200 ${up ? 'rotate-180' : ''}`}
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
    >
      <path d="M6 9l6 6 6-6" />
    </svg>
  );
}

function SubLink({ item, depth, onNavigate, pathname }) {
  const active = pathname === item.path;
  return (
    <>
            {item.header ? (
        <span
          className={`block py-[11px] font-heading text-[17px] font-semibold leading-snug text-brand-ink ${
            depth === 0 ? 'px-4' : 'pl-8 pr-4'
          }`}
        >
          {item.label}
        </span>
      ) : (
        <Link
          to={item.path}
          onClick={onNavigate}
          className={`block py-[11px] font-heading text-[17px] leading-snug ${
            depth === 0 ? 'px-4' : 'pl-8 pr-4'
          } ${active ? 'text-brand-blue' : 'text-brand-ink/90 hover:text-brand-blue'}`}
        >
          {item.label}
        </Link>
      )}
      {item.children?.map((child) => (
        <SubLink key={child.path} item={child} depth={depth + 1} onNavigate={onNavigate} pathname={pathname} />
      ))}
    </>
  );
}

export default function MobileAccordionItem({ item, open, onToggle, onNavigate }) {
  const { pathname } = useLocation();
  const children = getChildren(item);
  const active = pathname === item.path || pathname.startsWith(`${item.path}/`);

  if (!children.length) {
    return (
      <Link
        to={item.path}
        onClick={onNavigate}
        className={`flex h-[60px] items-center border-b border-black/10 px-4 font-heading text-[17px] font-bold uppercase ${
          active ? 'text-brand-blue' : 'text-brand-ink'
        }`}
      >
        {item.label}
      </Link>
    );
  }

  return (
    <div className="border-b border-black/10">
      <button
        type="button"
        onClick={onToggle}
        className="flex h-[60px] w-full items-center justify-between px-4 text-left"
        aria-expanded={open}
      >
        <span
          className={`font-heading text-[17px] font-bold uppercase ${
            open || active ? 'text-brand-blue' : 'text-brand-ink'
          }`}
        >
          {item.label}
        </span>
        <Chevron up={open} />
      </button>

      <div className={`overflow-hidden border-t border-black/10 ${open ? 'block' : 'hidden'}`}>
        <div className="py-2">
          <Link
            to={item.path}
            onClick={onNavigate}
            className="block px-4 py-[11px] font-heading text-[15px] font-semibold uppercase text-brand-blue"
          >
            {item.label} Overview
          </Link>
          {children.map((child) => (
            <SubLink key={child.path} item={child} depth={0} onNavigate={onNavigate} pathname={pathname} />
          ))}
        </div>
      </div>
    </div>
  );
}
