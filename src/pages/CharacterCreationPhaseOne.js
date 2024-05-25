import React from 'react';
import BackgroundsForm from '../components/CharacterCreation/PhaseOne/BackgroundsForm';
import AttributesForm from '../components/CharacterCreation/PhaseOne/AttributesForm';
import AbilitiesForm from '../components/CharacterCreation/PhaseOne/AbilitiesForm';
import BasicInfoForm from '../components/CharacterCreation/PhaseOne/BasicInfoForm';
import BonusPointsForm from '../components/CharacterCreation/PhaseOne/BonusPointsForm';

const CharacterCreationPhaseOne = () => {
  return (
    <div>
      <h1>Character Creation - Phase One</h1>
      <BasicInfoForm />
      <AttributesForm />
      <AbilitiesForm />
      <BackgroundsForm />
      <BonusPointsForm />
    </div>
  );
};

export default CharacterCreationPhaseOne;
