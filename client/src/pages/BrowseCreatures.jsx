import { useEffect, useState } from 'react';
import CreatureCard from '../components/CreatureCard';
import '../App.css'; 
import { retrievehabitats, retrieveCreatures } from '../utils/dbRouter';

const BrowseCreatures = () => {
  const [creatures, setCreatures] = useState([]);
  
  useEffect(() => {
    retrieveCreatures().then(creature=> {
        //console.log(creature, "LInee"); 
        setCreatures(creature);
      
    })
    //console.log(creature.habitat_image)
  }, [])

  return (
    <div className="creature-grid">
      {creatures.map((creature) => (
        <CreatureCard
          key={creature.id}
          habitat={creature.habitats_name}
          creatureName={creature.name}
          image={creature.image_url}
          abilities= {{
            strength: creature.strength,
            intelligence: creature.intelligence,
            agility: creature.agility,
          }}
        />
      ))}
    </div>
  );  
};

export default BrowseCreatures;

