import {Routes, Route}  from 'react-router-dom';
import Menu from './components/Menu';
import Inicio from './components/Inicio';
import Autos from './components/Autos';
import DetalleAuto from './components/DetalleAuto';

import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap-icons/font/bootstrap-icons.css'

function App() {
  return (
    <>
      <Menu />
      <div className='container text-center'>
        <Routes>
          <Route path='/' element={<Inicio></Inicio>}/>
          <Route path='/autos' element={<Autos />}/>
          <Route path="/detalle-auto" element={<DetalleAuto />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
