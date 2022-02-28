import { Link } from 'react-router-dom'
import { ReactComponent as Logo } from '../assets/logo.svg'
import '../styles/header.css'

function Header() {
	return (
		<div className="kasa-header">
			<Logo className="kasa-logo" />
			<ul className="kasa-menu">
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
