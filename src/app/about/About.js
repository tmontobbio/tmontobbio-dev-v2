import img1 from "../../img/me1.jpg"
import img3 from "../../img/me3.jpg"
import "./About.css"
import '../App.css';

export default function About() {
    return (
        <div id="about">
            <h1>Hi! I'm Tyler!</h1>
            <div id="img-1" className='img-container'>
                <img src={img1} alt="tyler-portrait" />
            </div>
            <p>Originally an Automotive Technician, my various interests have brought me to wild places during my 15 years of professional work experience. I've created products, served food, and climbed buildings all to complete a days work. Early in my career I attended various college courses to become proficient with machinist tooling and all common welding processes. However, the daily strain on my body would send me in a different direction.  Adventurous and curious, I've spent my life learning about anything and every thing that interests me. My passion for the sciences makes me open to learning in an evironment that is gradually changing over time. As a person of many hobbies, there is no shortage of content to view and new concepts to learn. All of these traits are what led me to pursure programming.</p>
            <div id="img-2" className='img-container'>
                <img src={img3} alt="tyler-portrait" />
            </div>
            <p>Naturally born a problem solver, there are few projects in life I wouldn't attempt.  I built my own camper van that I lived in and traveled for the better part of two years. I've framed, wired, roofed, and finished a shelter that I lived in for a year.  Tools have always been my language, and in code there's no shortage of tools.  I love to fix, build, create and learn.</p>
        </div>
    )
}