import './App.css';
import Home from './components/Home'
import NavLogo from './components/NavLogo';
import About from './components/About';
import Footer from './components/Footer'
import Contact from './components/Contact'
import API from './components/API'
import NotFound from './components/NotFound'
import { Routes, Route, useNavigate } from "react-router-dom";
import { Adsense } from '@ctrl/react-adsense';

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
        <Route path="contact" element={<Contact />} />
        <Route path="api" element={<API />} />
        <Route path='*' element={<NotFound />} />
      </Routes>
      <Adsense
        client="ca-pub-2143495609871756"
        slot="7442874197"
      />
      <Footer />
    </div>
  );
}

export default App;