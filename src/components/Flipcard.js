import React, { useState } from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

const FlipCard = ({ frontText, backText }) => {
  const [isFlipped] = useState(false);

  return (
    <>
      <Container fluid>
        <Row>
          <div className={`flip-card ${isFlipped ? "flipped" : ""}`}>
            <div className="flip-card-inner">
              <Col className="flip-card-front">
                {" "}
                {/* Content for the front side of the card */}
                <h2>{frontText}</h2>
              </Col>
              <Col className="flip-card-back">
                {/* Content for the back side of the card */}
                <p>{backText}</p>
              </Col>
            </div>
          </div>
        </Row>
      </Container>
    </>
  );
};

export default FlipCard;
