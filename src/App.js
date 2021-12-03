import Home from './pages/Home';
import { Route, Routes } from 'react-router-dom';

import Sierra from './pages/Sierra';
import Costa from './pages/Costa';
import Selva from './pages/Selva';
import Comida from './pages/Comida';
import Contacto from './pages/Contacto';

import './App.css';
import NotFound from './pages/NotFound';

function App() {
  return (
    <>
      <Routes>
        <Route path='/' element={<Home />}/>
        <Route path='costa' element={<Costa />}/>
        <Route path='sierra' element={<Sierra />}/>
        <Route path='selva' element={<Selva />}/>
        <Route path='contacto' element={<Contacto />}/>
        <Route path='comidas/:nombre' element={<Comida />} />
        <Route path='*' element={<NotFound />}/>
      </Routes>
    </>
  );
}

export default App;
