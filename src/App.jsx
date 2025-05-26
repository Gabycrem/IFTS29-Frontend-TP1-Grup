import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout/Layout';
import Sidebar from './components/Sidebar/Sidebar';
import './App.css';
import Presentacion from './pages/Presentacion';
import MemberPage from './pages/MemberPage';
import ListaJson from './components/ListaJson/ListaJson';
import ListaAPI from './components/ListaAPI/ListaAPI';
import Bitacora from './pages/Bitacora';


function App() {
  const Dummy = ({ name }) => <div> <h1> Página de {name}</h1></div>
  return (
        <Layout 
          sidebar={<Sidebar />}
          main={ 
          <Routes>
            <Route path='/' element={<Dummy name="Presentación" />} />
            <Route path="/pages/presentacion" element={<Presentacion />} />  
            { /* <Route path='/datos-locales' element={<Dummy name="Libros" />} /> */ }         
            <Route path='/datos-locales' element={<ListaJson />} />
            { /* <Route path='/api' element={<Dummy name="API" />} /> */ }
            <Route path='/api' element={<ListaAPI />} />
            { /* <Route path='/bitacora' element={<Dummy name="Bitácora" />} /> */ }
            <Route path='/bitacora' element={<Bitacora />} />
            <Route path="/pages/:id" element={<MemberPage />} />
            <Route path='/comentarios' element={<Dummy name="Comentarios" />} />
          </Routes>
        }
        />
   
  )
}

export default App;
