import SVGIcon from '../../../SharedElements/SVGIcon/SVGIcon';
import { v4 as uuidv4 } from 'uuid';

import './ProjectItem.css';

const ProjectItem = props => {

    const stack = props.stack.map(item => (
        <SVGIcon key={uuidv4()} class="projects__tag" spriteId={item} />
    ));

    return (
        <li className='projects__list-item'>
            <div className="projects__card">
                <figure className="projects__card-face">
                    <SVGIcon class='projects__card-front-img' spriteId={props.imgFrontSrc} />
                    <figcaption className='projects__figcaption'>{props.name}</figcaption>
                </figure>
                <div className="projects__card-face projects__card-face--back">
                    <div className="projects__card-back-tags">
                        <div className="projects__tags-heading-wrapper">
                            <h3 className="projects__tags-heading">Project's stack</h3>
                        </div>
                        <div className="projects__card-back-tags-icons">
                            {stack}
                        </div>
                    </div>
                    <div className="projects__card-back-desc">
                        <article>{props.desc}</article>
                    </div>
                    <div className="projects__card-back-links">
                        {props.gitHub &&
                            <a key={uuidv4()} href={props.gitHub.href} target="_blank" rel="noreferrer" className="projects__card-back-a">
                                <img className='projects__card-back-linkicon' src={props.gitHub.icon} alt={props.gitHub.name}></img>
                                {props.gitHub.name}
                            </a>}
                        {props.webpage &&
                            <a key={uuidv4()} href={props.webpage.href} target="_blank" rel="noreferrer" className="projects__card-back-a">
                                <img className='projects__card-back-linkicon' src={props.webpage.icon} alt={props.webpage.name}></img>
                                {props.webpage.name}
                            </a>}
                    </div>
                </div>
            </div>
        </li >

    );
}

export default ProjectItem;