import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Photo from "../assets/images/janisse.png";
import Logo from "../assets/images/logo.png";
const Home = () => {
  return (
    <>
      <h1 className="p-3 text-center first-heading">
        Espacio de experiencias de aprendizaje e investigación.
      </h1>
      <h2 className="text-center second-heading">
        Innovación y transformación
      </h2>
      <Container fluid>
  <Row className="card-t">
    <Col>
      <img className="image-logo" src={Logo} alt="Logo" width={300} />
    </Col>
    <Col  className="home-first-text">
      <p>
        El aprendizaje, como la vida, es cíclico, una espiral ascendente de
        cambios cualitativos.
      </p>
      <p>
        Se requiere un pensamiento abierto que nos permita adaptarnos y
        evolucionar, deconstruirnos y volver a construirnos
      </p>
      <p className="fw-bold">
        Desaprender y reaprender para emprender, con propuestas de valor. Ésta
        es la cuestión primordial.
      </p>
    </Col>
  </Row>
</Container>
      <Container fluid className="home-card">
        <Row className="card-t">
          <Col className="home-second-text ">
            <h3>Aprender e investigar son procesos.</h3>
            <p>
              Un camino transformador que debemos seguir con apertura de miras
              para cambiar la realidad, sin prisas, pero sin pausas, ni miedos o
              limitaciones que nos detengan o no nos permitan verla ni
              proyectarla. Nos cuesta cambiar la visión y el foco. Es más común
              de lo que crees. Hasta que no demos el primer paso para obtener el
              cambio y lograr la transformación que buscamos, seguiremos en un
              círculo vicioso.
            </p>
            <p>
              <strong>¿Estás dispuesto/a a impulsar tu trabajo? </strong>
              <br />
              Es tu momento, toma una decisión.
              <br />
              Te ofrezco mi ayuda.
            </p>
          </Col>
          <Col>
            <img className="image-photo" src={Photo} alt="Logo" width={450} />
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default Home;
