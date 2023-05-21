import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import Inicio from './components/Inicio.js'
import Footer from './components/Footer'
import ComoParticipar from './components/ComoParticipar';
import Entrevistas from './components/entrevistas/Entrevistas';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import Header from './components/Header';

function App() {


  return (
    <BrowserRouter>
    <div className="App">
      <Header/>
    <Navbar />

      <Routes>
      <Route exact path='/vocacion-cientifica/' Component={Inicio}/>
      <Route exact path='/vocacion-cientifica/comoparticipar' Component={ComoParticipar}/>
      <Route exact path='/vocacion-cientifica/entrevistas' Component={Entrevistas}/>
      </Routes>
      <Footer/>

    </div>
    </BrowserRouter>
  );
}

export default App;
