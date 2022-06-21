import React, { useEffect, useState } from 'react'
import "../Projects/project.css"
import ProjectInfo from '../../Components/ProjectInfo/ProjectInfo'

export default function Project() {

    const [Pinfo, setPinfo] = useState(ProjectInfo)
    const [srchText, setsrchText] = useState('')

    const handleOnChange= (e)=> {
        e.preventDefault();
        setsrchText(e.target.value);
        if (!e.target.value.length > 0) {
            setPinfo(ProjectInfo);
        }
    }
    
    useEffect(() => {
        if(srchText === '') return;
        setPinfo(()=>
            ProjectInfo.filter( (Pinfo) =>              
            Pinfo.title.toLowerCase().match(srchText.toLowerCase())
            )
        );
    }, [srchText])




    return (
        <div className="project">

            <div className="ptitle">
                <p>Some projects here</p>
                <h1>PROJECTS</h1>
            </div>

            <div className="srchbar">
                <input type="text" value={srchText} onChange={handleOnChange} placeholder="Search Project" />
                <i className="fas fa-search"></i>
            </div>
            <div className="pbox">
            {
            Pinfo.map( (Pinfo) =>
            
                <div className="pinfo" key={Pinfo.id}>
                <a href={Pinfo.link} target="blank" rel="noreferrer"><img src={Pinfo.image} alt="Project Pic"/></a>
                <div className="pinfoText">
                    <h2>{Pinfo.title}</h2>
                    <p>{Pinfo.desc}</p>
                </div>
                </div>

            )}
            
            </div>
            <a href="https://github.com/Soron248?tab=repositories" target="_blank" rel="noreferrer" className="btn1 btn2">GET MORE ON  <i className="fab fa-github"></i></a>
            

        </div>
    )
}
