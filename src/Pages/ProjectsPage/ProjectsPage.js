import { useEffect } from "react";

import ProjectsMainComponent from "../../Components/ProjectsComponents/ProjectsMainComponent/ProjectsMainComponent";

const ProjectsPage = props => {

    useEffect(() => {
        document.body.scrollTop = document.documentElement.scrollTop = 0;
    }, []);

    return (
        <ProjectsMainComponent />
    );
}

export default ProjectsPage;