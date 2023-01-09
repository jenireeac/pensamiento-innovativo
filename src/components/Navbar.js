import React from "react";

const Navbar = () => {
  return (
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
                Aprende con nosotros
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#about">
                Conócenos
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#s">
                Contáctanos
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#s">
                Aula Virtual{" "}
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};
export default Navbar;
