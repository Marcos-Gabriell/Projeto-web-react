import React from 'react';
import './IncentivosFiscais.css';
import MyCadastro from './MyCadastro';
import End from './End';
import Myrodape from './Myrodape';
import logoImg from './img/infor.png'; 
import logoImg1 from './img/img1.png'; 
import logoImg2 from './img/img2.png'; 
import logoImg3 from './img/img3.png'; 
import logoImg4 from './img/img4.png'; 
import logoImg5 from './img/img5.png'; 
import logoImg6 from './img/img6.png'; 
import logoImg7 from './img/img7.png'; 
import logoImg9 from './img/img9.png'; 

function IncentivosFiscais() {
  return (
    <div>
      <div className='titulo-principal2'>
        <h1>Incentivos Fiscais</h1>
      </div>
      <section className="my-section"><br/><br/><br/>
      <div className="my-section-content">
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

export default IncentivosFiscais;
