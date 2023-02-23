import React from 'react'
import "./Footer.css"

function Footer() {
    return (
        <div className='footer'>

            <div className='row footer-middle-part'>

            </div>

            <div className='row footer-row'>

                <div className='col-3 footer-col'>
                    <p>Sweet Affairs</p>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                </div>

                <div className='col-3 footer-col'>
                    <p>Follow Us</p>
                    <span className='socials'>
                        <h6>GitHub</h6>
                        <h6>LinkedIn</h6>
                        <h6>Facebook</h6>
                        <h6>Twitter</h6>
                        <h6>Instagram</h6>
                    </span>
                </div>

                <div className='col-3 footer-col'>
                    <p>Call Us</p>
                    <p>+91 8806862672</p>
                    <p>+91 9422132156</p>
                </div>

                <div className='col-3 footer-col'>
                    <p>Subscribe to get important Updates</p>
                    <input placeholder='Your E-MAIL' className='text-center rounded border-0 subs-input'/>
                    <input value='SUBSCRIBE' className='text-center rounded border-0 subs-input-2 w-50 text-white'/>
                </div>

            </div>

            <div className='copyright-section row'>
                <p className='col-4'>@2023 Mukesh Pimpalkar. All Rights Reserved</p>
                <p className='col-4'>Privacy Policy</p>
                <p className='col-4'>Terms & Conditions</p>
            </div>
        </div>
    )
}

export default Footer
