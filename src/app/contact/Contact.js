import { FaGithub, FaGoogle, FaLinkedinIn } from "react-icons/fa6";
import "./Contact.css"

export default function Contact() {
    return (
        <div id="contact">
            <FaGithub style={{ color: 'white', opacity: '.7', fontSize: '20em' }} />
            <FaGoogle style={{ color: 'white', opacity: '.7', fontSize: '20em' }} />
            <FaLinkedinIn style={{ color: 'white', opacity: '.7', fontSize: '20em' }} />
        </div>
    )
}