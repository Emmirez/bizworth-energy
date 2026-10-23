import { useState } from 'react';
import { company } from '../../data/company';
import Modal from '../../components/ui/Modal';
import { submitWhistleblowReport, checkWhistleblowReport } from '../../services/api';

/* ---------- Content ---------- */
const HERO_IMAGE = '/images/complaince.jpg';
const N = company.shortName;

// Must match the lists in server/controllers/whistleblowController.js
const COUNTRIES = [
  'Angola', 'Australia', 'Brazil', 'Brunei', 'India', 'Indonesia', 'Malaysia', 'Mexico', 'Netherlands',
  'Singapore', 'Thailand', 'United Arab Emirates', 'United Kingdom & Northern Ireland', 'USA',
];
const CATEGORIES = [
  'Bribery or Corruption', 'Fraud or Theft', 'Conflict of Interest', 'Health, Safety or Environment',
  'Harassment or Discrimination', 'Misuse of Company Assets', 'Breach of Code of Conduct', 'Other',
];

const emptyReport = {
  category: '', description: '', location: '', whenOccurred: '',
  anonymous: true, name: '', email: '', phone: '', password: '', confirmPassword: '', website: '',
};

const field =
  'w-full border border-black/15 bg-white px-4 py-3 text-[16px] text-brand-ink placeholder:text-brand-muted focus:border-brand-blue focus:outline-none';
const label = 'mb-1.5 block font-heading text-[14px] font-semibold text-brand-ink';

/* ---------- Small pieces ---------- */
const Heading = ({ children }) => (
  <>
    <h2 className="font-heading text-[26px] font-bold text-brand-ink md:text-[30px]">{children}</h2>
    <span className="mb-6 mt-4 block h-[2px] w-[66px] bg-brand-orange" />
  </>
);

const SolidButton = ({ children, disabled, type = 'submit' }) => (
  <button
    type={type}
    disabled={disabled}
    className="inline-flex h-[52px] min-w-[200px] items-center justify-center bg-brand-deep px-8 font-heading text-[16px] font-bold text-white transition-colors hover:bg-brand-blue disabled:opacity-60"
  >
    {children}
  </button>
);

/* ---------- Report form ---------- */
function ReportForm({ country, onChangeCountry, onDone }) {
  const [form, setForm] = useState(emptyReport);
  const [sending, setSending] = useState(false);
  const [error, setError] = useState(null);
  const update = (e) => {
    const { name, value, type, checked } = e.target;
    setForm({ ...form, [name]: type === 'checkbox' ? checked : value });
  };

  const submit = async (e) => {
    e.preventDefault();
    setSending(true);
    try {
      const { reportKey } = await submitWhistleblowReport({ ...form, country });
      setForm(emptyReport);
      onDone(reportKey);
    } catch (err) {
      setError(err.message);
    } finally {
      setSending(false);
    }
  };

  return (
    <form onSubmit={submit} className="mt-8 space-y-6 border border-black/10 bg-brand-mist p-6 md:p-8">
      <div className="flex flex-wrap items-center justify-between gap-3">
        <p className="font-heading text-[15px] text-brand-ink">
          Country: <strong>{country}</strong>
        </p>
        <button type="button" onClick={onChangeCountry} className="font-heading text-[14px] font-semibold text-brand-blue hover:underline">
          Change country
        </button>
      </div>

      <div>
        <label className={label} htmlFor="category">2. Type of concern *</label>
        <select id="category" name="category" value={form.category} onChange={update} required className={field}>
          <option value="">- Select -</option>
          {CATEGORIES.map((c) => (
            <option key={c}>{c}</option>
          ))}
        </select>
      </div>

      <div>
        <label className={label} htmlFor="description">3. Describe what happened *</label>
        <textarea
          id="description"
          name="description"
          value={form.description}
          onChange={update}
          required
          rows={7}
          placeholder="Please include who was involved, what happened and any details that will help us look into your concern."
          className={field}
        />
      </div>

      <div className="grid gap-6 md:grid-cols-2">
        <div>
          <label className={label} htmlFor="location">Where did it happen?</label>
          <input id="location" name="location" value={form.location} onChange={update} placeholder="Site, office or vessel" className={field} />
        </div>
        <div>
          <label className={label} htmlFor="whenOccurred">When did it happen?</label>
          <input id="whenOccurred" name="whenOccurred" value={form.whenOccurred} onChange={update} placeholder="Date or approximate time" className={field} />
        </div>
      </div>

      <div className="border-t border-black/10 pt-6">
        <label className="flex cursor-pointer items-start gap-3">
          <input type="checkbox" name="anonymous" checked={form.anonymous} onChange={update} className="mt-1 h-5 w-5 accent-brand-blue" />
          <span className="text-[16px] text-brand-ink">
            <strong>Submit anonymously.</strong> Untick this if you are happy to share your contact details.
          </span>
        </label>
        {!form.anonymous && (
          <div className="mt-5 grid gap-6 md:grid-cols-3">
            <input name="name" value={form.name} onChange={update} placeholder="Name" className={field} />
            <input name="email" type="email" value={form.email} onChange={update} placeholder="Email" className={field} />
            <input name="phone" value={form.phone} onChange={update} placeholder="Phone" className={field} />
          </div>
        )}
      </div>

      <div className="border-t border-black/10 pt-6">
        <p className={label}>4. Choose a password *</p>
        <p className="mb-3 text-[15px] text-brand-ink/80">
          You will use this password with your report key to check your report later. Keep it safe.
        </p>
        <div className="grid gap-6 md:grid-cols-2">
          <input name="password" type="password" value={form.password} onChange={update} placeholder="Password (min. 6 characters)" required minLength={6} className={field} />
          <input name="confirmPassword" type="password" value={form.confirmPassword} onChange={update} placeholder="Confirm password" required className={field} />
        </div>
      </div>

      <input name="website" value={form.website} onChange={update} tabIndex={-1} autoComplete="off" className="hidden" aria-hidden="true" />

      <SolidButton disabled={sending}>{sending ? 'Submitting...' : 'Submit Report'}</SolidButton>

      <Modal open={!!error} tone="error" title="Could not submit" onClose={() => setError(null)}>
        {error}
      </Modal>
    </form>
  );
}

