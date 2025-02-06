import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import ConsultarPelicula from './components/ConsultarPeliculas';
import RegistrarPelicula from './components/RegistrarPelicula';
import EditarPelicula from './components/EditarPelicula';
import Menu from './components/Menu';

function App() {
  return (
    <Router> {/* ✅ El Router debe envolver todo */}
      <div className='container'>
        <Menu />
        <div className='row'>
          <div className='col-12'>
            <Routes> {/* ✅ Ahora Routes está bien colocado */}
              <Route path='/' element={<ConsultarPelicula />} />
              <Route path='/peliculas' element={<ConsultarPelicula />} />
              <Route path='/peliculas/registrar' element={<RegistrarPelicula />} />
              <Route path='/editar/:id' element={<EditarPelicula />} />
            </Routes>
          </div>
        </div>
      </div>
    </Router>
  );
}

export default App;
