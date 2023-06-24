import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';
import logoImg from './img/logo2.png';
import './Navbar.css';

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light sticky-top">
      <div className="container-fluid">
        <div className="navbar-brand-divider">
          <a className="navbar-brand" href="#">
            <img src={logoImg} alt="Descrição da Imagem" style={{ width: '350px' }} />
          </a>
        </div>
        <button
  className="navbar-toggler"
  type="button"
  data-bs-toggle="collapse"
  data-bs-target="#navbarNavDropdown"
  aria-controls="navbarNavDropdown"
  aria-expanded="false"
  aria-label="Toggle navigation"
>
  <span className="navbar-toggler-icon"></span>
</button>

        <div className="collapse navbar-collapse justify-content-end" id="navbarNavDropdown">
          <ul className="navbar-nav">
            <li className="nav-item active">
              <a className="nav-link" href="#">
                HOME <span className="visually-hidden">(Página atual)</span>
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                A ROCHA MARQUES
              </a>
            </li>
            <li className="nav-item dropdown">
              <a
                className="nav-link dropdown-toggle"
                href="#"
                id="navbarDropdownMenuLink"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                SERVIÇOS
              </a>
              <ul className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                <li>
                  <a className="dropdown-item" href="#">
                    Incentivos Fiscais
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="#">
                    Captação de Recursos
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="#">
                    Finame
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="#">
                    Consultoria para ICTs e Universidades
                  </a>
                </li>
              </ul>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                CLIENTES
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                CONTEÚDO
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                CONTATO
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
