import Header from '../components/Header'
import Footer from '../components/Footer';
import Tag from '../components/Tag'
import Dropdown from '../components/Dropdown';
import { ReactComponent as Star } from '../assets/star.svg'
import rentalList from '../datas/logements.json'
import { useParams } from 'react-router-dom';
import '../styles/rating.css'

export default function RentalPage() {
    let { rentalId } = useParams();
    const rental = rentalList.find(rental => rental.id === rentalId);
    const tags = rental.tags.map( (tag, index) => 
        <Tag key={index+ tag} tag={tag} />)
    const range = [1,2,3,4,5]
    const rating = range.map((rangeElem) =>
                parseInt(rental.rating, 10) >= rangeElem ? <Star key={rangeElem.toString()} className='star active'/> : <Star key={rangeElem.toString()} className='star'/>
            )
    const equipments = <ul>{
                rental.equipments.map((equipment, index) =>
                    <li key={index}>{equipment}</li>
                )}
    </ul>
    return (
        <main>
            < Header />
            <h1>{rental.title}</h1>
            <p>{rental.location}</p>
            {tags}
            <div>
                <p>{rental.host.name}</p>
                <img src={rental.host.picture} alt='portrait of the host'></img>
                {rating}
            </div>
            <Dropdown key={'description'+rental.id} title='Description' content={rental.description} />
            <Dropdown key={'equipments'+rental.id} title='Équipements' content={equipments} />
            < Footer />
        </main>
  );
}