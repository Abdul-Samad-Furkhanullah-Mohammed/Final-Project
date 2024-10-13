// frontend/src/App.jsx
import { useEffect, useState } from 'react';
import axios from 'axios';
import PlayerForm from './components/PlayerForm';
import PlayerList from './components/PlayerList';

const App = () => {
  const [players, setPlayers] = useState([]);
  const [playerData, setPlayerData] = useState(null);

  const fetchPlayers = async () => {
    try {
      const response = await axios.get('/api/players');
      setPlayers(response.data);
    } catch (error) {
      console.error('Error fetching players:', error);
    }
  };

  useEffect(() => {
    fetchPlayers();
  }, []);

  return (
    <div>
      <h1>Player Management</h1>
      <PlayerForm fetchPlayers={fetchPlayers} playerData={playerData} />
      <PlayerList players={players} fetchPlayers={fetchPlayers} setPlayerData={setPlayerData} />
    </div>
  );
};

export default App;
