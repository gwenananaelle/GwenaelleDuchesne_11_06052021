import logo from '../logo.svg';
import '../styles/header.css';

function Header() {
    return (
        <div className='kasa-header'>
            <img src={logo} className="App-logo" alt="logo" />
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