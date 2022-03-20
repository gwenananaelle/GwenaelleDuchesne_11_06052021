import Header from '../components/Header'
import { Link } from 'react-router-dom';
import '../styles/error.css'

export default function About() {
  return (
    <main>
        < Header />
        <main className='error-box'>
            <h1 className='error-title'>404</h1>
            <p className='error-message'>Oups! La page que vous demandez n'existe pas.</p>
            <Link to="/" className='error-link'>Retourner sur la page d’accueil</Link>
        </main>
    </main>
  );
}