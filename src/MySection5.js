import React, { useEffect } from 'react';
import './MySection5.css';

function MySection5() {
  useEffect(() => {
    function updateLayout() {
      if (window.innerWidth < 600) {
        document.querySelector('.section-container').classList.add('responsive');
      } else {
        document.querySelector('.section-container').classList.remove('responsive');
      }
    }

    window.addEventListener('resize', updateLayout);
    // Chame a função updateLayout ao carregar a página também, para garantir que o layout esteja correto inicialmente
    window.addEventListener('load', updateLayout);

    // Remova os event listeners quando o componente for desmontado
    return () => {
      window.removeEventListener('resize', updateLayout);
      window.removeEventListener('load', updateLayout);
    };
  }, []);

  return (
    <section className="section-container">
      <div className="subsection">
        <h2>REFERÊNCIA</h2>
        <p>Somos referência em leis de incentivos fiscais e captação de recursos financeiros.</p>
      </div>
      <div className="subsection">
        <h2>INFORMAÇÃO</h2>
        <p>Disponibilizamos as últimas informações sobre incentivos e fomentos aos nossos clientes.</p>
      </div>
      <div className="subsection">
        <h2>GESTÃO</h2>
        <p>Apoiamos todo o processo de gestão dos incentivos fiscais, prezando pela integridade legal.</p>
      </div>
      <div className="subsection">
        <h2>ATUAÇÃO</h2>
        <p>Participamos de forma contributiva do ecossistema de inovação.</p>
      </div>
      <div className="subsection">
        <h2>CONHECIMENTO</h2>
        <p>Construímos e compartilhamos o conhecimento com nossos clientes.</p>
      </div>
    </section>
  );
}

export default MySection5;
