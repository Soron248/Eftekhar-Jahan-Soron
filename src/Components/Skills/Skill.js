import React from 'react'
import "../Skills/skill.css"

export default function Skill() {
    return (
        <div className="skill">
            <div className="text">
                <p>Some skills of mine</p>
                <h1>My Skills</h1>
            </div>
            <div className="skills">

                <div className="info">
                <h3>Front-End   <span className="inf">i</span></h3>
                <p>Html, Css, Bootstrap, Sass<br/>vanilla js, jquery, React js</p>
                </div>

                <div className="info">
                <h3>Back-End   <span className="inf">i</span></h3>
                <p>Node js, Express js, PHP, Laravel</p>
                </div>

                <div className="info">
                <h3>Database   <span className="inf">i</span></h3>
                <p>Mysql, Mongodb</p>
                </div>

            </div>
        </div>
    )
}
