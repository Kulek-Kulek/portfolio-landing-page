import { useState, useEffect } from 'react';

import { useNavigate, useLocation } from 'react-router-dom';

import Section from "../../../SharedElements/Section/Section";
import ProjectItem from "../ProjectItem/ProjectItem";
import NavItem from "../NavItem/NavItem";
import SVGIcon from '../../../SharedElements/SVGIcon/SVGIcon';
import Spinner from '../../../SharedElements/Spinner/Spinner';
import InfoModal from '../../../SharedElements/InfoModal/InfoModal';
import { useHttpClient } from '../../../Hooks/http-hook';
import { v4 as uuidv4 } from 'uuid';
import github from '../../../Assets/Images/svg/github.svg';
import website from '../../../Assets/Images/svg/website.svg';
import './ProjectsMainComponent.css';


const ProjectsMainComponent = props => {
    const { sendRequest, error, loading, clearError } = useHttpClient();

    const [projectsList, setProjectsList] = useState([]);

    const navigate = useNavigate();
    const location = useLocation();

    const queryParams = new URLSearchParams(location.search);
    const paramType = queryParams.get('sort');

    useEffect(() => {
        const fetchData = async () => {
            try {
                const responseData = await sendRequest(`${process.env.REACT_APP_BACKEND_URL}portfolio-projects`);
                setProjectsList(responseData.projects);
            } catch (err) {

            }
        }
        fetchData();
    }, [sendRequest]);

    const errorModalHideHandler = () => {
        clearError();
    }

    const sortButtonHandler = e => {
        const projectType = e.target.name;
        navigate(projectType ? location.pathname + '?sort=' + projectType : location.pathname);
    }

    let projectsToDisplay = [];
    if (paramType) {
        projectsToDisplay = projectsList.filter(project => project.stack.includes(paramType));
    } else projectsToDisplay = projectsList;

    const projects = projectsToDisplay.map(project => (
        <ProjectItem
            key={project.id}
            name={project.name}
            desc={project.desc}
            stack={project.stack}
            imgFrontSrc={project.imgFront}
            imgFrontAlt={project.imgFront && project.imgFront.alt}
            gitHub={project.gitHub && project.gitHub.icon && github}
            webpage={project.webpage && project.webpage.icon && website}
            hrefGit={project.gitHub && project.gitHub.href && project.gitHub.href}
            hrefWeb={project.webpage && project.webpage.href && project.webpage.href}
            gitHubName={project.gitHub && project.gitHub.name && project.gitHub.name}
            webpageName={project.webpage && project.webpage.name && project.webpage.name}
        />
    ));

    let uniqueStack = [];

    for (let arr of projectsList) {
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
                    <button onClick={sortButtonHandler} className='projects__nav-link'>
                        <SVGIcon class='projects__nav-i' spriteId='projects' />
                        All projects
                    </button>
                    {navlinks}
                </ul>
            </nav>
            <ul className="projects__list">
                {loading ? <Spinner /> :
                    projects}
            </ul>
            {
                error && <InfoModal
                    class='message-sent--active'
                    messageHeading="Uppps - something's wrong."
                    mainMessage='Sorry, I cannot retrieve required data. Try again later.'
                    errorModalHide={errorModalHideHandler}
                />
            }
        </Section>
    );
}

export default ProjectsMainComponent;