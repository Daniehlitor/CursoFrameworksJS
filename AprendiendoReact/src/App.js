import './assets/css/App.css';
import Footer from './components/Footer';
import Header from './components/Header';
import Sidebar from './components/Sidebar';
import Slider from './components/Slider';
import Router from './Router';

function App() {

  var buttonString = "Cositas";

  return (
    <div className="App">

      <Header />

      <Slider
        tittle="Bienvenido al Curso de React con Victor Robles de vitorroblesweb.es"
        btn={buttonString}
      />

      <div className='center'>

        {/* <Peliculas /> */}

        <Router/>

        <Sidebar />

      </div>

      <div className="clearfix"></div>

      <Footer />

    </div>
  );
}

export default App;
