// Four-facet diamond used as a decorative brand mark (hero book cover, etc.)
export default function Gem({ className = 'h-10', style }) {
  return (
    <svg viewBox="0 0 60 100" className={`w-auto ${className}`} style={style} aria-hidden="true">
      <polygon points="30,0 0,45 30,45" fill="#24357e" />
      <polygon points="30,0 60,45 30,45" fill="#f26b21" />
      <polygon points="30,45 60,45 30,100" fill="#1fb6e8" />
      <polygon points="0,45 30,45 30,100" fill="#6a3c96" />
    </svg>
  );
}
