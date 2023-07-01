import React from 'react';
import './paginaconteudo.css';
import MyCadastro from './MyCadastro';
import End from './End';
import Myrodape from './Myrodape';
import MyBlog from './MyBlog';
//import logoImg from './img/infor.png'; 
//import logoImg1 from './img/img1.png'; 


function paginaconteudo() {
  return (
    <div>
       <div className='tituloo-principal7'>
        <h1>Conteúdo</h1>
      </div>
    <MyBlog />
    <MyCadastro />
    <End />
    <Myrodape />
   </div>
  );
}

export default paginaconteudo;
