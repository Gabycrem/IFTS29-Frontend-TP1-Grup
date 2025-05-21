import React from "react";
import { Link } from "react-router-dom";
import unaImagen from "../../assets/unaImagen.png";
import "./Sidebar.css";
import { NavLink } from "react-router-dom";
import members from "../../data/members.json";

const Sidebar = () => {
  return (
    <div className="sidebarContainer">
      <img src={unaImagen} alt="logo" id="logoSidebar" />

      <nav className="menu">
        <NavLink to="/pages/presentacion" className="link">Presentación</NavLink>

        <div className="subMenu">
            <button  className="link no-style"> Integrantes </button>
            <div className="dropdown">
                <NavLink to='/pages/perfillucas' className='link'>Lucas</NavLink>
                <NavLink to='/pages/perfillucas' className='link'>Mica</NavLink>
                <NavLink to='/pages/perfillucas' className='link'>Naza</NavLink>
                <NavLink to='/pages/perfillucas' className='link'>Mirta</NavLink>
            </div>
        </div>

        <NavLink to="/datos-locales" className="link">Datos JSON </NavLink>

        <NavLink to="/api" className="link">Datos API</NavLink>

        <NavLink to="/bitacora" className="link">Bitácora</NavLink>

      </nav>

      <footer className="sidebarFooter">
        <p>© {new Date().getFullYear()} Grupo 2.</p>
        <p>Todos los derechos reservados.</p>
      </footer>
    </div>
  );
};

export default Sidebar;
