import { FaGithub, FaGoogle, FaLinkedinIn } from "react-icons/fa6";
import './Contact.css'
import '../App.css';

export default function Contact() {
    return (
        <div id="contact">
            <FaGithub className="icon" style={{ color: 'white', opacity: '.7', fontSize: '20em' }} />
            <FaGoogle className="icon" style={{ color: 'white', opacity: '.7', fontSize: '20em' }} />
            <FaLinkedinIn className="icon" style={{ color: 'white', opacity: '.7', fontSize: '20em' }} />
        </div>
    )
}