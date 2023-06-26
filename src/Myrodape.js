import React from 'react';
import { FaFacebook, FaLinkedin, FaInstagram } from 'react-icons/fa';
import './Myrodape.css';

const Myrodape = () => {
  return (
    <footer className="rodape" id="contato">
      <div className="rodape-div">
        <div className="rodape-div-1">
          <div className="rodape-div-3-coluna">
            <span><b>NAVEGUE</b></span>
            <p><a href="#">Home</a></p>
            <p><a href="#ASIGPLANI">ASIGPLANI</a></p>
            <p><a href="#Clientes">Clientes</a></p>
            <p><a href="#Conteúdo">Conteúdo</a></p>
            <p><a href="#Contato">Contato</a></p>
            <p><a href="#Políticas de Privacidade">Políticas de Privacidade</a></p>
          </div>
        </div>

        <div className="rodape-div-2">
          <div className="rodape-div-3-coluna">
            <span><b>Serviços</b></span>
            <p><a href="#Lei de informática">Lei de informática</a></p>
            <p><a href="#Lei de informática - Manaus">Lei de informática - Manaus</a></p>
            <p><a href="#Lei do Bem">Lei do Bem</a></p>
            <p><a href="#Padis">Padis</a></p>
            <p><a href="#Rota2030">Rota 2030</a></p>
            <p><a href="#FINEP">FINEP</a></p>
            <p><a href="#BRDE">BRDE</a></p>
            <p><a href="#Finame">Finame</a></p>
            <p><a href="#Consultoria para ICTs e Universidades">Consultoria para ICTs e Universidades</a></p>
          </div>
        </div>

        <div className="rodape-div-3">
          <div className="rodape-div-3-coluna">
            <span><b>CONTEÚDO</b></span>
            <p><a href="#servicos">Artigos</a></p>
            <p><a href="#empresa">últimas Notícias</a></p>
          </div>
        </div>

        <div className="rodape-div-4">
          <div className="rodape-div-4-coluna">
            <span><b>RELACIONAMENTO</b></span><br/>
            <FaFacebook size={30} /> {/* Ícone do Facebook */}
            <FaLinkedin size={30} /> {/* Ícone do LinkedIn */}
            <FaInstagram size={30} /> {/* Ícone do Instagram */}
          </div>
        </div>
      </div>

      <hr className="line2" />
      <p className="rodape-direitos">2023 - SIGPLANI. Incentivos à inovação. - Todos os direitos reservados - Desenvolvido por In Company</p>
    </footer>
  );
};

export default Myrodape;
