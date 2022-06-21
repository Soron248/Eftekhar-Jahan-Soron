import React from 'react'
import "../timeline/edu.css"

export default function Edu() {
    return (
    <div className="container">
        <div className="timeline">
            <ul>
                <li>
                    <h5>Completed 2015-16</h5>
                    <h1>SSC</h1>
                    <p>Progressive Model School,<br/>Mymensingh</p>
                </li>
                <li>
                    <h5>Completed 2017-18</h5>
                    <h1>HSC</h1>
                    <p>Myemnsingh Govt. College</p>
                </li>
                <li>
                    <h5>Ongoing Sep,2018</h5>
                    <h1>BSc in CSE</h1>
                    <p>Daffodil International University,<br/>Dhaka</p>
                </li>
                <li>
                    <h5>Upcoming</h5>
                    <h1>MSc</h1>
                    <p>Still don't think about it </p>
                </li>
            </ul>
        </div>
    </div>
    )
}
