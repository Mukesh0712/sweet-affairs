import React from "react";
import "./Contact.css";
import Navbar from "../../components/Navbar/Navbar";
import Footer from "./../../components/Footer/Footer";

function Contact() {
    return (
        <div>
            <Navbar />

            <div className="container">
                <div className="row contact-container">
                    <div className="col-6 pt-2 contact-card">
                        <p className="contact-name fw-bold">Feel Free To Contact Us</p>

                        <form>
                            <label>FULL NAME</label>
                            <br />
                            <input className="input-box" placeholder="Mukesh Pimpalkar" type="text" />

                            <br />
                            <label>EMAIL ADDRESS</label>
                            <br />
                            <input
                                className="input-box"
                                type="email"
                                placeholder="abc@gmail.com"
                            />

                            <br />
                            <label>MESSAGE</label>
                            <br />
                            <textarea className="textarea" placeholder="Message" />
                        </form>

                        <button className="send-btn">SEND</button>
                    </div>

                    <div className="col-6 map-container">
                        <iframe
                            src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d29815.897802405478!2d79.00857360714723!3d20.91283361684357!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sin!4v1677257608188!5m2!1sen!2sin"
                            className="map"
                            height="319px"
                            allowfullscreen=""
                            loading="lazy"
                            referrerpolicy="no-referrer-when-downgrade"
                            title="map"
                        >
                        </iframe>
                    </div>

                    <div className="row contact-bottom">
                        <div className="col-3 contact-bottom-icon-desc">
                            <i class="fa-solid fa-location-dot contact-bottom-icon"></i>
                            <p className="contact-bottom-desc">
                                <b>Address: </b>Rengapar Road, Butibori, Nagpur 441108
                            </p>
                        </div>

                        <div className="col-3 contact-bottom-icon-desc">
                            <i class="fa-solid fa-phone contact-bottom-icon"></i>
                            <p className="contact-bottom-desc">
                                <b>Phone: </b>+91 8806862672
                            </p>
                        </div>

                        <div className="col-3 contact-bottom-icon-desc">
                            <i class="fa-solid fa-paper-plane contact-bottom-icon"></i>
                            <p className="contact-bottom-desc">
                                <b>Email: </b>sweetaffairs@gmail.com
                            </p>
                        </div>

                        <div className="col-3 contact-bottom-icon-desc">
                            <i class="fa-solid fa-earth-americas contact-bottom-icon"></i>
                            <p className="contact-bottom-desc">
                                <b>Website: </b>sweetaffairs.com
                            </p>
                        </div>
                    </div>
                </div>
            </div>

            <Footer />
        </div>
    );
}

export default Contact;
