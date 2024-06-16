import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';

const Home = () => {

  const [characters, setCharacters] = useState([]);

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
      <div>
        <Link to={'/basic-info-form'}>Create New Character</Link>
      </div>
      <div>
        <table>
          <thead>
            <tr>
              <th scope='column'>Character Name</th>
              <th scope='column'>Player Name</th>
              <th scope='column'>Baseline Creation</th>
              <th scope='column'>Nova Creation</th>
              <th scope='column'>Character Advancement</th>
            </tr>
          </thead>
          <tbody>
            {characters.map((character, index) => (
              <tr>
                <td>{character.name}</td>
                <td>{character.player}</td>
                <td>
                  <Link to={`/attributes-form/${character.id}`}>Add Attributes</Link>
                  <Link to={`/abilities-form/${character.id}`}>Add Abilities</Link>
                  <Link to={`/backgrounds-form/${character.id}`}>Add Backgrounds</Link>
                  <Link to={`/bonus-points-form/${character.id}`}>Spend Bonus Points</Link>
                </td>
                <td>
                  <Link to={'/'}>Spend Nova Points</Link>
                </td>
                <td>
                  <Link to={'/'}>View Character</Link>
                  <Link to={'/'}>Spend Experience Points</Link>
                </td>
              </tr>

            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Home;
