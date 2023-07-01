import React from 'react';
import './paginainformanus.css';
import MyCadastro from './MyCadastro';
import End from './End';
import Myrodape from './Myrodape';
import logoImg from './img/imginformanaus.jpg'; 
import logoImg1 from './img/imgformaticamanus.png'; 

function paginainformanus() {
  return (
    <div>
       <div className="imagee-containerr8">
       <img src={logoImg} alt="Imagem" style={{ objectFit: 'cover' }} /> 
       <div className="ooverlayy8">
       <p className="imagee-texxtt8">INCENTIVOS FISCAIS</p>
        <h1>Lei de Informática – Manaus</h1>
      </div>
      <br/> 
      </div>


      <div className="coontainerr2">
            <h1>Empresas estabelecidas na Amazônia Ocidental ou no Amapá e fabricantes de equipamentos de informática, <br/>
            comunicação e automação que investem em pesquisa, desenvolvimento e inovação – P,D&I têm isenção de IPI <br/>
            e redução de II na compra de insumos.</h1><br/><br/><br/>
            <div className="texxt-containerr2">
            <h2>Quem pode se beneficiar da Lei?</h2>
            <p>Empresas brasileiras de qualquer porte que fabriquem Amazônia Ocidental ou no Estado do <br/>
             Amapá bens de informática e automação conforme regulamentado em Decreto. Entre em <br/>
             contato conosco e nós faremos esta avaliação para a sua empresa em busca da <br/>
             conformidade da Lei de Informática na Zona Franca de Manaus.</p>
        </div>
        <div className="texxt-containerr2">
            <h2>Qual o benefício para a sua empresa?</h2>
            <p>Isenção do IPI – Imposto sobre Produtos Industrializados, quando da venda dos produtos <br/>
            incentivados e redução do II – Imposto de importação na compra de insumos para fabricação <br/>
             dos produtos incentivados.</p>
        </div>
        <div className="texxt-containerr2">
            <h2>Como atuamos?</h2>
            <p>A SIGPLANI suporta a empresa na manutenção dos incentivos fiscais da Lei de Informática <br/>
             na Zona Franca de Manaus, atuando na busca da conformidade no cumprimento das obrigações <br/>
              de investimento em P,D&I.<br/><br/>
               Se asua empresa está habilitada na SUFRAMA, nós gerimos todas as obrigações oriundas da Lei, <br/>
               desde a inclusão de um produto ou modelo, da análise de enquadrabilidade dos projetos de <br/>
               P,D&I, até a prestação de contas.</p>
        </div>   
      </div>
         <div className="imagee-containerr2">
         <img src={logoImg1} alt="Imagem" />
        </div>
      <MyCadastro />
      <End />
      <Myrodape />
    </div>
  );
}

export default paginainformanus;
