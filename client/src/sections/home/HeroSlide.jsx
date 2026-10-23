import Button from '../../components/ui/Button';
import BookMockup from './BookMockup';

export default function HeroSlide({ slide, active }) {
  const isBook = slide.variant === 'book';

  const background = isBook
    ? undefined
    : {
        background: `linear-gradient(90deg, rgba(40,36,92,0.92) 0%, rgba(40,36,92,0.55) 55%, rgba(40,36,92,0.25) 100%), url(${slide.image}) center/cover no-repeat, linear-gradient(120deg, #28245c 0%, #2e27c3 70%, #1fb6e8 130%)`,
      };

  return (
    <div
      className={`absolute inset-0 transition-opacity duration-700 ${active ? 'z-10 opacity-100' : 'z-0 opacity-0'}`}
      style={background}
      aria-hidden={!active}
    >
      {isBook && (
        <>
          <div className="absolute -right-[180px] top-[40px] h-[440px] w-[440px] rounded-full bg-brand-cyan md:-right-[60px] md:top-[30px] md:h-[560px] md:w-[560px] lg:right-[6%]" />
          <div className="absolute right-[-60px] top-[0px] md:right-[40px] md:top-[10px] lg:right-[14%]">
            <BookMockup />
          </div>
        </>
      )}

      <div className="container-site relative flex h-full flex-col justify-between pb-[70px] pt-12 md:pt-14 lg:px-[85px]">
        <h2
          className={`max-w-[760px] font-heading text-[34px] font-black uppercase leading-[1.05] md:text-[52px] lg:text-[64px] ${
                        'text-brand-cyan'
          } ${active ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'} transition-all delay-200 duration-700`}
        >
          {slide.title}
        </h2>

        <div>
          <Button to={slide.to} variant="solid" className="min-w-[228px] bg-[#13136a]">
            {slide.buttonLabel}
          </Button>
        </div>
      </div>
    </div>
  );
}
