import SmallSpacer from '../../components/small-spacer/SmallSpacer';
import './Project.css'

export default function Project({ title, img, description, url }) {

    //testing git push

    return (
        <div className="project">
            <a href={url} target="_blank" rel="noreferrer">
                <img src={img} alt={title + " thumbnail"} />
            </a>
            <div className="txt-wrapper">
                <h1>{title}</h1>
                <SmallSpacer />
                <p>{description}</p>
            </div>
        </div>
    )
}