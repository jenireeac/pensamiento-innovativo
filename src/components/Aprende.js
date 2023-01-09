import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";


const Aprende = () => {
    return(
        <div id="aprende" className="m-5 p-5">
  <Container>
        <Row className="text-center card-aprende  ">
          <Col className="border border-secondary rounded m-5">Cumunidad de docentes</Col>
          <Col className="fs-2">
          <p>Únete a nuestra comunidad de aprendizaje
y aprendamos juntos
</p>
          </Col>
          <Col className="border border-secondary rounded  m-5">
           Comunidad de investigadores
          </Col>
        </Row>
      </Container>
        </div>
    );
}

export default Aprende;