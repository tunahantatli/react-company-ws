import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import { StickyNavbar } from './components/StickyNavbar';
import { Footer } from './components/Footer';
export default function App() {
  return (
    <div className='overflow-x-hidden'>
      <BrowserRouter>
        <StickyNavbar />
        <Routes>
          <Route path='/'>
            <Route index element={<Home />} />
          </Route>
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  )
}