/* ---------- Check a report ---------- */
function CheckReport() {
  const [creds, setCreds] = useState({ reportKey: '', password: '' });
  const [result, setResult] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  const submit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setResult(null);
    try {
      setResult(await checkWhistleblowReport(creds));
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <form onSubmit={submit} className="grid gap-4 md:grid-cols-[1fr_1fr_auto]">
        <input
          value={creds.reportKey}
          onChange={(e) => setCreds({ ...creds, reportKey: e.target.value })}
          placeholder="Report key (e.g. 4821-7735-0193)"
          required
          className={field}
        />
        <input
          type="password"
          value={creds.password}
          onChange={(e) => setCreds({ ...creds, password: e.target.value })}
          placeholder="Password"
          required
          className={field}
        />
        <SolidButton disabled={loading}>{loading ? 'Checking...' : 'Check Report'}</SolidButton>
      </form>

      {result && (
        <div className="mt-6 border-l-4 border-brand-blue bg-brand-mist p-6">
          <p className="font-heading text-[14px] text-brand-muted">Report {result.reportKey}</p>
          <p className="mt-1 font-heading text-[20px] font-bold text-brand-ink">Status: {result.status}</p>
          <p className="mt-1 text-[15px] text-brand-ink/80">
            {result.category} · submitted {new Date(result.submittedAt).toLocaleDateString('en-GB')}
          </p>
          <div className="mt-5 space-y-4">
            {result.responses.length === 0 ? (
              <p className="text-[15px] text-brand-ink/80">There are no replies yet. Please check again in 5–6 business days.</p>
            ) : (
              result.responses.map((r) => (
                <div key={r.date} className="bg-white p-4">
                  <p className="font-heading text-[13px] font-semibold text-brand-blue">
                    Reply · {new Date(r.date).toLocaleDateString('en-GB')}
                  </p>
                  <p className="mt-1 whitespace-pre-line text-[15px] text-brand-ink">{r.message}</p>
                </div>
              ))
            )}
          </div>
        </div>
      )}

      <Modal open={!!error} tone="error" title="Report not found" onClose={() => setError(null)}>
        {error}
      </Modal>
    </div>
  );
}

