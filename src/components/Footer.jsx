import React from 'react';

import Ile from '../assets/img/ileSanFrancisco.png';

const Footer = () => {
  return (
    <footer>
      <div style={footerStyles.container}>
        <div className="contactanos" style={footerStyles.contactanos}>
          <div>
            <p>Contáctanos</p>
            <i className="fa-solid fa-earth-americas"></i>
            <i className="fa-solid fa-phone"></i>
          </div>
          <div>
            <p>Síganos</p>
            <i className="fa-brands fa-facebook"></i>
            <i className="fa-brands fa-instagram"></i>
            <i className="fa-brands fa-whatsapp"></i>
          </div>
        </div>
        <div className="identificacion" style={footerStyles.identificacion}>
          <br />
          <input type="button" value="Contactar con el soporte del sitio" />
          <br />
          <p>
            Usted se ha identificado como PABLO FRANCISCO PUENTE PONCE (Cerrar{' '}
            <br /> <center>sesión)</center>
          </p>
          <p>Políticas de Protección de Datos</p>
          <p>Reiniciar tour para usuario en esta página</p>
        </div>
        <div className="dispositivos" style={footerStyles.dispositivos}>
          <p>Descarga la app para dispositivos móviles</p>
          <div className="iconos" style={footerStyles.iconos}>
            <i className="fa-brands fa-google-play"></i>
            <i className="fa-brands fa-app-store"></i>
          </div>
        </div>
      </div>
      <div className="footer2" style={footerStyles.footer2}>
        <img src={Ile} alt="" width="200" />
      </div>
    </footer>
  );
};

const footerStyles = {
  container: {
    display: 'flex',
    justifyContent: 'space-around',
    alignItems: 'center',
    backgroundColor: '#202021',
    color: '#ccc',
  },
  contactanos: {
    marginLeft: '70px',
  },
  dispositivos: {
    marginRight: '40px',
  },
  identificacion: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    marginLeft: '100px',
  },
  iconos: {
    marginLeft: '120px',
    fontSize: '30px',
  },
  footer2: {
    backgroundColor: '#F6321B',
    color: '#fff',
    textAlign: 'center',
  },
};

export default Footer;
