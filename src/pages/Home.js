import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const Home = () => {

  const [ characters, setCharacters ] = useState([]);

  const { id } = useParams();

  useEffect(() => {
    loadCharacters();
  }, []);

  const loadCharacters = async () => {
    const result = await axios.get('http://localhost:8080/characters');
    setCharacters(result.data);
  };

  return (
    <div>
      <h1>Welcome to the Character Creator</h1>
    </div>
  );
};

export default Home;
