import React from 'react';
// import './Bitacora.css'; 

const Bitacora = () => {
  return (
    <div className="bitacora-container">
      <h1>Bitácora del Proyecto</h1>

      <section>
        <h2>👥 Roles del equipo</h2>
        <ul>
          <li><strong>Nazarena:</strong> Organización del equipo y documentación</li>
          <li><strong>Micaela:</strong> Diseño general y presentación del sitio</li>
          <li><strong>Mirta:</strong> Página de perfil y navegación</li>
          <li><strong>Lucas:</strong> Consumo de JSON local y API pública</li>
        </ul>
      </section>

      <section>
        <h2>🛠 Organización y herramientas utilizadas</h2>
        <p>Nos organizamos usando las siguientes herramientas:</p>
        <ul>
          <li>✅ Repositorio GitHub para control de versiones</li>
          <li>✅ Ramificación por integrantes para evitar conflictos</li>
          <li>✅ Comunicación mediante WhatsApp/Discord</li>
          <li>✅ Seguimiento con Trello (o tareas internas)</li>
        </ul>
      </section>

      <section>
        <h2>📌 Metodología de trabajo</h2>
        <p>Trabajamos de forma colaborativa utilizando buenas prácticas de desarrollo:</p>
        <ul>
          <li>🔄 Se definieron las tareas y se asignaron según habilidades</li>
          <li>🧪 Se realizaron pruebas locales antes de integrar en la rama principal</li>
          <li>📆 Se respetaron los tiempos de entrega y revisión</li>
        </ul>
      </section>
    </div>
  );
};

export default Bitacora;