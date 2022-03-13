import { NavLink } from 'react-router-dom'
import { ReactComponent as Logo } from '../assets/logo.svg'
import '../styles/header.css'

function Header() {
    return (
        <div className="kasa-header">
            <Logo className="kasa-logo" />
            <ul className="kasa-menu">
                <li>
                    <NavLink
                        to="/"
                        className={({ isActive }) =>
                            isActive ? 'current' : null
                        }
                    >
                        Accueil
                    </NavLink>
                </li>
                <li>
                    <NavLink
                        to="/about"
                        className={({ isActive }) =>
                            isActive ? 'current' : null
                        }
                    >
                        À propos
                    </NavLink>
                </li>
            </ul>
        </div>
    )
}

export default Header
