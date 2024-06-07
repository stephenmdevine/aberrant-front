import { createContext, useState } from "react";
import characterService from "../services/characterService";

const CharacterContext = createContext();

export const CharacterProvider = ({ children}) => {
    const [character, setCharacter] = useState({
        name: '',
        player: '',
        novaName: '',
        concept: '',
        nature: '',
        allegiance: '',
        description: '',
        attributePoints: 0,
        abilityPoints: 0,
        backgroundPoints: 0,
        bonusPoints: 15,
        novaPoints: 30,
        attributes: {},
        abilities: {},
        backgrounds: {},
    });

    const createCharacter = async (CharacterData) => {
        try {
            const response = await characterService.createCharacter(CharacterData);
            setCharacter(response.data);
        }   catch (e) {
            console.error("Error creationg character: ", e);
        }
    };

    const updateCharacter = async (characterId, characterData) => {
        try {
            const response = await characterService.updateCharacter(characterId, characterData);
            setCharacter(response.data);
        }   catch (e) {
            console.error("Error updating character: ", e);
        }
    };

    return (
        <CharacterContext.Provider value={{ character, setCharacter, createCharacter, updateCharacter }}>
            {children}
        </CharacterContext.Provider>
    );
};

export default CharacterContext;
