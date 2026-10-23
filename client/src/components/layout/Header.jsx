import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import Logo from '../ui/Logo';
import DesktopNav from './DesktopNav';
import MobileMenu from './MobileMenu';

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const { pathname } = useLocation();

  useEffect(() => setMobileOpen(false), [pathname]);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [mobileOpen]);

  return (
    <header className="sticky top-0 z-50 border-b border-brand-blue/70 bg-white">
      <div className="mx-auto flex h-[88px] max-w-site items-center justify-between px-5 lg:h-[98px] lg:px-10">
        <Logo />
        <DesktopNav />

        <button
          type="button"
          onClick={() => setMobileOpen(true)}
          className="flex h-10 w-10 flex-col items-center justify-center gap-[6px] lg:hidden"
          aria-label="Open menu"
        >
          <span className="block h-[3px] w-[30px] bg-brand-blue" />
          <span className="block h-[3px] w-[30px] bg-brand-blue" />
          <span className="block h-[3px] w-[30px] bg-brand-blue" />
        </button>
      </div>

      <MobileMenu open={mobileOpen} onClose={() => setMobileOpen(false)} />
    </header>
  );
}
