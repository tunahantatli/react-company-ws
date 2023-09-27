import React from 'react'
import HomeCard from '../components/HomeCard'
import PortfolioCard from '../components/PortfolioCard'
import DemoVideo from '../assets/demo.mp4'

export default function Home() {
    return (
        <div className='mt-4 mb-4 container'>
            <section id='home-banner'>
                <img
                    className="h-96 w-full rounded-lg object-cover object-center"
                    src="https://images.unsplash.com/photo-1682407186023-12c70a4a35e0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2832&q=80"
                    alt="nature"
                />
            </section>
            <section id='home-services'><HomeCard /></section>
            <section id='move-up'>
                <img
                    className="h-96 w-full rounded-lg object-cover object-center"
                    src="https://th.bing.com/th/id/R.9acf80b3467cf7f968b09c58776d6e1e?rik=oZH%2ft2ztXSYlEg&pid=ImgRaw&r=0"
                    alt="move-up"
                />
            </section>
            <section id='home-portfolio'>
                <PortfolioCard />
            </section>
            <section
                id='b4'
                className='bg-brown-900 rounded-lg w-full'
            >
                <video className="h-full w-full rounded-lg" controls autoPlay muted>
                    <source src={DemoVideo} type="video/mp4" />
                    Your browser does not support the video tag.
                    you can add your works video
                </video>
            </section>
        </div>
    )
}
