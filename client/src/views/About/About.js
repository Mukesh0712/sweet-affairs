import React from 'react'
import "./About.css"
import Navbar from '../../components/Navbar/Navbar'
import Footer from './../../components/Footer/Footer'

function About() {
    return (
        <div>
            <Navbar />

            <div className='container'>
                <div className='row about-container'>
                    <div className='col-6 pt-3'>
                        <p className='welcome'>WELCOME TO</p>
                        <p className='name'>Sweet Affairs</p>
                        <p className='description'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi, voluptatibus. Enim, sapiente velit cupiditate voluptatem, placeat ipsa quidem sint ratione non mollitia.</p>
                        <button className='order-btn'>ORDER NOW</button>
                    </div>
                    <div className='col-6 pt-3'>
                        <img alt='rest-img' src='https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8cmVzdGF1cmFudHxlbnwwfDB8MHx8&auto=format&fit=crop&w=400&q=60' className='w-100 rest-img' />
                    </div>
                </div>
            </div>

            <Footer />

        </div>
    )
}

export default About
