import Gem from '../../components/ui/Gem';

// Drawn "annual report" cover — no image file needed.
const gems = [
  { top: 46, left: 72, h: 52, r: -14 },
  { top: 58, left: 50, h: 44, r: 10 },
  { top: 64, left: 84, h: 46, r: -8 },
  { top: 70, left: 36, h: 42, r: 18 },
  { top: 72, left: 64, h: 50, r: -20 },
  { top: 80, left: 20, h: 40, r: 6 },
  { top: 82, left: 48, h: 46, r: -6 },
  { top: 84, left: 80, h: 44, r: 14 },
];

export default function BookMockup() {
  return (
    <div className="relative h-[360px] w-[270px] rotate-[-12deg] bg-white shadow-[18px_24px_40px_rgba(0,0,0,0.35)] md:h-[440px] md:w-[330px]">
      {/* spine */}
      <div className="absolute inset-y-0 left-0 w-4 bg-gradient-to-b from-brand-purple to-brand-navy" />

      {/* small logo mark */}
      <div className="absolute right-5 top-5 flex items-center gap-1.5">
        <Gem className="h-7" />
        <span className="font-heading text-[9px] font-bold uppercase leading-tight text-brand-navy">
          Bizworth
          <br />
          Oil &amp; Gas
        </span>
      </div>

      <p className="absolute left-10 top-[22%] font-heading text-[22px] font-extrabold uppercase leading-tight text-brand-navy md:text-[28px]">
        Strength
        <br />
        with Purpose
      </p>

      {gems.map((g, i) => (
        <Gem
          key={i}
          className="absolute drop-shadow-[4px_8px_6px_rgba(0,0,0,0.25)]"
          style={{
            top: `${g.top - 8}%`,
            left: `${g.left - 8}%`,
            height: `${g.h * 0.8}px`,
            transform: `rotate(${g.r}deg)`,
          }}
        />
      ))}
    </div>
  );
}
