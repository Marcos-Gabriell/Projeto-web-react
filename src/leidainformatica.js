import React from 'react';
import './leidainformatica.css';
import MyCadastro from './MyCadastro';
import End from './End';
import Myrodape from './Myrodape';
import logoImg from './img/imginformatica.png'; 

function leidainformatica() {
  return (
    <div>
      <div className="info-imagee">
        <img src={logoImg} alt="Imagem de informações" />
        <div className="overlayy">
          <p className="image-textt">INCENTIVOS FISCAIS</p>
          <h2>Lei de Informática</h2>
        </div>
      </div>
      <MyCadastro />
      <End />
      <Myrodape />
    </div>
  );
}

export default leidainformatica;
