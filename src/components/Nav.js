import rocket from "../img/rocket.png"
import { Link } from "react-scroll"
import { useState } from 'react';

export default function Nav() {

    const [navVisible, setNavVisible] = useState(false)
    const toggleNavVisible = () => {
        setNavVisible(!navVisible)
    }

    return (
        <div id="nav">
            <h1>Tyler Montobbio</h1>
            <div className="spacer" />
            <div id="menu">
                <img src={rocket} alt="rocket" onClick={toggleNavVisible} />
                {navVisible && <span>
                    <Link to="home" spy={true} smooth={true} duration={900} onClick={toggleNavVisible}>
                        <li>Home</li>
                    </Link>
                    <Link to="about" spy={true} smooth={true} duration={900} onClick={toggleNavVisible}>
                        <li>About</li>
                    </Link>
                    <Link to="projects" spy={true} smooth={true} duration={900} onClick={toggleNavVisible}>
                        <li>Projects</li>
                    </Link>
                    <Link to="contact" spy={true} smooth={true} duration={900} onClick={toggleNavVisible}>
                        <li>Contact</li>
                    </Link>
                </span>}
            </div>
        </div>
    )
}