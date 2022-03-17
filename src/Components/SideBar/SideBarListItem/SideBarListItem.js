
import { NavLink } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import './SideBarListItem.css';

const SideBarListItem = props => {


    return (
        <li className={'sidebar__list-item'}>
            <NavLink to={props.path} className={navData => navData.isActive ? 'sidebar__list-item-link active' : 'sidebar__list-item-link'}>
                <FontAwesomeIcon className='sidebar__list-item-icon' icon={props.icon} />
                <span className="sidebar__list-item-desc">{props.desc}</span>
            </NavLink>
        </li >
    );
}

export default SideBarListItem;