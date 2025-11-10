import KeyboardButton from './components/KeyboardButton';
import TitleAnimated from './components/TitleAnimated';
import "./Navbar.css"
import { Link } from 'react-router-dom';
function Navbar() {
  return (
    <nav id="navbar">
      <div className="nav-buttons">
        <KeyboardButton text="Graj" to={"/game"}></KeyboardButton>
      <KeyboardButton text="Galeria" to={"/galerry"}></KeyboardButton>

      </div>
      <div id="description-wrapper">
          <Link to="/">
            <TitleAnimated/>
          </Link>
      </div>
      <div className="nav-buttons" style={{flexFlow:"row-reverse"}}>
        <KeyboardButton text="Kontakt" to={"/contact"}></KeyboardButton>
        <KeyboardButton text="O stronie" to={"/about"}></KeyboardButton>
      </div>
    </nav>
  );
}

export default Navbar;
