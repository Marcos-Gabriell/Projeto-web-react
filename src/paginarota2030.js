import React from 'react';
import './paginarota2030.css';
import MyCadastro from './MyCadastro';
import End from './End';
import Myrodape from './Myrodape';
import logoImg from './img/imgrota.png'; 
import logoImg1 from './img/img2rota.png'; 

function paginarota2030() {
  return (
    <div>
      <div className="imagee-containerr-11">
       <img src={logoImg} alt="Imagem" style={{ objectFit: 'cover' }} /> 
       <div className="ooverlayy-11">
       <p className="imagee-texxtt-11">INCENTIVOS FISCAIS</p>
        <h1>Rota 2030</h1>
      </div>
      <br/> 
      </div>
      <div className="coontainerr4">
            <h1>Empresas da cadeia automotiva podem ter um ganho financeiro com a utilização do Programa Rota 2030</h1><br/><br/>
            <div className="texxt-containerr3">
            <h2>Quem pode se beneficiar?</h2>
            <p>Empresas da cadeia automotiva, incluindo fornecedores de autopeças e de sistemas, que atuem pelo Lucro Real.</p>
        </div>
        <div className="texxt-containerr4">
            <h2>Qual o benefício para a sua empresa?</h2>
            <p>Dedução do IRPJ e CSLL devidos até 10,2% dos dispêndios realizados no País em P&D de novos produtos ou novos modelos de produtos já existentes ou novas soluções <br/>
            estratégicas para mobilidade e logística e investimentos em ativos fixos.<br/><br/>
Em se tratando des dispêndios com pesquisa e desenvolvimento estratégicos, este percentual pode chegar a 15%.</p>
        </div>
        <div className="texxt-containerr4">
            <h2>Como atuamos?</h2>
            <p>A SIGPLANI presta consultoria desde a elaboração do pleito de habilitação da sua empresa, atuando também em todas as etapas da gestão deste incentivo, para que a sua <br/>
             empresa obtenha ganhos financeiros com a máxima segurança, além do suporte na preparação para o processo de auditoria independente.
</p>
        </div>   
        <div className="subtitulo-4">
           <h4>Potencialize sua competitividade com os<br/>
incentivos fiscais do Programa Rota 2030!</h4>
        </div>
      </div>
         <div className="imagee-containerr4">
         <img src={logoImg1} alt="Imagem" />
        </div>

      <MyCadastro />
      <End />
      <Myrodape />
    </div>
  );
}

export default paginarota2030;
