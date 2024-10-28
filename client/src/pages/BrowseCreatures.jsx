import { useEffect, useState } from 'react';
import CreatureCard from '../components/CreatureCard';
import '../App.css'; 

const BrowseCreatures = () => {
  const [creatures, setCreatures] = useState([]);

  // Load creatures from localStorage when component mounts
  useEffect(() => {
    const savedCreatures = JSON.parse(localStorage.getItem('creatures')) || [];
    setCreatures(savedCreatures);
  }, []);

  return (
    <div className="creature-grid">
      {creatures.map((creature, index) => (
        <CreatureCard
          key={index}
          habitat={creature.habitat}
          creatureName={creature.creatureName}
          image={creature.image}
          abilities={creature.abilities}
        />
      ))}
    </div>
  );
};

export default BrowseCreatures;
