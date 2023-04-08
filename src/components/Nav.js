import rocket from "../img/rocket.png"
import { useState } from 'react';

export default function Nav() {

    const [navVisible, setNavVisible] = useState(false)
    const toggleNavVisible = () => {
        setNavVisible(!navVisible)
    }

    return (
        <div id="nav">
            <h1>Tyler Montobbio</h1>
            <span>
                {navVisible && <span>
                    <li>Home</li>
                    <li>About</li>
                    <li>Projects</li>
                    <li>Contact</li>
                </span>}
                <img src={rocket} alt="rocket" onClick={toggleNavVisible} />
            </span>
        </div>
    )
}