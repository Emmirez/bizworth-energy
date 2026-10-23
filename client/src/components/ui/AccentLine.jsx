const colors = {
  light: 'bg-white/50',
  orange: 'bg-brand-orange',
  blue: 'bg-brand-blue',
};

export default function AccentLine({ color = 'orange', className = '' }) {
  return <span className={`block h-[2px] w-[76px] ${colors[color]} ${className}`} />;
}
