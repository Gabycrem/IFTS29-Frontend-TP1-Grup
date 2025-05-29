import {Routes, Route } from 'react-router-dom';
import Layout from './components/Layout/Layout';
import './styles/global.css';
import Presentacion from './pages/Presentacion';
import MemberPage from './pages/MemberPage';
import ListaJson from './components/ListaJson/ListaJson';
import ListaAPI from './components/ListaAPI/ListaAPI';
import Bitacora from './pages/Bitacora'


function App() {
  return (
        <Routes>
            <Route path='/' element={<Layout />}>
              <Route index element={<Presentacion />} />
              <Route index path="/pages/presentacion" element={<Presentacion />} />
              <Route path='/datos-locales' element={<ListaJson />} />
              <Route path='/api' element={<ListaAPI />} />
              <Route path='/bitacora' element={<Bitacora />} />
              <Route path="/pages/:id" element={<MemberPage />} />
            </Route>
        </Routes>
  )
}

export default App;
