import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import CharacterCreationPhaseOne from './pages/CharacterCreationPhaseOne';
import About from './pages/About';
import Home from './pages/Home';
// import NotFound from './pages/NotFound';
import Header from './components/common/Header';
import { CharacterProvider } from './context/CharacterContext';
import AttributesForm from './components/CharacterCreation/PhaseOne/AttributesForm';
import AbilitiesForm from './components/CharacterCreation/PhaseOne/AbilitiesForm';
import BackgroundsForm from './components/CharacterCreation/PhaseOne/BackgroundsForm';
import BonusPointsForm from './components/CharacterCreation/PhaseOne/BonusPointsForm';
import BasicInfoForm from './components/CharacterCreation/PhaseOne/BasicInfoForm';

function App() {
  return (
    <Router>
      <CharacterProvider>
        <Header />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/character-creation' element={<CharacterCreationPhaseOne />} />
          <Route path='/about' element={<About />} />
          <Route path='/basic-info-form' element={<BasicInfoForm />} />
          <Route path='/attributes-form/:id' element={<AttributesForm />} />
          <Route path='/abilities-form/:id' element={<AbilitiesForm />} />
          <Route path='/backgrounds-form/:id' element={<BackgroundsForm />} />
          <Route path='/bonus-points-form/:id' element={<BonusPointsForm />} />
          {/* Add more routes as needed */}
          {/* <Route path='/not-found' exact component={NotFound} /> */}
        </Routes>
      </CharacterProvider>
    </Router>
  );
}

export default App;
