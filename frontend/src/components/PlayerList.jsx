// frontend/src/components/PlayerList.jsx
import axios from 'axios';
import React from 'react';

const PlayerList = ({ players, fetchPlayers, setPlayerData }) => {
  const deletePlayer = async (id) => {
    try {
      await axios.delete(`/api/players/${id}`);
      fetchPlayers();
    } catch (error) {
      console.error('Error deleting player:', error);
    }
  };

  return (
    <div className="container">
      <h1>Player List</h1>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Team</th>
            <th>Position</th>
            <th>Points</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {players.map((player) => (
            <tr key={player._id}>
              <td>{player.name}</td>
              <td>{player.team}</td>
              <td>{player.position}</td>
              <td>{player.points}</td>
              <td>
                <button
                  className="button update-btn"
                  onClick={() => setPlayerData(player)}
                >
                  Edit
                </button>
                <button
                  className="button delete-btn"
                  onClick={() => deletePlayer(player._id)}
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default PlayerList;
