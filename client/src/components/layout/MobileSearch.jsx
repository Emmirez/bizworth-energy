import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export default function MobileSearch({ onSearch }) {
  const [query, setQuery] = useState('');
  const navigate = useNavigate();

  const submit = (e) => {
    e.preventDefault();
    if (!query.trim()) return;
    navigate(`/search?q=${encodeURIComponent(query.trim())}`);
    setQuery('');
    onSearch?.();
  };

  return (
    <form onSubmit={submit} className="flex shrink-0 items-center gap-3 border-t border-black/10 bg-brand-mist px-4 py-5">
      <input
        type="search"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder="Search..."
        className="min-w-0 flex-1 bg-transparent font-heading text-[16px] text-brand-ink placeholder:text-brand-muted focus:outline-none"
      />
      <button
        type="submit"
        className="bg-brand-blue px-6 py-[10px] font-heading text-[16px] font-medium text-white hover:bg-brand-deep"
      >
        Search
      </button>
    </form>
  );
}
