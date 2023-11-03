import './Project.css'

export default function Project({ title, thumbnail, description }) {
    return (
        <div className="project">
            <img src={thumbnail} alt={title + " thumbnail"} />
            <div className="txt-wrapper">
                <h1>{title}</h1>
                <p>{description}</p>
            </div>
        </div>
    )
}