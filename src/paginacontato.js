import React from 'react';
import './paginacontato.css';
import MyCadastro from './MyCadastro';
import End from './End';
import Myrodape from './Myrodape';
import { FaFacebook, FaLinkedin, FaInstagram } from 'react-icons/fa';
//import logoImg from './img/infor.png'; 
//import logoImg1 from './img/img1.png'; 


function paginacontato() {
  return (
    <div>
       <div className='tituloo-principal8'>
        <h1>Contato</h1>
      </div>
      <div class="coontainer8">
      <div class="teexxt-containerrt5">
        <h2>Potencialize seus investimentos<br/>
         em inovação.</h2>
        <p>Entre em contato conosco e conheça as oportunidades para investir em inovação. A <br/>
        nossa equipe está à disposição para atende-lo.</p>
        <h3>Horário de atendimento:</h3>
        <p>Segunda à Sexta 9:00 às 17:00 <br/><br/>
        +55 41 33296641
        </p>
        <h3>Relacionamneto</h3>
        <div className="icon-container">
            <FaFacebook size={30} />
            <FaLinkedin size={30} />
            <FaInstagram size={30} />
       </div>
      </div>
      </div>
    <MyCadastro />
    <End />
    <Myrodape />
   </div>
  );
}

export default paginacontato;
