import React from 'react';
import BasicInfoForm from '../components/CharacterCreation/PhaseOne/BasicInfoForm';
import AttributesForm from '../components/CharacterCreation/PhaseOne/AttributesForm';
import AbilitiesForm from '../components/CharacterCreation/PhaseOne/AbilitiesForm';
import BackgroundsForm from '../components/CharacterCreation/PhaseOne/BackgroundsForm';
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
