import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './Home';
import Asigplani from './asigplani';
import Navbar from './Navbar';


const App = () => {
  return (
    <Router>
      <div>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/asigplani" element={<Asigplani  />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
