import Header from '../components/Header'
import Footer from '../components/Footer';
import Carrousel from '../components/Carrousel'
import Tag from '../components/Tag'
import Dropdown from '../components/Dropdown';
import { ReactComponent as Star } from '../assets/star.svg'
import rentalList from '../datas/logements.json'
import { useParams, Navigate } from 'react-router-dom';
import '../styles/rating.css'
import '../styles/rental-page.css'

export default function RentalPage() {
    let { rentalId } = useParams();
    const rental = rentalList.find(rental => rental.id === rentalId);
    if (!rental) {
        return(<Navigate to="/Error" replace={true} />)
    }
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
        <div>
            < Header />
            <main className='rental-page'>
                < Carrousel pictures={rental.pictures}/>
                <h1 className='rental-title'>{rental.title}</h1>
                <p className='rental-location'>{rental.location}</p>
                <div className='rental-tags'>{tags}</div>
                <div className='rental-profile'>
                    <div>{rating}</div>
                    <div className='rental-profile-host'>
                        <p className='rental-profile_name'>{rental.host.name}</p>
                        <img src={rental.host.picture} alt='portrait of the host' className='rental-profile_pic'></img>
                    </div>
                </div>
                <Dropdown key={'description'+rental.id} title='Description' content={rental.description} />
                <Dropdown key={'equipments'+rental.id} title='Équipements' content={equipments}/>
            </main>
            < Footer />
        </div>
  );
}