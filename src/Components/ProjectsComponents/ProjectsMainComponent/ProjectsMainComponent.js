import { useNavigate, useLocation } from 'react-router-dom';

import Section from "../../../SharedElements/Section/Section";
import ProjectItem from "../ProjectItem/ProjectItem";
import NavItem from "../NavItem/NavItem";
import SVGIcon from '../../../SharedElements/SVGIcon/SVGIcon';
import { v4 as uuidv4 } from 'uuid';
import github from '../../../Assets/Images/svg/github.svg';
import website from '../../../Assets/Images/svg/website.svg';
import './ProjectsMainComponent.css';

const PROJECTS_LIST = [
    {
        id: uuidv4(),
        name: 'project 1',
        desc: 'Ea sint nulla consequat id ex voluptate in Lorem excepteur elit ex cillum enim. Labore duis mollit do labore nostrud sit. Aliqua ullamco aliqua ipsum anim occaecat amet dolor sint cupidatat.   In sunt ullamco culpa duis veniam Lorem eiusmod eu velit esse. Nostrud sunt adipisicing laboris ut id nulla dolor elit elit occaecat. Irure adipisicing Lorem anim excepteur aute officia ipsum fugiat. Adipisicing esse quis duis laborum id ut sint ea aute et sit.',
        mainStack: 'javascript.js',
        stack: ['react', 'node', 'typescript', 'javascript'],
        imgFront: 'react',
        gitHub: { href: 'https://www.onet.pl/', name: 'view code', icon: github },
        webpage: { href: 'https://www.wp.pl/', name: 'webpage', icon: website },
    },
    {
        id: uuidv4(),
        name: 'project 2',
        desc: 'Ea sint nulla consequat id ex voluptate in Lorem excepteur elit ex cillum enim. Labore duis mollit do labore nostrud sit. Aliqua ullamco aliqua ipsum anim occaecat amet dolor sint cupidatat.   In sunt ullamco culpa duis veniam Lorem eiusmod eu velit esse. Nostrud sunt adipisicing laboris ut id nulla dolor elit elit occaecat. Irure adipisicing Lorem anim excepteur aute officia ipsum fugiat. Adipisicing esse quis duis laborum id ut sint ea aute et sit.',
        mainStack: ['react.js'],
        stack: ['node', 'typescript', 'javascript', 'mongodb', 'redux'],
        // icon: ['react', 'angular', 'node'],
        imgFront: 'angular',
        gitHub: { href: 'https://www.onet.pl/', name: 'view code', icon: github },
        webpage: { href: 'https://www.wp.pl/', name: 'webpage', icon: website },
    },
    {
        id: uuidv4(),
        name: 'project 3',
        desc: 'Ea sint nulla consequat id ex voluptate in Lorem excepteur elit ex cillum enim. Labore duis mollit do labore nostrud sit. Aliqua ullamco aliqua ipsum anim occaecat amet dolor sint cupidatat.   In sunt ullamco culpa duis veniam Lorem eiusmod eu velit esse. Nostrud sunt adipisicing laboris ut id nulla dolor elit elit occaecat. Irure adipisicing Lorem anim excepteur aute officia ipsum fugiat. Adipisicing esse quis duis laborum id ut sint ea aute et sit.',
        mainStack: 'redux.js',
        stack: ['typescript', 'javascript'],
        // icon: ['redux', 'mongo'],
        imgFront: 'typescript',
        gitHub: { href: 'https://www.onet.pl/', name: 'view code', icon: github },
        webpage: { href: 'https://www.wp.pl/', name: 'webpage', icon: website },
    },
    {
        id: uuidv4(),
        name: 'project 3',
        desc: 'fffffffffffffff',
        mainStack: 'typescript',
        stack: ['javascript', 'mongodb', 'redux'],
        // icon: ['typescript'],
        imgFront: 'node',
        gitHub: { href: 'https://www.onet.pl/', name: 'view code', icon: github },
        webpage: { href: 'https://www.wp.pl/', name: 'webpage', icon: website },
    },
    {
        id: uuidv4(),
        name: 'project 4',
        desc: 'fffffffffffffff',
        mainStack: 'javascript',
        stack: ['react', 'node', 'javascript', 'mongodb'],
        // icon: ['javascript'],
        imgFront: 'react',
        gitHub: { href: 'https://www.onet.pl/', name: 'view code', icon: github },
        webpage: { href: 'https://www.wp.pl/', name: 'webpage', icon: website },
    },
    {
        id: uuidv4(),
        name: 'project 5',
        desc: 'fffffffffffffff',
        mainStack: 'angular.js',
        stack: ['node', 'angular', 'mongodb', 'redux'],
        // icon: ['javascript'],
        imgFront: 'javascript',
        gitHub: { href: 'https://www.onet.pl/', name: 'view code', icon: github },
        webpage: { href: 'https://www.wp.pl/', name: 'webpage', icon: website },
    },
    {
        id: uuidv4(),
        name: 'project 6',
        desc: 'fffffffffffffff',
        mainStack: 'css',
        stack: ['node', 'angular', 'typescript', 'mongodb', 'redux', 'css'],
        // icon: ['css'],
        imgFront: 'css',
        gitHub: { href: 'https://www.onet.pl/', name: 'view code', icon: github },
        webpage: { href: 'https://www.wp.pl/', name: 'webpage', icon: website },
    },

];


const ProjectsMainComponent = props => {
    const navigate = useNavigate();
    const location = useLocation();

    const queryParams = new URLSearchParams(location.search);

    const paramType = queryParams.get('sort');

    const sortButtonHandler = e => {
        const projectType = e.target.name;
        navigate(projectType ? location.pathname + '?sort=' + projectType : location.pathname);
    }

    let projectsToDisplay = [];
    if (paramType) {
        projectsToDisplay = PROJECTS_LIST.filter(project => project.stack.includes(paramType));
    } else projectsToDisplay = PROJECTS_LIST;

    const projects = projectsToDisplay.map(project => (
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
            click={sortButtonHandler}
        />
    ));


    return (
        <Section class='projects' id='projects'>
            <nav className='projects__nav'>
                <ul className='projects__nav-list'>
                    <button data-text='All projects' onClick={sortButtonHandler} className='projects__nav-link'>
                        <SVGIcon class='projects__nav-i' spriteId='projects' />
                        All projects</button>
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