import TylerPortrait from "./tyler-montobbio.jpg"
import "./About.css"

export default function About() {
    return (
        <div id="about">
            <div id='img-container'>
                <img src={TylerPortrait} alt="tyler-portrait" />
            </div>
            <p>Originally an Automotive Technician, my various interests have brought me to wild places during my 15 years of professional work experience. I've created products, served food, and climbed tall buildings all to complete a hard days work. Early in my career I attended many community college courses to become proficient using machinist tooling and every welding process. However, the daily strain on my body would send me in a different direction.  Adventurous and curious, I've spent my life learning about anything and every thing that interests me. My passion for the sciences makes me open to learning in an evironment that is gradually changing over time. As a person of many hobbies, there is no shortage of content to view and concepts to learn. All of these traits are what led me to pursure software engineering.</p>
        </div>
    )
}