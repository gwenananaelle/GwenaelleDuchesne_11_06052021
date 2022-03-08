import '../styles/banner.css'

function Banner({ text, image }) {
    return (
        <div className="banner-box">
            <img src={image} alt="" className="banner-img"></img>
            {text ? <h1 className="banner-text">{text}</h1> : null}
        </div>
    )
}

export default Banner
