import { useState } from 'react';
import './App.css';
import Navbar from './components/Navbar';
import Login from './pages/Login';

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      {/* <Login></Login> */}
      <Navbar></Navbar>
    </>
  );
}

export default App;
