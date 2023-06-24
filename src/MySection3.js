import React from 'react';
import './MySection3.css';
import logoImg from './img/aten.png';

function MySection3() {
  return (
    <div className="info-image"><br/>
      <img src={logoImg} alt="Imagem de informações" />
      <div className="info-overlay">
        <div className="info-box">
          <h4>ALGUNS FATOS SOBRE O NOSSO TRABALHO</h4>
          <div className="fact-container">
            <div className="fact">
              <span className="fact-number">752</span><br/>
              <span className="fact-label">CLIENTES ATENDIDOS</span>
            </div>
            <div className="fact">
              <span className="fact-number">17</span><br/>
              <span className="fact-label">ESTADOS ATENDIDOS</span>
            </div>
            <div className="fact">
              <span className="fact-number">3500</span><br/>
              <span className="fact-label">PROJETOS ANALISADOS</span>
            </div>
            <div className="fact">
              <span className="fact-number">16</span><br/>
              <span className="fact-label">SETORES ATENDIDOS</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MySection3;
