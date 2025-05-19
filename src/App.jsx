import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout/Layout';
import Sidebar from './components/Sidebar/Sidebar';
import './App.css';
import Presentacion from './pages/Presentacion';
import MemberPage from './pages/MemberPage';

function App() {
  //constante para cargar las rutas a modo de ejemplo, hasta que esten disponibles los componentes necesarios
  const Dummy = ({ name }) => <div> <h1> Página de {name}</h1></div>
  return (
        <Layout 
          sidebar={<Sidebar />}
          main={ 
          //Modificar los element cuando esten disponibles los componentes.
          <Routes>  
            <Route path='/' element={<Dummy name="Presentación" />} />
            <Route path="/pages/presentacion" element={<Presentacion />} />           
            <Route path='/datos-locales' element={<Dummy name="Libros" />} />
            <Route path='/api' element={<Dummy name="API" />} />
            <Route path='/bitacora' element={<Dummy name="Bitácora" />} />
            <Route path="/pages/:id" element={<MemberPage />} />
            <Route path='/comentarios' element={<Dummy name="Comentarios" />} />
          </Routes>
        }
        />
   
  )
}

export default App;
