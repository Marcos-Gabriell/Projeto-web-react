import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './Home';
import Teste from './teste';
import Navbar from './Navbar';
import IncentivosFiscais from './incentivosfiscais';
import CaptacaoDeRecursos from './CaptacaoDeRecursos';

const App = () => {
  return (
    <Router>
      <div>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/asigplani" element={<Teste />} />
          <Route path="/incentivosfiscais" element={<IncentivosFiscais />} />
          <Route path="/captacao-de-recursos" element={<CaptacaoDeRecursos />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
