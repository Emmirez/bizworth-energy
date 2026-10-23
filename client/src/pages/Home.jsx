import HeroSlider from '../sections/home/HeroSlider';
import BlueDivider from '../sections/home/BlueDivider';
import BusinessSegments from '../sections/home/BusinessSegments';
import GlobalFootprint from '../sections/home/GlobalFootprint';
import NewsAndStock from '../sections/home/NewsAndStock';
import EngageSection from '../sections/home/EngageSection';

export default function Home() {
  return (
    <>
      <HeroSlider />
      <BlueDivider />
      <BusinessSegments />
      <GlobalFootprint />
      <NewsAndStock />
      <EngageSection />
    </>
  );
}
