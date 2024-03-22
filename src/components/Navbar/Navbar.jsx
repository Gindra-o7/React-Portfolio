import { Link } from 'react-router-dom';
import "./navbar.css"

function Navbar() {
  return (
    <>
      <nav>
        <div className="nav__content">
          <div className="logo">
            <Link to="/">Gilang.</Link>
          </div>
          <label htmlFor="check" className="checkbox">
            <i className="ri-menu-line"></i>
          </label>
          <input type="checkbox" name="check" id="check" />
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/biodata">Biodata</Link>
            </li>
            <li>
              <Link to="/achievement">Achievement</Link>
            </li>
            <li>
              <Link to="/gallery">Gallery</Link>
            </li>
            <li>
              <Link to="/portfolio">Portfolio</Link>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
