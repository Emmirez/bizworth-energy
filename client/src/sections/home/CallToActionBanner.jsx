import Button from '../../components/ui/Button';
import AccentLine from '../../components/ui/AccentLine';

// Shared layout for the "Join Us" and "Connect With Us" banners.
export default function CallToActionBanner({ title, text, buttonLabel, to, image, fallback }) {
  const background = `linear-gradient(90deg, rgba(0,0,0,0.45) 0%, rgba(0,0,0,0.15) 60%, rgba(0,0,0,0) 100%), url(${image}) center/cover no-repeat, ${fallback}`;

  return (
    <div className="relative flex min-h-[245px] flex-col justify-center px-6 py-7 md:min-h-[300px] md:px-[25px]" style={{ background }}>
      <h2 className="font-heading text-[34px] font-semibold uppercase leading-none text-white md:text-[38px]">{title}</h2>
      <AccentLine color="orange" className="mt-5" />
      <p className="mt-6 max-w-[300px] text-[17px] leading-snug text-white md:max-w-[520px]">{text}</p>
      <div className="mt-5 flex justify-center">
        <Button to={to} variant="solidSoft" className="min-w-[228px]">
          {buttonLabel}
        </Button>
      </div>
    </div>
  );
}
