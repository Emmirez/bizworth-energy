import { useCallback, useEffect, useState } from 'react';
import MediaSidebar from '../../sections/media/MediaSidebar';

/* ---------- Photos (images already in /public/images) ---------- */
const photos = [
  { title: 'Bizworth Diamante', image: '/images/assets12.jpg' },
  { title: 'Bizworth Topázio', image: '/images/assets11.jpg' },
  { title: 'Bizworth Esmeralda', image: '/images/assets9.jpg' },
  { title: 'Bizworth Alliance', image: '/images/assets49.jpg' },
  { title: 'Typhoon', image: '/images/assets27.jpg' },
  { title: 'Yard', image: '/images/assets1.jpg' },
  { title: 'Bizworth 3500', image: '/images/assets4.jpg' },
  { title: 'Bizworth Jaya', image: '/images/assets52.jpg' },
  { title: 'Bizworth T-12', image: '/images/assets57.jpg' },
  { title: 'Hook-up & Commissioning', image: '/images/rig.jpg' },
  { title: 'Our People', image: '/images/workers.jpg' },
  { title: 'Engineering', image: '/images/eng.png' },
];

/* ---------- Lightbox (custom popup) ---------- */
function Lightbox({ index, onClose, onPrev, onNext }) {
  useEffect(() => {
    const onKey = (e) => {
      if (e.key === 'Escape') onClose();
      if (e.key === 'ArrowLeft') onPrev();
      if (e.key === 'ArrowRight') onNext();
    };
    window.addEventListener('keydown', onKey);
    document.body.style.overflow = 'hidden';
    return () => {
      window.removeEventListener('keydown', onKey);
      document.body.style.overflow = '';
    };
  }, [onClose, onPrev, onNext]);

  const photo = photos[index];
  const arrow = 'absolute top-1/2 flex h-12 w-12 -translate-y-1/2 items-center justify-center bg-white/10 text-white hover:bg-brand-blue';

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black/85 px-4" onClick={onClose} role="dialog" aria-modal="true">
      <div className="relative w-full max-w-5xl" onClick={(e) => e.stopPropagation()}>
        <button type="button" onClick={onClose} aria-label="Close" className="absolute -top-12 right-0 p-1 text-white hover:text-brand-cyan">
          <svg viewBox="0 0 24 24" className="h-8 w-8" fill="none" stroke="currentColor" strokeWidth="2.4">
            <path d="M5 5l14 14M19 5L5 19" />
          </svg>
        </button>

        <img src={photo.image} alt={photo.title} className="max-h-[75vh] w-full bg-brand-navy object-contain" />

        <div className="flex items-center justify-between bg-brand-blue px-5 py-3 text-white">
          <p className="font-heading text-[17px]">{photo.title}</p>
          <div className="flex items-center gap-4">
            <span className="text-[14px] text-white/80">
              {index + 1} / {photos.length}
            </span>
            <a href={photo.image} download className="font-heading text-[14px] font-semibold underline-offset-2 hover:underline">
              Download
            </a>
          </div>
        </div>

        <button type="button" onClick={onPrev} aria-label="Previous photo" className={`${arrow} left-2 md:-left-16`}>
          <svg viewBox="0 0 24 24" className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth="2.5">
            <path d="M15 6l-6 6 6 6" />
          </svg>
        </button>
        <button type="button" onClick={onNext} aria-label="Next photo" className={`${arrow} right-2 md:-right-16`}>
          <svg viewBox="0 0 24 24" className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth="2.5">
            <path d="M9 6l6 6-6 6" />
          </svg>
        </button>
      </div>
    </div>
  );
}

/* ---------- Page ---------- */
export default function PhotoLibrary() {
  const [open, setOpen] = useState(null);
  const close = useCallback(() => setOpen(null), []);
  const prev = useCallback(() => setOpen((i) => (i - 1 + photos.length) % photos.length), []);
  const next = useCallback(() => setOpen((i) => (i + 1) % photos.length), []);

  return (
    <>
      {/* Title band */}
      <section className="bg-brand-blue">
        <div className="mx-auto max-w-[1600px] px-5 py-12 md:px-8 md:py-14 lg:pl-[13%]">
          <h1 className="font-heading text-[32px] font-semibold text-white md:text-[40px]">Photo Library</h1>
        </div>
      </section>

      <section className="grid bg-white lg:grid-cols-[30%_1fr]">
        <MediaSidebar />

        <div className="px-5 py-10 md:px-8 lg:px-14 lg:py-9">
          <div className="grid max-w-[1100px] gap-6 sm:grid-cols-2 xl:grid-cols-3 xl:gap-[38px]">
            {photos.map((p, i) => (
              <button
                key={p.image}
                type="button"
                onClick={() => setOpen(i)}
                className="group relative flex aspect-[316/237] items-end overflow-hidden text-left"
                style={{ background: `url(${p.image}) center/cover no-repeat, linear-gradient(135deg, #6fa3d8 0%, #2e27c3 100%)` }}
                aria-label={`View ${p.title}`}
              >
                <span className="w-full bg-brand-blue/80 px-6 pb-3 pt-4 transition-colors group-hover:bg-brand-blue/95">
                  <span className="block font-heading text-[18px] text-white">{p.title}</span>
                  <span className="mt-1.5 block h-[2px] w-[62px] bg-white/40" />
                </span>
              </button>
            ))}
          </div>
        </div>
      </section>

      {open !== null && <Lightbox index={open} onClose={close} onPrev={prev} onNext={next} />}
    </>
  );
}