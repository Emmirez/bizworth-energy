import { useLocation } from 'react-router-dom';
import PageBanner from '../components/ui/PageBanner';
import Button from '../components/ui/Button';
import { findNavItem } from '../data/navigation';
import NotFound from './NotFound';

// Catch-all for menu links that don't have their own page file yet.
// When you build a page, add its <Route> in App.jsx and it replaces this automatically.
export default function ComingSoon() {
  const { pathname } = useLocation();
  const item = findNavItem(pathname);

  if (!item) return <NotFound />;

  return (
    <>
      <PageBanner title={item.label} trail={[...item.trail, item.label]} />
      <section className="bg-white py-20">
        <div className="container-site max-w-3xl text-center">
          <h2 className="text-2xl font-bold uppercase text-brand-navy">Content coming soon</h2>
          <p className="mt-4 text-[16px] text-brand-ink/75">
            We are preparing this page. Please check back shortly or get in touch with our team.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <Button to="/" variant="outline">Back to Home</Button>
            <Button to="/contact-us" variant="solidSoft">Contact Us</Button>
          </div>
        </div>
      </section>
    </>
  );
}
