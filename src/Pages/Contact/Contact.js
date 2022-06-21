import React from 'react'
import Footer from '../../Components/Footer'
import "../Contact/contact.css"

export default function Contact() {
    return (
        <div className="contact">
            <div className="container">

                <div className="contactInfo">
                    <div className="Ctitle">
                        <p>Get in touch</p>
                        <h1>CONTACT</h1>
                    </div>

                    <div className="Cinfo">
                    <div className="link lnk1"><i className="fas fa-phone-alt"></i><a href="tel:+8801752281870" target="_blank" rel="noreferrer">+8801752281870</a></div>
                    <div className="link lnk2"><i className="fas fa-envelope"></i><a href="mailto:iftekhar.soron@gmail.com" target="_blank" rel="noreferrer">iftekhar.soron@gmail.com</a></div>
                    </div>
                </div>

                <div className="location">
                    <div className="locTag">
                        <h3>Here I am,</h3>
                        <p>Mymensingh,Bangladesh<br/>
                        <a href="https://goo.gl/maps/8CUifbVU56vYJdkc6" target="_blank" rel="noreferrer">view location</a></p>
                    </div>
                </div>

            </div>

            <Footer/>
        </div>
    )
}
