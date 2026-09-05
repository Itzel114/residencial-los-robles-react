import React, { useState } from 'react';

const Login = ({ onLoginSuccess, switchToRegister }) => {
  const [correo, setCorreo] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleLogin = (e) => {
    e.preventDefault();
    setError('');

    const usuarios = JSON.parse(localStorage.getItem('usuarios_robles') || '[]');
    const usuarioValido = usuarios.find(
      (u) => u.correo === correo && u.password === password
    );

    if (usuarioValido) {
      onLoginSuccess(usuarioValido);
    } else {
      setError('Correo o contraseña incorrectos, o el usuario no está registrado.');
    }
  };

  return (
    <div className="card">
      <h2>Iniciar Sesión</h2>
      <p className="subtitle">Sistema de Gestión Comunitaria - Los Robles</p>

      {error && <div className="alert alert-danger">{error}</div>}

      <form onSubmit={handleLogin}>
        <div className="form-group">
          <label>Correo Electrónico:</label>
          <input
            type="email"
            required
            value={correo}
            onChange={(e) => setCorreo(e.target.value)}
            placeholder="tu-correo@ejemplo.com"
          />
        </div>

        <div className="form-group">
          <label>Contraseña:</label>
          <input
            type="password"
            required
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="********"
          />
        </div>

        <button type="submit" className="btn-primary">Ingresar al Sistema</button>
      </form>

      <p className="switch-text">
        ¿No tienes cuenta?{' '}
        <span onClick={switchToRegister} className="link">Regístrate aquí</span>
      </p>
    </div>
  );
};

export default Login;
