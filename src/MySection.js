import React from 'react';
import './MySection.css';
import logoImg from './img/infor.png'; 
import logoImg1 from './img/img1.png'; 
import logoImg2 from './img/img2.png'; 
import logoImg3 from './img/img3.png'; 
import logoImg4 from './img/img4.png'; 
import logoImg5 from './img/img5.png'; 
import logoImg6 from './img/img6.png'; 
import logoImg7 from './img/img7.png'; 
import logoImg9 from './img/img9.png'; 


const MySection = () => {
  return (
    <section className="my-section"><br/><br/><br/>
      <div className="my-section-content">
        <h2 className="section-title">SERVIÇOS</h2>
        <div className="row">
          <div className="col-md-4 col-12">
            <div className="image-container2">
              <img src={logoImg} alt="Imagem" />
              <div className="image-caption">
                <h4 className="text-center" style={{ color: '#3399CC' }}>Lei de Informática</h4>
                <p className="text-center text-wrap">Empresas fabricantes de equipamentos de informática, comunicação e automação podem pleitear créditos financeiros através de investimentos em pesquisa...</p>
              </div>
            </div>
          </div>
          <div className="col-md-4 col-12">
            <div className="image-container2">
              <img src={logoImg1} alt="Imagem" />
              <div className="image-caption">
                <h4 className="text-center" style={{ color: '#3399CC' }}>Lei de Informática – Manaus</h4>
                <p className="text-center text-wrap">Empresas estabelecidas na Amazônia Ocidental ou no Amapá e fabricantes de equipamentos de informática, comunicação e automação que investem em pesquisa, desenvolvimento e inovação…</p>
              </div>
            </div>
          </div>
          <div className="col-md-4 col-12">
            <div className="image-container2">
              <img src={logoImg2} alt="Imagem" />
              <div className="image-caption">
                <h4 className="text-center" style={{ color: '#3399CC' }}>Lei do Bem</h4>
                <p className="text-center text-wrap">Empresas podem ter um ganho financeiro de até 34% sobre seus investimentos em inovação.</p>
              </div>
            </div>
          </div>
          <div className="col-md-4 col-12">
            <div className="image-container2">
              <img src={logoImg3} alt="Imagem" />
              <div className="image-caption">
                <h4 className="text-center" style={{ color: '#3399CC' }}>PADIS</h4>
                <p className="text-center text-wrap">O Programa de Apoio ao Desenvolvimento Tecnológico da Indústria de Semicondutores (PADIS) é um incentivo fiscal federal estabelecido com o objetivo de contribuir…</p>
              </div>
            </div>
          </div>
          <div className="col-md-4 col-12">
            <div className="image-container2">
              <img src={logoImg4} alt="Imagem" />
              <div className="image-caption">
                <h4 className="text-center" style={{ color: '#3399CC' }}>Rota 2030</h4>
                <p className="text-center text-wrap">O Programa Rota 2030 é uma iniciativa criada pelo governo, descrita na Lei Federal nº 13.755/2018, que tem como objetivo estimular o desenvolvimento na indústria automotiva…</p>
              </div>
            </div>
          </div>
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
          <div className="col-md-4 col-12">
            <div className="image-container2">
              <img src={logoImg7} alt="Imagem" />
              <div className="image-caption">
                <h4 className="text-center" style={{ color: '#3399CC' }}>Finame</h4>
                <p className="text-center text-wrap">O FINAME tem por objetivo financiar a produção e aquisição de máquinas e equipamentos cadastrados no BNDES.</p>
              </div>
            </div>
          </div>

          <div className="col-md-4 col-12">
            <div className="image-container2">
              <img src={logoImg9} alt="Imagem" />
              <div className="image-caption">
                <h4 className="text-center" style={{ color: '#3399CC' }}>Consultoria para ICTs e Universidades</h4>
                <p className="text-center text-wrap">As Universidades podem desenvolver projetos de pesquisa, desenvolvimento e inovação em parceria com empresas beneficiárias dos incentivos fiscais federais, através da Lei do Bem, Lei de Informática e Rota 2030.</p>
              </div>
            </div>
          </div>
      
      

          {/* Restante dos blocos de serviço */}
        </div>
      </div>
    </section>
  );
}

export default MySection;
