import React from 'react';
import Footer from '../components/Footer';
import FilterCalendarSection from '../components/FilterCalendarSection';
import CalendarioHeader from '../components/CalendarioHeader';
import { Calendar, momentLocalizer } from 'react-big-calendar';
import moment from 'moment';

function PersonalArea() {
  return (
    <div>
      <main style={personalAreaStyles.container}>
        <h2 style={personalAreaStyles.h2}>Area Personal</h2>
        <div style={personalAreaStyles.misCursos}>
          <h4 style={personalAreaStyles.h4}>Linea de Tiempo</h4>
          <FilterCalendarSection />
          <CalendarioHeader />
          <div>
            <Calendar
              localizer={localizer}
              startAccessor="start"
              endAccessor="end"
              style={{ height: 500 }}
            />
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}

export default PersonalArea;

const localizer = momentLocalizer(moment);

const personalAreaStyles = {
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
  },
};
