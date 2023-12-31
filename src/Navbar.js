import React from 'react';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';
import logoImg from './img/logo2.png';
import './Navbar.css';
const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light sticky-top">
      <div className="container-fluid">
        <div className="navbar-brand-divider">
          <Link className="navbar-brand"to="/">
            <img src={logoImg} alt="Descrição da Imagem" style={{ width: '200px' }} />
          </Link>
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
              <li className="nav-item">
              <Link className="nav-link" to="/">
                HOME
              </Link>
            </li>
            <li className="nav-item">
               <Link className="nav-link" to="/a-sigplani/">
                    A SIGPLANI
              </Link>
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
                  <Link className="dropdown-item" to="/incentivos-fiscias/#">
                    Incentivos Fiscais
                  </Link>
                </li>
                <li>
                  <Link className="dropdown-item" to="/Captação-de-Recursos">
                    Captação de Recursos
                  </Link>
                </li>
                <li>
                  <Link className="dropdown-item" to="/finame">
                    Finame
                  </Link>
                </li>
                <li>
                  <Link className="dropdown-item"  to="/consultoria-para-icts-e-universidades">
                    Consultoria para ICTs e Universidades
                  </Link>
                </li>
              </ul>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/clientes">
                CLIENTES
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/conteudo">
                CONTEÚDO
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/contato">
                CONTATO 
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;