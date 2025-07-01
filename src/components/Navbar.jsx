import { Link } from 'react-router-dom';
import './Navbar.css';
import LiquidGlassbuttomHome from './LiquidGlassButtomHome';
import LiquidGlassbuttomLogin from './LiquidGlassButtomLogin';
import LiquidGlassbuttomCadastro from './LiquidGlassButtomCadastro';
import LiquidGlassbuttomProfile from './LiquidGlassButtomProfile';
import LiquidGlassSearch from './LiquidGlassSearch';

function Navbar() {

  return (

    <nav className="nav_total">
      <Link to="/">
        <img className="nav_logo" src="src\assets\corteLogo.png" alt="Eco troca" />
      </Link>
      <LiquidGlassbuttomHome />
      <LiquidGlassSearch/>
      <div className="nav_btn">
        <LiquidGlassbuttomLogin />
        <LiquidGlassbuttomCadastro />
        <LiquidGlassbuttomProfile />
      </div>
    </nav>
    
  );

}

export default Navbar;