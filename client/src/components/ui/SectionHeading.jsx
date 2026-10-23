import AccentLine from './AccentLine';

export default function SectionHeading({ title, text, align = 'left', light = false }) {
  const center = align === 'center';
  return (
    <div className={center ? 'text-center' : ''}>
      <h2
        className={`text-2xl font-bold uppercase md:text-3xl ${light ? 'text-white' : 'text-brand-navy'}`}
      >
        {title}
      </h2>
      <AccentLine color="orange" className={`mt-4 ${center ? 'mx-auto' : ''}`} />
      {text && (
        <p className={`mt-5 max-w-3xl text-[16px] leading-relaxed ${center ? 'mx-auto' : ''} ${light ? 'text-white/90' : 'text-brand-ink/75'}`}>
          {text}
        </p>
      )}
    </div>
  );
}
