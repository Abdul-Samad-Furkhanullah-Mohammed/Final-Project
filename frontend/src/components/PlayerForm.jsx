// frontend/src/components/PlayerForm.jsx
import { useState } from 'react';
import axios from 'axios';

const PlayerForm = ({ fetchPlayers, playerData }) => {
  const [name, setName] = useState(playerData?.name || '');
  const [team, setTeam] = useState(playerData?.team || '');
  const [position, setPosition] = useState(playerData?.position || '');
  const [points, setPoints] = useState(playerData?.points || '');

  const handleSubmit = async (e) => {
    e.preventDefault();
    const player = { name, team, position, points };

    try {
      if (playerData?._id) {
        // Update player
        await axios.patch(`/api/players/${playerData._id}`, player);
      } else {
        // Create new player
        await axios.post('/api/players', player);
      }
      fetchPlayers();
    } catch (error) {
      console.error('Error creating/updating player:', error);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" value={name} onChange={(e) => setName(e.target.value)} placeholder="Name" required />
      <input type="text" value={team} onChange={(e) => setTeam(e.target.value)} placeholder="Team" required />
      <input type="text" value={position} onChange={(e) => setPosition(e.target.value)} placeholder="Position" required />
      <input type="number" value={points} onChange={(e) => setPoints(e.target.value)} placeholder="Points" required />
      <button type="submit">{playerData?._id ? 'Update Player' : 'Add Player'}</button>
    </form>
  );
};

export default PlayerForm;
