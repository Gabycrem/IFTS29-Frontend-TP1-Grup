import {Routes, Route } from 'react-router-dom';
import Layout from './components/Layout/Layout';
import './styles/global.css';
import Presentacion from './pages/Presentacion';
import MemberPage from './pages/MemberPage';
import PerfilLucas from './pages/PerfilLucas';
import PerfilMicaela from './pages/PerfilMicaela';
import PerfilMirta from './pages/PerfilMirta';
import PerfilNazarena from './pages/PerfilNazarena';


function App() {
  //constante para cargar las rutas a modo de ejemplo, hasta que esten disponibles los componentes necesarios
  const Dummy = ({ name }) => <div> <h1> Página de {name}</h1></div>
  return (

        <Routes>
            <Route path='/' element={<Layout />}>
              <Route index element={<Presentacion />} />
              <Route index path="/pages/presentacion" element={<Presentacion />} />
              <Route path="/pages/perfillucas" element={<PerfilLucas />} />
              <Route path="/pages/perfilmicalea" element={<PerfilMicaela />} />
              <Route path="/pages/perfilmirta" element={<PerfilMirta />} />
              <Route path="/pages/perfilnazarena" element={<PerfilNazarena />} />           
              <Route path='/datos-locales' element={<Dummy name="Libros" />} />
              <Route path='/api' element={<Dummy name="API" />} />
              <Route path='/bitacora' element={<Dummy name="Bitácora" />} />
              <Route path="/pages/:id" element={<MemberPage />} />
            </Route>
        </Routes>

  )
}

export default App;
