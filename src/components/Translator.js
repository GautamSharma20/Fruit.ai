import React, { useState } from 'react';

function Translator() {
  const [text, setText] = useState('');
  const [translatedText, setTranslatedText] = useState('');

  const handleTranslate = async () => {
    // Replace this with actual translation API call
    const result = text === 'apple' ? 'मिर्च' : text;
    setTranslatedText(result);
  };

  return (
    <div>
      <h1>Translator</h1>
      <input
        type="text"
        placeholder="Enter text"
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
      <button onClick={handleTranslate}>Translate</button>
      <p>{translatedText}</p>
    </div>
  );
}

export default Translator;
