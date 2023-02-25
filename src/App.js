import './App.css';

import { BrowserRouter, Routes, Route, NavLink } from 'react-router-dom';
import { useEffect, useState } from 'react';

// pages
import Home from './pages/Home/Home'
import About from './pages/About/About'
import MakeFrontEnd from './pages/Solutions/MakeFrontEnd/MakeFrontEnd'
import MakeSolutions from './pages/Solutions/MakeSolutions/MakeSolutions'
import Portfolio from './pages/Portfolio/Portfolio'
import FrontEnd from './pages/Portfolio/PortfolioFrontEnd/FrontEnd';
import Contact from './pages/Contact/Contact'
import NotFound from './pages/NotFound/NotFound'

// components
import Navbar from './components/Header/Navbar'
import NavbarMobile from './components/Header/NavbarMobile';
import Footer from './components/Footer/Footer'

import AOS from 'aos';
import 'aos/dist/aos.css';
AOS.init();

function App() {

  // header
  const [blackHeader, setBlackHeader] = useState(false)

  useEffect(() => {
    const scrollListener = () => {
      if(window.scrollY > 10) {
        setBlackHeader(true)
      } else {
        setBlackHeader(false)
      }
    }

    window.addEventListener('scroll', scrollListener)

    return () => {
      window.addEventListener('scroll', scrollListener)
    }
  }, [])

  return (
    <div className="App">
      <BrowserRouter>
        <NavbarMobile black={blackHeader}/>
        <Navbar black={blackHeader}/>
        <div className="container">
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/sobre-nos' element={<About />} />
            <Route path='/make-frontend' element={<MakeFrontEnd />} />
            <Route path='/lancamentos' element={<MakeSolutions />} />
            <Route path='/portfolio' element={<Portfolio />} />
            <Route path='/front-end' element={<FrontEnd />} />
            <Route path='/contato' element={<Contact />} />
            <Route path='*' element={<NotFound />} />
          </Routes>
        </div>
        <div className='whatsapp'>
          <NavLink href="https://api.whatsapp.com/send?phone=5534999954606" target='_blank'>
            <img
              src="/whatsapp.png" 
              alt="" 
              data-aos="fade-in"
              data-aos-once="true"
            />
          </NavLink>
        </div>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
