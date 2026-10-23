import { useEffect } from 'react';

// Custom modal used instead of browser alert()/confirm().
export default function Modal({ open, onClose, title, children, tone = 'success' }) {
  useEffect(() => {
    if (!open) return undefined;
    const onKey = (e) => e.key === 'Escape' && onClose();
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [open, onClose]);

  if (!open) return null;

  const bar = tone === 'error' ? 'bg-brand-orange' : 'bg-brand-blue';

  return (
    <div
      className="fixed inset-0 z-[100] flex items-center justify-center bg-brand-navy/60 px-5"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
    >
      <div
        className="w-full max-w-md overflow-hidden bg-white shadow-2xl"
        onClick={(e) => e.stopPropagation()}
      >
        <div className={`h-1.5 ${bar}`} />
        <div className="p-8">
          <h3 className="text-xl font-bold uppercase text-brand-navy">{title}</h3>
          <div className="mt-3 text-[15px] leading-relaxed text-brand-ink/80">{children}</div>
          <div className="mt-7 flex justify-end">
            <button
              type="button"
              onClick={onClose}
              className="bg-brand-blue px-7 py-3 font-heading text-sm font-semibold text-white hover:bg-brand-deep"
            >
              OK
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
