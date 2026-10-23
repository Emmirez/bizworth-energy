// Places location pins on the footprint map using lat/lng (equirectangular projection).
const toPosition = ({ lat, lng }) => ({
  left: `${((lng + 180) / 360) * 100}%`,
  top: `${((80 - lat) / 140) * 100}%`,
});

export default function FootprintPins({ locations }) {
  return (
    <div className="pointer-events-none absolute inset-0 hidden md:block" aria-hidden="true">
      {locations.map((loc) => (
        <div key={loc.name} className="absolute flex -translate-x-1/2 -translate-y-full flex-col items-center" style={toPosition(loc)}>
          <span className="whitespace-nowrap font-heading text-[10px] font-semibold leading-tight text-brand-cyan">
            {loc.country && <span className="block text-center">{loc.country}</span>}
            {loc.name}
          </span>
          <svg viewBox="0 0 24 32" className="mt-0.5 h-5 w-4">
            <path d="M12 0C5.4 0 0 5.4 0 12c0 9 12 20 12 20s12-11 12-20C24 5.4 18.6 0 12 0z" fill="#1fb6e8" />
            <circle cx="12" cy="12" r="4.5" fill="#0c5d68" />
          </svg>
        </div>
      ))}
    </div>
  );
}
