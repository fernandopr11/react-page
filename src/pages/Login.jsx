import React from 'react';
import Logo from '../assets/img/logo.jpg';
import Form from '../components/Form';

const loginStyles = {
  body: {
    backgroundColor: '#f0f8ff',
    fontFamily: 'Arial, Helvetica, sans-serif',
    fontSize: '14px',
    color: '#000000',
    margin: '0px',
    padding: '0px',
  },
  contenedor: {
    width: '500px',
    margin: '0 auto',
    padding: '10px',
    marginTop: '125px',
    backgroundColor: '#ffffff',
    border: '1px solid #ccc',
    borderRadius: '5px',
  },
  img: {
    display: 'block',
    marginLeft: 'auto',
    marginRight: 'auto',
    width: '40%',
  },
};

function Login() {
  return (
    <>
      <div style={loginStyles.body}>
        <div style={loginStyles.contenedor}>
          <img src={Logo} alt="logousfq" style={loginStyles.img} />
          <Form />
        </div>
      </div>
    </>
  );
}

export default Login;