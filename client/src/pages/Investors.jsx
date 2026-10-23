import { useMemo, useState } from 'react';
import { company } from '../data/company';
import Modal from '../components/ui/Modal';
import { subscribeToAlerts } from '../services/api';

/* ---------- Images (in /public/images) ---------- */
const IMG = {
  hero: '/images/HUC-1.jpg',
  alerts: '/images/seap.jpg',
  contact: '/images/sea.jpg',
};

/* ---------- Stock & financial data ----------
   Fill these in with Bizworth's real, published figures (or connect a market data feed).
   Anything left as null shows "—" on the page. */
const stock = {
  ticker: null, // e.g. 'KLSE: BIZWRTH'
  price: null, // e.g. 0.295
  change: null, // e.g. -0.005
  changePercent: null, // e.g. -1.7
  open: null,
  volume: null,
  high: null,
  low: null,
  previousClose: null,
  asOf: null, // e.g. '21/10/2026'
  // Price history for the chart, oldest first: [{ date: '2026-09-24', price: 0.35 }, ...]
  history: [],
};

// While the real figures above are empty, fill the page with illustrative numbers
// labelled "Sample data" so it can be previewed. Set to false before going live.
const SHOW_SAMPLE_DATA = true;

const financials = [
  { label: 'Revenue', value: null, icon: 'bag' },
  { label: 'PBT', value: null, icon: 'hands' },
  { label: 'PATMI', value: null, icon: 'coins' },
  { label: 'Net Asset per share', value: null, icon: 'chart', perShare: true },
];

const investorTypes = ['Shareholder', 'Investor', 'Analyst', 'Fund Manager', 'Media', 'Other'];

/* ---------- Helpers ---------- */
const show = (v, fmt = (x) => x) => (v === null || v === undefined || v === '' ? '—' : fmt(v));
const fmtNum = (n) => Number(n).toLocaleString('en-MY');

/* ---------- Icons (line style, like the original) ---------- */
function Icon({ name }) {
  const common = { fill: 'none', stroke: '#2b2b2b', strokeWidth: 2.2, strokeLinecap: 'round', strokeLinejoin: 'round' };
  const icons = {
    bag: (
      <>
        <path d="M38 14h14l-4 9h-6z" {...common} />
        <path d="M44 23c-10 6-22 22-22 34 0 6 5 9 12 9" {...common} />
        <ellipse cx="38" cy="64" rx="12" ry="4" {...common} />
        <path d="M26 64v6c0 2 5 4 12 4s12-2 12-4v-6M26 70v5c0 2 5 4 12 4s12-2 12-4v-5" {...common} />
        <path d="M54 54c6 4 10 10 6 18-3 5-10 6-10 6" {...common} />
      </>
    ),
    hands: (
      <>
        <circle cx="48" cy="26" r="13" {...common} />
        <path d="M48 18v16M52 21c-1-2-7-2-7 1s7 2 7 5-6 3-7 1" {...common} />
        <path d="M18 44l8 14 10 6v12M78 44l-8 14-10 6v12" {...common} />
        <path d="M24 48l8 10M72 48l-8 10" {...common} />
        <rect x="30" y="76" width="10" height="6" {...common} />
        <rect x="56" y="76" width="10" height="6" {...common} />
      </>
    ),
    coins: (
      <>
        {[18, 38, 58].map((x, i) => (
          <g key={x}>
            {Array.from({ length: i + 2 }).map((_, j) => (
              <ellipse key={j} cx={x + 6} cy={72 - j * 6} rx="10" ry="3.5" {...common} />
            ))}
          </g>
        ))}
        <path d="M20 50l50-18M64 30l8 1-4 7" {...common} />
      </>
    ),
    chart: (
      <>
        <rect x="14" y="16" width="62" height="44" {...common} />
        <path d="M10 16h70M22 46l6-14 5 12 6-18 5 16 6-10 5 6 6-10" {...common} />
        <ellipse cx="70" cy="68" rx="10" ry="3.5" {...common} />
        <path d="M60 68v8c0 2 4 4 10 4s10-2 10-4v-8" {...common} />
      </>
    ),
  };
  return (
    <svg viewBox="0 0 96 96" className="h-[96px] w-[96px]" aria-hidden="true">
      {icons[name]}
    </svg>
  );
}

