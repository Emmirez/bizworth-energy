import JoinUs from './JoinUs';
import ConnectWithUs from './ConnectWithUs';

// Join Us + Connect With Us — stacked on mobile, side by side on desktop.
export default function EngageSection() {
  return (
    <section className="bg-white py-5">
      <div className="container-site grid gap-5 lg:grid-cols-2">
        <JoinUs />
        <ConnectWithUs />
      </div>
    </section>
  );
}
