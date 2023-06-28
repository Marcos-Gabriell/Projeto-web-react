import React from 'react';
import './CaptaçãodeRecursos.css';
import MyCadastro from './MyCadastro';
import End from './End';
import Myrodape from './Myrodape';
import logoImg5 from './img/img5.png'; 
import logoImg6 from './img/img6.png'; 



function CaptaçãodeRecursos() {
  return (
    <div>
        <div className='titulo-principal3'>
        <h1>Captação de Recursos</h1>
      </div>
         <section className="my-section"><br/><br/><br/>
      <div className="my-section-content">
        <div className="row">
          <div className="col-md-4 col-12">
            <div className="image-container2">
              <img src={logoImg5} alt="Imagem" />
              <div className="image-caption">
                <h4 className="text-center" style={{ color: '#3399CC' }}>FINEP</h4>
                <p className="text-center text-wrap">A Financiadora de Estudos e Projetos – FINEP tem a missão de suportar financeiramente empresas em todas as etapas e dimensões do ciclo de desenvolvimento científico e tecnológico, através de recursos reembolsáveis e não reembolsáveis.</p>
              </div>
            </div>
          </div>
          <div className="col-md-4 col-12">
            <div className="image-container2">
              <img src={logoImg6} alt="Imagem" />
              <div className="image-caption">
                <h4 className="text-center" style={{ color: '#3399CC' }}>BRDE</h4>
                <p className="text-center text-wrap">O BRDE – Bando Regional de Desenvolvimento do Extremo Sul, através de financiamentos, promove o desenvolvimento de projetos com o objetivo de aumentar a competitividade de empresas da região sul.</p>
              </div>
            </div>
          </div>

          {/* Restante dos blocos de serviço */}
        </div>

      </div><br/><br/>
    </section>
    <MyCadastro />
    <End />
    <Myrodape />
   </div>
  );
}

export default CaptaçãodeRecursos;
