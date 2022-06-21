import React from 'react'
import Project from '../../Components/Projects/Project'
import Skill from '../../Components/Skills/Skill'
import Footer from '../../Components/Footer'
import "../Work/work.css"


export default function Work() {
    return (
        <div className="work">
            <div>
            <Skill/>
            <Project/>
            </div>


        <Footer/>
        </div>
    )
}
