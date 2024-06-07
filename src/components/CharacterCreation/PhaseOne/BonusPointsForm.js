import React/*, { useState, useContext }*/ from 'react';
// import axios from 'axios';
// import CharacterContext from '../../../context/CharacterContext';

const BonusPointsForm = () => {/*
  const { character, setCharacter } = useContext(CharacterContext);
  const [bonusPoints, setBonusPoints] = useState(character.bonusPoints);
  const [attributes, setAttributes] = useState({});
  const [abilities, setAbilities] = useState({});
  const [newAbilities, setNewAbilities] = useState([]);
  const [backgrounds, setBackgrounds] = useState({});
  const [newBackgrounds, setNewBackgrounds] = useState([]);
  const [abilitySpecialties, setAbilitySpecialties] = useState({});
  const [willpower, setWillpower] = useState(0);
  const [quantum, setQuantum] = useState(0);
  const [initiative, setInitiative] = useState(0);

  const handleChange = (e, setState) => {
    const { name, value } = e.target;
    setState((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const request = {
      attributes,
      abilities,
      newAbilities,
      backgrounds,
      newBackgrounds,
      abilitySpecialties,
      willpower,
      quantum,
      initiative,
      bonusPointsSpent: bonusPoints - character.bonusPoints,
    };
    try {
      const response = await axios.post(`http://localhost:8080/characters/${character.id}/spendBonusPoints`, request);
      setCharacter(response.data);
    } catch (error) {
      console.error('Error spending bonus points', error);
    }
  };

  const addNewAbility = () => {
    setNewAbilities([...newAbilities, { name: '', value: 0 }]);
  };

  const handleNewAbilityChange = (index, e) => {
    const { name, value } = e.target;
    const updatedNewAbilities = [...newAbilities];
    updatedNewAbilities[index][name] = value;
    setNewAbilities(updatedNewAbilities);
  };

  const addNewBackground = () => {
    setNewBackgrounds([...newBackgrounds, { name: '', value: 0 }]);
  };

  const handleNewBackgroundChange = (index, e) => {
    const { name, value } = e.target;
    const updatedNewBackgrounds = [...newBackgrounds];
    updatedNewBackgrounds[index][name] = value;
    setNewBackgrounds(updatedNewBackgrounds);
  };

  return (
    <form onSubmit={handleSubmit} className="p-4">
      <h2 className="text-lg font-medium mb-4">Spend Bonus Points</h2>

      <div className="mb-4">
        <h3 className="text-md font-medium">Attributes</h3>
        {['Strength', 'Dexterity', 'Stamina', 'Perception', 'Intelligence', 'Wits', 'Appearance', 'Manipulation', 'Charisma'].map(attr => (
          <div key={attr}>
            <label htmlFor={attr} className="block text-sm font-medium text-gray-700">{attr}</label>
            <input
              type="number"
              id={attr}
              name={attr}
              value={attributes[attr] || ''}
              onChange={(e) => handleChange(e, setAttributes)}
              className="mt-1 block w-full border border-gray-300 rounded-md"
            />
          </div>
        ))}
      </div>

      <div className="mb-4">
        <h3 className="text-md font-medium">Abilities</h3>
        {character.abilities.map((ability) => (
          <div key={ability.name}>
            <label htmlFor={ability.name} className="block text-sm font-medium text-gray-700">{ability.name}</label>
            <input
              type="number"
              id={ability.name}
              name={ability.name}
              value={abilities[ability.name] || ''}
              onChange={(e) => handleChange(e, setAbilities)}
              className="mt-1 block w-full border border-gray-300 rounded-md"
            />
          </div>
        ))}
        <button type="button" onClick={addNewAbility} className="mt-2 px-4 py-2 bg-blue-500 text-white rounded-md">
          Add New Ability
        </button>
        {newAbilities.map((ability, index) => (
          <div key={index}>
            <input
              type="text"
              name="name"
              value={ability.name}
              onChange={(e) => handleNewAbilityChange(index, e)}
              placeholder="Ability Name"
              className="mt-1 block w-full border border-gray-300 rounded-md"
            />
            <input
              type="number"
              name="value"
              value={ability.value}
              onChange={(e) => handleNewAbilityChange(index, e)}
              placeholder="Value"
              className="mt-1 block w-full border border-gray-300 rounded-md"
            />
          </div>
        ))}
      </div>

      <div className="mb-4">
        <h3 className="text-md font-medium">Backgrounds</h3>
        {character.backgrounds.map((background) => (
          <div key={background.name}>
            <label htmlFor={background.name} className="block text-sm font-medium text-gray-700">{background.name}</label>
            <input
              type="number"
              id={background.name}
              name={background.name}
              value={backgrounds[background.name] || ''}
              onChange={(e) => handleChange(e, setBackgrounds)}
              className="mt-1 block w-full border border-gray-300 rounded-md"
            />
          </div>
        ))}
        <button type="button" onClick={addNewBackground} className="mt-2 px-4 py-2 bg-blue-500 text-white rounded-md">
          Add New Background
        </button>
        {newBackgrounds.map((background, index) => (
          <div key={index}>
            <input
              type="text"
              name="name"
              value={background.name}
              onChange={(e) => handleNewBackgroundChange(index, e)}
              placeholder="Background Name"
              className="mt-1 block w-full border border-gray-300 rounded-md"
            />
            <input
              type="number"
              name="value"
              value={background.value}
              onChange={(e) => handleNewBackgroundChange(index, e)}
              placeholder="Value"
              className="mt-1 block w-full border border-gray-300 rounded-md"
            />
          </div>
        ))}
      </div>

      <div className="mb-4">
        <h3 className="text-md font-medium">Ability Specialties</h3>
        {Object.keys(character.abilities).map((abilityName) => (
          <div key={abilityName}>
            <label htmlFor={`${abilityName}-specialty`} className="block text-sm font-medium text-gray-700">{abilityName}</label>
            <input
              type="text"
              id={`${abilityName}-specialty`}
              name={abilityName}
              value={abilitySpecialties[abilityName] || ''}
              onChange={(e) => handleChange(e, setAbilitySpecialties)}
              placeholder="Specialty"
              className="mt-1 block w-full border border-gray-300 rounded-md"
            />
          </div>
        ))}
      </div>

      <div className="mb-4">
        <h3 className="text-md font-medium">Willpower</h3>
        <input
          type="number"
          name="willpower"
          value={willpower}
          onChange={(e) => setWillpower(Number(e.target.value))}
          className="mt-1 block w-full border border-gray-300 rounded-md"
        />
      </div>

      <div className="mb-4">
        <h3 className="text-md font-medium">Quantum</h3>
        <input
          type="number"
          name="quantum"
          value={quantum}
          onChange={(e) => setQuantum(Number(e.target.value))}
          className="mt-1 block w-full border border-gray-300 rounded-md"
        />
      </div>

      <div className="mb-4">
        <h3 className="text-md font-medium">Initiative</h3>
        <input
          type="number"
          name="initiative"
          value={initiative}
          onChange={(e) => setInitiative(Number(e.target.value))}
          className="mt-1 block w-full border border-gray-300 rounded-md"
        />
      </div>

      <button type="submit" className="mt-4 px-4 py-2 bg-blue-500 text-white rounded-md">
        Spend Bonus Points
      </button>
    </form>
  );*/

  return (
    <div>

    </div>
  );

};

export default BonusPointsForm;
