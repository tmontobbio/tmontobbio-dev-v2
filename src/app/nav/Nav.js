import rocket from "./rocket.png"
import { Link } from "react-scroll"
import { useState } from 'react';
import './Nav.css';

export default function Nav() {

    const [navVisible, setNavVisible] = useState(false)
    const toggleNavVisible = () => {
        setNavVisible(!navVisible)
    }

    return (
        <div id="nav">
            <div id="menu">
                <img src={rocket} alt="rocket" onClick={toggleNavVisible} />
                {navVisible && <span>
                    <Link to="projects" spy={true} smooth={true} duration={600} onClick={toggleNavVisible}>
                        <li>Projects</li>
                    </Link>
                    <Link to="about" spy={true} smooth={true} duration={600} onClick={toggleNavVisible}>
                        <li>About</li>
                    </Link>
                    <Link to="contact" spy={true} smooth={true} duration={600} onClick={toggleNavVisible}>
                        <li>Contact</li>
                    </Link>
                </span>}
            </div>
            <h1>Tyler Montobbio</h1>
        </div>
    )
}