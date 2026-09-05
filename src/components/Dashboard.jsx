import React from 'react';

const Dashboard = ({ usuario, onLogout }) => {
  return (
    <div className="card dashboard-card">
      <h2>¡Bienvenido/a, {usuario.nombre}!</h2>
      <p className="vivienda-badge">Vivienda: <strong>{usuario.vivienda}</strong></p>
      
      <div className="info-box">
        <h3>Estado del Sistema (Sprint 1 Concluido)</h3>
        <ul>
          <li>✅ Base de datos / Padrón activo</li>
          <li>✅ Módulo de registro validado</li>
          <li>✅ Autenticación y acceso seguro activo</li>
        </ul>
      </div>

      <button onClick={onLogout} className="btn-secondary">Cerrar Sesión</button>
    </div>
  );
};

export default Dashboard;
