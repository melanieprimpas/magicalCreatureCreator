import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom'; 
import CreatureCard from '../components/CreatureCard';
import StarRating from '../components/StarRating'; 
import '../App.css';
import { fetchHabitats } from '../utils/fetchHabitats';



const CreateCreatures = () => {
  const [habitat, setHabitat] = useState('');
  const [creatureName, setCreatureName] = useState('');
  const [imageUrl, setImageUrl] = useState(''); // Updated to use a URL instead of file
  const [abilities, setAbilities] = useState({
    strength: 0,
    agility: 0,
    intelligence: 0,
  });
  const [isSaved, setIsSaved] = useState(false);
  const [habitats, setHabitats] = useState([]);
  const navigate = useNavigate();

  // Fetch habitats when the component mounts
  useEffect(() => {
    const loadHabitats = async () => {
      await fetchHabitats(setHabitats)
    };

    loadHabitats();
  }, []); 

  const handleAbilityChange = (ability, value) => {
    setAbilities({ ...abilities, [ability]: value });
  };

  // Handle save button click and update the saved status
  const handleSaveCreature = () => {
    const creatureData = {
      habitat,
      creatureName,
      image: imageUrl, // Updated to save the URL
      abilities,
    };

    // Retrieve any existing creatures from localStorage
    const savedCreatures = JSON.parse(localStorage.getItem('creatures')) || [];
    
    // Add the new creature to the saved creatures
    const updatedCreatures = [...savedCreatures, creatureData];

    // Save the updated creatures array to localStorage
    localStorage.setItem('creatures', JSON.stringify(updatedCreatures));

    console.log('Creature saved:', creatureData);

    // Set the "Saved" state to true
    setIsSaved(true);
  };

  // Handle clearing the form to create a new creature
  const handleNewCreature = () => {
    // Reset the form and card states
    setHabitat('');
    setCreatureName('');
    setImageUrl(''); // Clear the URL input
    setAbilities({
      strength: 0,
      agility: 0,
      intelligence: 0,
    });
    setIsSaved(false); 
  };

  return (
    <div className="app-container">
      <div className="form-section">
        <h2>Create Your Creature</h2>
        
        {/* Habitat Selection */}
        <div className="input-group">
          <label htmlFor="habitat">Select Habitat:</label>
          <select 
            id="habitat" 
            value={habitat} 
            onChange={(e) => setHabitat(e.target.value)}
            className="input-select"
          >
            <option value="">--Choose Habitat--</option>
            {habitats.map((habitat) => (
              <option key={habitat} value={habitat}>
                {habitat.charAt(0).toUpperCase() + habitat.slice(1)}
              </option>
            ))}
          </select>
        </div>

        {/* Name Input */}
        <div className="input-group">
          <label htmlFor="name">Creature Name:</label>
          <input
            type="text"
            id="name"
            placeholder="Enter creature name"
            value={creatureName}
            onChange={(e) => setCreatureName(e.target.value)}
            className="input-text"
          />
        </div>

        {/* Image URL Input */}
        <div className="input-group">
          <label htmlFor="image-url">Creature Image URL:</label>
          <input 
            type="text" 
            id="image-url" 
            placeholder="Enter image URL" 
            value={imageUrl} 
            onChange={(e) => setImageUrl(e.target.value)} // Updated to handle URL input
            className="input-text"
          />
        </div>

        {/* Abilities Input */}
        <div className="abilities-input">
          <h3>Abilities</h3>
          {Object.keys(abilities).map((ability) => (
            <StarRating
              key={ability}
              ability={ability}
              value={abilities[ability]}
              onChange={handleAbilityChange} // Pass the ability change handler
            />
          ))}
        </div>

        {/* Save Button */}
        <div className="button-group">
          <button 
            className="save-button" 
            type="button" 
            onClick={handleSaveCreature}
            disabled={isSaved} // Disable the button if the creature is saved
          >
            {isSaved ? 'Saved' : 'Save Creature'}
          </button>

          {/* New Button */}
          {isSaved && (
            <button 
              className="new-button" 
              type="button" 
              onClick={handleNewCreature}
            >
              New Creature
            </button>
          )}
        </div>
      </div>

      {/* Display the creature card */}
      <CreatureCard 
        habitat={habitat}
        creatureName={creatureName}
        image={imageUrl} // Pass the URL directly to CreatureCard
        abilities={abilities}
      />
    </div>
  );
};

export default CreateCreatures;
