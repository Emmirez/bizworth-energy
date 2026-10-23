// In development, Vite proxies /api to http://localhost:5000 (see vite.config.js).
// In production, set VITE_API_URL to your backend URL.
const API_URL = import.meta.env.VITE_API_URL || '';

async function request(path, options = {}) {
  let res;
  try {
    res = await fetch(`${API_URL}${path}`, {
      headers: { 'Content-Type': 'application/json' },
      ...options,
    });
  } catch {
    throw new Error('Unable to reach the server. Please try again later.');
  }
  const data = await res.json().catch(() => ({}));
  if (!res.ok) throw new Error(data.message || 'Something went wrong. Please try again.');
  return data;
}

export const sendContactMessage = (payload) =>
  request('/api/contact', { method: 'POST', body: JSON.stringify(payload) });



export const subscribeToAlerts = (payload) =>
  request('/api/alerts', { method: 'POST', body: JSON.stringify(payload) });


export const submitWhistleblowReport = (payload) =>
  request('/api/whistleblowing', { method: 'POST', body: JSON.stringify(payload) });

export const checkWhistleblowReport = (payload) =>
  request('/api/whistleblowing/check', { method: 'POST', body: JSON.stringify(payload) });