import Header from '../components/Header'
import Footer from '../components/Footer';
import rentalList from '../datas/logements.json'
import { useParams } from 'react-router-dom';

export default function RentalPage() {
    let { rentalId } = useParams();
    const rental = rentalList.find(rental => rental.id === rentalId);

    return (
        <main>
            < Header />
            <h1>{rental.title}</h1>
            <p>{rental.location}</p>
            <di>
                <p>{rental.host.name}</p>
                <img src={rental.host.picture} alt='portrait of the host'></img>
            </di>
            < Footer />
        </main>
  );
}