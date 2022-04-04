import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import './SocialMedia.css';

const SocialMedia = props => {
    return (
        <li className={`footer__socialmedia-item ${props.classItem}`}>
            <a href="###" className="footer__socialmedia-link">
                <FontAwesomeIcon className={`footer__socialmedia-icon ${props.classIcon}`} icon={props.icon} />
            </a>
        </li>
    );
}

export default SocialMedia;