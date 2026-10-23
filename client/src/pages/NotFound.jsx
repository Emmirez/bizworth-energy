import Button from '../components/ui/Button';

export default function NotFound() {
  return (
    <section className="flex min-h-[60vh] items-center bg-brand-mist">
      <div className="container-site text-center">
        <p className="font-heading text-[90px] font-black leading-none text-brand-blue">404</p>
        <h1 className="mt-4 text-2xl font-bold uppercase text-brand-navy">Page not found</h1>
        <p className="mt-3 text-brand-ink/70">The page you are looking for does not exist or has been moved.</p>
        <Button to="/" variant="solid" className="mt-8">Back to Home</Button>
      </div>
    </section>
  );
}
