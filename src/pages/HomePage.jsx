import React from 'react';
import Footer from '../components/Footer';
import Card from '../components/Card';

function HomePage() {
  return (
    <div>
      <main style={homePageStyles.container}>
        <h2 style={homePageStyles.h2}>
          Instituto de Lenguas Extranjeras - USFQ
        </h2>
        <div style={homePageStyles.misCursos}>
          <h4 style={homePageStyles.h4}>Mis Cursos</h4>
          <section style={homePageStyles.section}>
            <Card
              fecha="2021-08-01"
              titulo="GENERAL INTERMEDIATE 4 19H00-21H00 A-DT"
              completado={100}
            />
            <Card
              fecha="2021-08-01"
              titulo="GENERAL ADVANCED 1 19H00-21H00 A-ZQ"
              completado={30}
            />
            <Card
              fecha="2021-08-01"
              titulo="GENERAL ADVANCED 1 19H00-21H00 A-ZQ"
              completado={20}
            />
          </section>
          <center>
            <button style={homePageStyles.button}>Todos los cursos</button>
          </center>
        </div>
      </main>
      <Footer />
    </div>
  );
}

export default HomePage;

const homePageStyles = {
  container: {
    padding: '9px',
    backgroundColor: '#f0f0f0',
  },
  h2: {
    marginLeft: '6%',
  },
  h4: {
    marginLeft: '30px',
    fontSize: '22px',
  },
  misCursos: {
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'space-around',
    marginLeft: '80px',
    marginRight: '80px',
    border: '1px solid #ccc',
    borderRadius: '5px',
    backgroundColor: 'white',
    padding: '20px',
  },
  section: {
    display: 'flex',
    justifyContent: 'space-around',
  },
  button: {
    backgroundColor: '#B7B3B3',
    color: 'black',
    border: 'none',
    borderRadius: '5px',
    marginBottom: '6px',
    padding: '5px',
    cursor: 'pointer',
  },
};
