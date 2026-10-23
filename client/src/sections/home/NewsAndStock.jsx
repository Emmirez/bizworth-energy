import MediaReleases from './MediaReleases';
import StockPrice from './StockPrice';

// Wrapper holding the "Latest Media Releases" and "Stock Price" cards.
export default function NewsAndStock() {
  const background =
    'linear-gradient(rgba(20,30,20,0.35), rgba(20,30,20,0.35)), url(/images/media-bg.jpg) center/cover no-repeat, linear-gradient(135deg, #3b3a1f 0%, #28245c 100%)';

  return (
    <section className="py-5 md:py-10" style={{ background }}>
      <div className="container-site grid gap-5 lg:grid-cols-3">
        <div className="lg:col-span-2">
          <MediaReleases />
        </div>
        <StockPrice />
      </div>
    </section>
  );
}
