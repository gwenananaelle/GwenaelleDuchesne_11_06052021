import { ReactComponent as Chevron } from '../assets/chevron.svg'
import '../styles/dropdown.css'

function Dropdown(props) {
    return (
        <div className="dropdown">
            <div className="dropdown-title">
                <p>{props.title}</p>{' '}
                <Chevron className="dropdown-chevron open" />
            </div>
            <div className="dropdown-content">{props.content}</div>
        </div>
    )
}
export default Dropdown
