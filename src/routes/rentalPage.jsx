import Header from '../components/Header'
import Footer from '../components/Footer';
import Tag from '../components/Tag'
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
    return (
        <main>
            < Header />
            <h1>{rental.title}</h1>
            <p>{rental.location}</p>
            <div>
                <p>{rental.host.name}</p>
                <img src={rental.host.picture} alt='portrait of the host'></img>
                {rating}
                {tags}
            </div>
            < Footer />
        </main>
  );
}