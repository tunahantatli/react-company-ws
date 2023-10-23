import React from 'react'
import PortfolioCard from '../components/PortfolioCard'

export default function Portfolio() {
  return (
    <div className='container mx-auto'>
        <div className="mb-6 mt-6">
            <h3 className="text-center font-light text-[32px] uppercase">Our Clients</h3>
        </div>
        <div className="mb-6">
            <PortfolioCard/>
        </div>
    </div>
  )
}
