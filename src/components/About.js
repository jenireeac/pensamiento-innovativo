import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

const About = () => {
  return (
    <>
      <Container>
        <Row className="m-5 text-center fs-5  ">
          <Col>
            <div>
          
              <p>
                Formadora de docentes e investigadores, con experiencia laboral
                de más de 40 años. Profesora Emérita de la Universidad Nacional
                Abierta, Venezuela.
              </p>
              <p>
                A través de mis libros, cursos y tutorías he puesto a
                disposición una metodología basada en la investigación, de apoyo
                al aprendiz en su proceso, que promueve el aprender a aprender.
              </p>
              <p>
              Una ayuda al docente con las estrategias didácticas que innoven y propicien ubicar al estudiante en el centro de su aprendizaje, de contenidos y procedimientos.
              </p>
              <p>
              En la misma medida, oriento al investigador con estrategias que fomenten un pensamiento estratégico, innovador y transformador.
              </p>
            
            </div>
          </Col>
          <Col>
          <img className="image-about" src={Photo} alt="Logo" width={500} />
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default About;
