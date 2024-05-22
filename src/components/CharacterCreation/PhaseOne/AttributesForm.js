import React, { useContext, useState } from 'react';
import CharacterContext from '../../../context/CharacterContext';

const AttributesForm = () => {
  const { character, setCharacter, updateCharacter } = useContext(CharacterContext);
  const [attributes, setAttributes] = useState(character.attributes);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setAttributes({
      ...attributes,
      [name]: parseInt(value, 10),
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const updatedCharacter = { ...character, attributes };
    setCharacter(updatedCharacter);
    await updateCharacter(character.id, updatedCharacter);
  };

  return (
    <form onSubmit={handleSubmit} className="p-4">
      <div>
        <label htmlFor="strength" className="block text-sm font-medium text-gray-700">Strength</label>
        <input type="number" name="strength" id="strength" value={attributes.strength || 0} onChange={handleChange} className="mt-1 block w-full"/>
      </div>
      <div>
        <label htmlFor="dexterity" className="block text-sm font-medium text-gray-700">Dexterity</label>
        <input type="number" name="dexterity" id="dexterity" value={attributes.dexterity || 0} onChange={handleChange} className="mt-1 block w-full"/>
      </div>
      <div>
        <label htmlFor="stamina" className="block text-sm font-medium text-gray-700">Stamina</label>
        <input type="number" name="stamina" id="stamina" value={attributes.stamina || 0} onChange={handleChange} className="mt-1 block w-full"/>
      </div>
      {/* TODO: Add inputs for other attributes */}
      <button type="submit" className="mt-4 px-4 py-2 bg-blue-500 text-white">Save Attributes</button>
    </form>
  );
};

export default AttributesForm;
