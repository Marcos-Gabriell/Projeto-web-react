import React from 'react';
import './paginacontato.css';
import MyCadastro from './MyCadastro';
import End from './End';
import Myrodape from './Myrodape';
import { FaFacebook, FaLinkedin, FaInstagram } from 'react-icons/fa';

function paginacontato() {
  return (
    <div>
      <div className='tituloo-principal8'>
        <h1>Contato</h1>
      </div>
      <div className="coontainer8">
        <div className="teexxt-containerrt5">
          <h2>Potencialize seus investimentos<br />em inovação.</h2>
          <p >Entre em contato conosco e conheça as oportunidades para investir em inovação. A<br />
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
      </div>
      <div className="conntainer-2">
        <div className="formm-container-2">
          <h3>ENVIE SUA MENSAGEM</h3>
          <form>
            <div className="formm-group-2">
              <input type="text" id="name" name="name" placeholder="Digite seu nome" />
            </div>
            <div className="formm-group-2">
              <input type="email" id="email" name="email" placeholder="Digite seu email" />
            </div>
            <div className="formm-group-2">
              <input type="text" id="subject" name="subject" placeholder="Digite o assunto" />
            </div>
            <div className="formm-group-2">
              <textarea id="message" name="message" placeholder="Digite a mensagem"></textarea>
            </div>
            <br />
            <label>
              <input type="checkbox" />
              Concordo em receber comunicações.<br />
            </label>
            <label className="validar">
              Ao informar meus dados, eu concordo com a Política de Privacidade.
            </label>
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
