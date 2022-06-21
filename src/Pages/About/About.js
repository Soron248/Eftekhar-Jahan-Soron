import React from 'react'
import Footer from '../../Components/Footer'
import Service from '../../Components/Service/Service'
import Edu from '../../Components/timeline/Edu'
import "../About/about.css"
import Pic1 from "../About/AboutPic/srn1.jpg"
import Pic2 from "../About/AboutPic/srn2.jpg"
import Pic3 from "../About/AboutPic/srn3.jpg"

export default function About() {
    return (
        <div className="about">


            <section className="describe">
                <div className="title">
                    <p>Let me <span>describe</span>,</p>
                    <h1>Regarding Myself</h1>
                    <p>I am a designer and developer from Mymensing <i className="fas fa-map-marker-alt"></i>, Bangladesh.I like to learn and try to show my best in my work.I love creativity and try to show unique work to my client through my job</p>
                    <a href="#" className="btn1">VIEW CV</a>
                </div>
                <div className="pic">
                    <img src={Pic1} alt="SORON" />
                    <img src={Pic2} alt="SORON" />
                    <img src={Pic3} alt="SORON" />
                </div>
            </section>
            

            <section className="education">
                    <h1 className="head1">Education Path</h1>
                    <Edu/>                    
            </section>


            <section className="service">
                <Service/>
            </section>
            
        <Footer/>
        </div>
    )
}
