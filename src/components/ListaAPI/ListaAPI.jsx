import './ListaAPI.css';
import React, { useEffect, useState } from 'react';

const ListaAPI = () => {
  const [feriados, setFeriados] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch('https://api.argentinadatos.com/v1/feriados/2025')
      .then((res) => {
        if (!res.ok) throw new Error('Error al obtener los feriados');
        return res.json();
      })
      .then((data) => {
        setFeriados(data);
        setLoading(false);
      })
      .catch((err) => {
        setError(err.message);
        setLoading(false);
      });
  }, []);

const getFecha = (fechaString) => {
  if (!fechaString) return 'Fecha no disponible';
  const [anio, mes, dia] = fechaString.split('-');
  return `${dia}/${mes}/${anio}`;
};

  if (loading) return <p>Cargando feriados...</p>;
  if (error) return <p className="error">Error: {error}</p>;

  return (
    <div className="lista-api">
      <h2>Feriados en Argentina - 2025</h2>
      <div className="contenedor-api">
{feriados.map((feriado) => (
  <div key={`${feriado.fecha}-${feriado.nombre}`} className="tarjeta-api">
    <h3>{feriado.nombre}</h3>
    <p><strong>Fecha:</strong> {getFecha(feriado.fecha)}</p>
    <p><strong>Tipo:</strong> {feriado.tipo}</p>
  </div>
))}
      </div>
    </div>
  );
};

export default ListaAPI;