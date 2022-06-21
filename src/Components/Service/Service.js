import React from 'react'
import "../Service/service.css"

export default function Service() {
    return (
        <div className="srvc">
            <h1>SERVICES</h1>
            <div className="srvc1">

                <div className="degn">
                <i className="fas fa-desktop"></i>
                <h3>Web Design</h3>
                <p>I do ui/ux design for the website that helps website to get a unique look</p>
                </div>

                <div className="dev">
                <i className="fas fa-code"></i>
                <h3>Web Dev.</h3>
                <p>I also develop the website that will exist dynamically with blazing fast speed</p>
                </div>
                
                <div className="respncv">
                <i className="fas fa-mobile-alt"></i>
                <h3>Wev App</h3>
                <p>I make responsive website and develop mobile application with eye catching ui</p>
                </div>

            </div>
        </div>
    )
}
