import React from 'react';
import './paginainformanus.css';
import MyCadastro from './MyCadastro';
import End from './End';
import Myrodape from './Myrodape';
import logoImg from './img/imginformanaus.jpg'; 
import logoImg1 from './img/img1.png'; 

function paginainformanus() {
  return (
    <div>
       <div className="imagee-containerr8">
       <img src={logoImg} alt="Imagem" style={{ objectFit: 'cover' }} /> 
       <div className="ooverlayy8">
       <p className="imagee-texxtt8">INCENTIVOS FISCAIS</p>
        <h1>Lei de Informática – Manaus</h1>
      </div>
      </div>
      <MyCadastro />
      <End />
      <Myrodape />
    </div>
  );
}

export default paginainformanus;
