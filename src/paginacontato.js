import React from 'react';
import './paginacontato.css';
import MyCadastro from './MyCadastro';
import End from './End';
import Myrodape from './Myrodape';

//import logoImg from './img/infor.png'; 
//import logoImg1 from './img/img1.png'; 


function paginacontato() {
  return (
    <div>
       <div className='tituloo-principal8'>
        <h1>Conato</h1>
      </div>

    <MyCadastro />
    <End />
    <Myrodape />
   </div>
  );
}

export default paginacontato;
