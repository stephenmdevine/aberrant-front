import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import CharacterCreationPhaseOne from './pages/CharacterCreationPhaseOne';
import NotFound from './pages/NotFound';
import Header from './components/common/Header';
import NavBar from './components/common/NavBar';
import { CharacterProvider } from './context/CharacterContext';

function App() {
  return (
    <CharacterProvider>
      <Router>
        <Header />
        <NavBar />
        <Switch>
          <Route path="/" exact component={CharacterCreationPhaseOne} />
          {/* Add more routes as needed */}
          <Route component={NotFound} />
        </Switch>
      </Router>
    </CharacterProvider>
  );
}

export default App;
