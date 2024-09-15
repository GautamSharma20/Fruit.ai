const API_URL = 'https://your-backend-url.com';

export const getFaqs = async () => {
  const response = await fetch(`${API_URL}/faqs`);
  return response.json();
};

export const addFaq = async (faq) => {
  await fetch(`${API_URL}/faqs`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(faq),
  });
};

export const deleteFaq = async (id) => {
  await fetch(`${API_URL}/faqs/${id}`, { method: 'DELETE' });
};

export const updateFaq = async (id, faq) => {
  await fetch(`${API_URL}/faqs/${id}`, {
    method: 'PUT',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(faq),
  });
};
