import { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { navigation } from '../../data/navigation';
import MegaMenu from './MegaMenu';
import DropdownMenu from './DropdownMenu';

export default function DesktopNav() {
  const [openIndex, setOpenIndex] = useState(null);
  const { pathname } = useLocation();

  useEffect(() => setOpenIndex(null), [pathname]);

  const close = () => setOpenIndex(null);

  return (
    <nav className="hidden h-full flex-1 justify-end self-stretch pl-6 lg:flex xl:justify-center" aria-label="Main">
      <ul className="flex h-full items-stretch gap-4 xl:gap-7 2xl:gap-12">
        {navigation.map((item, i) => {
          const hasMenu = item.mega || item.children?.length;
          const active = pathname === item.path || pathname.startsWith(`${item.path}/`);
          const open = openIndex === i;

          return (
            <li
              key={item.path}
              className={`flex h-full items-center ${item.mega ? 'static' : 'relative'}`}
              onMouseEnter={() => hasMenu && setOpenIndex(i)}
              onMouseLeave={close}
              onFocus={() => hasMenu && setOpenIndex(i)}
              onBlur={(e) => {
                if (!e.currentTarget.contains(e.relatedTarget)) close();
              }}
            >
              <Link
                to={item.path}
                className={`whitespace-nowrap font-heading text-[13px] font-bold uppercase tracking-wide transition-colors xl:text-[15px] 2xl:text-[17px] ${
                  active || open ? 'text-brand-blue' : 'text-brand-ink hover:text-brand-blue'
                }`}
                aria-haspopup={hasMenu ? 'true' : undefined}
                aria-expanded={hasMenu ? open : undefined}
              >
                {item.label}
              </Link>

              {item.mega && <MegaMenu columns={item.columns} open={open} onNavigate={close} />}
              {!item.mega && item.children?.length > 0 && (
                <DropdownMenu items={item.children} open={open} onNavigate={close} />
              )}
            </li>
          );
        })}
      </ul>
    </nav>
  );
}
