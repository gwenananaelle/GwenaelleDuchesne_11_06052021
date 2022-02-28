import Header from '../components/Header'
import Footer from '../components/Footer';
import { Link } from 'react-router-dom';

export default function About() {
  return (
    <main>
        < Header />
        <main>
            <h1>404</h1>
            <p>Oups! La page que vous demandez n'existe pas.</p>
            <Link to="/">Retourner sur la page d’accueil</Link>
        </main>
        < Footer />
    </main>
  );
}