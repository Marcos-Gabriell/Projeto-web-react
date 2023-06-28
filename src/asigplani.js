import React from 'react';
import './asigplani.css';
import logoImg from './img/mapa.png'; 
import logoImg2 from './img/imggrande.png'; 
import MySection5 from './MySection5';
import MyCadastro from './MyCadastro';
import End from './End';
import Myrodape from './Myrodape';

function asigplani() {
  return (
    <div>
      <div className='titulo-principal'>
        <h1>A SIGPLANI</h1>
      </div>
     <div class="container3">
         <div class="image-container3">
           <img src={logoImg} alt="Descrição da imagem" />
          </div>
           <div class="content-container3">
           <h2>Há mais de 25 anos viabilizando o investimento em inovação nas <br /> 
           empresas</h2>
           <p>A SIGPLANI foi fundada em Curitiba em 1995 com o objetivo de assessorar empresas de informática e <br/> 
            automação de todos os portes a se habilitar e a manter os incentivos fiscais e a inovação da Lei de <br/> Informática. <br/> <br/>

            Diante da vasta experiência da SIGPLANI na Lei 8248, ampliamos a atuação da consultoria <br/> 
            abrangendo outros incentivos e fomentos, como a Lei do Bem, o Rota 2030, a captação junto a FINEP e <br/> 
            BRDE e também o credenciamento de produtos no FINAME, sempre com o objetivo de oferecer <br/> 
            oportunidades aos nossos clientes. <br/><br/> 

            Hoje, somamos a nossa experiência de mais de 25 anos a nossa constante presença no ecossistema de <br/>
             inovação, oferecendo aos nossos clientes uma visão estratégica dos incentivos fiscais.</p>
         </div>
    </div>

       
      <MySection5 />
   <div class="container4">
      <div class="text-container4">
        <h2>Diferenciais que nos fazem referência<br />no mercado</h2>
        <p>A SIGPLANI é uma consultoria especializada em<br />
        incentivos fiscais e fomento à inovação tecnológica que tem<br />
        mais de 25 anos de experiência e já atendeu mais de<br />
        752 clientes distribuídos em 17 estados brasileiros.</p>
      </div>
        <div class="image-container4">
        <img src={logoImg2} alt="Imagem" />
        </div>
    </div>





      <MyCadastro />
      <End />  
      <Myrodape />
   </div>
  );
}

export default asigplani;
