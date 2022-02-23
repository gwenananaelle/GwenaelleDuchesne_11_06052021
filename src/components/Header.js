import Logo from '../assets/Logo.js';
import '../styles/header.css';

function Header() {
    return (
        <div className='kasa-header'>
            <Logo color='#FF6060'/>
            <ul className='kasa-menu'>
            <li>
                Accueil
            </li>
            <li>
                À propos
            </li>
            </ul>
        </div>
    ) 
}

export default Header