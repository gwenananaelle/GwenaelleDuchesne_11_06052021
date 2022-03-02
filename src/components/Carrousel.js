import { ReactComponent as Chevron } from '../assets/chevron.svg'
import '../styles/carrousel.css'
import { useState } from 'react'

function Carrousel({ pictures }) {
    const [index, updateIndex] = useState(0)
    function changeSlide(i, direction) {
        i = i + direction
        if (i > pictures.length - 1) {
            i = 0
        } else if (i < 0) {
            i = pictures.length - 1
        }
        return i
    }
    let img = <img src={pictures[index]} alt="" className="carrousel-img"></img>

    return (
        <div className="carrousel">
            {img}
            {pictures.length > 1 ? (
                <Chevron
                    className="carrousel-previous"
                    onClick={() => updateIndex(changeSlide(index, -1))}
                />
            ) : null}
            {pictures.length > 1 ? (
                <Chevron
                    className="carrousel-next"
                    onClick={() => updateIndex(changeSlide(index, 1))}
                />
            ) : null}
        </div>
    )
}
export default Carrousel
