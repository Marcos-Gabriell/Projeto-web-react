import React from 'react';
import './MySection4.css';
import { Link } from 'react-router-dom';

const QuemSomos = () => {
  return (
    <section className="quemsomos">
      <h1>A experiência da SIGPLANI<br/> oferece às empresas a elaboração <br/>de um processo assertivo e com<br/> qualidade.</h1>
      <div>
        <h2>QUEM SOMOS.</h2>
        <h3>A SIGPLANI  foi fundada em Curitiba em 1995 com <br/>o objetivo de assessorar empresas de informática e <br/>automação de todos os portes a se habilitar e a manter <br/>os incentivos fiscais da Lei de Informática.</h3><br/>
        <Link to="/a-sigplani" className="btn">Saiba Mais</Link>
      </div>
    </section>
  );
}

export default QuemSomos;
