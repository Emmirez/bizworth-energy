import { Link } from 'react-router-dom';

const variants = {
  solid:
    'bg-brand-deep text-white border border-brand-deep/80 hover:bg-brand-blue hover:border-brand-blue uppercase text-[17px] font-bold tracking-wide',
  solidSoft:
    'bg-brand-deep/95 text-white border border-brand-deep hover:bg-brand-blue text-[16px] font-bold',
  outline:
    'bg-white text-brand-deep border border-brand-deep hover:bg-brand-deep hover:text-white text-[16px] font-bold',
  primary:
    'bg-brand-blue text-white border border-brand-blue hover:bg-brand-deep text-[15px] font-semibold',
};

export default function Button({
  to,
  href,
  onClick,
  type = 'button',
  variant = 'solid',
  className = '',
  children,
  disabled,
}) {
  const classes = `inline-flex min-h-[52px] items-center justify-center px-8 font-heading transition-colors duration-200 disabled:cursor-not-allowed disabled:opacity-60 ${variants[variant]} ${className}`;

  if (to) {
    return (
      <Link to={to} className={classes}>
        {children}
      </Link>
    );
  }
  if (href) {
    return (
      <a href={href} className={classes} target="_blank" rel="noreferrer">
        {children}
      </a>
    );
  }
  return (
    <button type={type} onClick={onClick} className={classes} disabled={disabled}>
      {children}
    </button>
  );
}