/* ---------- Interactive share price chart ----------
   history: [{ date: '2026-09-24', price: 0.35 }, ...] oldest first.
   Hover (or drag on phones) to see each day's price. Use the range buttons to zoom. */
const RANGES = [
  { key: '1M', days: 31 },
  { key: '3M', days: 92 },
  { key: '6M', days: 183 },
  { key: '1Y', days: 366 },
  { key: 'All', days: Infinity },
];

const MONTHS = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
const parseDate = (s) => new Date(`${s}T00:00:00`);
const shortDate = (s) => {
  const d = parseDate(s);
  return `${d.getDate()} ${MONTHS[d.getMonth()]}`;
};
const longDate = (s) => {
  const d = parseDate(s);
  return `${d.getDate()} ${MONTHS[d.getMonth()]} ${d.getFullYear()}`;
};

// Illustrative price series for previewing the chart (only used when SHOW_SAMPLE_DATA is true).
function makeSampleHistory() {
  const out = [];
  const end = new Date();
  let price = 0.42;
  let seed = 7;
  const rand = () => {
    seed = (seed * 9301 + 49297) % 233280;
    return seed / 233280;
  };
  for (let i = 365; i >= 0; i -= 1) {
    const d = new Date(end);
    d.setDate(end.getDate() - i);
    if (d.getDay() === 0 || d.getDay() === 6) continue;
    price = Math.max(0.2, price + (rand() - 0.52) * 0.008);
    const iso = `${d.getFullYear()}-${String(d.getMonth() + 1).padStart(2, '0')}-${String(d.getDate()).padStart(2, '0')}`;
    out.push({ date: iso, price: Number(price.toFixed(3)), volume: Math.round(400000 + rand() * 900000) });
  }
  return out;
}

