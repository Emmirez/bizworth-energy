import { joinUs } from '../../data/home';
import CallToActionBanner from './CallToActionBanner';

export default function JoinUs() {
  return (
    <CallToActionBanner
      {...joinUs}
      fallback="linear-gradient(110deg, #2b2620 0%, #4a3a2c 55%, #8a2b1f 100%)"
    />
  );
}
