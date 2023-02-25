import React from 'react'
import "./Contact.css"
import Navbar from '../../components/Navbar/Navbar'
import Footer from './../../components/Footer/Footer'

function Contact() {
    return (
        <div>

            <Navbar />

            <div className='container'>
                <div className='row contact-container'>
                    <div className='col-6 pt-2 contact-card border border-danger'>

                        <p className='contact-name'>Feel Free To Contact Us</p>

                        <form>
                            <label>FULL NAME</label>
                            <br />
                            <input />

                            <br />
                            <label>EMAIL ADDRESS</label>
                            <br />
                            <input />

                            <br />
                            <label>MESSAGE</label>
                            <br />
                            <input />
                        </form>

                        <button className='send-btn'>SEND</button>

                    </div>

                    <div className='col-6 pt-2 border border-danger'>
                        <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d29815.897802405478!2d79.00857360714723!3d20.91283361684357!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sin!4v1677257608188!5m2!1sen!2sin"
                            className='map' height="280px" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade">\
                        </iframe>
                    </div>
                </div>
            </div>

            <Footer />

        </div>
    )
}

export default Contact
