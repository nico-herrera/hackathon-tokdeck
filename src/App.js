import React from 'react'
import Navbar from './components/Navbar'
import ProfileCards from './pages/ProfileCards';
import './styles/App.css';

function App() {
  return (
    <div className="font-Poppins">
      <Navbar />
      <ProfileCards />
    </div>
  );
}

export default App;
