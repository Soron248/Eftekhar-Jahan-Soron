import React from 'react'
import Pic from "../Home/srn.png"
import "../Home/home.css"
import Footer from '../../Components/Footer'

export default function Home() {
    return (
                <div className="home">
                    <img src={Pic} alt="SORON"/>
                    <p><span>FOLLOW</span>  <i className="fas fa-long-arrow-alt-down"></i>
                    <a href="https://www.facebook.com/profile.php?id=100009207061699" target="_blank" rel="noreferrer">fb</a>
                    <a href="https://github.com/Soron248" target="_blank" rel="noreferrer">git</a>
                    <a href="https://www.instagram.com/iftekharjahansoron/" target="_blank" rel="noreferrer">ig</a></p>
                    <h4>
                        <span>A</span> Web-Dev,<br/>you can better call me Web learner.<br/>I can try to give my best in this field. 
                    </h4>
   
                    <Footer/>
            </div>
    )
}
