import React from 'react'
import ServicesCard from '../components/ServicesCard'

export default function Services() {
    return (
        <div className='container mx-auto'>
            <div className="mb-6 mt-6">
                <h3 className="text-center uppercase font-bold text-[27px]">services</h3>
            </div>
            <div className="flex">
                <ServicesCard/>
            </div>
        </div>
    )
}
