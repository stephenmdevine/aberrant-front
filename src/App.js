import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import CharacterCreationPhaseOne from './pages/CharacterCreationPhaseOne';
import About from './pages/About';
import Home from './pages/Home';
// import NotFound from './pages/NotFound';
import Header from './components/common/Header';
// import { CharacterProvider } from './context/CharacterContext';

function App() {
  return (
    <Router>
      {/* <CharacterProvider> */}
        <Header />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path="/character-creation" element={<CharacterCreationPhaseOne />} />
          <Route path="/about" element={<About />} />
          {/* Add more routes as needed */}
          {/* <Route path='/not-found' exact component={NotFound} /> */}
        </Routes>
      {/* </CharacterProvider> */}
    </Router>
  );
}

export default App;
