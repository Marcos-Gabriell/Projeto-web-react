import React from 'react';
import './paginabrde.css';
import MyCadastro from './MyCadastro';
import End from './End';
import Myrodape from './Myrodape';
import logoImg from './img/imgbrde.png'; 
import logoImg1 from './img/img2brde.png'; 

function paginabrde() {
  return (
    <div>
       <div className="imagee-containerr8">
       <img src={logoImg} alt="Imagem" style={{ objectFit: 'cover' }} /> 
       <div className="ooverlayy8">
       <p className="imagee-texxtt8">CAPTAÇÃO DE RECURSOS</p>
        <h1>BRDE</h1>
      </div>
      <br/> 
      </div>
      <div className="coontainerr-7">
            <div className="texxt-containerr-7">
            <p>O BRDE – Bando Regional de Desenvolvimento do Extremo Sul, através de financiamentos, promove o desenvolvimento de projetos com o objetivo de aumentar a competitividade de empresas da região sul.</p>
        </div>
        <div className="texxt-containerr-7">
            <h2>Viabilize o seu projeto a partir das linhas de financiamento do BRDE!</h2>
            <p>A Rocha Marques disponibiliza toda a sua experiência na elaboração de pleito de captação de recursos para sua empresa financiar projetos de inovação, de ampliação industrial, de capital de giro, entre outros.</p>
        </div>
        </div>
         <div className="imagee-containerr-7">
         <img src={logoImg1} alt="Imagem" />
        </div>
      <MyCadastro />
      <End />
      <Myrodape />
    </div>
  );
}

export default paginabrde;
