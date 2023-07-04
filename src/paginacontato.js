import React from 'react';
import './paginacontato.css';
import MyCadastro from './MyCadastro';
import End from './End';
import Myrodape from './Myrodape';
import { FaFacebook, FaLinkedin, FaInstagram } from 'react-icons/fa';

function paginacontato() {
  return (
    <div>
      <div className='tituloo-principal7'>
        <h1>Contato</h1>
      </div>
      <div className="coontainer8">
        <div className="teexxt-containerrt5">
          <h2>Potencialize seus investimentos<br />em inovação.</h2>
          <p>Entre em contato conosco e conheça as oportunidades para investir em inovação. A<br />
            nossa equipe está à disposição para atendê-lo.</p>
          <h3>Horário de atendimento:</h3>
          <p>Segunda à Sexta 9:00 às 17:00<br /><br />
            +55 41 33296641
          </p>
          <h3>Relacionamento</h3>
          <div className="icon-container">
            <FaFacebook size={30} />
            <FaLinkedin size={30} />
            <FaInstagram size={30} />
          </div>
        </div>

        <div className="formulario-container">
          <form action="#" method="POST">
          <h1>ENVIE SUA MENSAGEM</h1>
            <div className="form-group">
              <input type="text" placeholder="Nome completo" id="nome" name="nome" required />
            </div>
            <div className="form-group">
              <input type="email" placeholder="E-mail" id="email" name="email" required />
            </div>
            <div className="form-group">
              <input type="text"  placeholder="Assunto" id="assunto" name="assunto" required />
            </div>
            <div className="form-group">
              <textarea id="mensagem" placeholder="Messagem..." name="mensagem" rows="5" required></textarea>
            </div>
            <div className="form-group checkbox-group">
              <input type="checkbox" id="comunicacoes" name="comunicacoes" />
              <label htmlFor="comunicacoes">Concordo em receber comunicações.</label><br/>
              <label htmlFor="privacidade">Ao informar meus dados, eu concordo com a Política de Privacidade.</label>
            </div>
            <button type="button">Enviar</button>
          </form>
        </div>
      </div>

      <MyCadastro />
      <End />
      <Myrodape />
    </div>
  );
}

export default paginacontato;