/* ---------- Page ---------- */
export default function WhistleblowingPortal() {
  const [country, setCountry] = useState('');
  const [confirmed, setConfirmed] = useState('');
  const [reportKey, setReportKey] = useState(null);

  return (
    <>
      {/* Hero + title band */}
      <section
        className="relative flex min-h-[300px] flex-col justify-end md:min-h-[380px]"
        style={{ background: `url(${HERO_IMAGE}) center/cover no-repeat, linear-gradient(135deg, #6fa3d8 0%, #2e27c3 100%)` }}
      >
        <div className="bg-brand-blue/80">
          <div className="container-site py-9">
            <h1 className="font-heading text-[32px] font-extrabold leading-[1.1] text-brand-cyan md:text-[42px]">Whistleblowing Portal</h1>
          </div>
        </div>
      </section>

      <section className="bg-white py-12 md:py-16">
        <div className="container-site">
          <div className="mx-auto grid max-w-[1200px] gap-12 lg:grid-cols-[1fr_380px]">
            {/* Make a report */}
            <div>
              <Heading>To Make a Report</Heading>

              {!confirmed ? (
                <div>
                  <label className={label} htmlFor="country">1. Select the country in which you are located.</label>
                  <div className="flex flex-col gap-4 sm:flex-row">
                    <select id="country" value={country} onChange={(e) => setCountry(e.target.value)} className={`${field} sm:max-w-[420px]`}>
                      <option value="">- Select -</option>
                      {COUNTRIES.map((c) => (
                        <option key={c}>{c}</option>
                      ))}
                    </select>
                    <button
                      type="button"
                      disabled={!country}
                      onClick={() => setConfirmed(country)}
                      className="inline-flex h-[50px] items-center justify-center bg-brand-deep px-8 font-heading text-[16px] font-bold text-white transition-colors hover:bg-brand-blue disabled:cursor-not-allowed disabled:opacity-50"
                    >
                      Continue
                    </button>
                  </div>
                </div>
              ) : (
                <ReportForm country={confirmed} onChangeCountry={() => setConfirmed('')} onDone={setReportKey} />
              )}

              <div className="mt-8 space-y-4 text-[16px] leading-[1.6] text-brand-ink">
                <p>
                  After you complete your report you will be assigned a unique code called a <strong>“report key.”</strong>{' '}
                  Write down your report key and password and keep them in a safe place. After 5–6 business days, use your
                  report key and password to check your report for feedback or questions.
                </p>
                <p className="border-l-4 border-brand-orange bg-[#fff4ec] p-4">
                  <strong>This portal is NOT an emergency service.</strong> Do not use this site to report events presenting
                  an immediate threat to life or property. Reports submitted through this service may not receive an
                  immediate response. If you require emergency assistance, please contact your local authorities.
                </p>
              </div>

              {/* Check a report */}
              <div className="mt-14">
                <Heading>Check an Existing Report</Heading>
                <CheckReport />
              </div>
            </div>

            {/* Our commitment */}
            <aside className="self-start bg-gradient-to-b from-[#0d8fcf] to-[#1e5aa8] p-7 text-white">
              <h2 className="font-heading text-[24px] font-semibold uppercase">Our Commitment</h2>
              <span className="mt-4 block h-[2px] w-[66px] bg-brand-orange" />
              <div className="mt-6 space-y-4 text-[15px] leading-[1.6]">
                <p>
                  {N} is an organisation with strong values of responsibility and integrity. Our Code of Ethical Conduct
                  contains general guidelines for conducting business with the highest standards of ethics.
                </p>
                <p>
                  {N} is committed to an environment where open, honest communications are the expectation, not the
                  exception. We want you to feel comfortable in approaching your supervisor or management in instances
                  where you believe violations of policies or standards have occurred.
                </p>
                <p>
                  In situations where you prefer to place an anonymous report in confidence, you are encouraged to use this
                  portal. You may submit reports relating to violations of our Code of Ethical Conduct, ask for guidance on
                  policies and procedures, or share positive suggestions and stories.
                </p>
                <p>
                  Reports are received by our Group Integrity &amp; Governance team and handled in confidence, and anonymously
                  if you choose. You have our guarantee that your comments will be heard.
                </p>
              </div>
            </aside>
          </div>
        </div>
      </section>

      {/* Report key popup */}
      <Modal open={!!reportKey} title="Report submitted" onClose={() => setReportKey(null)}>
        <p>Thank you. Your report has been received. Your report key is:</p>
        <p className="my-4 select-all bg-brand-mist py-3 text-center font-heading text-[26px] font-black tracking-widest text-brand-blue">
          {reportKey}
        </p>
        <p>
          <strong>Write this down now</strong>, together with the password you chose. You will need both to check your
          report. For your security we cannot recover them.
        </p>
      </Modal>
    </>
  );
}