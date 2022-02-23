import RentalThumb from'../components/RentalThumb'
import rentalList from '../datas/logements.json'
import '../styles/gallery.css';

function Gallery() {
    return (
        <ul className='rental-gallery'>
        {rentalList.map(({id, title}) =>
        <RentalThumb key={id} title={title}/>
        )}
      </ul>
    )
}

export default Gallery