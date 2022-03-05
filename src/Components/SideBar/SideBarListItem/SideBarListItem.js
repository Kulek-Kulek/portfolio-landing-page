
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import './SideBarListItem.css';

const SideBarListItem = props => {
    return (
        <li className="header__list-item">
            <a href={props.path} className='header__list-item-link'>
                <FontAwesomeIcon className='header__list-item-icon' icon={props.icon} />
                <span className="header__list-item-desc">{props.desc}</span>
            </a>
        </li>
    );
}

export default SideBarListItem;