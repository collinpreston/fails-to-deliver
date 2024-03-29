import React from 'react';
import './App.css';
import Home from './components/Home'
import NavLogo from './components/NavLogo';
import About from './components/About';
import Footer from './components/Footer'
import Contact from './components/Contact'
import API from './components/API'
import NotFound from './components/NotFound'
import { Routes, Route, useNavigate } from "react-router-dom";
import ReactGA from 'react-ga';

const App = () => {

  const navigate = useNavigate();

  function navigateHome() {
    navigate('/');
  }

  ReactGA.initialize('UA-187028182-4');
  ReactGA.pageview(window.location.pathname + window.location.search);  


  return (
    <div className="App">
      <div id="container">
        <NavLogo customClickEvent={navigateHome}></NavLogo>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="contact" element={<Contact />} />
          <Route path="api" element={<API />} />
          <Route path="/:slug" element={<Home />} />
          <Route path='404' element={<NotFound />} />
          <Route path='*' element={<NotFound />} />
        </Routes>
        <div id="adsense">
          <a target="_blank" href="https://shareasale.com/r.cfm?b=1874396&amp;u=3072230&amp;m=115186&amp;urllink=&amp;afftrack="><img src="https://static.shareasale.com/image/115186/cubetrackernl.jpeg" border="0" /></a>
          {/* <Adsense
            client="ca-pub-2143495609871756"
            slot="7442874197"
            style={{ height: 100 }}
            format=""
          /> */}
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default App;