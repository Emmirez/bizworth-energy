import { businessSegments } from '../../data/home';
import BusinessSegmentCard from './BusinessSegmentCard';

// Engineering & Construction, Operations & Maintenance, Drilling, Strategic Assets.
export default function BusinessSegments() {
  return (
    <section className="grid grid-cols-1 lg:grid-cols-2">
      {businessSegments.map((segment) => (
        <BusinessSegmentCard key={segment.id} segment={segment} />
      ))}
    </section>
  );
}
