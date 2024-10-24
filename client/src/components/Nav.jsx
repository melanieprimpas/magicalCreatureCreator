import { Link, useLocation } from 'react-router-dom';
const Nav = () => {
  // TODO: Add necessary code to display the navigation bar and link between the pages
  const currentPage = useLocation().pathname;
  return (
    <nav className="nav">
        <li className="nav-item">
            <Link
            to="/"
            
            // This is a conditional (ternary) operator that checks to see if the current page is "Home"
            // If it is, we set the current page to 'nav-link-active', otherwise we set it to 'nav-link'
            className={currentPage === '/' ? 'nav-link active' : 'nav-link'}
            >
            Browse Creatures
            </Link>
        </li>
        <li className="nav-item">
            <Link
            to="/SavedCreatures"
            // Check to see if the currentPage is `About`, and if so we use the active link class from bootstrap. Otherwise, we set it to a normal nav-link
            className={currentPage === '/SavedCreatures' ? 'nav-link active' : 'nav-link'}
            >
            Saved Creatures
            </Link>
        </li>
        <li className="nav-item">
            <Link
            to="/CreateCreatures"
            // Check to see if the currentPage is `About`, and if so we use the active link class from bootstrap. Otherwise, we set it to a normal nav-link
            className={currentPage === '/CreateCreatures' ? 'nav-link active' : 'nav-link'}
            >
            Create a Creature
            </Link>
        </li>
      </nav> 
    
  )
};

export default Nav;
