import React from "react";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Mentoria from "./components/Mentoria";
import FlipCard from "./components/Flipcard";
//  import About from "./components/About";
//  import Aprende from "./components/Aprende";
//  import Footer from "./components/Footer";
import "./App.css";
import "animate.css";

function App() {
  return (
    <div>
      <Navbar></Navbar>
      <Home />
      <Mentoria />
      <FlipCard
        frontText="Formación"
        backText="Un servicio de mentoría que contribuya efectivamente al desarrollo estratégico y a la transformación de la labor docente. 
Centrado en posibilitar la innovación y la mejora continua de quienes enseñan; haciendo énfasis en la diversidad e inclusión, la colaboración y cooperación, integralidad, personalización de la enseñanza, metacognición y efectividad.
"
      />
      <FlipCard frontText="Investigaciones" backText="Un servicio de mentoría que promueva el desarrollo estratégico del investigador y la transformación de la labor investigativa.
Centrado en la formación de investigadores con un cambio de miras; compartir experiencias de investigación, con estrategias, acciones y propuestas positivas, innovadoras y éticas.
" />
      <FlipCard frontText="Diseño de cursos" backText="Atención personalizada con el diseño de cursos para público externo, particulares o empresas, según requerimientos del demandante y, la necesidad formativa de los usuarios docentes e investigadores. " />
      {/* <Aprende />
      <About />
      <Footer />  */}
    </div>
  );
}

export default App;
