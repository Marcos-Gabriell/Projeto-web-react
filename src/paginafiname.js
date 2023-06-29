import React from 'react';
import './paginafiname.css';
import MyCadastro from './MyCadastro';
import End from './End';
import Myrodape from './Myrodape';
import logoImg from './img/finameimg.png'; 
import logoImg2 from './img/finame2img.png'; 
import SeparatorLine from './SeparatorLine';
//import logoImg from './img/infor.png'; 
//import logoImg1 from './img/img1.png'; 


function paginafiname() {
  return (
    <div>
       <div className='titulo-principal4'>
        <h1>Finame</h1>
      </div>

    <div class="container5">
      <div class="text-container5">
        <p>O FINAME tem por objetivo financiar a produção e aquisição de máquinas e equipamentos cadastrados no BNDES.<br/><br/>
         Isto significa que o seu cliente pode, através de um banco credenciado no BNDES, adquirir as máquinas ou equipamentos que você vende, desde que cadastrados no FINAME,<br/> com juros subsidiados – taxas, carência e prazo de pagamento diferenciados dos praticados no mercado.</p>
      </div>
        <div class="image-container5">
        <img src={logoImg} alt="Imagem" />
        </div><br/>
    </div>
    <SeparatorLine />
    <div class="container6">
      <div class="text-container6">
        <h2>O cadastro no FINAME é um diferencial competitivo na venda de<br/> máquinas e equipamentos.</h2>
        <p>
          Para se cadastrar no BNDES, máquinas, equipamentos, sistemas e componentes deverão apresentar índice de <br/>
           nacionalização calculado conforme critérios definidos pelo BNDES, ou cumprir o Processo Produtivo Básico – <br/> 
           PPB da Lei de Informática<br/><br/>
          A SIGPLANI trabalha para que o cadastro dos seus produtos seja assertivo, ganhe tempo!</p>
      </div>
        <div class="image-container6">
        <img src={logoImg2} alt="Imagem" />
        </div>
    </div><br/><br/><br/><br/>


        
    <MyCadastro />
    <End />
    <Myrodape />
   </div>
  );
}

export default paginafiname;
