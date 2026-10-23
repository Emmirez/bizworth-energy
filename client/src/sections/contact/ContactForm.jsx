import { useState } from 'react';
import Button from '../../components/ui/Button';
import Modal from '../../components/ui/Modal';
import { sendContactMessage } from '../../services/api';

const empty = { name: '', email: '', phone: '', subject: '', message: '' };

const fieldClass =
  'w-full border border-black/15 bg-brand-mist px-4 py-3 text-[15px] text-brand-ink placeholder:text-brand-muted focus:border-brand-blue focus:bg-white focus:outline-none';

export default function ContactForm() {
  const [form, setForm] = useState(empty);
  const [sending, setSending] = useState(false);
  const [modal, setModal] = useState(null);

  const update = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const submit = async (e) => {
    e.preventDefault();
    setSending(true);
    try {
      await sendContactMessage(form);
      setForm(empty);
      setModal({ tone: 'success', title: 'Message sent', text: 'Thank you for reaching out. Our team will get back to you shortly.' });
    } catch (err) {
      setModal({ tone: 'error', title: 'Could not send', text: err.message });
    } finally {
      setSending(false);
    }
  };

  return (
    <>
      <form onSubmit={submit} className="bg-white p-0 lg:border lg:border-black/10 lg:p-10">
        <div className="grid gap-5 md:grid-cols-2">
          <input name="name" value={form.name} onChange={update} placeholder="Full name *" required className={fieldClass} />
          <input name="email" type="email" value={form.email} onChange={update} placeholder="Email address *" required className={fieldClass} />
          <input name="phone" value={form.phone} onChange={update} placeholder="Phone number" className={fieldClass} />
          <input name="subject" value={form.subject} onChange={update} placeholder="Subject *" required className={fieldClass} />
          <textarea
            name="message"
            value={form.message}
            onChange={update}
            placeholder="Your message *"
            required
            rows={6}
            className={`${fieldClass} md:col-span-2`}
          />
        </div>
        <Button type="submit" variant="primary" className="mt-6 min-w-[200px]" disabled={sending}>
          {sending ? 'Sending...' : 'Send Message'}
        </Button>
      </form>

      <Modal open={!!modal} tone={modal?.tone} title={modal?.title} onClose={() => setModal(null)}>
        {modal?.text}
      </Modal>
    </>
  );
}
