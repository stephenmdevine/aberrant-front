import React from 'react';
import { BrowserRouter as Router, Route, Switch, Routes } from 'react-router-dom';
import CharacterCreationPhaseOne from './pages/CharacterCreationPhaseOne';
import About from './pages/About';
import Home from './pages/Home';
import NotFound from './pages/NotFound';
import Header from './components/common/Header';
import { CharacterProvider } from './context/CharacterContext';

function App() {
  return (
    <Router>
      <CharacterProvider>
        <Header />
        <Routes>
          <Route path='/' exact component={Home} />
          <Route path="/character-creation" exact component={CharacterCreationPhaseOne} />
          <Route path="/about" exact component={About} />
          {/* Add more routes as needed */}
          <Route component={NotFound} />
        </Routes>
      </CharacterProvider>
    </Router>
  );
}

export default App;
