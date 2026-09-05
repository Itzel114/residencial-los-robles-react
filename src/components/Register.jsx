import React, { useState } from 'react';
import { padronAutorizado } from './padronMock';

const Register = ({ onRegisterSuccess, switchToLogin }) => {
  const [vivienda, setVivienda] = useState('');
  const [nombre, setNombre] = useState('');
  const [correo, setCorreo] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [mensaje, setMensaje] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    setError('');
    setMensaje('');

    const existeEnPadron = padronAutorizado.some(
      (item) => item.vivienda.toLowerCase() === vivienda.trim().toLowerCase()
    );

    if (!existeEnPadron) {
      setError('El número de vivienda no se encuentra registrado en el padrón autorizado.');
      return;
    }

    const usuariosRegistrados = JSON.parse(localStorage.getItem('usuarios_robles') || '[]');
    const correoExistente = usuariosRegistrados.some((u) => u.correo === correo);

    if (correoExistente) {
      setError('Este correo electrónico ya se encuentra registrado.');
      return;
    }

    const nuevoUsuario = { vivienda, nombre, correo, password };
    usuariosRegistrados.push(nuevoUsuario);
    localStorage.setItem('usuarios_robles', JSON.stringify(usuariosRegistrados));

    setMensaje('¡Registro exitoso! Ya puedes iniciar sesión.');
    setTimeout(() => {
      onRegisterSuccess();
    }, 1500);
  };

  return (
    <div className="card">
      <h2>Registro de Residente</h2>
      <p className="subtitle">Residencial Los Robles - Control de Acceso</p>

      {error && <div className="alert alert-danger">{error}</div>}
      {mensaje && <div className="alert alert-success">{mensaje}</div>}

      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Número de Vivienda (Ej. Robles-104):</label>
          <input
            type="text"
            required
            value={vivienda}
            onChange={(e) => setVivienda(e.target.value)}
            placeholder="Ej. Robles-104"
          />
        </div>

        <div className="form-group">
          <label>Nombre Completo:</label>
          <input
            type="text"
            required
            value={nombre}
            onChange={(e) => setNombre(e.target.value)}
            placeholder="Tu nombre completo"
          />
        </div>

        <div className="form-group">
          <label>Correo Electrónico:</label>
          <input
            type="email"
            required
            value={correo}
            onChange={(e) => setCorreo(e.target.value)}
            placeholder="correo@ejemplo.com"
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

        <button type="submit" className="btn-primary">Registrarse</button>
      </form>

      <p className="switch-text">
        ¿Ya tienes cuenta?{' '}
        <span onClick={switchToLogin} className="link">Inicia sesión aquí</span>
      </p>
    </div>
  );
};

export default Register;
