import React, { useState } from 'react';
import vetImage from './vet.png';

function Login() {
  const [isLoginActive, setIsLoginActive] = useState(true);

  function SwitchContent() {
    setIsLoginActive(!isLoginActive);
  }

  return (
    <div className={`content justify-content-center align-items-center d-flex shadow-lg ${isLoginActive ? "" : "active"}`} id="content">
      {/*---Formulario de registro---*/}
      <div className={`col-md-6 d-flex justify-content-center ${!isLoginActive ? 'active' : 'inactive'}`}>
  <form>
    <div className='header-text mb-4 text-center'> {/* Añadido 'text-center' para centrar el contenido */}
      <div className='icon-container'>
        <i className="fa-solid fa-user-plus" style={{ fontSize: '40px', color: '#fff' }}></i>
      </div>
      <h1>Crear Cuenta</h1>
    </div>
    <div className='input-group mb-4'>
      <input type='text' placeholder='Primer nombre' className='form-control form-control-lg bg-light fs-6' />
    </div>
    <div className='input-group mb-4'>
      <input type='text' placeholder='Segundo nombre' className='form-control form-control-lg bg-light fs-6' />
    </div>
    <div className='input-group mb-4'>
      <input type='text' placeholder='Primer apellido' className='form-control form-control-lg bg-light fs-6' />
    </div>
    <div className='input-group mb-4'>
      <input type='text' placeholder='Segundo apellido' className='form-control form-control-lg bg-light fs-6' />
    </div>
    <div className='input-group mb-4'>
      <input type='text' placeholder='Número de teléfono' className='form-control form-control-lg bg-light fs-6' />
    </div>
    <div className='input-group mb-4'>
      <input type='email' placeholder='Correo' className='form-control form-control-lg bg-light fs-6' />
    </div>
    <div className='input-group mb-4'>
      <input type='password' placeholder='Contraseña' className='form-control form-control-lg bg-light fs-6' />
    </div>
    <div className='input-group mb-3 justify-content-center'>
      <button className='btn border-#fff text-#2c6b6b w-55 fs-6'>Regístrate</button>
    </div>
  </form>
</div>


      {/*---Formulario de inicio de sesión---*/}
      <div className={`col-md-6 right-box ${isLoginActive ? 'active' : 'inactive'}`}>
        <form>
          <div className='header-text mb-4'>
          <div className='icon-container'>
            <i className="fa-solid fa-right-to-bracket" style={{ fontSize: '40px', color: '#fff' }}></i>
          </div>
            <h1>Iniciar Sesión</h1>
          </div>
        </form>
        <div className='input-group mb-3'>
          <input type='email' placeholder='Correo' className='form-control form-control-lg bg-light fs-6' />
        </div>
        <div className='input-group mb-3'>
          <input type='password' placeholder='Contraseña' className='form-control form-control-lg bg-light fs-6' />
        </div>
        <div className='input-group mb-5 d-flex justify-content-between'>
          <div className='form-check'>
            <input type='checkbox' className='form-check-input' />
            <label htmlFor='formcheck' className='form-check-label'>
              <small>Recuérdame</small>
            </label>
          </div>
          <div className='forgot'>
            <small><a href='/'>¿Olvidaste tu contraseña?</a></small>
          </div>
        </div>
        <div className='input-group mb-3 justify-content-center'>
          <button className='btn border-#2c6b6b text-#2c6b6b w-50 fs-6'>Iniciar Sesión</button>
        </div>
      </div>

      {/*--switch--*/}
      <div className='switch-content'>
        <div className='switch'>
          <div className='switch-panel switch-left'>
          <img src={vetImage} alt="Imagen de Bienvenida" className="welcome-img" />
            <h1>¡Hola de nuevo!</h1>
            <p>Inicia sesión ahora. ¡El bienestar de tu mejor amigo comienza aquí!</p>
            <button className='hidden btn border-#2c6b6b text-#2c6b6b w-50 fs-6' id='login' onClick={SwitchContent}>
              Iniciar Sesión
            </button>
            <div className='location'>
              <i className="fa-solid fa-location-dot" style={{ marginRight: '8px' }}></i>
              Las Lajas, Comayagua.
            </div>
          </div>
          <div className='switch-panel switch-right'>
          <img src={vetImage} alt="Imagen de Bienvenida" className="welcome-img" />
            <h1>¡Bienvenido!</h1>
            <p>Regístrate ahora y accede a todos nuestros servicios para el cuidado de tus mascotas de forma fácil y rápida.</p>
            <button className='hidden btn border-#2c6b6b text-#2c6b6b w-50 fs-6' id='register' onClick={SwitchContent}>
              Registrate
            </button>
            <div className='location'>
            <i className="fa-solid fa-location-dot" style={{ marginRight: '8px' }}></i>
              Las Lajas, Comayagua.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;