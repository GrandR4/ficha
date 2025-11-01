import logo from './logo.jpg';
import './App.css';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import Contacto from './Contacto';


function App() {
  const HomeContent = (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          ¡Hola! Soy Rafael Rodríguez, futuro Ingeniero de Sistemas de 22 años. <br />
          Estoy dando mis primeros pasos sólidos en React y aquí presento mi portafolio inicial
        </p>
        <a
          className="App-link"
          href="https://github.com/GrandR4?tab=repositories"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src={require('./icono.png')} alt="icono" style={{ width: '20px', verticalAlign: 'middle', marginRight: '8px'}} />Mi Repositorio
        </a>
        <Link to="/contacto" className="App-link">Enviame un a Mensaje</Link>
      </header>
    </div>
  );

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={HomeContent} />
        <Route path="/contacto" element={<Contacto />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;