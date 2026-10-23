import { useEffect, useState } from 'react';
import { heroSlides } from '../../data/home';
import HeroSlide from './HeroSlide';

const INTERVAL = 7000;

export default function HeroSlider() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => setIndex((i) => (i + 1) % heroSlides.length), INTERVAL);
    return () => clearInterval(timer);
  }, [index]);

  return (
    <section className="relative h-[575px] overflow-hidden bg-brand-navy md:h-[640px]" aria-roledescription="carousel">
      {heroSlides.map((slide, i) => (
        <HeroSlide key={slide.id} slide={slide} active={i === index} />
      ))}

      {/* Square pager dots */}
      <div className="absolute bottom-6 left-1/2 z-20 flex -translate-x-1/2 gap-3">
        {heroSlides.map((slide, i) => (
          <button
            key={slide.id}
            type="button"
            onClick={() => setIndex(i)}
            aria-label={`Go to slide ${i + 1}`}
            className={`h-3 w-3 border-2 border-brand-cyan transition-colors ${
              i === index ? 'bg-brand-cyan' : 'bg-transparent'
            }`}
          />
        ))}
      </div>

      {/* Orange corner */}
      <span className="absolute bottom-0 right-0 z-20 h-0 w-0 border-b-[40px] border-l-[40px] border-b-brand-orange border-l-transparent" />
    </section>
  );
}
