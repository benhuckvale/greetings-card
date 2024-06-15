// src/components/GreetingCard.jsx
import React, { useEffect, useState } from 'react';
import './GreetingCard.css';

const GreetingCard = () => {
  const [flipped, setFlipped] = useState(false);

  useEffect(() => {
    console.log('Flipped state:', flipped);
  }, [flipped]);

  const handleClick = () => setFlipped(!flipped);

  return (
    <div className={`card ${flipped ? 'flipped' : ''}`} onClick={handleClick}>
      <div className="front">
        <img src="/hokusai.png" width="50%" alt="Front Cover" />
      </div>
      <div className="back">
        <h1>Happy Birthday!</h1>
        <p>Wishing you all the best on your special day.</p>
      </div>
    </div>
  );
};

export default GreetingCard;

