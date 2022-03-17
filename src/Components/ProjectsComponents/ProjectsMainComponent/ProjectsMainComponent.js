import Section from "../../../SharedElements/Section/Section";
import ProjectItem from "../ProjectItem/ProjectItem";
import { v4 as uuidv4 } from 'uuid';
import projectImageFront from '../../../Assets/Images/front.jfif';
import projectImageBack from '../../../Assets/Images/back.jfif';
import './ProjectsMainComponent.css';

const PROJECTS_LIST = [
    {
        id: uuidv4(),
        name: 'project 1',
        desc: 'fffffffffffffff',
        stack: ['vanillajs', 'oop', 'games'],
        imgFront: { src: projectImageFront, alt: 'project-photo-front' },
        imgBack: { src: projectImageBack, alt: 'project-photo-back' }
    },
    {
        id: uuidv4(),
        name: 'project 1',
        desc: 'fffffffffffffff',
        stack: ['vanillajs', 'oop', 'games'],
        imgFront: { src: projectImageFront, alt: 'project-photo-front' },
        imgBack: { src: projectImageBack, alt: 'project-photo-back' }
    },
    {
        id: uuidv4(),
        name: 'project 1',
        desc: 'fffffffffffffff',
        stack: ['vanillajs', 'oop', 'games'],
        imgFront: { src: projectImageFront, alt: 'project-photo-front' },
        imgBack: { src: projectImageBack, alt: 'project-photo-back' }
    },
    {
        id: uuidv4(),
        name: 'project 1',
        desc: 'fffffffffffffff',
        stack: ['vanillajs', 'oop', 'games'],
        imgFront: { src: projectImageFront, alt: 'project-photo-front' },
        imgBack: { src: projectImageBack, alt: 'project-photo-back' }
    },
    {
        id: uuidv4(),
        name: 'project 1',
        desc: 'fffffffffffffff',
        stack: ['vanillajs', 'oop', 'games'],
        imgFront: { src: projectImageFront, alt: 'project-photo-front' },
        imgBack: { src: projectImageBack, alt: 'project-photo-back' }
    },
    {
        id: uuidv4(),
        name: 'project 1',
        desc: 'fffffffffffffff',
        stack: ['vanillajs', 'oop', 'games'],
        imgFront: { src: projectImageFront, alt: 'project-photo-front' },
        imgBack: { src: projectImageBack, alt: 'project-photo-back' }
    },

];

const ProjectsMainComponent = props => {

    const projects = PROJECTS_LIST.map(project => (
        <ProjectItem
            key={project.id}
            name={project.name}
            desc={project.desc}
            stack={project.stack}
            imgFrontSrc={project.imgFront && project.imgFront.src}
            imgBackSrc={project.imgBack && project.imgBack.src}
            imgFrontAlt={project.imgFront && project.imgFront.alt}
            imgBackAlt={project.imgBack && project.imgBack.alt}
        />
    ));



    return (
        <Section class='projects'>
            <ul className="projects__list">
                {projects}
            </ul>

        </Section>
    );
}

export default ProjectsMainComponent;