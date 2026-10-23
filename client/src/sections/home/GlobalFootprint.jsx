import { footprint } from '../../data/home';
import Button from '../../components/ui/Button';
import AccentLine from '../../components/ui/AccentLine';
import FootprintPins from './FootprintPins';

export default function GlobalFootprint() {
  const background = `linear-gradient(rgba(12,93,104,0.55), rgba(12,93,104,0.55)), url(${footprint.image}) center/cover no-repeat, #0c5d68`;

  return (
    <section className="relative overflow-hidden" style={{ background }}>
      <div className="dot-map absolute inset-0" />
      <FootprintPins locations={footprint.locations} />

      <div className="container-site relative flex min-h-[460px] flex-col items-center justify-center py-16 text-center md:min-h-[540px]">
        <h2 className="font-heading text-[30px] font-extrabold uppercase text-white md:text-[36px]">
          {footprint.title}
        </h2>
        <AccentLine color="orange" className="mx-auto mt-3" />
        <p className="mt-5 max-w-3xl text-[17px] text-white md:text-[18px]">{footprint.text}</p>
        <Button to={footprint.to} variant="solid" className="mt-7 min-w-[272px] bg-[#13136a]">
          {footprint.buttonLabel}
        </Button>
      </div>
    </section>
  );
}
