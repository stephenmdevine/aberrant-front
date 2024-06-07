import { useContext, useState } from "react"
import CharacterContext from "../../../context/CharacterContext"

const BasicInfoForm = () => {
  const { character, setCharacter, createCharacter } = useContext(CharacterContext);
  const [basicInfo, setBasicInfo] = useState({
    name: character.name,
    player: character.player,
    concept: character.concept,
    nature: character.nature,
    bonusPoints: character.bonusPoints,
    novaPoints: character.novaPoints,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setBasicInfo({
      ...basicInfo,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const newCharacter = { ...character, ...basicInfo };
    setCharacter(newCharacter);
    await createCharacter(newCharacter);
  };

  return (
    <form onSubmit={handleSubmit} className="p-4">
      <div>
        <label htmlFor="name" className="block text-sm font-medium text-gray-700">Name</label>
        <input type="text" name="name" id="name" value={basicInfo.name} onChange={handleChange} className="mt-1 block w-full" />
      </div>
      <div>
        <label htmlFor="player" className="block text-sm font-medium text-gray-700">Player</label>
        <input type="text" name="player" id="player" value={basicInfo.player} onChange={handleChange} className="mt-1 block w-full" />
      </div>
      <div>
        <label htmlFor="concept" className="block text-sm font-medium text-gray-700">Concept</label>
        <input type="text" name="concept" id="concept" value={basicInfo.concept} onChange={handleChange} className="mt-1 block w-full" />
      </div>
      <div>
        <label htmlFor="nature" className="block text-sm font-medium text-gray-700">Nature</label>
        <input type="text" name="nature" id="nature" value={basicInfo.nature} onChange={handleChange} className="mt-1 block w-full" />
      </div>
      <div>
        <label htmlFor="bonusPoints" className="block text-sm font-medium text-gray-700">Bonus Points</label>
        <input type="number" name="bonusPoints" id="bonusPoints" value={basicInfo.bonusPoints} onChange={handleChange} className="mt-1 block w-full" />
      </div>
      <div>
        <label htmlFor="novaPoints" className="block text-sm font-medium text-gray-700">Nova Points</label>
        <input type="number" name="novaPoints" id="novaPoints" value={basicInfo.novaPoints} onChange={handleChange} className="mt-1 block w-full" />
      </div>
      <button type="submit" className="mt-4 px-4 py-2 bg-blue-500 text-white">Save Basic Info</button>
    </form>
  );
/*
  return (
    <form>
      <div>
        <label>Name</label>
        <input type="text" name="name" />
      </div>
      <div>
        <label>Player</label>
        <input type="text" name="player" />
      </div>
      <div>
        <label>Concept</label>
        <input type="text" name="concept" />
      </div>
      <div>
        <label>Nature</label>
        <input type="text" name="nature" />
      </div>
      <div>
        <label>Bonus Points</label>
        <input type="number" name="bonusPoints" />
      </div>
      <div>
        <label>Nova Points</label>
        <input type="number" name="novaPoints" />
      </div>
    </form>
  );*/

};

export default BasicInfoForm;
