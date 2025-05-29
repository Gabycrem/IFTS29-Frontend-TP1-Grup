import { useState } from "react";
import unaImagen from "../../assets/unaImagen.png";
import "./Sidebar.css";
import { NavLink } from "react-router-dom";

const Sidebar = () => {
  const [open, setOpen] = useState(false);
  const closeMenu = () => setOpen(false);
  const toggleMenu = () => setOpen(prev => !prev);
  return (
    <div className="sidebarContainer">
      <img src={unaImagen} alt="logo" id="logoSidebar" />

      <nav className="menu">
        <NavLink to="/pages/presentacion" className="link" onClick={closeMenu}>Presentación</NavLink>

        <div className="subMenu">
            <button  className="link no-style" onClick={toggleMenu}> Integrantes </button>
            {open && (
              <div className="dropdown">
                <NavLink to='/pages/perfillucas' className='link'>Lucas</NavLink>
                <NavLink to='/pages/perfilmicalea' className='link'>Mica</NavLink>
                <NavLink to='/pages/perfilmirta' className='link'>Mirta</NavLink>
                <NavLink to='/pages/perfilnazarena' className='link'>Naza</NavLink>
            </div>
            )}
            
        </div>

        <NavLink to="/datos-locales" className="link" onClick={closeMenu}>Datos JSON </NavLink>

        <NavLink to="/api" className="link" onClick={closeMenu}>Datos API</NavLink>

        <NavLink to="/bitacora" className="link" onClick={closeMenu}>Bitácora</NavLink>

      </nav>

      <footer className="sidebarFooter">
        <p>© {new Date().getFullYear()} Grupo 2.</p>
        <p>Todos los derechos reservados.</p>
      </footer>
    </div>
  );
};

export default Sidebar;
