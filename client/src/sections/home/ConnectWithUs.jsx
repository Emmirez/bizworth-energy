import { connectWithUs } from '../../data/home';
import CallToActionBanner from './CallToActionBanner';

export default function ConnectWithUs() {
  return (
    <CallToActionBanner
      {...connectWithUs}
      fallback="linear-gradient(180deg, #8fb0d6 0%, #6b93c4 50%, #1f4f8a 52%, #173e72 100%)"
    />
  );
}
