import React from 'react';
import './paginapadis.css';
import MyCadastro from './MyCadastro';
import End from './End';
import Myrodape from './Myrodape';
import logoImg from './img/img3.png'; 
import logoImg1 from './img/omgpadis.png'; 

function paginapadis() {
  return (
    <div>
    <div className="imagee-containerr-10">
    <img src={logoImg} alt="Imagem" style={{ objectFit: 'cover' }} /> 
    <div className="ooverlayy-10">
    <p className="imagee-texxtt-10">INCENTIVOS FISCAIS</p>
     <h1>PADIS</h1>
   </div>
   <br/> 
   </div>

   <div className="coontainerr-2">
            <h1>Conjunto de incentivos fiscais federais destinado às áreas de componentes ou dispositivos semicondutores, <br/>
            incluindo células e módulos/painéis fotovoltaicos, insumos e equipamentos dedicados e destinados à <br/>
            fabricação de componentes ou dispositivos eletrônicos semicondutores, bem como displays (mostradores de informação).</h1><br/><br/><br/>
          
            <div className="texxt-containerr-2">
            <h2>Quem pode se beneficiar?</h2>
            <p>Empresas fabricantes de semicondutores e displays e que investem em PD&I nas áreas de <br/>
             microeletrônica.</p>
        </div>
        <div className="texxt-containerr-2">
            <h2>Qual o benefício para a sua empresa?</h2>
            <p>Redução a zero nas alíquotas de IPI, PIS, COFINS, II e CIDE nas aquisições (mercado interno e <br/>
              importações) de matérias-primas, insumos, equipamentos e softwares utilizados nas <br/>
               atividades de produção e P,D&I, <br/><br/>
               Redução de 100% do IRPJ e do Adicional sobre o lucro da exploração e<br/><br/>
               Crédito financeiro calculado sobre os investimentos em P,D&I..</p>
        </div>
        <h3>Quer saber como o PADIS pode beneficiar a sua empresa? Entre em contato conosco!</h3>
        <div className="texxt-containerr-2">
            <h2>Como atuamos?</h2>
            <p>A SIGPLANI presta consultoria em todas as etapas do processo de gestão do PADIS, desde o credenciamento da empresa junto ao MCTI até a prestação de contas e suporte <br/>
            no processo de auditoria interna..</p>
        </div>   
        <h3>Desde 2009 a SIGPLANI auxilia empresas de semicondutores a se beneficiar destes incentivos fiscais.</h3>
      </div>
      <div className="imagee-containerr-2">
         <img src={logoImg1} alt="Imagem" />
        </div>
   
  <MyCadastro />
  <End />
  <Myrodape />
</div>
  );
}

export default paginapadis;
