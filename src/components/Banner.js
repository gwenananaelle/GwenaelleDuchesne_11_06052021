import '../styles/banner.css';

function Banner({text}) {
    return (
        <div className='banner-box'>
            {text ? <h1 className='banner-text'>{text}</h1> : null}
        </div>
    )
}

export default Banner