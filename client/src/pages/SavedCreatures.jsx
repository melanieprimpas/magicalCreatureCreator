import { useState, useEffect } from 'react';
import CreatureCard from '../components/CreatureCard';
import '../App.css'; // Ensure your CSS is imported

const SavedCreatures = () => {
  const [savedCreatures, setSavedCreatures] = useState([]);

  // Load saved creatures from localStorage when the component mounts
  useEffect(() => {
    const creatures = JSON.parse(localStorage.getItem('creatures')) || [];
    setSavedCreatures(creatures);
  }, []);

  // Function to handle deleting a creature
  const handleDeleteCreature = (index) => {
    const updatedCreatures = [...savedCreatures];
    updatedCreatures.splice(index, 1); // Remove the creature at the given index

    // Update localStorage and the state
    localStorage.setItem('creatures', JSON.stringify(updatedCreatures));
    setSavedCreatures(updatedCreatures);
  };

  return (
    <div>
      <h2>Saved Creatures</h2>

      {/* Check if there are saved creatures */}
      {savedCreatures.length === 0 ? (
        <p>No creatures saved yet.</p>
      ) : (
        <div className="saved-creatures-grid">
          {savedCreatures.map((creature, index) => (
            <div key={index} className="saved-creature-card">
              {/* Render the CreatureCard */}
              <CreatureCard
                habitat={creature.habitat}
                creatureName={creature.creatureName}
                image={creature.image}
                abilities={creature.abilities}
                story={creature.story} // If there's a story, pass it too
              />

              {/* Delete Button */}
              <button
                className="delete-button"
                onClick={() => handleDeleteCreature(index)}
              >
                Delete
              </button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default SavedCreatures;
