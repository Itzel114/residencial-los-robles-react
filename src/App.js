import React, { useState } from 'react';
import Login from './components/Login';
import Register from './components/Register';
import Dashboard from './components/Dashboard';
import './App.css';

function App() {
  const [vista, setVista] = useState('login'); // 'login', 'register', 'dashboard'
  const [usuarioActivo, setUsuarioActivo] = useState(null);

  const handleLoginSuccess = (usuario) => {
    setUsuarioActivo(usuario);
    setVista('dashboard');
  };

  const handleLogout = () => {
    setUsuarioActivo(null);
    setVista('login');
  };

  return (
    <div className="app-container">
      <header className="main-header">
        <h1>Residencial Los Robles</h1>
        <p>Sistema Web de Gestión Comunitaria | Sprint 1</p>
      </header>

      <main className="main-content">
        {vista === 'login' && (
          <Login
            onLoginSuccess={handleLoginSuccess}
            switchToRegister={() => setVista('register')}
          />
        )}

        {vista === 'register' && (
          <Register
            onRegisterSuccess={() => setVista('login')}
            switchToLogin={() => setVista('login')}
          />
        )}

        {vista === 'dashboard' && (
          <Dashboard usuario={usuarioActivo} onLogout={handleLogout} />
        )}
      </main>
    </div>
  );
}

export default App;
