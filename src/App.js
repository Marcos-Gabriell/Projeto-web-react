import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './Home';
import Asigplani from './asigplani';
import Navbar from './Navbar';
import IncentivosFiscais from './IncentivosFiscais';
import CaptaçãodeRecursos from './CaptaçãodeRecursos';
import Fianme from './paginafiname.js';
import Consultoriaparauniversidade from './consultoriaparauniversidade.js';


const App = () => {
  return (
    <Router>
      <div>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/a-sigplani" element={<Asigplani  />} />
          <Route path="/incentivos-fiscias" element={<IncentivosFiscais  />} />
          <Route path="/Captação-de-Recursos" element={<CaptaçãodeRecursos  />} />
          <Route path="/finame" element={<Fianme  />} />
          <Route path="/consultoria-para-icts-e-universidades" element={<Consultoriaparauniversidade  />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
