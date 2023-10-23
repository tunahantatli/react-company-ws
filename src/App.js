import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import { StickyNavbar } from './components/StickyNavbar';
import { Footer } from './components/Footer';
import About from './pages/About';
import Services from './pages/Services';
import Portfolio from './pages/Portfolio';
export default function App() {
  return (
    <div className='overflow-x-hidden'>
      <BrowserRouter>
        <StickyNavbar />
        <Routes>
          <Route path='/'>
            <Route index element={<Home />} />
            <Route path='about-us' element={<About />} />
            <Route path='services' element={<Services />} />
            <Route path='portfolio' element={<Portfolio/>} />
          </Route>
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  )
}
