import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

const Mentoria = () => {
  return (
    <div>
      <h2 id="mentoria" className="text-center first-heading">
        Mentoria
      </h2>
      <div className="text-center mentoria-text">
        <p>
          Éste es un espacio para ti; donde compartiremos experiencias de
          aprendizaje e investigación desde diferentes perspectivas, para
          contribuir efectivamente en el desarrollo estratégico y la
          transformación de personas y empresas de formación.
          <br />
          <em>¿Cómo?</em> Promoviendo la optimización de tus potencialidades y
          la gestión de tu propio aprendizaje.
        </p>
      </div>
      <p className="fs-5 m-5">Te apoyamos en las siguientes áreas:</p>
      <Container fluid>
        <Row>
          <Col></Col>
          <Col></Col>
          <Col></Col>
        </Row>
      </Container>
      <p className="text-center">
        Si requieres nuestro servicio de mentoría online con sesiones
        personalizadas, <b>contáctanos.</b>
      </p>
    </div>
  );
};

export default Mentoria;
