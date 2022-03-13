import { Link } from 'react-router-dom'
import '../styles/rentalThumb.css'

function RentalThumb({ title, id }) {
    return (
        <li className="rental-thumb">
            <Link to={`/rental/${id}`}>
                <p>{title}</p>
            </Link>
        </li>
    )
}

export default RentalThumb
