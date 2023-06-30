import React from 'react';
import './paginadepolicasdepriacidade.css';
import MyCadastro from './MyCadastro';
import End from './End';
import Myrodape from './Myrodape';

//import logoImg from './img/infor.png'; 
//import logoImg1 from './img/img1.png'; 


function paginadepolicasdepriacidade() {
  return (
    <div>
       <div className='tituloo-principal9'>
        <h1>Política de Privacidade</h1>
      </div>

    <MyCadastro />
    <End />
    <Myrodape />
   </div>
  );
}

export default paginadepolicasdepriacidade;
