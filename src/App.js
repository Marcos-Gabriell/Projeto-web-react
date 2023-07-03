import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './Home';
import Asigplani from './asigplani';
import Navbar from './Navbar';
import IncentivosFiscais from './IncentivosFiscais';
import CaptaçãodeRecursos from './CaptaçãodeRecursos';
import Fianme from './paginafiname.js';
import Consultoriaparauniversidade from './consultoriaparauniversidade.js';
import PaginaLeidainformatica from './leidainformatica.js';
import Paginaclientes from './paginaclientes.js';
import Paginaconteudo from './paginaconteudo.js';
import Paginacontato from './paginacontato.js';
import Paginadepolicasdepriacidade from './paginadepolicasdepriacidade.js';
import Paginainformanus from './paginainformanus.js';
import Paginaleidobem from './paginaleidobem.js';
import Paginapadis from './paginapadis.js';
import Paginarota2030 from './paginarota2030.js';
import Paginafinep from './paginafinep.js';


const App = () => {
  return (
    <Router>
      <div>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/a-sigplani/" element={<Asigplani  />} />
          <Route path="/incentivos-fiscias/" element={<IncentivosFiscais  />} />
          <Route path="/Captação-de-Recursos/" element={<CaptaçãodeRecursos  />} />
          <Route path="/finame/" element={<Fianme  />} />
          <Route path="/consultoria-para-icts-e-universidades/" element={<Consultoriaparauniversidade  />} />
          <Route path="/Lei-da-informatica/" element={<PaginaLeidainformatica  />} />
          <Route path="/clientes/" element={<Paginaclientes  />} />
          <Route path="/conteudo/" element={<Paginaconteudo  />} />
          <Route path="/contato/" element={<Paginacontato  />} />
          <Route path="/politicas-de-privacidade/" element={<Paginadepolicasdepriacidade  />} />
          <Route path="/Lei-da-informatica-manus/" element={<Paginainformanus  />} />
          <Route path="/Lei-do-bem/" element={<Paginaleidobem  />} />
          <Route path="/padis/" element={<Paginapadis  />} />
          <Route path="/rota-2030/" element={<Paginarota2030  />} />
          <Route path="/finep" element={<Paginafinep  />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
