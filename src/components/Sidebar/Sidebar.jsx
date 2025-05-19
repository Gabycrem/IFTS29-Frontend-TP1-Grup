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
        <div className="menu-item dropdown">
          <div className="dropdown-header">
            <NavLink
              to="/pages/presentacion"
              className="menu-link"
              onClick={() => setOpen(!open)}
            >
              Presentación
              <span className={`arrow ${open ? "up" : "down"}`}>▾</span>
            </NavLink>
          </div>

          {open && (
            <div className="submenu">
              {members.map((member) => (
                <NavLink
                  key={member.id}
                  to={`/pages/${member.id}`}
                  className="submenu-item"
                >
                  {member.name}
                </NavLink>
              ))}
             
            </div>
          )}
        </div>

        <NavLink to="/datos-locales" className="menu-item">
          Datos JSON
        </NavLink>

        <NavLink to="/api" className="menu-item">
          Datos API
        </NavLink>

        <NavLink to="/bitacora" className="menu-item">
          Bitácora
        </NavLink>

        <NavLink to="/comentarios" className="menu-item">
          Comentarios
        </NavLink>
      </nav>

      <footer className="sidebarFooter">
        <p>© {new Date().getFullYear()} Grupo 2.</p>
        <p>Todos los derechos reservados.</p>
      </footer>
    </div>
  );
};

export default Sidebar;
