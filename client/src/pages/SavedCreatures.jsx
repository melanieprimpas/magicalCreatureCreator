import { useState, useEffect, createRef } from 'react';
import CreatureCard from '../components/CreatureCard';
import '../App.css'; 


const SavedCreatures = () => {
  const [savedCreatures, setSavedCreatures] = useState([]);

  // Load saved creatures from localStorage when the component mounts
  useEffect(() => {
    const creatures = JSON.parse(localStorage.getItem('creatures')) || [];
    console.log(creatures);
    setSavedCreatures(creatures);
  }, []);

  // Function to handle deleting a creature
  // const handleDeleteCreature = (index) => {
  //   const updatedCreatures = [...savedCreatures];
  //   updatedCreatures.splice(index, 1);

  //   // Update localStorage and the state
  //   localStorage.setItem('creatures', JSON.stringify(updatedCreatures));
  //   setSavedCreatures(updatedCreatures);
  // };

  return (
    <>
      <h2>Saved Creatures</h2>

      {/* Check if there are saved creatures */}
      {savedCreatures.length === 0 ? (
        <p>No creatures saved yet.</p>
      ) : (
        <div className="card-container">
          {savedCreatures.map((creature, index) => (
            
              <CreatureCard
                key={index}
                habitat={creature.habitat}
                creatureName={creature.creatureName}
                image={creature.image}
                abilities={creature.abilities}
                story={creature.story}
              />
            
          ))}
        </div>
      )}
    </>
  );
};

export default SavedCreatures;