function PriceChart({ history, sample = false }) {
  const [range, setRange] = useState('3M');
  const [hover, setHover] = useState(null);

  const data = useMemo(() => {
    if (!history || history.length < 2) return [];
    const { days } = RANGES.find((r) => r.key === range);
    if (days === Infinity) return history;
    const last = parseDate(history[history.length - 1].date);
    const from = new Date(last);
    from.setDate(last.getDate() - days);
    const filtered = history.filter((h) => parseDate(h.date) >= from);
    return filtered.length >= 2 ? filtered : history.slice(-2);
  }, [history, range]);

  if (data.length < 2) {
    return (
      <div className="flex aspect-[16/10] w-full items-center justify-center border border-dashed border-black/15 bg-brand-mist px-6 text-center">
        <p className="text-[15px] text-brand-muted">The share price chart will appear here once price data is added.</p>
      </div>
    );
  }

  const W = 600;
  const H = 360;
  const pad = { l: 10, r: 60, t: 20, b: 40 };
  const prices = data.map((h) => h.price);
  const lo = Math.min(...prices);
  const hi = Math.max(...prices);
  const spread = hi - lo || hi * 0.05 || 1;
  const min = lo - spread * 0.08;
  const max = hi + spread * 0.08;
  const x = (i) => pad.l + (i * (W - pad.l - pad.r)) / (data.length - 1);
  const y = (p) => pad.t + ((max - p) * (H - pad.t - pad.b)) / (max - min);
  const line = data.map((h, i) => `${i ? 'L' : 'M'}${x(i).toFixed(1)},${y(h.price).toFixed(1)}`).join(' ');
  const area = `${line} L${x(data.length - 1)},${H - pad.b} L${x(0)},${H - pad.b} Z`;
  const ticks = [0, 0.25, 0.5, 0.75, 1].map((t) => min + t * (max - min));
  const labelEvery = Math.max(1, Math.ceil(data.length / 7));

  const first = data[0].price;
  const lastPrice = data[data.length - 1].price;
  const periodChange = lastPrice - first;
  const periodPct = (periodChange / first) * 100;
  const up = periodChange >= 0;

  const pick = (clientX, target) => {
    const rect = target.getBoundingClientRect();
    const svgX = ((clientX - rect.left) / rect.width) * W;
    const i = Math.round(((svgX - pad.l) / (W - pad.l - pad.r)) * (data.length - 1));
    setHover(Math.min(data.length - 1, Math.max(0, i)));
  };

  const h = hover !== null ? data[hover] : null;
  const hChange = h ? h.price - first : 0;
  const tipLeft = h ? (x(hover) / W) * 100 : 0;

  return (
    <div>
      {/* Range buttons + period change */}
      <div className="mb-3 flex flex-wrap items-center justify-between gap-3">
        <div className="flex gap-1" role="tablist" aria-label="Chart range">
          {RANGES.map((r) => (
            <button
              key={r.key}
              type="button"
              role="tab"
              aria-selected={range === r.key}
              onClick={() => {
                setRange(r.key);
                setHover(null);
              }}
              className={`h-8 min-w-[44px] px-3 font-heading text-[13px] font-semibold transition-colors ${
                range === r.key ? 'bg-brand-blue text-white' : 'bg-brand-mist text-brand-ink hover:bg-brand-blue/10'
              }`}
            >
              {r.key}
            </button>
          ))}
        </div>
        <p className={`font-heading text-[14px] font-semibold ${up ? 'text-green-600' : 'text-red-600'}`}>
          {up ? '+' : ''}
          {periodChange.toFixed(3)} ({up ? '+' : ''}
          {periodPct.toFixed(2)}%) over {range === 'All' ? 'all data' : range}
        </p>
      </div>

      {/* Chart */}
      <div className="relative">
        <svg
          viewBox={`0 0 ${W} ${H}`}
          className="w-full touch-pan-y select-none"
          role="img"
          aria-label="Interactive share price chart"
          onMouseMove={(e) => pick(e.clientX, e.currentTarget)}
          onMouseLeave={() => setHover(null)}
          onTouchStart={(e) => pick(e.touches[0].clientX, e.currentTarget)}
          onTouchMove={(e) => pick(e.touches[0].clientX, e.currentTarget)}
          onTouchEnd={() => setHover(null)}
        >
          {ticks.map((t) => (
            <g key={t}>
              <line x1={pad.l} x2={W - pad.r} y1={y(t)} y2={y(t)} stroke="#e5e5ea" />
              <text x={W - pad.r + 8} y={y(t) + 4} fontSize="12" fill="#444">
                {t.toFixed(3)}
              </text>
            </g>
          ))}
          <path d={area} fill="#2e27c3" fillOpacity="0.4" />
          <path d={line} fill="none" stroke="#4b45d1" strokeWidth="2.5" strokeLinejoin="round" />
          {data.map(
            (d, i) =>
              i % labelEvery === 0 && (
                <text key={d.date} x={x(i)} y={H - pad.b + 22} fontSize="12" textAnchor="middle" fill="#444">
                  {shortDate(d.date)}
                </text>
              )
          )}

          {h && (
            <g pointerEvents="none">
              <line x1={x(hover)} x2={x(hover)} y1={pad.t} y2={H - pad.b} stroke="#17166b" strokeDasharray="4 4" />
              <line x1={pad.l} x2={W - pad.r} y1={y(h.price)} y2={y(h.price)} stroke="#17166b" strokeOpacity="0.25" />
              <circle cx={x(hover)} cy={y(h.price)} r="6" fill="#fff" stroke="#2e27c3" strokeWidth="3" />
              <rect x={W - pad.r + 2} y={y(h.price) - 11} width="54" height="22" fill="#2e27c3" />
              <text x={W - pad.r + 29} y={y(h.price) + 4} fontSize="12" fill="#fff" textAnchor="middle">
                {h.price.toFixed(3)}
              </text>
            </g>
          )}
        </svg>

        {/* Tooltip */}
        {h && (
          <div
            className="pointer-events-none absolute top-2 z-10 min-w-[150px] border border-black/10 bg-white px-3 py-2 shadow-lg"
            style={{ left: `${tipLeft}%`, transform: `translateX(${tipLeft > 60 ? '-105%' : '5%'})` }}
          >
            <p className="font-heading text-[12px] font-semibold uppercase tracking-wide text-brand-muted">{longDate(h.date)}</p>
            <p className="font-heading text-[18px] font-bold text-brand-ink">MYR {h.price.toFixed(3)}</p>
            <p className={`text-[13px] font-semibold ${hChange >= 0 ? 'text-green-600' : 'text-red-600'}`}>
              {hChange >= 0 ? '+' : ''}
              {hChange.toFixed(3)} ({hChange >= 0 ? '+' : ''}
              {((hChange / first) * 100).toFixed(2)}%)
            </p>
          </div>
        )}

      
      </div>
      <p className="mt-2 text-[13px] text-brand-muted">Hover over the chart (or drag on mobile) to see daily prices.</p>
    </div>
  );
}

