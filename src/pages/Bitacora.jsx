import React from 'react';
import { useEffect, useState } from "react";
import bitacoraData from "../data/bitacora.json";
import '../styles/Bitacora.css';


const Bitacora = () => {
  const [data, setData] = useState(null);

  useEffect(() => {
    setData(bitacoraData);
  }, []);

  if (!data) return <p>Cargando bitácora...</p>;

  return (
    <div className="bitacoraContainer card">
      <h1>📚 Bitácora del Proyecto</h1>

      <section>
        <h2>👥 Roles del equipo</h2>
        <ul>
          {data.integrantes.map((integrante, index) => (
            <li key={index}>
              <strong>{integrante.nombre}:</strong> {integrante.rol}
            </li>
          ))}
        </ul>
      </section>

      <section>
        <h2>🧑‍💻 Aportes de cada integrante</h2>
        {data.integrantes.map((integrante, index) => (
          <div  key={index} className={`integrante ${index !== 0 ? "conLinea" : ""}`}>
            <h3 className='card-title'>{integrante.nombre}</h3>
            <p className='card-description'><strong>Rol:</strong> {integrante.rol}</p>
            <p className='card-description'>{integrante.descripcion}</p>
            <p className='card-description'><strong>Tareas:</strong></p>
            <ul>
              {integrante.tareas.map((tarea, index) => (
                <li key={index}>✔️ {tarea}</li>
              ))}
            </ul>
            <p><strong>Fortalezas destacadas:</strong></p>
            <ul>
              {integrante.fortalezas.map((fortaleza, index) => (
                <li key={index}>⭐ {fortaleza}</li>
              ))}
            </ul>
          </div>
        ))}
      </section>

      <section>
        <h2>🗓 Cronología del trabajo</h2>
        <ul>
          {data.cronologia.map((evento, index) => (
            <li key={index}>📌 {evento}</li>
          ))}
        </ul>
      </section>

      {/* Herramientas y tecnologías */}
      <section>
        <h2>🛠 Tecnologías y herramientas utilizadas</h2>
        <ul>
          {data.tecnologias.map((tec, index) => (
            <li key={index}>✅ {tec}</li>
          ))}
        </ul>
      </section>
    </div>
  );
};

export default Bitacora;