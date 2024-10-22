import PropTypes from 'prop-types';

// Modern star rendering
const renderStars = (count) => {
  const stars = [];
  for (let i = 0; i < count; i++) {
    stars.push(
      <span key={i} style={{ color: '#FFD700', fontSize: '24px', marginRight: '4px' }}>★</span> // Filled modern star
    );
  }
  return stars;
};

const CreatureCard = ({ habitat, creatureName, image, abilities }) => {
  // Updated styles for the creature card
  const cardStyles = {
    width: '100%',
    maxWidth: '350px',
    backgroundColor: '#f0f0f0',
    borderRadius: '20px',
    boxShadow: '0 6px 20px rgba(0, 0, 0, 0.15)',
    textAlign: 'center',
    padding: '20px',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    fontFamily: 'Arial, sans-serif',
    margin: '20px',
  };

  const headerStyles = {
    fontSize: '18px',
    color: '#333',
  };

  const imageContainerStyles = {
    width: '100%',
    height: 'auto',
    maxHeight: '200px',
    borderRadius: '15px',
    overflow: 'hidden',
    marginBottom: '20px',
  };

  const abilitiesStyles = {
    fontSize: '16px',
    color: '#333',
    textAlign: 'left',
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
        <h2>{creatureName}</h2>
        <p>{habitat ? `Habitat: ${habitat}` : 'No habitat selected'}</p>
      </div>

      {/* Creature Image */}
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
  image: PropTypes.string, // Ensure image is optional but used correctly
  abilities: PropTypes.shape({
    strength: PropTypes.number.isRequired,
    agility: PropTypes.number.isRequired,
    intelligence: PropTypes.number.isRequired,
  }).isRequired,
};

CreatureCard.defaultProps = {
  image: null, // Default to no image
};

export default CreatureCard;
