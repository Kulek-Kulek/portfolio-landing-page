import Section from "../../../SharedElements/Section/Section";
import ProjectItem from "../ProjectItem/ProjectItem";
import NavItem from "../NavItem/NavItem";
import { v4 as uuidv4 } from 'uuid';
import github from '../../../Assets/Images/svg/github.svg';
import website from '../../../Assets/Images/svg/website.svg';
import './ProjectsMainComponent.css';

const PROJECTS_LIST = [
    {
        id: uuidv4(),
        name: 'project 1',
        desc: 'fffffffffffffff',
        mainStack: ['vanillajs'],
        stack: ['react', 'node', 'angular', 'typescript', 'javascript'],
        imgFront: 'react',
        gitHub: { href: 'https://www.onet.pl/', name: 'view code', icon: github },
        webpage: { href: 'https://www.wp.pl/', name: 'webpage', icon: website },
    },
    {
        id: uuidv4(),
        name: 'project 2',
        desc: 'fffffffffffffff',
        mainStack: ['react.js', 'angular.js', 'node.js'],
        stack: ['react', 'node', 'angular', 'typescript', 'javascript', 'mongodb', 'redux', 'sass'],
        icon: ['react', 'angular', 'node'],
        imgFront: 'angular',
        gitHub: { href: 'https://www.onet.pl/', name: 'view code', icon: github },
        webpage: { href: 'https://www.wp.pl/', name: 'webpage', icon: website },
    },
    {
        id: uuidv4(),
        name: 'project 3',
        desc: 'fffffffffffffff',
        mainStack: ['redux.js', 'mongodb'],
        stack: ['react', 'node', 'angular', 'typescript', 'javascript', 'mongodb', 'redux', 'sass'],
        icon: ['redux', 'mongo'],
        imgFront: 'typescript',
        gitHub: { href: 'https://www.onet.pl/', name: 'view code', icon: github },
        webpage: { href: 'https://www.wp.pl/', name: 'webpage', icon: website },
    },
    {
        id: uuidv4(),
        name: 'project 3',
        desc: 'fffffffffffffff',
        mainStack: ['typescript.js'],
        stack: ['react', 'node', 'angular', 'typescript', 'javascript', 'mongodb', 'redux', 'sass'],
        icon: ['typescript'],
        imgFront: 'node',
        gitHub: { href: 'https://www.onet.pl/', name: 'view code', icon: github },
        webpage: { href: 'https://www.wp.pl/', name: 'webpage', icon: website },
    },
    {
        id: uuidv4(),
        name: 'project 4',
        desc: 'fffffffffffffff',
        mainStack: ['vanillajs'],
        stack: ['react', 'node', 'angular', 'typescript', 'javascript', 'mongodb', 'redux', 'sass'],
        icon: ['javascript'],
        imgFront: 'react',
        gitHub: { href: 'https://www.onet.pl/', name: 'view code', icon: github },
        webpage: { href: 'https://www.wp.pl/', name: 'webpage', icon: website },
    },
    {
        id: uuidv4(),
        name: 'project 5',
        desc: 'fffffffffffffff',
        mainStack: ['vanillajs'],
        stack: ['react', 'node', 'angular', 'typescript', 'javascript', 'mongodb', 'redux', 'sass'],
        icon: ['javascript'],
        imgFront: 'javascript',
        gitHub: { href: 'https://www.onet.pl/', name: 'view code', icon: github },
        webpage: { href: 'https://www.wp.pl/', name: 'webpage', icon: website },
    },

];

const ProjectsMainComponent = props => {

    const projects = PROJECTS_LIST.map(project => (
        <ProjectItem
            key={project.id}
            name={project.name}
            desc={project.desc}
            stack={project.stack}
            imgFrontSrc={project.imgFront}
            imgFrontAlt={project.imgFront && project.imgFront.alt}
            gitHub={project.gitHub && project.gitHub}
            webpage={project.webpage && project.webpage}
        />
    ));

    let uniqueStack = [];

    for (let arr of PROJECTS_LIST) {
        for (let stack of arr.mainStack) {
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
        <Section class='projects' id='projects'>
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