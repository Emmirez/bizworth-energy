import { Link } from 'react-router-dom';

export default function LinkCardGrid({ items }) {
  return (
    <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
      {items.map((item) => (
        <div key={item.path} className="flex flex-col border border-black/10 bg-brand-mist transition-shadow hover:shadow-lg">
          <div className="h-1 bg-gradient-to-r from-brand-blue via-brand-cyan to-brand-orange" />
          <div className="flex flex-1 flex-col p-6">
                      {item.header ? (
              <p className="font-heading text-[17px] font-bold uppercase leading-snug text-brand-navy">{item.label}</p>
            ) : (
              <Link
                to={item.path}
                className="font-heading text-[17px] font-bold uppercase leading-snug text-brand-navy hover:text-brand-blue"
              >
                {item.label}
              </Link>
            )}

            {item.children?.length > 0 && (
              <ul className="mt-4 space-y-2">
                {item.children.map((child) => (
                  <li key={child.path}>
                    <Link to={child.path} className="flex gap-2 text-[15px] text-brand-ink/80 hover:text-brand-blue">
                      <span className="mt-[9px] h-[2px] w-3 shrink-0 bg-brand-orange" />
                      {child.label}
                    </Link>
                  </li>
                ))}
              </ul>
            )}

                      {!item.header && (
              <Link
                to={item.path}
                className="mt-auto pt-6 font-heading text-[13px] font-semibold uppercase tracking-wider text-brand-blue hover:text-brand-deep"
              >
                Learn more →
              </Link>
            )}  
          </div>
        </div>
      ))}
    </div>
  );
}