const SAMPLE_HISTORY = makeSampleHistory();

// Illustrative figures only — shown with a "Sample data" label.
const SAMPLE_FINANCIALS = { Revenue: '1,250', PBT: '185', PATMI: '142', 'Net Asset per share': '0.85' };

// Uses the real figures when filled in, otherwise sample figures (when SHOW_SAMPLE_DATA is on).
function useStockData() {
  const hasReal = stock.price !== null;
  if (hasReal || !SHOW_SAMPLE_DATA) return { ...stock, sample: false };

  const h = SAMPLE_HISTORY;
  const last = h[h.length - 1];
  const prev = h[h.length - 2];
  const change = Number((last.price - prev.price).toFixed(3));
  const [y, m, d] = last.date.split('-');
  return {
    ticker: 'KLSE: BIZWRTH',
    price: last.price.toFixed(3),
    change,
    changePercent: ((change / prev.price) * 100).toFixed(1),
    open: prev.price.toFixed(3),
    volume: last.volume,
    high: Math.max(last.price, prev.price).toFixed(3),
    low: Math.min(last.price, prev.price).toFixed(3),
    previousClose: prev.price.toFixed(3),
    asOf: `${d}/${m}/${y}`,
    history: h,
    sample: true,
  };
}

const SampleBadge = ({ className = '' }) => (
  <span className={`inline-block bg-brand-orange px-2 py-1 font-heading text-[11px] font-bold uppercase tracking-wide text-white ${className}`}>
    Sample data
  </span>
);

/* ---------- Sections ---------- */
function StockInformation() {
  const stock = useStockData();
  const negative = stock.change !== null && stock.change < 0;
  const changeColor = stock.change === null ? 'text-brand-muted' : negative ? 'text-red-600' : 'text-green-600';
  const rows = [
    { label: 'Open', value: show(stock.open) },
    { label: 'Volume', value: show(stock.volume, fmtNum) },
    { label: 'High', value: show(stock.high) },
    { label: 'Low', value: show(stock.low) },
    { label: 'Previous Close', value: show(stock.previousClose) },
  ];

  return (
    <section className="bg-white py-14 md:py-20">
      <div className="mx-auto grid max-w-[1440px] items-start gap-12 px-5 md:px-8 lg:grid-cols-2 lg:px-[120px] xl:px-[250px] xl:pr-[120px]">
        {/* Table */}
        <div className="lg:pt-14">
          <h2 className="border-b border-black/10 pb-5 font-heading text-[30px] font-extrabold text-brand-ink md:text-[34px]">
            Stock Information 
          </h2>
          <div className="flex items-start justify-between gap-4 border-b border-black/10 py-5">
            <div className="font-heading text-[18px] leading-[1.9] text-brand-ink md:text-[21px]">
              <p>{company.name}</p>
              <p>{show(stock.ticker)}</p>
            </div>
            <div className="text-right font-heading leading-[1.7]">
              <p className="text-[24px] font-semibold text-brand-ink md:text-[28px]">{show(stock.price, (v) => `RM${v}`)}</p>
              <p className={`text-[18px] font-medium md:text-[21px] ${changeColor}`}>
                {stock.change === null ? '—' : `${stock.change > 0 ? '+' : ''}${stock.change} (${stock.changePercent}%)`}
              </p>
            </div>
          </div>
          <dl>
            {rows.map((r) => (
              <div key={r.label} className="flex justify-between border-b border-black/10 py-3.5 font-heading text-[18px]">
                <dt className="font-semibold text-brand-ink">{r.label}</dt>
                <dd className="font-medium text-brand-blue">{r.value}</dd>
              </div>
            ))}
          </dl>
        </div>

        {/* Chart */}
        <div>
          <div className="mb-3 flex flex-wrap items-end justify-between gap-x-6 gap-y-1">
            <div>
              <p className="text-[20px] font-semibold text-brand-ink">{stock.ticker ? stock.ticker.replace(/^KLSE:\s*/, '') : 'Share Price'}</p>
              <p className="text-[22px] font-semibold text-brand-blue">{show(stock.price, (v) => `MYR ${v}`)}</p>
            </div>
            <p className="text-[14px] text-brand-ink/80">
              {stock.change === null ? '' : `${stock.change}(${stock.changePercent}%)`}
            </p>
            <p className="text-[14px] text-brand-ink/80">{show(stock.asOf)}</p>
          </div>
          <PriceChart history={stock.history} sample={stock.sample} />
        </div>
      </div>
    </section>
  );
}

