import Section from "../../../SharedElements/Section/Section";
import ProjectItem from "../ProjectItem/ProjectItem";
import NavItem from "../NavItem/NavItem";
import { v4 as uuidv4 } from 'uuid';
import projectImageFront from '../../../Assets/Images/front.jfif';
import projectImageBack from '../../../Assets/Images/back.jfif';
import './ProjectsMainComponent.css';

const PROJECTS_LIST = [
    {
        id: uuidv4(),
        name: 'project 1',
        desc: 'fffffffffffffff',
        stack: ['vanillajs'],
        imgFront: { src: projectImageFront, alt: 'project-photo-front' },
        imgBack: { src: projectImageBack, alt: 'project-photo-back' }
    },
    {
        id: uuidv4(),
        name: 'project 1',
        desc: 'fffffffffffffff',
        stack: ['react.js', 'angular.js', 'node.js'],
        icon: ['react', 'angular', 'node'],
        imgFront: { src: projectImageFront, alt: 'project-photo-front' },
        imgBack: { src: projectImageBack, alt: 'project-photo-back' }
    },
    {
        id: uuidv4(),
        name: 'project 1',
        desc: 'fffffffffffffff',
        stack: ['redux.js', 'mongodb'],
        icon: ['redux', 'mongo'],
        imgFront: { src: projectImageFront, alt: 'project-photo-front' },
        imgBack: { src: projectImageBack, alt: 'project-photo-back' }
    },
    {
        id: uuidv4(),
        name: 'project 1',
        desc: 'fffffffffffffff',
        stack: ['typescript.js'],
        icon: ['typescript'],
        imgFront: { src: projectImageFront, alt: 'project-photo-front' },
        imgBack: { src: projectImageBack, alt: 'project-photo-back' }
    },
    {
        id: uuidv4(),
        name: 'project 1',
        desc: 'fffffffffffffff',
        stack: ['vanillajs'],
        icon: ['javascript'],
        imgFront: { src: projectImageFront, alt: 'project-photo-front' },
        imgBack: { src: projectImageBack, alt: 'project-photo-back' }
    },
    {
        id: uuidv4(),
        name: 'project 1',
        desc: 'fffffffffffffff',
        stack: ['vanillajs'],
        icon: ['javascript'],
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

    let uniqueStack = [];

    for (let arr of PROJECTS_LIST) {
        for (let stack of arr.stack) {
            if (!uniqueStack.includes(stack)) {
                uniqueStack.push(stack)
            }
        }
    }

    const navlinks = uniqueStack.map(item => (
        <NavItem
            key={uuidv4()}
            name={item}
        />
    ));


    return (
        <Section class='projects'>
            <nav className='projects__nav'>
                <ul className='projects__nav-list'>
                    {navlinks}
                </ul>
            </nav>
            <ul className="projects__list">
                {projects}
            </ul>

        </Section>
    );
}

export default ProjectsMainComponent;