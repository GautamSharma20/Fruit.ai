import React from 'react';
import { Link } from 'react-router-dom';

function Home() {
  return (
    <div>
      <h1>Fruit.ai Home</h1>
      <div>
        <Link to="/chatbot">Chatbot</Link>
        <Link to="/translator">Translator</Link>
        <Link to="/faq">FAQs</Link>
        <Link to="/about">About</Link>
      </div>
    </div>
  );
}

export default Home;