function FinancialHighlights() {
  const useSample = SHOW_SAMPLE_DATA && financials.every((f) => f.value === null);
  return (
    <section
      className="relative py-16 md:py-24"
      style={{ background: 'linear-gradient(180deg, #f3f5fb 0%, #dfe6f4 100%)' }}
    >
      {/* light hexagon pattern */}
      <svg className="pointer-events-none absolute inset-0 h-full w-full opacity-60" aria-hidden="true">
        <defs>
          <pattern id="hex" width="160" height="92" patternUnits="userSpaceOnUse">
            <path d="M0 46 L40 0 H120 L160 46 L120 92 H40 Z" fill="none" stroke="#ffffff" strokeWidth="6" />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#hex)" />
      </svg>

      <div className="container-site relative">
        <h2 className="text-center font-heading text-[30px] font-medium text-brand-ink md:text-[36px]">Financial Highlights</h2>
        {useSample && (
          <p className="mt-3 text-center">
            
          </p>
        )}
        <div className="mx-auto mt-12 grid max-w-[1460px] grid-cols-1 gap-12 sm:grid-cols-2 lg:grid-cols-4">
          {financials.map((f) => (
            <div key={f.label} className="flex flex-col items-center text-center">
              <Icon name={f.icon} />
              <p className="mt-4 font-heading text-[32px] font-extrabold text-[#5b54d6] md:text-[38px]">
                {show(useSample ? SAMPLE_FINANCIALS[f.label] : f.value, (v) => (f.perShare ? `RM${v}` : `RM${v} mil`))}
              </p>
              <p className="mt-2 text-[17px] text-brand-ink">{f.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

const emptyForm = { name: '', type: '', email: '', website: '' };
const field =
  'h-[46px] w-full bg-white px-4 text-[17px] text-brand-ink placeholder:text-brand-muted focus:outline-none focus:ring-2 focus:ring-brand-cyan';

function EmailAlert() {
  const [form, setForm] = useState(emptyForm);
  const [sending, setSending] = useState(false);
  const [modal, setModal] = useState(null);

  const update = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const submit = async (e) => {
    e.preventDefault();
    if (!form.type) {
      setModal({ tone: 'error', title: 'Almost there', text: 'Please select which best describes you.' });
      return;
    }
    setSending(true);
    try {
      await subscribeToAlerts(form);
      setForm(emptyForm);
      setModal({
        tone: 'success',
        title: 'You are subscribed',
        text: 'Thank you. You will receive Investor Relations alerts from Bizworth Oil & Gas by email.',
      });
    } catch (err) {
      setModal({ tone: 'error', title: 'Could not subscribe', text: err.message });
    } finally {
      setSending(false);
    }
  };

  return (
    <section
      className="py-20 md:py-28"
      style={{ background: `linear-gradient(rgba(40,60,110,0.35), rgba(40,60,110,0.35)), url(${IMG.alerts}) center/cover no-repeat, #5a7fb5` }}
    >
      <div className="container-site">
        <div className="mx-auto max-w-[1400px] text-center">
          <h2 className="font-heading text-[32px] font-medium text-white md:text-[38px]">Email Alert</h2>
          <p className="mx-auto mt-6 max-w-[620px] font-heading text-[19px] font-extrabold leading-[1.3] text-white md:text-[22px]">
            You can register here for Investor Relations alerts from {company.shortName}.
          </p>

          <form onSubmit={submit} className="mt-10">
            <div className="grid gap-4 md:grid-cols-3 md:gap-8">
              <input name="name" value={form.name} onChange={update} placeholder="Name" required className={field} />
              <select
                name="type"
                value={form.type}
                onChange={update}
                className={`${field} ${form.type ? 'text-brand-ink' : 'text-brand-muted'}`}
              >
                <option value="">- Select One -</option>
                {investorTypes.map((t) => (
                  <option key={t} value={t} className="text-brand-ink">
                    {t}
                  </option>
                ))}
              </select>
              <input name="email" type="email" value={form.email} onChange={update} placeholder="Email address" required className={field} />
            </div>

            {/* Hidden spam trap (bots fill it, people never see it) */}
            <input
              name="website"
              value={form.website}
              onChange={update}
              tabIndex={-1}
              autoComplete="off"
              className="hidden"
              aria-hidden="true"
            />

            <button
              type="submit"
              disabled={sending}
              className="mt-10 inline-flex h-[54px] min-w-[172px] items-center justify-center bg-brand-deep/90 px-10 font-heading text-[18px] font-medium text-white transition-colors hover:bg-brand-blue disabled:opacity-60"
            >
              {sending ? 'Submitting...' : 'Submit'}
            </button>
          </form>
        </div>
      </div>

      <Modal open={!!modal} tone={modal?.tone} title={modal?.title} onClose={() => setModal(null)}>
        {modal?.text}
      </Modal>
    </section>
  );
}

function InvestorContact() {
  return (
    <section
      className="py-16 md:py-20"
      style={{ background: `linear-gradient(rgba(20,30,50,0.55), rgba(20,30,50,0.55)), url(${IMG.contact}) center/cover no-repeat, #1f3a5f` }}
    >
      <div className="container-site">
        <div className="mx-auto max-w-[1000px] text-white">
          <h2 className="text-center font-heading text-[24px] font-semibold leading-[1.3] md:text-[32px]">
            {company.name}
            <br />
            [Registration No: {company.registrationNo}]
          </h2>

          <div className="mt-10 grid gap-8 font-heading text-[18px] leading-[1.6] md:grid-cols-2 md:text-[20px]">
            <div className="flex gap-6">
              <svg viewBox="0 0 24 24" className="mt-1 h-7 w-7 shrink-0" fill="none" stroke="currentColor" strokeWidth="2">
                <circle cx="12" cy="12" r="7" />
                <circle cx="12" cy="12" r="2.5" fill="currentColor" />
                <path d="M12 1v4M12 19v4M1 12h4M19 12h4" />
              </svg>
              <p>{company.address}</p>
            </div>
            <div className="flex gap-6">
              <svg viewBox="0 0 24 24" className="mt-1 h-7 w-7 shrink-0" fill="currentColor">
                <path d="M6.6 10.8a15.1 15.1 0 006.6 6.6l2.2-2.2a1 1 0 011-.25 11.4 11.4 0 003.6.57 1 1 0 011 1V20a1 1 0 01-1 1A17 17 0 013 4a1 1 0 011-1h3.5a1 1 0 011 1c0 1.25.2 2.45.57 3.57a1 1 0 01-.25 1z" />
              </svg>
              <p>{company.phone}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ---------- Page ---------- */
export default function Investors() {
  return (
    <>
      {/* Hero + title band */}
      <section
        className="relative flex min-h-[300px] flex-col justify-end md:min-h-[340px]"
        style={{ background: `url(${IMG.hero}) center/cover no-repeat, linear-gradient(180deg, #7fa7e0 0%, #3d5fc4 100%)` }}
      >
        <div className="bg-brand-blue/80">
          <div className="mx-auto max-w-[1440px] px-5 py-9 md:px-8 lg:px-[120px] xl:px-[360px]">
            <h1 className="font-heading text-[32px] font-extrabold text-brand-cyan md:text-[42px]">Investor Relations</h1>
          </div>
        </div>
      </section>

      <StockInformation />
      <FinancialHighlights />
      <EmailAlert />
      <InvestorContact />
    </>
  );
}