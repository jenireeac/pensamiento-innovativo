import React, { useState } from "react";

const FlipCard = ({ frontText, backText , cardText }) => {
  const [isFlipped, setIsFlipped] = useState(false);

  const handleFlip = () => {
    setIsFlipped(!isFlipped);
  };

  return (
    <div className="card-body">
    <div
      className={` card flip-card ${isFlipped ? "flipped" : ""}`}
      onClick={handleFlip}
      >
      <div className=" flip-card-inner">
        <div className="flip-card-front">
          {/* Content for the front side of the card */}
          <h3 className="card-title">{frontText}</h3>
          <p className="card-text"> {cardText}</p>
        </div>
        <div className="flip-card-back">
          {/* Content for the back side of the card */}
          <p className="card-text">{backText}</p>
        </div>
      </div>
    </div>
      </div>
  );
};

export default FlipCard;
