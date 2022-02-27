import { Link } from "react-router-dom";
import Logo from '../assets/Logo.js';
import '../styles/header.css';

function Header() {
    return (
        <div className='kasa-header'>
            <Logo color='#FF6060'/>
            <ul className='kasa-menu'>
            <li>
                <Link to="/">Accueil</Link>
            </li>
            <li>
                <Link to="/about">À propos</Link>
            </li>
            </ul>
        </div>
    ) 
}

export default Header