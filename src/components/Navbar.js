import React from "react";

const Navbar = () => {
  return (
    <>
    <nav class="navbar navbar-expand-lg d-flex">
      <div class="container-fluid">
        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
          >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div
          class="collapse navbar-collapse justify-content-center"
          id="navbarNav"
          >
          <ul class="navbar-nav">
            <li class="nav-item">
              <a class="nav-link active" aria-current="page" href="/">
                Inicio
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#mentorias">
                Mentoría
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#aprende">
                Aprendamos Juntos
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#about">
                Conóceme
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#contact">
                Contáctame
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#s">
                Aula Virtual
              </a>
            </li>
          </ul>
        <div class="d-grid gap-2 d-md-flex justify-content-end">
  <button class="btn btn-light  me-md-2 " type="button">Inicia sesión</button>
  <button class="btn btn-light " type="button">Regístrate </button>
        </div>
      </div>
</div>
    </nav>
          </>
  );
};
export default Navbar;
