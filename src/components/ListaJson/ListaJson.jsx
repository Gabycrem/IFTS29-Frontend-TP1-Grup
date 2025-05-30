import React, { useEffect, useState } from 'react';
import "../../styles/global.css";
import "../card/card.css";



const ListaJson = () => {
  const [libros, setLibros] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch('/dataLibros.json')
      .then((res) => {
        if (!res.ok) {
          throw new Error('Error al cargar el archivo JSON');
        }
        return res.json();
      })
      .then((data) => setLibros(data))
      .catch((error) => setError(error.message));
  }, []);

  return (
    <div className="lista-json">
      <h1>Listado de Libros</h1>
      {error && <p className="error">{error}</p>}
      <div className="tarjetas-container">
        {libros.map((libro, index) => (
          <div key={index} className="card json-card">
            <div className="card-body">
             <h3 className="card-title">{libro.titulo}</h3>
            <p className="card-description"><strong>Autor:</strong> {libro.autor}</p>
            <p className="card-description"><strong>Año:</strong> {libro.anio}</p>
            <p className="card-description"><strong>Género:</strong> {libro.genero}</p>
            <p className="card-description" style={{ fontStyle: 'italic' }}>{libro.descripcion}</p>

            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ListaJson;
