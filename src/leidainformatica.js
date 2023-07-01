import React from 'react';
import './leidainformatica.css';
import MyCadastro from './MyCadastro';
import End from './End';
import Myrodape from './Myrodape';
import logoImg from './img/imginformatica.png'; 
import logoImg2 from './img/ebookinfor.png'; 
import logoImg3 from './img/imggraficoleiinfor.png'; 
import logoImg4 from './img/informaçõesinfor.png'; 
import SeparatorLine from './SeparatorLine';

function leidainformatica() {
  return (
    <div>
        <div className="info-imagee">
           <img src={logoImg} alt="Imagem de informações" />
        <div className="infoo-imagee2"><br/><br/>
            <img src={logoImg2} alt="Imagem de informações" />
        </div>
        <div className="overlayy">
            <p className="image-textt">INCENTIVOS FISCAIS</p>
            <h2>Lei de Informática</h2>
        </div>
        </div>
        <SeparatorLine />
      
        <div className="coontainerr1">
            <h1>Empresas fabricantes de equipamentos de informática, comunicação e automação podem pleitear créditos <br/>
              financeiros através investimentos em pesquisa, desenvolvimento e inovação – P,D&I.</h1><br/><br/><br/>
            <div className="texxt-containerr1">
            <h2>Quem pode se beneficiar?</h2>
            <p>Empresas brasileiras de qualquer porte que fabriquem localmente bens de informática e <br/>
            automação, conforme regulamentado em Decreto. Entre em contato conosco e nós <br/>
            faremos esta avaliação para a sua empresa para o processo de gestão da Lei de <br/>
             Informática.</p>
        </div>
        <div className="texxt-containerr1">
            <h2>Qual o benefício para a sua empresa?</h2>
            <p>Crédito financeiro a ser compensado com tributos federais (IPI, IRPJ, CSLL, PIS, COFINS) em <br/>
              até 5 anos.</p>
        </div>
        <div className="texxt-containerr1">
            <h2>Como atuamos?</h2>
            <p>A SIGPLANI presta consultoria em todas as etapas do processo de gestão da Lei de <br/>
            Informática, abrangendo o suporte ao processo de auditoria independente, quando <br/>
            aplicável.</p>
        </div>   
        <div className="texxt-containerr1">
            <h2>Se a sua empresa não está habilitada, nós elaboramos o pleito de PPB.</h2>
            <p>Se a sua empresa está habilitada, nós gerimos todas as obrigações oriundas da Lei, desde <br/>
              a inclusão de um produto ou modelo, da orientação para a geração do crédito financeiro, <br/>
              da análise de enquadrabilidade dos projetos de P,D&I, até a elaboração do RDA – Relatório <br/>
              Demonstrativo da Lei de Informática.</p>
        </div>   
      </div>
         <div className="imagee-containerr1">
         <img src={logoImg3} alt="Imagem" />
        </div>
        <div className="subtitulo">
           <h4>São mais de 25 anos de experiência na gestão da Lei de Informática à disposição para que este incentivo seja estratégico na sua empresa!</h4>
        </div>
      <div className="infoo-imagee3">
      <img src={logoImg4} alt="Imagem" />
      </div>
      <MyCadastro />
      <End />
      <Myrodape />
    </div>
  );
}

export default leidainformatica;
