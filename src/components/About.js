import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

const About = () => {
  return (
    <div>
      <h5
        id="about"
        className="text-center animate__animated animate__slideInDown"
      >
        Conócenos
      </h5>
      <p>
        Unimos nuestras perspectivas y talentos en la promoción de acciones
        positivas y éticas, basadas en un pensamiento disruptivo que innove y
        transforme la forma tradicional de hacer la labor educativa e
        investigativa, fomente el desarrollo de competencias en el docente y el
        investigador y, empodere a las empresas del mundo formativo.
      </p>
      <Container>
        <Row className="text-center card-mentoria  ">
          <Col className="m-5">Keyla Vergara</Col>
          <Col className="m-5">Janisse Salazar-Coraspe</Col>
          <Col className="m-5">María Teresa Ortega</Col>
        </Row>
      </Container>
    </div>
  );
};

export default About;
