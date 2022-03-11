
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import './SideBarListItem.css';

const SideBarListItem = props => {
    return (
        <li className={`sidebar__list-item ${props.active ? 'active' : ''}`}>
            <a href={props.path} className='sidebar__list-item-link'>
                <FontAwesomeIcon className='sidebar__list-item-icon' icon={props.icon} />
            </a>
            <span className="sidebar__list-item-desc">{props.desc}</span>
        </li>
    );
}

export default SideBarListItem;