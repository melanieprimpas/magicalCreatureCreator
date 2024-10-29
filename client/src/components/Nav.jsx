import { Link, useLocation } from 'react-router-dom';
const Nav = () => {
  const currentPage = useLocation().pathname;
  return (
    <nav className="nav">
        <li className="nav-item">
            <Link
            to="/"
            className={currentPage === '/' ? 'nav-link active' : 'nav-link'}
            >
            Browse Creatures
            </Link>
        </li>
        <li className="nav-item">
            <Link
            to="/SavedCreatures"
            className={currentPage === '/SavedCreatures' ? 'nav-link active' : 'nav-link'}
            >
            Saved Creatures
            </Link>
        </li>
        <li className="nav-item">
            <Link
            to="/CreateCreatures"
            className={currentPage === '/CreateCreatures' ? 'nav-link active' : 'nav-link'}
            >
            Create a Creature
            </Link>
        </li>
      </nav> 
    
  )
};

export default Nav;
