import { company } from '../../data/company';
import SectionHeading from '../../components/ui/SectionHeading';

const rows = [
  { label: 'Company', value: company.name },
  { label: 'Address', value: company.address },
    { label: 'Phone', value: company.phone },
  {
    label: 'Email',
    value: (
      <a href={`mailto:${company.email}`} className="text-brand-blue hover:underline">
        {company.email}
      </a>
    ),
  },
  { label: 'Registration No.', value: company.registrationNo },
];

export default function ContactInfo() {
  return (
    <div>
      <SectionHeading
        title="Connect With Us"
        text="Got a question for us, or feedback to share? Get in touch now."
      />
      <dl className="mt-8 divide-y divide-black/10 border-y border-black/10">
        {rows.map((r) => (
          <div key={r.label} className="py-4">
            <dt className="font-heading text-[12px] font-bold uppercase tracking-wider text-brand-blue">{r.label}</dt>
            <dd className="mt-1 text-[16px] leading-relaxed text-brand-ink">{r.value}</dd>
          </div>
        ))}
      </dl>
    </div>
  );
}
