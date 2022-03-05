import SideBarListItem from '../SideBarListItem/SideBarListItem';
import { v4 as uuidv4 } from 'uuid';
import { faBagShopping, faHome } from "@fortawesome/free-solid-svg-icons";
import { faBell } from "@fortawesome/free-solid-svg-icons";
import { faBatteryHalf } from "@fortawesome/free-solid-svg-icons";
import { faBookmark } from "@fortawesome/free-solid-svg-icons";

import './SideBarContent.css';

const menu = [
    {
        path: '#',
        icon: faHome,
        desc: 'faHome'
    },
    {
        path: '#',
        icon: faBell,
        desc: 'faBell'
    },
    {
        path: '#',
        icon: faBookmark,
        desc: 'faBookmark'
    },
    {
        path: '#',
        icon: faBagShopping,
        desc: 'faBatteryHalf'
    },
];

const SideBarContent = props => {

    const sideBarListItems = menu.map(item => (
        <SideBarListItem
            key={uuidv4()}
            path={item.path}
            desc={item.desc}
            icon={item.icon}
        />
    ));

    return (
        <div className='sidebar__content'>
            <ul className='sidebar__list'>
                {sideBarListItems}
            </ul>
        </div>
    );
}

export default SideBarContent;