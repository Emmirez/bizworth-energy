
import SectionHeading from '../../components/ui/SectionHeading';
import LinkCardGrid from './LinkCardGrid';
import { getChildren, getSection } from '../../data/navigation';

// Landing page for any top-level menu (About Us, Services, Assets, Corporate, Media).
// Lists every sub-page from navigation.js as a card.
export default function SectionLanding({ path, intro, image }) {
  const section = getSection(path);
  if (!section) return null;

  return (
    <>
      {/* Hero + title band (same style as the other pages) */}
      <section
        className="relative flex min-h-[340px] flex-col justify-end md:min-h-[420px]"
        style={{ background: `url(${image}) center/cover no-repeat, linear-gradient(135deg, #6fa3d8 0%, #2e27c3 100%)` }}
      >
        <div className="bg-brand-blue/80">
          <div className="container-site py-9">
            <h1 className="font-heading text-[32px] font-extrabold leading-[1.1] text-brand-cyan md:text-[42px]">{section.label}</h1>
          </div>
        </div>
      </section>
      <section className="bg-white py-14 md:py-20">
        <div className="container-site">
          <SectionHeading title={`${section.label} at Bizworth`} text={intro} />
          <LinkCardGrid items={getChildren(section)} />
        </div>
      </section>
    </>
  );
}
