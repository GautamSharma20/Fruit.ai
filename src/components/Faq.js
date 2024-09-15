import React, { useState, useEffect } from 'react';
import { getFaqs, addFaq, deleteFaq, updateFaq } from '../api';

function Faq() {
  const [faqs, setFaqs] = useState([]);
  const [newQuestion, setNewQuestion] = useState('');
  const [newAnswer, setNewAnswer] = useState('');

  useEffect(() => {
    async function fetchFaqs() {
      const data = await getFaqs();
      setFaqs(data);
    }
    fetchFaqs();
  }, []);

  const handleAddFaq = async () => {
    const faq = { question: newQuestion, answer: newAnswer };
    await addFaq(faq);
    setFaqs([...faqs, faq]);
  };

  const handleDeleteFaq = async (id) => {
    await deleteFaq(id);
    setFaqs(faqs.filter(faq => faq.id !== id));
  };

  const handleUpdateFaq = async (id) => {
    const updatedFaq = { question: newQuestion, answer: newAnswer };
    await updateFaq(id, updatedFaq);
    setFaqs(faqs.map(faq => (faq.id === id ? updatedFaq : faq)));
  };

  return (
    <div>
      <h1>FAQs</h1>
      <div>
        {faqs.map((faq) => (
          <div key={faq.id}>
            <h3>{faq.question}</h3>
            <p>{faq.answer}</p>
            <button onClick={() => handleDeleteFaq(faq.id)}>Delete</button>
            <button onClick={() => handleUpdateFaq(faq.id)}>Update</button>
          </div>
        ))}
      </div>
      <div>
        <input
          type="text"
          placeholder="Question"
          value={newQuestion}
          onChange={(e) => setNewQuestion(e.target.value)}
        />
        <input
          type="text"
          placeholder="Answer"
          value={newAnswer}
          onChange={(e) => setNewAnswer(e.target.value)}
        />
        <button onClick={handleAddFaq}>Add FAQ</button>
      </div>
    </div>
  );
}

export default Faq;
