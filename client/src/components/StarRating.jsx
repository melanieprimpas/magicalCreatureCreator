
import PropTypes from 'prop-types';

const StarRating = ({ ability, value, onChange }) => {
  const stars = Array(5).fill(0); 

  return (
    <div className="star-rating">
      <span>{ability.charAt(0).toUpperCase() + ability.slice(1)}: </span>
      {stars.map((_, index) => (
        <span
          key={index}
          onClick={() => onChange(ability, index + 1)} 
          style={{
            cursor: 'pointer',
            fontSize: '24px',
            color: index < value ? '#FFD700' : '#ccc', 
          }}
        >
          ★
        </span>
      ))}
    </div>
  );
};


StarRating.propTypes = {
  ability: PropTypes.string.isRequired,
  value: PropTypes.number.isRequired,
  onChange: PropTypes.func.isRequired,
};

export default StarRating;
