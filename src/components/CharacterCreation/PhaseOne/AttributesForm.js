import React/*, { useContext, useState, useEffect }*/ from 'react';
// import axios from 'axios';
// import CharacterContext from '../../../context/CharacterContext';
/*
const AttributeSelector = ({ category, attributes, onAttributeChange, availableValues, handleSelection }) => {
  return (
    <div>
      <h2 className="text-lg font-medium">{category} Attributes</h2>
      {Object.keys(attributes).map((attribute) => (
        <div key={attribute}>
          <label htmlFor={attribute} className="block text-sm font-medium text-gray-700">
            {attribute}
          </label>
          {attributes[attribute] === null ? (
            <select
              onChange={(e) => handleSelection(category, attribute, Number(e.target.value))}
              value=""
              className="mt-1 block w-full"
            >
              <option value="" disabled>
                Select a value
              </option>
              {availableValues.map((value) => (
                <option key={value} value={value}>
                  {value}
                </option>
              ))}
            </select>
          ) : (
            <p>{attributes[attribute]}</p>
          )}
        </div>
      ))}
    </div>
  );
};*/

const AttributesForm = () => {/*
  const { character, setCharacter, updateCharacter } = useContext(CharacterContext);

  const initialAttributes = {
    Physical: {
      Strength: null,
      Dexterity: null,
      Stamina: null,
    },
    Mental: {
      Perception: null,
      Intelligence: null,
      Wits: null,
    },
    Social: {
      Appearance: null,
      Manipulation: null,
      Charisma: null,
    },
  };

  const [attributes, setAttributes] = useState(initialAttributes);
  const [availableValues, setAvailableValues] = useState([7, 5, 3]);
  const [qualityDetails, setQualityDetails] = useState({});

  const handleSelection = (category, attribute, value) => {
    setAttributes((prev) => ({
      ...prev,
      [category]: {
        ...prev[category],
        [attribute]: value,
      },
    }));

    setAvailableValues((prev) => prev.filter((v) => v !== value));
  };

  const handleQualityDetailsChange = (e, attribute) => {
    const { name, value } = e.target;
    setQualityDetails({
      ...qualityDetails,
      [`${attribute}_${name}`]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const flatAttributes = {
      ...attributes.Physical,
      ...attributes.Mental,
      ...attributes.Social,
    };
    const request = {
      attributeValues: flatAttributes,
      qualityDetails: qualityDetails,
    };
    await axios.post(`http://localhost:8080/characters/${character.id}/allocateAttributePoints`, request);
    // Optionally update local character state
    setCharacter({ ...character, attributes: flatAttributes });
  };

  return (
    <form onSubmit={handleSubmit} className="p-4">
      {['Physical', 'Mental', 'Social'].map((category) => (
        <AttributeSelector
          key={category}
          category={category}
          attributes={attributes[category]}
          onAttributeChange={handleSelection}
          availableValues={availableValues}
          handleSelection={handleSelection}
        />
      ))}
      <button type="submit" className="mt-4 px-4 py-2 bg-blue-500 text-white">
        Save Attributes
      </button>
    </form>
  );*/

  return (
    <div>

    </div>
  );

};

export default AttributesForm;
