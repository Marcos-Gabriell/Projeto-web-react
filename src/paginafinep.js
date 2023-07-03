import React from 'react';
import './paginafinep.css';
import MyCadastro from './MyCadastro';
import End from './End';
import SeparatorLine from './SeparatorLine';
import Myrodape from './Myrodape';
import logoImg from './img/imgfinep.png'; 
//import logoImg1 from './img/imgleidobem2.png'; 

function paginafinep() {
  return (
    <div>
        <div className="imagee-containerr-9">
          <img src={logoImg} alt="Imagem" style={{ objectFit: 'cover' }} /> 
          <div className="ooverlayy-9">
          <p className="imagee-texxtt-9">CAPTAÇÃO DE RECURSOS</p>
        <h1>FINEP</h1>
      </div>
         <br/> 
      </div>
      <div className="coontainerr-4">
      <h1>CAPTAÇÃO DE RECURSOS FINEP</h1><br/><br/>
            <div className="texxt-containerr-4">
            <p>A Financiadora de Estudos e Projetos – FINEP tem a missão de suportar financeiramente empresas em todas as etapas e dimensões do ciclo de desenvolvimento científico e <br/>
            tecnológico, através de recursos reembolsáveis e não reembolsáveis.</p>
        </div>
        <div className="subtitulo-4">
           <h4>Com taxas de juros mais atraentes para o financiamento e com editais de subvenção econômica, a sua empresa pode desenvolver projetos inovadores!</h4>
        </div>
        <div className="texxt-containerr-4">
            <p>A partir da experiência da SIGPLANI na caracterização e na enquadrabilidade de projetos de inovação tecnológica, trabalhamos para que o seu projeto seja <h4>assertivo</h4> na<br/>
             escolha do Programa mais adequado.</p>
        </div>
        <div className="texxt-containerr-4">
            <p>Tenha todo o suporte de uma consultoria especializada em inovação na construção do seu Formulário de Apresentação de Projetos (FAP), ganhando em <h4>agilidade</h4> e se tornando <br/>
             mais competitivo.</p>
        </div>   
        <div className="subtitulo-4">
           <h4>A captação de recursos pode ser o diferencial na estratégia da sua empresa. Entre em contato conosco e conheça as oportunidades para financiar o seu projeto de inovação.</h4>
        </div>
        <div className="texxt-containerr-4">
            <p><h4>Subvenção Econômica –</h4> Apoio financeiro por meio de aplicação de recursos públicos <h4>não reembolsáveis</h4> (que não serão restituídos) realizado diretamente na empresa.</p>
        </div> 
        <div className="texxt-containerr-4">
            <p><h4>Recursos Reembolsáveis –</h4>Trata-se de <h4>financiamento</h4> em condições diferenciadas, com encargos reduzidos, para atender demanda de empresas brasileiras. </p>
        </div>  
      </div>

      <SeparatorLine />
      <MyCadastro />
      <End />
      <Myrodape />
    </div>
  );
}

export default paginafinep;
