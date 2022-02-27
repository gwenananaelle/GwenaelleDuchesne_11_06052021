import './App.css';
import Header from './components/Header'
import Banner from'./components/Banner'
import Gallery from './components/Gallery';
import Footer from './components/Footer';


function App() {
  return (
    <div className="App">
      <Header />
      <Banner text='Chez vous, partout et ailleurs'/>
      <Gallery />
      <Footer />
    </div>
  );
}

export default App;
