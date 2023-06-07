import React, { useState } from 'react';

const FlipCard = ({ frontText, backText }) => {
  const [isFlipped, setIsFlipped] = useState(false);

  const handleFlip = () => {
    setIsFlipped(!isFlipped);
  };

  return (
    <div
      className={`card flip-card ${isFlipped ? 'flipped' : ''}`}
      onClick={handleFlip}
    >
      <div className="card-body flip-card-inner">
        <div className="flip-card-front">
          {/* Content for the front side of the card */}
          <h3 className="card-title">{frontText}</h3>
        </div>
        <div className="flip-card-back">
          {/* Content for the back side of the card */}
          <p className="card-title">{backText}</p>
        </div>
      </div>
    </div>
  );
};

export default FlipCard;
