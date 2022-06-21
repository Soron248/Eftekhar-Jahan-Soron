import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import "../Components/nav.css";

export default function NavMenu() {
    const [showNav, setshowNav] = useState(false);
    return (
        <div className="nav">
             <div className="openMenu"
            onClick={()=> setshowNav(!showNav)}
            >
            <i className="fas fa-bars"></i>
            </div>
            <ul className={!showNav ? 'hideNav' : '0'}>
                
                <li>
                    <Link to="/"  onClick={()=> setshowNav(!showNav)}>Home</Link>
                </li>
                <li>
                    <Link to="/about" onClick={()=> setshowNav(!showNav)}>About</Link>
                </li>
                <li>
                    <Link to="/work" onClick={()=> setshowNav(!showNav)}>Work</Link>
                </li>
                <li>
                    <Link to="/contact" onClick={()=> setshowNav(!showNav)}>Contact</Link>
                </li>
                <div className="closeMenu"
            onClick={()=> setshowNav(!showNav)} 
            >
            <i className="fas fa-times"></i>
            </div>
            </ul>
        </div>
    )
}
