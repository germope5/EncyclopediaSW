import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from '../src/pages/Home';
import CharacterDetail from '../src/pages/CharacterDetails';
import Footer from '../src/components/Footer.js'


const App = () => {
  return (
    <Router>

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/characters/:id" element={<CharacterDetail />} />
          
        </Routes>
        <Footer />
    </Router>
  );
};



export default App;
