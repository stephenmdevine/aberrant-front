/*import React, { useContext, useState } from 'react';
import CharacterContext from '../../../context/CharacterContext';

const AttributesForm = () => {
  const { character, setCharacter, updateCharacter } = useContext(CharacterContext);

  const initialAttributes = {
    Physical: {
      Strength: character.attributes?.Strength || 0,
      Dexterity: character.attributes?.Dexterity || 0,
      Stamina: character.attributes?.Stamina || 0,
    },
    Mental: {
      Perception: character.attributes?.Perception || 0,
      Intelligence: character.attributes?.Intelligence || 0,
      Wits: character.attributes?.Wits || 0,
    },
    Social: {
      Appearance: character.attributes?.Appearance || 0,
      Manipulation: character.attributes?.Manipulation || 0,
      Charisma: character.attributes?.Charisma || 0,
    },
  };

  const [attributes, setAttributes] = useState(initialAttributes);
  const [qualityDetails, setQualityDetails] = useState({});

  const handleAttributeChange = (e, category, attribute) => {
    const value = parseInt(e.target.value, 10);
    setAttributes({
      ...attributes,
      [category]: {
        ...attributes[category],
        [attribute]: value,
      },
    });
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
    await updateCharacter(character.id, { ...character, attributes: flatAttributes });
  };

  return (
    <form onSubmit={handleSubmit} className="p-4">
      {['Physical', 'Mental', 'Social'].map((category) => (
        <div key={category}>
          <h2 className="text-lg font-medium">{category} Attributes</h2>
          {Object.keys(attributes[category]).map((attribute) => (
            <div key={attribute}>
              <label htmlFor={attribute} className="block text-sm font-medium text-gray-700">
                {attribute}
              </label>
              <input
                type="number"
                name={attribute}
                id={attribute}
                value={attributes[category][attribute]}
                onChange={(e) => handleAttributeChange(e, category, attribute)}
                className="mt-1 block w-full"
                min="1"
                max="5"
              />
              {attributes[category][attribute] >= 4 && (
                <>
                  <label htmlFor={`${attribute}_name`} className="block text-sm font-medium text-gray-700">
                    {attribute} Quality Name
                  </label>
                  <input
                    type="text"
                    name="name"
                    id={`${attribute}_name`}
                    onChange={(e) => handleQualityDetailsChange(e, attribute)}
                    className="mt-1 block w-full"
                  />
                  <label htmlFor={`${attribute}_description`} className="block text-sm font-medium text-gray-700">
                    {attribute} Quality Description
                  </label>
                  <input
                    type="text"
                    name="description"
                    id={`${attribute}_description`}
                    onChange={(e) => handleQualityDetailsChange(e, attribute)}
                    className="mt-1 block w-full"
                  />
                </>
              )}
            </div>
          ))}
        </div>
      ))}
      <button type="submit" className="mt-4 px-4 py-2 bg-blue-500 text-white">Save Attributes</button>
    </form>
  );
};
*/

import { useState } from "react";
import { useNavigate } from "react-router-dom";

const AttributesForm = () => {
  let navigate = useNavigate();

  const categories = ['Physical', 'Mental', 'Social'];
  const categoryValues = [7, 5, 3];

  const CategorySelector = () => {
    const [selectedValues, setSelectedValues] = useState({
      Physical: null,
      Mental: null,
      Social: null,
    });

    const [availableValues, setAvailableValues] = useState(categoryValues);

    const handleCategorySelection = (category, categoryValue) => {
      setSelectedValues((prev) => ({
        ...prev,
        [category]: categoryValue,
      }));

      setAvailableValues((prev) => prev.filter((v) => v !== categoryValue));
    };
  };
  
  const initialAttributes = {
    Physical: {
      Strength: character.attributes?.Strength || 1,
      Dexterity: character.attributes?.Dexterity || 1,
      Stamina: character.attributes?.Stamina || 1,
    },
    Mental: {
      Perception: character.attributes?.Perception || 1,
      Intelligence: character.attributes?.Intelligence || 1,
      Wits: character.attributes?.Wits || 1,
    },
    Social: {
      Appearance: character.attributes?.Appearance || 1,
      Manipulation: character.attributes?.Manipulation || 1,
      Charisma: character.attributes?.Charisma || 1,
    },
  };

  const [attributes, setAttributes] = useState(initialAttributes);
  const [qualityDetails, setQualityDetails] = useState({});

};

export default AttributesForm;
