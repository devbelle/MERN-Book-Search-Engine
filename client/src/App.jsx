import './App.css';
import { Outlet } from 'react-router-dom';

import Navbar from './components/Navbar';

//have to add apollo providor. 
function App() {
  return (
    <>
      <Navbar />
      <Outlet />
    </>
  );
}

export default App;
