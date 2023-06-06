import React from "react";

const Navbar = () => {
  return (
    <>
    <nav className="navbar navbar-expand-lg d-flex">
      <div className="container-fluid">
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
          >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div
          className="collapse navbar-collapse justify-content-center"
          id="navbarNav"
          >
          <ul className="navbar-nav">
            <li className="nav-item">
              <a className="nav-link active" aria-current="page" href="#home">
                Inicio
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#mentoria">
                Mentoría
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#aprende">
                Aprendamos Juntos
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#about">
                Conóceme
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#contact">
                Contáctame
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#s">
                Aula Virtual
              </a>
            </li>
          </ul>
        {/* <div class="d-grid gap-2 d-md-flex justify-content-end">
  <button class="btn btn-light  me-md-2 " type="button">Inicia sesión</button>
  <button class="btn btn-light " type="button">Regístrate </button>
        </div> */}
      </div>
</div>
    </nav>
          </>
  );
};
export default Navbar;
