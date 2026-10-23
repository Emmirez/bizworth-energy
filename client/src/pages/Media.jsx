import SectionLanding from '../sections/shared/SectionLanding';
import MediaReleases from '../sections/home/MediaReleases';

export default function Media() {
  return (
    <>
      <SectionLanding
                path="/media"
        image="/images/assets4.jpg"
       intro="The latest announcements and images from across Bizworth Oil & Gas." 
      />
      <section className="bg-white pb-16">
        <div className="container-site">
          <MediaReleases />
        </div>
      </section>
    </>
  );
}
