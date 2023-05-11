import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import Inicio from './components/Inicio.js'
import Footer from './components/Footer'
function App() {
  return (
    <div className="App">
      <Navbar />
      <Inicio/>
      <Footer/>
    </div>
  );
}

export default App;
