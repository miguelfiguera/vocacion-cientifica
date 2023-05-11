import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import Inicio from './components/Inicio.js'
import Footer from './components/Footer'
import ComoParticipar from './components/ComoParticipar';
import { BrowserRouter,Routes,Route } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
    <div className="App">
    <Navbar />

      <Routes>
      <Route exact path='/' Component={Inicio}/>
      <Route exact path='/comoparticipar' Component={ComoParticipar}/>
      </Routes>
      <Footer/>

    </div>
    </BrowserRouter>
  );
}

export default App;
