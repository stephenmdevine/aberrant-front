import React, { useState, useContext } from 'react';
import axios from 'axios';
import CharacterContext from '../../../context/CharacterContext';

const BackgroundsForm = () => {
  const { character, setCharacter } = useContext(CharacterContext);
  const [backgrounds, setBackgrounds] = useState([]);
  const [newBackground, setNewBackground] = useState('');
  const [remainingPoints, setRemainingPoints] = useState(character.backgroundPoints || 7);

  const handleAddBackground = () => {
    if (newBackground.trim() === '') return;
    setBackgrounds((prev) => [...prev, { name: newBackground, points: 0 }]);
    setNewBackground('');
  };

  const handleBackgroundChange = (index, value) => {
    if (value < 0 || value > 5) return; // Validate range
    const newBackgrounds = [...backgrounds];
    const pointsDifference = value - newBackgrounds[index].points;
    const newRemainingPoints = remainingPoints - pointsDifference;
    if (newRemainingPoints < 0) return; // Prevent going over remaining points

    newBackgrounds[index].points = value;
    setBackgrounds(newBackgrounds);
    setRemainingPoints(newRemainingPoints);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const backgroundValues = backgrounds.reduce((acc, background) => {
      acc[background.name] = background.points;
      return acc;
    }, {});
    const request = { backgroundValues };
    await axios.post(`http://localhost:8080/characters/${character.id}/allocateBackgroundPoints`, request);
    setCharacter((prev) => ({ ...prev, backgrounds }));
  };

  return (
    <form onSubmit={handleSubmit} className="p-4">
      <h2 className="text-lg font-medium mb-4">Allocate Background Points</h2>
      
      <div className="flex mb-4">
        <input
          type="text"
          value={newBackground}
          onChange={(e) => setNewBackground(e.target.value)}
          placeholder="Enter new background name"
          className="mr-2 p-2 border border-gray-300 rounded-md"
        />
        <button
          type="button"
          onClick={handleAddBackground}
          className="px-4 py-2 bg-blue-500 text-white rounded-md"
        >
          Add Background
        </button>
      </div>

      {backgrounds.map((background, index) => (
        <div key={index} className="mb-4">
          <label htmlFor={`background-${index}`} className="block text-sm font-medium text-gray-700">
            {background.name}
          </label>
          <input
            type="number"
            id={`background-${index}`}
            name={`background-${index}`}
            value={background.points}
            onChange={(e) => handleBackgroundChange(index, parseInt(e.target.value))}
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
        Save Backgrounds
      </button>
    </form>
  );
/*
  return (
    <div>

    </div>
  );*/

};

export default BackgroundsForm;
