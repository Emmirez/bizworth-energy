import { useState } from 'react';
import { navigation } from '../../data/navigation';
import Logo from '../ui/Logo';
import MobileAccordionItem from './MobileAccordionItem';
import MobileSearch from './MobileSearch';

// Full-screen menu for phones and tablets.
export default function MobileMenu({ open, onClose }) {
  const [expanded, setExpanded] = useState(null);

  return (
    <div
      className={`fixed inset-0 z-[60] flex flex-col bg-brand-mist transition-all duration-300 lg:hidden ${
      open ? 'visible opacity-100' : 'pointer-events-none invisible opacity-0'
      }`}
      aria-hidden={!open}
    >
      <div className="flex h-[100px] shrink-0 items-center justify-between border-b border-brand-ink bg-white px-5">
        <Logo className="h-[58px]" />
        <button
          type="button"
          onClick={onClose}
          className="flex h-10 w-10 items-center justify-center text-brand-blue"
          aria-label="Close menu"
        >
          <svg viewBox="0 0 24 24" className="h-8 w-8" fill="none" stroke="currentColor" strokeWidth="2.6">
            <path d="M5 5l14 14M19 5L5 19" />
          </svg>
        </button>
      </div>

      <nav className="flex-1 overflow-y-auto" aria-label="Mobile">
        {navigation.map((item) => (
          <MobileAccordionItem
            key={item.path}
            item={item}
            open={expanded === item.path}
            onToggle={() => setExpanded(expanded === item.path ? null : item.path)}
            onNavigate={onClose}
          />
        ))}
      </nav>

      <MobileSearch onSearch={onClose} />
    </div>
  );
}
