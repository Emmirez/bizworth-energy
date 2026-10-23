import { useState } from 'react';
import { Link } from 'react-router-dom';
import { company } from '../../data/company';

// Uses /public/biz.png. Shows a text wordmark if the file is missing.
export default function Logo({ className = 'h-[56px] lg:h-[80px]', linked = true }) {
  const [failed, setFailed] = useState(false);

  const content = failed ? (
    <span className="font-heading text-xl font-bold uppercase leading-tight text-brand-navy">
      Bizworth
      <br />
      Oil &amp; Gas
    </span>
  ) : (
    <img
      src={company.logo}
      alt={company.shortName}
      className={`w-auto object-contain ${className}`}
      onError={() => setFailed(true)}
    />
  );

  if (!linked) return content;
  return (
    <Link to="/" aria-label={`${company.shortName} home`} className="flex shrink-0 items-center">
      {content}
    </Link>
  );
}
