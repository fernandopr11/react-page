import { React, useEffect, useState } from 'react';
import { Link, Route, Router, useRoute } from 'wouter';
import MyCourses from '../pages/MyCourses';
import HomePage from '../pages/HomePage';
import PersonalArea from '../pages/PersonalArea';
import Logo from '../assets/img/logo.jpg';

const navbarStyles = {
  body: {
    fontFamily: 'Arial, sans-serif',
    margin: 0,
    padding: 0,
    backgroundColor: 'red',
  },
  header: {
    display: 'flex',
    justifyContent: 'space-between',
  },
  iconosIzquierda: {
    display: 'flex',
    padding: '5px',
    alignItems: 'center',
  },
  iconosDerecha: {
    display: 'flex',
    padding: '5px',
    alignItems: 'center',
    fontSize: '20px',
  },
  logo: {
    maxHeight: '60px',
  },
  navUl: {
    listStyleType: 'none',
    marginLeft: '20px',
    padding: 0,
    display: 'flex',
  },
  navLi: {
    marginRight: '20px',
  },
    navLink: {
    textDecoration: 'none',
    color: 'black',
    fontWeight: 'bold',
    borderBottom: '2px solid transparent',  // Línea inferior inicial transparente
  },
  navLinkHover: {
    color: '#0e5a7b',
  },
  icon: {
    display: 'flex',
    padding: '10px',
    alignItems: 'right',
    justifyContent: 'flex-end',
  },
  navLinkActive: {
    color: '#0e5a7b',
  },
};

function Navbar() {
  const [matchHomePage] = useRoute('/HomePage');
  const [matchPersonalArea] = useRoute('/PersonalArea');
  const [matchMyCourses] = useRoute('/MyCourses');

  useEffect(() => {
    // Realizar la redirección solo si aún no se ha redirigido
    if (window.location.pathname !== '/HomePage') {
      window.history.replaceState({}, '', '/HomePage');
    }
  }, []);

  return (
    <Router>
      <header style={navbarStyles.header}>
        <div className="iconosIzquierda" style={navbarStyles.iconosIzquierda}>
          <img src={Logo} alt="" style={navbarStyles.logo} />
          <nav>
            <ul style={navbarStyles.navUl}>
              <li style={navbarStyles.navLi}>
                <Link
                  to="/HomePage"
                  style={
                    matchHomePage
                      ? navbarStyles.navLinkActive
                      : navbarStyles.navLink
                  }
                >
                  Página principal
                </Link>
              </li>
              <li style={navbarStyles.navLi}>
                <Link
                  to="/PersonalArea"
                  style={
                    matchPersonalArea
                      ? navbarStyles.navLinkActive
                      : navbarStyles.navLink
                  }
                >
                  Área personal
                </Link>
              </li>
              <li style={navbarStyles.navLi}>
                <Link
                  to="/MyCourses"
                  style={
                    matchMyCourses
                      ? navbarStyles.navLinkActive
                      : navbarStyles.navLink
                  }
                >
                  Mis cursos
                </Link>
              </li>
            </ul>
          </nav>
        </div>

        {/* Íconos de alerta, comentario y perfil de sesión */}
        <div className="iconosDerecha" style={navbarStyles.iconosDerecha}>
          <i className="fa-solid fa-bell" style={navbarStyles.icon}></i>
          <i className="fa-solid fa-comment" style={navbarStyles.icon}></i>
          <i className="fa-solid fa-circle-user" style={navbarStyles.icon}></i>
        </div>
      </header>

      {/* Definición de rutas para los componentes */}
      <Route path="/HomePage" component={HomePage} />
      <Route path="/MyCourses" component={MyCourses} />
      <Route path="/PersonalArea" component={PersonalArea} />
    </Router>
  );
}

export default Navbar;
