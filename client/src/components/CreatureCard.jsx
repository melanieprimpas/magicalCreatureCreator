import { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { FaSyncAlt } from 'react-icons/fa'; 
import rainforest from '../assets/images/rainforest.jpeg';
import desert from '../assets/images/desert.PNG';
import ocean from '../assets/images/ocean.PNG';
import mountains from '../assets/images/mountain.PNG';
import plains from '../assets/images/plains.PNG';
import { generateStory } from '../utils/apiRoute';


// star rating function
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
  rainforest: rainforest,
  desert: desert,
  ocean: ocean,
  mountains: mountains,
  plains: plains,
};

const CreatureCard = ({  habitat, creatureName, image = null, abilities }) => {
  const [flipped, setFlipped] = useState(false);
  const [story, setStory] = useState('');

  const backgroundImage = habitat && habitatBackgrounds[habitat] ? `url(${habitatBackgrounds[habitat]})` : null;
  

  // Container for both sides of the card
  const cardContainerStyles = {
    width: '100%',
    maxWidth: '350px',
    height: '500px',
    perspective: '1000px',
    margin: '20px',
  };

  const cardStyles = {
    width: '100%',
    height: '100%',
    position: 'relative',
    transformStyle: 'preserve-3d',
    transition: 'transform 0.8s',
    transform: flipped ? 'rotateY(180deg)' : 'rotateY(0deg)',
  };

  const cardFaceStyles = {
    width: '100%',
    height: '100%',
    backfaceVisibility: 'hidden',
    position: 'absolute',
    borderRadius: '20px',
    boxShadow: '0 6px 20px rgba(0, 0, 0, 0.15)',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    fontFamily: 'Arial, sans-serif',
    color: 'white',
    padding: '20px', 
    boxSizing: 'border-box', 
  };

  const cardFrontStyles = {
    ...cardFaceStyles,
    backgroundImage: backgroundImage,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
  };

  const cardBackStyles = {
    ...cardFaceStyles,
    backgroundImage: backgroundImage,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    transform: 'rotateY(180deg)',
    textAlign: 'center',
    justifyContent: 'center',
  };

  const headerStyles = {
    fontSize: '24px',
    fontWeight: 'bold',
    padding: '5px 10px',
    borderRadius: '8px',
  };

  const imageContainerStyles = {
    width: '100%',
    height: 'auto',
    maxHeight: '200px', 
    borderRadius: '10px',
    overflow: 'hidden',
    margin: '10px 0', 
  };

  const abilitiesStyles = {
    fontSize: '15px',
    textAlign: 'left',
    backgroundColor: 'rgba(0, 0, 0, 0.6)',
    padding: '10px',
    borderRadius: '10px',
    color: 'white',
    marginTop: '10px', 
  };

  const abilityItemStyles = {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: '10px',
    fontSize: '14px',
    color: 'white', 
  };

  const storyStyles = {
    backgroundColor: 'rgba(0, 0, 0, 0.6)',
    padding: '20px',
    borderRadius: '10px',
    color: 'white',
    fontSize: '16px',
    overflow: 'auto',
    height: '60%', 
    maxHeight: '280px',
    marginTop: '20px',
  };

  const storyHeaderStyles = {
    marginBottom: '10px',
    fontSize: '22px',
    color: 'white',
    textShadow: '2px 2px 4px rgba(0, 0, 0, 0.8)',
  };

  useEffect(() => {
    const fetchStory = async () => {
      if (creatureName && habitat) {
       // console.log('Fetching story for:', creatureName, habitat);
        try {
          const generatedStory = await generateStory(creatureName, habitat);
          setStory(generatedStory);
         // console.log('Generated story:', generatedStory);
        } catch (error) {
          console.error('Error generating story:', error);
        }
      }
    }
    fetchStory();
  }, [creatureName, habitat]);

  return (
    <div style={cardContainerStyles}>
      <div style={cardStyles}>
        {/* Front Side of the Card */}
        <div style={cardFrontStyles}>
          <div style={headerStyles}>
            {creatureName || 'Unknown Creature'}
          </div>

          {/* Creature Image */}
          <div className="creature-image" style={imageContainerStyles}>
            {image ? <img src={image} alt="Creature" style={{ width: '100%', height: '100%', objectFit: 'cover' }} /> : <p>No image uploaded</p>}
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

          {/* Switch card icon */}
          <div
            onClick={() => setFlipped(!flipped)} 
            style={{
              position: 'absolute',
              top: '10px',
              right: '10px',
              fontSize: '24px',
              cursor: 'pointer',
              color: 'white',
              backgroundColor: 'rgba(0, 0, 0, 0.6)',
              padding: '5px',
              borderRadius: '50%',
            }}
          >
            <FaSyncAlt />
          </div>
        </div>

        {/* Back Side of the Card */}
        <div style={cardBackStyles}>
          <h2 style={storyHeaderStyles}>{creatureName ? `${creatureName} Story` : 'Creature Story'}</h2>

          {/* Story Section */}
          <div style={storyStyles}>
            {story || 'No story provided for this creature.'}
          </div>

          {/* Switch card icon */}
          <div
            onClick={() => setFlipped(!flipped)} 
            style={{
              position: 'absolute',
              top: '10px',
              right: '10px',
              fontSize: '24px',
              cursor: 'pointer',
              color: 'white',
              backgroundColor: 'rgba(0, 0, 0, 0.6)',
              padding: '5px',
              borderRadius: '50%',
            }}
          >
            <FaSyncAlt />
          </div>
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
  story: PropTypes.string, 
};
/*
CreatureCard.defaultProps = {
  image: null,
  //story: '', 
};*/

export default CreatureCard;
