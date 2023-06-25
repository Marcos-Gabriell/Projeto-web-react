import React from 'react';
import './MyBlog.css';
import imgblog1 from './img/blog1.png'; 
import imgblog2 from './img/blog2.png'; 
import imgblog3 from './img/blog3.png'; 

const MyBlog = () => {
  return (
    <div>
      <h1>ÚLTIMAS DO BLOG</h1>
      <div className="blog-section">
        <div className="blog-card">
          <div className="image-wrapper">
            <img src={imgblog1} alt="Imagem 1" />
          </div>
          <h3>Projetos de inovação são financiados com juros reduzidos</h3>
          <p>O TR passou a valer para os financiamentos concedidos com recursos do FNDCT. Ministério da Ciência, Tecnologia e Inovação e Finep também assinaram contratos para uso de IA no desenvolvimento de soluções tecnológicas para o setor público Ministério da Ciência, Tecnologia e…</p>
        </div>
        <div className="blog-card">
          <div className="image-wrapper">
            <img src={imgblog2} alt="Imagem 2" />
          </div>
          <h3>Câmara aprova requerimento de urgência para modernização da Lei do Bem, promovendo avanços nos modelos de negócios</h3>
          <p>A Câmara dos Deputados aprovou, por ampla maioria, um requerimento de urgência para o Projeto de Lei (PL) 4944/2020, que visa modernizar a Lei do Bem. O projeto propõe uma série de mudanças que visam adequar a legislação aos novos modelos de negócios e incentivar o desenvolvimento…</p>
        </div>
        <div className="blog-card">
          <div className="image-wrapper">
            <img src={imgblog3} alt="Imagem 3" />
          </div>
          <h3>Em apenas cinco meses, Finep contrata R$ 2,1 bilhões em operações de crédito com empresas de todos os portes e setores</h3>
          <p>A Finep acaba de atingir, em 2023, um recorde histórico na contratação de projetos. Nos primeiros cinco meses do ano, já foram contabilizados R$ 2,1 bilhões em operações de crédito destinadas ao financiamento de cerca de 200 projetos de tecnologia e inovação de empresas…
        </p>
        </div>
      </div>
    </div>
  );
};

export default MyBlog;
