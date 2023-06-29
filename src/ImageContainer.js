import React from 'react';
import './ImageContainer.css';
import { Link } from 'react-router-dom';
import logoImg from './img/logo3.png'; 


const ImageContainer = () => {
  return (
    <div className="image-container">
      <img src={logoImg} alt="Imagem" style={{ objectFit: 'cover' }} />
      <div className="overlay">
        <h2></h2>
        <p className="image-text">
           SOMOS UMA CONSULTORIA QUE HÁ MAIS DE 25 ANOS VIABILIZA A INOVAÇÃO<br/> 
           NAS EMPRESAS ATRAVÉS DE INCENTIVOS FISCAIS  E FOMENTO À INOVAÇÃO<br />
           TECNOLÓGICA, SEMPRE COM RESPONSABILIDADE, ÉTICA E TRANSPARÊNCIA.
        </p>
        <Link to="/a-sigplani" className="btn">Saiba Mais</Link>
      </div>
    </div>
  );
}

export default ImageContainer;
