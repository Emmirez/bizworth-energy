import Button from '../../components/ui/Button';
import AccentLine from '../../components/ui/AccentLine';

export default function BusinessSegmentCard({ segment }) {
  const { title, subtitle, image, to, accent } = segment;

  // Layer 1: blue wash, Layer 2: photo, Layer 3: fallback sky gradient
  const background = `linear-gradient(180deg, rgba(46,39,195,0.15) 0%, rgba(46,39,195,0.55) 55%, rgba(46,39,195,0.92) 100%), url(${image}) center/cover no-repeat, linear-gradient(180deg, #6fb4f0 0%, #3d6fe0 45%, #2e27c3 100%)`;

  return (
    <article
      className="group relative flex min-h-[440px] items-end overflow-hidden md:min-h-[480px]"
      style={{ background }}
    >
      <div className="absolute inset-0 bg-brand-blue/0 transition-colors duration-500 group-hover:bg-brand-blue/10" />
      <div className="relative w-full px-[38px] pb-[64px] md:px-[45px]">
        <h3 className="font-heading text-[22px] font-semibold uppercase text-brand-cyan md:text-[24px]">
          {title}
        </h3>
        <AccentLine color={accent} className="mt-4" />
        {subtitle && <p className="mt-6 text-[17px] text-white">{subtitle}</p>}
        <Button to={to} variant="solid" className="mt-7 min-w-[188px] bg-[#13136a]">
          Learn More
        </Button>
      </div>
    </article>
  );
}
