import './ProjectItem.css';

const ProjectItem = props => {



    return (
        <li className='projects__list-item'>
            <div className="projects__card">
                <div className="projects__card-face">
                    <img src={props.imgFrontSrc} alt={props.imgFrontAlt} className='projects__card-front-img' />
                </div>
                <div className="projects__card-face projects__card-face--back">
                    <img src={props.imgBackSrc} alt={props.imgBack} className='projects__card-back-img' />
                </div>
            </div>
        </li >

    );
}

export default ProjectItem;