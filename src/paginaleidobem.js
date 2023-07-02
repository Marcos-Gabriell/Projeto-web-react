import React from 'react';
import './paginaleidobem.css';
import MyCadastro from './MyCadastro';
import End from './End';
import Myrodape from './Myrodape';
import logoImg from './img/imgleidobem.png'; 
import logoImg1 from './img/imgleidobem2.png'; 

function paginaleidobem() {
  return (
    <div>
        <div className="imagee-containerr9">
       <img src={logoImg} alt="Imagem" style={{ objectFit: 'cover' }} /> 
       <div className="ooverlayy9">
       <p className="imagee-texxtt9">INCENTIVOS FISCAIS</p>
        <h1>Lei do Bem</h1>
      </div>
      <br/> 
      </div>
      <div className="coontainerr3">
            <h1>Empresas podem ter um ganho financeiro de até 34% sobre seus investimentos em inovação.</h1><br/><br/>
            <div className="texxt-containerr3">
            <h2>Quem pode se beneficiar da Lei?</h2>
            <p>Empresas brasileiras no regime de Lucro Real, de qualquer porte que desenvolvam projetos de inovação tecnológica e apresentem lucro fiscal no ano base. A aplicação da Lei do <br/>
            Bem independe de aprovação prévia de órgão governamental.</p>
        </div>
        <div className="texxt-containerr3">
            <h2>Qual o benefício para a sua empresa?</h2>
            <p>Redução da base de cálculo para apuração do IRPJ e CSLL,<br/>
            Redução de 50% do IPI na aquisição de equipamentos para atividade de inovação,<br/>
             Depreciação e amortização acelerada integral na compra de equipamentos para P,D&I e<br/>
            Isenção de IRRF para registro ou manutenção de marcas, patentes e cultivares no exterior.</p>
        </div>
        <div className="subtitulo-2">
           <h4>Quer saber qual o potencial de ganho financeiro para sua empresa utilizando este incentivo? Entre em contato conosco e nós te apresentaremos as oportunidades da <br/>
           Lei do Bem!</h4>
        </div>
        <div className="texxt-containerr3">
            <h2>Como atuamos?</h2>
            <p>A Rocha Marques presta consultoria em todas as etapas do processo de gestão da Lei do Bem.</p>
        </div>   
        <div className="subtitulo-2">
           <h4>Se a sua empresa nunca utilizou este incentivo, nós implementações um processo de gestão da Lei do Bem na sua empresa.</h4>
        </div>
      </div>
         <div className="imagee-containerr3">
         <img src={logoImg1} alt="Imagem" />
        </div>
      <MyCadastro />
      <End />
      <Myrodape />
    </div>
  );
}

export default paginaleidobem;
