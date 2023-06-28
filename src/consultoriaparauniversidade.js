import React from 'react';
import './consultoriaparauniversidade.css';
import MyCadastro from './MyCadastro';
import End from './End';
import Myrodape from './Myrodape';
import logoimg from './img/consultoriaimg.png'; 

function consultoriaparauniversidade() {
  return (
    <div>
      <div className='titulo-principal5'>
        <h1>Incentivos Fiscais</h1>
      </div><br/><br/>
      <div class="container7">
      <div class="text-container7">
        <h2>Credenciamento</h2>
        <p>Para que ICTs e Universidades desenvolvam projetos em parceria com empresas habilitadas na Lei de <br /> 
        Informática de nº 8248/91 há necessidade do credenciamento junto ao CATI – Comitê da Área de <br/> Tecnologia da Informação.</p>
      </div>
      
      <div class="text-container7">
        <h2>A Rocha Marques elabora o pleito de credenciamento junto ao CATI.</h2>
        <p>Da mesma forma, para o desenvolvimento de projetos em parceria com o empresas habilitadas na Lei <br/> de Informática de nº 8387/91 há necessidade do credenciamento junto ao CAPDA – Comitê de <br/> Atividades de Pesquisa e Desenvolvimento na Amazônia.</p>
      </div>
      <div class="text-container7">
        <h4>A Rocha Marques elabora o pleito de credenciamento junto ao CAPDA.</h4>
        <h2>CONSULTORIA PARA ICTS</h2>
        <p>Da mesma forma, para o desenvolvimento de projetos em parceria com o empresas habilitadas na Lei <br/> de Informática de nº 8387/91 há necessidade do credenciamento junto ao CAPDA – Comitê de <br/> Atividades de Pesquisa e Desenvolvimento na Amazônia.</p>
      </div>
      <div class="image-container7">
        <img src={logoimg} alt="Imagem" />
        </div>
    </div>
      <MyCadastro />
      <End />  
      <Myrodape />
   </div>
  );
}

export default consultoriaparauniversidade;
