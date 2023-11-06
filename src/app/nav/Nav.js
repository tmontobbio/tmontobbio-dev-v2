import rocket from "./rocket.png"
import { Link } from "react-scroll"
import { useState, useEffect } from 'react';
import './Nav.css';
import '../App.css';

export default function Nav() {
    const [show, setShow] = useState(true)
    // const [menuVisible, setMenuVisible] = useState(false)

    // const toggleMenuVisible = () => {
    //     setMenuVisible(!menuVisible)
    // }

    // const controlNavBar = () => {
    //     if (window.scrollY > 20) {
    //         setShow(false)
    //         setMenuVisible(false)
    //     } else {
    //         setShow(true)
    //     }
    // }

    // useEffect(() => {
    //     window.addEventListener('scroll', controlNavBar)
    //     return () => {
    //         window.removeEventListener('scroll', controlNavBar)
    //     }
    // }, [])


    return (
        <div id="nav" className={!show && 'show'}>
            <h1>Tyler Montobbio Design</h1>
        </div>
    )
}

{/* <div id="menu">
                <img src={rocket} alt="rocket" onClick={toggleMenuVisible} />
                {menuVisible && <span>
                    <Link to="projects" spy={true} smooth={true} duration={600} onClick={toggleMenuVisible}>
                        <li>Projects</li>
                    </Link>
                    <Link to="about" spy={true} smooth={true} duration={600} onClick={toggleMenuVisible}>
                        <li>About</li>
                    </Link>
                    <Link to="contact" spy={true} smooth={true} duration={600} onClick={toggleMenuVisible}>
                        <li>Contact</li>
                    </Link>
                </span>}
            </div> */}