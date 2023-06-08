import React, { useState } from "react";
import { TfiBookmarkAlt } from "react-icons/tfi";
const FlipCard = ({ frontText, backText }) => {
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
          <h3 className="card-title"><TfiBookmarkAlt/>{frontText}</h3>
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
