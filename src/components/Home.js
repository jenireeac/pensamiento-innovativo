import React from "react";
import Logo from "../assets/images/logo2.png";
import Mente from "../assets/images/mente.jpg"
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

const Home = () => {
  return (
    <Container>
      <Row>
        <Col className="home-first  ">
          <div className="first-text">
            <p>
              El aprendizaje, como la vida ,es cíclico, un espiral ascendente de
              cambios cualitativos. <br />
              Se requiere un pensamiento abierto que nos permita adaptarnos y
              evolucionar, deconstruirnos y volver a construirnos.
              <br />
            </p>
          </div>
          <div className="second-text text-center">
            <p>
              <b>
                Desaprender y reaprender para emprender, con propuestas de
                valor.
                <br />
                Ésta es la cuestión primordial.
              </b>
            </p>
          </div>
        </Col>
        <Col className="">
          <img src={Logo} alt="Logo" width={350} />
           <p className="third-text">
            Espacio de experiencias de aprendizaje e investigación
          </p> 
          <p>Innovación y transformación</p>
        </Col>
      </Row>
      <Row className="m-5 text-center second-home ">
        <Col>
         <img src={Mente} alt="mente" width={300} />
        </Col>
        <Col>
          <div>
            <p>Aprender e investigar son procesos.</p>
            <p>
              Un camino transformador que debemos seguir con apertura de miras
              para cambiar la realidad, sin prisas, pero sin pausas, ni miedos o
              limitaciones que nos detengan o no nos permitan verla ni
              proyectarla.
            </p>
            <p>
              Nos cuesta cambiar la visión y el foco. Es más común de lo que
              crees.
            </p>
            <p>
              Hasta que no demos el primer paso para obtener el cambio y lograr
              la transformación que buscamos, seguiremos en un círculo vicioso.
            </p>
            <p className="fst-italic">¿Estás dispuesto/a a impulsar tu trabajo?</p>
            <p> <strong>Es tu momento, toma una decisión. Te podemos ayudar. </strong></p>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default Home;
