import axios from "axios";

const API_URL = 'http://localhost:8080/api/characters';

const createCharacter = (characterData) => {
    return axios.post('${API_URL}', characterData);
};

const updateCharacter = (characterId, characterData) => {
    return axios.put('${API_URL}/${characterId}', characterData);
};

export default {
    createCharacter,
    updateCharacter,
};