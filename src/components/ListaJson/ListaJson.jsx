import React, { useEffect, useState } from 'react';
import './ListaJson.css'; 

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
    <div className="lista-libros">
      <h2>Listado de Libros</h2>
      {error && <p className="error">{error}</p>}
      <div className="contenedor-tarjetas">
        {libros.map((libro, index) => (
          <div key={index} className="tarjeta-libro">
            <h3>{libro.titulo}</h3>
            <p><strong>Autor:</strong> {libro.autor}</p>
            <p><strong>Año:</strong> {libro.anio}</p>
            <p><strong>Género:</strong> {libro.genero}</p>
            <p>{libro.descripcion}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ListaJson;