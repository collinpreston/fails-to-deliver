import React from 'react';
import './App.css';
import Home from './components/Home'
import { Routes, Route, Link } from "react-router-dom";

const App = () => {

  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        {/* <Route path="about" element={<About />} />
        <Route path="contact" element={<Contact />} /> */}
      </Routes>
      <footer>
        Made in Rochester, NY
      </footer>
    </div>
  );
}

export default App;