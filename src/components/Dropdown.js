import { ReactComponent as Chevron } from '../assets/chevron.svg'
import { useState } from 'react'
import '../styles/dropdown.css'

function Dropdown(props) {
    const [isOpen, setIsOpen] = useState(false)
    return (
        <div className="dropdown">
            <div className="dropdown-title">
                <p>{props.title}</p>{' '}
                <Chevron
                    className={
                        isOpen ? 'dropdown-chevron open' : 'dropdown-chevron'
                    }
                    onClick={() =>
                        isOpen ? setIsOpen(false) : setIsOpen(true)
                    }
                />
            </div>
            {isOpen ? (
                <div className="dropdown-content">{props.content}</div>
            ) : null}
        </div>
    )
}
export default Dropdown
