import React from 'react';
import './paginaclientes.css';
import MyCadastro from './MyCadastro';
import End from './End';
import Myrodape from './Myrodape';
import cliente1 from './img/cliente1.png'; 
import cliente2 from './img/cliente2.png'; 
import cliente3 from './img/cliente3.png'; 
import cliente4 from './img/cliente4.png'; 
import cliente5 from './img/cliente5.png'; 
import cliente6 from './img/cliente6.png'; 
import cliente7 from './img/cliente7.png'; 
import cliente8 from './img/cliente8.png'; 
import cliente9 from './img/cliente9.png'; 
import cliente10 from './img/cliente10.png'; 
import cliente11 from './img/cliente11.png'; 
import cliente12 from './img/cliente12.png'; 


function paginaclientes() {
  return (
    <div>
        <div className='titulo-principall2'>
           <h1>Clientes</h1>
        </div>
        <div className='titulo-2-pagina' >
            <h1>Implantação e gestão do processo de utilização de incentivos fiscais para pesquisa, desenvolvimento e <br/>
             inovação em empresas de pequeno, médio e grande porte nos mais diversificados segmentos.</h1><br/>
             <p>Conheça alguns dos nossos clientes: </p>
        </div>
        <div className='containe-clientes' >

             <img src={cliente1}  alt="Descrição da imagem 1" />
             <img src={cliente2} alt="Descrição da imagem 2" />
             <img src={cliente3} alt="Descrição da imagem 3" />
             <img src={cliente4} alt="Descrição da imagem 3" />
             <img src={cliente5} alt="Descrição da imagem 3" />
             <img src={cliente6} alt="Descrição da imagem 3" />
             <img src={cliente7} alt="Descrição da imagem 3" />
             <img src={cliente8} alt="Descrição da imagem 3" />
             <img src={cliente9} alt="Descrição da imagem 3" />
             <img src={cliente10} alt="Descrição da imagem 3" />
             <img src={cliente11} alt="Descrição da imagem 3" />
             <img src={cliente12} alt="Descrição da imagem 3" />
        </div>
    <MyCadastro />
    <End />
    <Myrodape />
   </div>
  );
}

export default paginaclientes;
