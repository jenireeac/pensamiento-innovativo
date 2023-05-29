import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

const Footer = () => {
  return (
    <Container fluid className="p-5">
      <Row>
        <Col>
          <p><em>¿Conoces la fábula de la vaca?</em></p>
          <p>
            La vaca simboliza la resignación, el miedo, las limitaciones que nos
            imponemos para hacer cambios, salir de nuestra zona de confort y
            atrevernos a avanzar por nuevos caminos.
          </p>
          <p><em>¿Tienes una vaca de excusa que te ata y no te deja avanzar?</em></p>
          <p><em>
            ¿Te atreves a cambiar, a probar y vivir de primera mano la
            experiencia que te proponemos?</em>
          </p>
          <p>
            <strong>
              No hay nada permanente, si está en tus manos, lo puedes cambiar.
            </strong>
          </p>
          <p>Y ahora ¡Allá vamos!</p>
        </Col>
        <Col></Col>
      </Row>
    </Container>
  );
};

export default Footer;
