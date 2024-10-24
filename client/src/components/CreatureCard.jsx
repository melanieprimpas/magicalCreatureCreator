import PropTypes from 'prop-types';
import rainforest from '../assets/images/rainforest.jpeg';
import desert from '../assets/images/desert.PNG';
import ocean from '../assets/images/ocean.PNG';
import mountains from '../assets/images/mountain.PNG';
import plains from '../assets/images/plains.PNG';

// Modern star rendering
const renderStars = (count) => {
  const stars = [];
  for (let i = 0; i < count; i++) {
    stars.push(
      <span key={i} style={{ color: '#FFD700', fontSize: '25px', marginRight: '4px' }}>★</span> 
    );
  }
  return stars;
};

// Map habitats to background images
const habitatBackgrounds = {
  rainforest, 
  desert,         
  ocean,           
  mountains,   
  plains,         
};

const CreatureCard = ({ habitat, creatureName, image, abilities }) => {
  // Dynamic background image based on the selected habitat
  const backgroundImage = habitat && habitatBackgrounds[habitat] ? `url(${habitatBackgrounds[habitat]})` : null;

  // Styles for the creature card
  const cardStyles = {
    width: '100%',
    maxWidth: '350px',
    height: '500px', // Adjust height for display
    backgroundImage: backgroundImage, 
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    borderRadius: '20px',
    boxShadow: '0 6px 20px rgba(0, 0, 0, 0.15)',
    textAlign: 'center',
    padding: '20px',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    fontFamily: 'Arial, sans-serif',
    margin: '20px',
    position: 'relative', 
    color: 'white', 
  };

  const headerStyles = {
    position: 'absolute',
    top: '10px',
    left: '10px',
    fontSize: '24px',
    fontWeight: 'bold',
    //backgroundColor: 'rgba(0, 0, 0, 0.6)', // Slightly transparent black background for text readability
    padding: '5px 10px',
    borderRadius: '8px',
  };

  const imageContainerStyles = {
    width: '100%',
    height: 'auto',
    maxHeight: '400px', // Adjust height of user-uploaded image
    borderRadius: '10px',
    overflow: 'hidden',
    marginTop: '60px', 
  };

  const abilitiesStyles = {
    fontSize: '15px',
    textAlign: 'left',
    backgroundColor: 'rgba(0, 0, 0, 0.6)', // Make abilities section readable over the background
    padding: '10px',
    borderRadius: '10px',
    color: 'white', // This is the abilities text color - not the actual abilities
  };

  const abilityItemStyles = {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: '10px',
    fontSize: '14px',
    
    
  };

  return (
    <div style={cardStyles}>
      <div style={headerStyles}>
        {creatureName || 'Unknown Creature'}
      </div>

      {/* Creature Image (user-uploaded) */}
      <div className="creature-image" style={imageContainerStyles}>
        {image ? <img src={image} alt="Creature" style={{ width: '100%', height: 'auto' }} /> : <p>No image uploaded</p>}
      </div>

      {/* Creature Abilities */}
      <div className="creature-abilities" style={abilitiesStyles}>
        <h3>Abilities</h3>
        <div style={abilityItemStyles}>
          <span>Strength:</span>
          <div>{renderStars(abilities.strength)}</div>
        </div>
        <div style={abilityItemStyles}>
          <span>Agility:</span>
          <div>{renderStars(abilities.agility)}</div>
        </div>
        <div style={abilityItemStyles}>
          <span>Intelligence:</span>
          <div>{renderStars(abilities.intelligence)}</div>
        </div>
      </div>
    </div>
  );
};

// Prop validation
CreatureCard.propTypes = {
  habitat: PropTypes.string.isRequired,
  creatureName: PropTypes.string.isRequired,
  image: PropTypes.string,
  abilities: PropTypes.shape({
    strength: PropTypes.number.isRequired,
    agility: PropTypes.number.isRequired,
    intelligence: PropTypes.number.isRequired,
  }).isRequired,
};

CreatureCard.defaultProps = {
  image: null,
};

export default CreatureCard;
