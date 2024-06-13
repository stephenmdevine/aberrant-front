import { useContext, useState } from "react";
import CharacterContext from "../../../context/CharacterContext";
import { useNavigate } from "react-router-dom";
import axios from "axios";
/*
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
};

export default BasicInfoForm;*/

export default function BasicInfoForm() {
  let navigate = useNavigate();

  const [character, setCharacter] = useState({
    name: '',
    player: '',
    novaName: '',
    concept: '',
    nature: '',
    allegiance: '',
    description: '',
    initiative: 0,
    willpower: 3,
    quantum: 1,
    quantumPool: 0,
    taint: 0,
    attributePoints: 15,
    abilityPoints: 23,
    backgroundPoints: 7,
    bonusPoints: 15,
    novaPoints: 30,
    experiencePoints: 0
  });

  const { name, player, novaName, concept, nature, allegiance, description, 
    initiative, willpower, quantum, quantumPool, taint, 
    attributePoints, abilityPoints, backgroundPoints, bonusPoints, novaPoints, experiencePoints } = character;

  const onInputChange = (e) => {
    setCharacter({ ...character, [e.target.name]: e.target.value});
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    await axios.post("http://localhost:8080/characters/create", character);
    // navigate("/");
  };

  return (
    <div className="container">
      <div className="row">
        <div className="col">
          <h2>Create New Character</h2>

          <form onSubmit={(e) => onSubmit(e)}>
            <div className="mb-3">
      <div>
        <label htmlFor="name" className="block text-sm font-medium text-gray-700">Name</label>
        <input type="text" name="name" id="name" value={basicInfo.name} onChange={handleChange} className="mt-1 block w-full" />
      </div>
              <label htmlFor="Name" className="form-label">Name</label>
              <input type={"text"} className="form-control" placeholder="Enter your character's name" 
              name="name" value={name} onChange={(e) => onInputChange(e)} />
            </div>
            <div className="mb-3">
              <label htmlFor="Username" className="form-label">
                Username
              </label>
              <input
                type={"text"}
                className="form-control"
                placeholder="Enter your username"
                name="username"
                value={username}
                onChange={(e) => onInputChange(e)}
              />
            </div>
            <div className="mb-3">
              <label htmlFor="Email" className="form-label">
                E-mail
              </label>
              <input
                type={"text"}
                className="form-control"
                placeholder="Enter your e-mail address"
                name="email"
                value={email}
                onChange={(e) => onInputChange(e)}
              />
            </div>
            <button type="submit" className="btn btn-outline-primary">
              Submit
            </button>
            <Link className="btn btn-outline-danger mx-2" to="/">
              Cancel
            </Link>
          </form>
        </div>
      </div>
    </div>
  );

}