import { FaGithub, FaGoogle, FaLinkedinIn } from "react-icons/fa6";
import './Contact.css'
import '../App.css';

export default function Contact() {
    return (
        <div id="contact">
            <a href="https://github.com/tmontobbio" target="_blank" rel="noreferrer">
                <FaGithub className="icon" style={{ color: 'white', opacity: '.7', fontSize: '20em' }} />
            </a>
            <a href="mailto:tylermontobbio@gmail.com" target="_blank" rel="noreferrer">
                <FaGoogle className="icon" style={{ color: 'white', opacity: '.7', fontSize: '20em' }} />
            </a>
            <a href="https://www.linkedin.com/in/tmontobbio" target="_blank" rel="noreferrer">
                <FaLinkedinIn className="icon" style={{ color: 'white', opacity: '.7', fontSize: '20em' }} />
            </a>
        </div>
    )
}