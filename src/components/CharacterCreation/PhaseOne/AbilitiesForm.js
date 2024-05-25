import React, { useState, useContext } from 'react';
import axios from 'axios';
import CharacterContext from '../../../context/CharacterContext';

const AbilitiesForm = () => {
  const { character, setCharacter } = useContext(CharacterContext);
  const [abilities, setAbilities] = useState([]);
  const [newAbility, setNewAbility] = useState('');
  const [remainingPoints, setRemainingPoints] = useState(character.abilityPoints || 23);

  const handleAddAbility = () => {
    if (newAbility.trim() === '') return;
    setAbilities((prev) => [...prev, { name: newAbility, points: 0 }]);
    setNewAbility('');
  };

  const handleAbilityChange = (index, value) => {
    if (value < 0 || value > 5) return; // Validate range
    const newAbilities = [...abilities];
    const pointsDifference = value - newAbilities[index].points;
    const newRemainingPoints = remainingPoints - pointsDifference;
    if (newRemainingPoints < 0) return; // Prevent going over remaining points

    newAbilities[index].points = value;
    setAbilities(newAbilities);
    setRemainingPoints(newRemainingPoints);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const abilityValues = abilities.reduce((acc, ability) => {
      acc[ability.name] = ability.points;
      return acc;
    }, {});
    const request = { abilityValues };
    await axios.post(`http://localhost:8080/characters/${character.id}/allocateAbilityPoints`, request);
    setCharacter((prev) => ({ ...prev, abilities }));
  };

  return (
    <form onSubmit={handleSubmit} className="p-4">
      <h2 className="text-lg font-medium mb-4">Allocate Ability Points</h2>
      
      <div className="flex mb-4">
        <input
          type="text"
          value={newAbility}
          onChange={(e) => setNewAbility(e.target.value)}
          placeholder="Enter new ability name"
          className="mr-2 p-2 border border-gray-300 rounded-md"
        />
        <button
          type="button"
          onClick={handleAddAbility}
          className="px-4 py-2 bg-blue-500 text-white rounded-md"
        >
          Add Ability
        </button>
      </div>

      {abilities.map((ability, index) => (
        <div key={index} className="mb-4">
          <label htmlFor={`ability-${index}`} className="block text-sm font-medium text-gray-700">
            {ability.name}
          </label>
          <input
            type="number"
            id={`ability-${index}`}
            name={`ability-${index}`}
            value={ability.points}
            onChange={(e) => handleAbilityChange(index, parseInt(e.target.value))}
            min="0"
            max="5"
            className="mt-1 block w-full border border-gray-300 rounded-md"
          />
        </div>
      ))}

      <div className="mt-4">
        <p>Remaining Points: {remainingPoints}</p>
      </div>
      <button type="submit" className="mt-4 px-4 py-2 bg-blue-500 text-white rounded-md">
        Save Abilities
      </button>
    </form>
  );
};

export default AbilitiesForm;
