import React from 'react';
import Card from '../components/Card';
import Footer from '../components/Footer';
import FilterSection from '../components/FilterSection';

function MyCourses() {
  return (
    <div>
      <main style={myCoursesStyles.container}>
        <h2 style={myCoursesStyles.h2}>
           Mis cursos
        </h2>
        <div style={myCoursesStyles.misCursos}>
          <h4 style={myCoursesStyles.h4}>Vista General de curso</h4>
          <hr style={myCoursesStyles.hr}/>
          <FilterSection />
          <section style={myCoursesStyles.section}>
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
            <button style={myCoursesStyles.button}>Todos los cursos</button>
          </center>
        </div>
      </main>
      <Footer />
    </div>
  );
}

export default MyCourses;

const myCoursesStyles = {
  container: {
    padding: '9px',
    backgroundColor: '#f0f0f0',
  },
  h2: {
    marginLeft: '5%',
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
  hr: {
    width: '100%',
    height: '1px',
    backgroundColor: '#ccc',
    border: 'none',
    margin: '15px 0px',
  }
};
