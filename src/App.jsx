import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout/Layout';
import Sidebar from './components/Sidebar/Sidebar';
import './App.css';

function App() {
  const Dummy = ({ name }) => <div> <h1> Página de {name}</h1></div>
  return (
        <Layout 
          sidebar={<Sidebar />}
          main={ 
          <Routes>
            <Route path='/' element={<Dummy name="Presentación" />} />
            <Route path='/integrantes/:nombre' element={<Dummy name="IntegranteDetalle" />} />
            <Route path='/libros' element={<Dummy name="Libros" />} />
            <Route path='/api' element={<Dummy name="API" />} />
            <Route path='/bitacora' element={<Dummy name="Bitácora" />} />
            <Route path='/comentarios' element={<Dummy name="Comentarios" />} />
          </Routes>
        }
        />
   
  )
}

export default App;
