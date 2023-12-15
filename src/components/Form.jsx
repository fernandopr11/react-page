import React from 'react';

function LoginForm() {
  return (
    <>
      <form action="">
        <input type="text" name="user" id="user" placeholder="Usuario"></input>
        <input
          type="password"
          name="pass"
          id="pass"
          placeholder="Contraseña"
        ></input>
        <button type="submit" href="paginaprincipal.html">
          Acceder
        </button>
        <br />
        <br />
        <a href="">Ha olvidado contraseña?</a>
        <br />
        <div className="IdiomaAviso">
          <select name="idioma" id="idioma">
            <option value="es">Español</option>
            <option value="en">Inglés</option>
            <option value="fr">Francés</option>
          </select>
          <p>Aviso de Cookies</p>
        </div>
      </form>
    </>
  );
}

export default LoginForm;
