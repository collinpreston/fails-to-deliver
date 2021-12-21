import React from 'react';
import './App.css';
import Home from './components/Home'
import NavLogo from './components/NavLogo';
import { Routes, Route, Link, useNavigate } from "react-router-dom";

const App = () => {
  const navigate = useNavigate();

  function navigateHome() {
    navigate('/');
  }


  return (
    <div className="App">
      <NavLogo customClickEvent={navigateHome}></NavLogo>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="about" element={<About />} />
        {/* <Route path="contact" element={<Contact />} /> */}
      </Routes>
      <footer>
        Made in Rochester, NY
      </footer>
    </div>
  );
}

export default App;