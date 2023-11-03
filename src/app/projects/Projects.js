import Project from './project/Project';
import './Projects.css'
import '../App.css';

export default function Projects() {
    const projects = [
        {
            title: "App1",
            thumbnail: "https://t4.ftcdn.net/jpg/01/67/52/13/360_F_167521380_F40YHStu2kBFvUVqSNutzR5qCy48v4m0.jpg",
            description: "A Really neato project, A Really neato project, A Really neato project, A Really neato project,A Really neato project, A Really neato project, A Really neato project, A Really neato project"
        },
        {
            title: "App2",
            thumbnail: "https://hiddenpondlabradors.com/wp-content/uploads/2015/10/sept172110.jpg",
            description: "A Really neato project, A Really neato project, A Really neato project, A Really neato project,A Really neato project, A Really neato project, A Really neato project, A Really neato project"
        },
        {
            title: "App3",
            thumbnail: "https://t4.ftcdn.net/jpg/01/67/52/13/360_F_167521380_F40YHStu2kBFvUVqSNutzR5qCy48v4m0.jpg",
            description: "A Really neato project, A Really neato project, A Really neato project, A Really neato project,A Really neato project, A Really neato project, A Really neato project, A Really neato project"
        },
        {
            title: "App4",
            thumbnail: "https://hiddenpondlabradors.com/wp-content/uploads/2015/10/sept172110.jpg",
            description: "A Really neato project, A Really neato project, A Really neato project, A Really neato project,A Really neato project, A Really neato project, A Really neato project, A Really neato project"
        },
    ]


    return (
        <div id="projects">
            {projects && projects.map((p) => {
                return (
                    <Project title={p.title} thumbnail={p.thumbnail} description={p.description} />
                )
            })}
        </div>
    )
}