import React from "react";
import { Link } from "react-router-dom";
import unaImagen from "../../assets/unaImagen.png";
import "./Sidebar.css";

const Sidebar = () =>{
    return (
        <div className="sidebarContainer">
            <img src={unaImagen} alt="logo" id="logoSidebar"/>
            <nav>
                <ul>
                    <li><Link to="/" className="link">Inicio</Link></li>
                    <li><Link to="/integrantes/juan" className="link">Integrante Juan</Link></li>
                    <li><Link to="/libros" className="link">Libros</Link></li>
                    <li><Link to="/api" className="link">API Pública</Link></li>
                    <li><Link to="/bitacora" className="link">Bitácora</Link></li>
                    <li><Link to="/comentarios" className="link">Comentarios</Link></li>
                </ul>
            </nav>
            <footer className="sidebarFooter">
                <p>© {new Date().getFullYear()} Grupo 2.</p> 
                <p>Todos los derechos reservados.</p>
            </footer>
        </div>
        
    );
}

export default Sidebar;