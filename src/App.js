import './styles/App.css'
import Header from './components/Header'
import Banner from './components/Banner'
import Gallery from './components/Gallery'
import Footer from './components/Footer'
import Bg from './assets/bg-banner.jpg'

function App() {
    return (
        <div className="App">
            <Header />
            <Banner text="Chez vous, partout et ailleurs" image={Bg} />
            <Gallery />
            <Footer />
        </div>
    )
}

export default App
