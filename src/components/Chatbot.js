import React, { useState } from 'react';

const fruits = [
  { id: 1, name: 'Apple', description: 'Rich in fiber and Vitamin C' },
  { id: 2, name: 'Banana', description: 'High in potassium' },
  { id: 3, name: 'Orange', description: 'Rich in Vitamin C' },
];

function Chatbot() {
  const [selectedFruit, setSelectedFruit] = useState(null);

  return (
    <div>
      <h1>Fruit Chatbot</h1>
      <div>
        {fruits.map((fruit) => (
          <div key={fruit.id} onClick={() => setSelectedFruit(fruit)}>
            <h2>{fruit.name}</h2>
          </div>
        ))}
      </div>
      {selectedFruit && (
        <div>
          <h3>{selectedFruit.name}</h3>
          <p>{selectedFruit.description}</p>
        </div>
      )}
    </div>
  );
}

export default Chatbot;
