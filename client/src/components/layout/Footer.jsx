import { Link } from 'react-router-dom';
import { footerLinks } from '../../data/navigation';
import { company } from '../../data/company';
import Logo from '../ui/Logo';

export default function Footer() {
  return (
    <footer className="bg-white">
      <div className="container-site">
        <div className="border-t border-black/10 pb-10 pt-12 text-center">
          <ul className="flex flex-col items-center gap-4 md:flex-row md:justify-center md:gap-10">
            {footerLinks.map((l) => (
              <li key={l.path}>
                <Link to={l.path} className="text-[17px] text-brand-muted hover:text-brand-blue">
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>

          <div className="mt-10 flex justify-center">
            <Logo className="h-[72px]" />
          </div>

          <p className="mx-auto mt-5 max-w-2xl text-[14px] leading-relaxed text-brand-muted">
            {company.address}
            <br />
                        Tel: {company.phone}
            <br />
            Email:{' '}
            <a href={`mailto:${company.email}`} className="hover:text-brand-blue">
              {company.email}
            </a>
          </p>

          <p className="mt-4 text-[17px] leading-relaxed text-brand-muted">
            © {company.year} {company.name}
            <br />– Registration No: {company.registrationNo}
          </p>
        </div>
      </div>
    </footer>
  );
}
