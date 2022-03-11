import SideBarTop from '../SideBarTop/SideBarTop';
import SideBarContent from '../SideBarContent/SideBarContent';
import SideBarBottom from '../SideBarBottom/SideBarBottom';

import { faBagShopping, faHome } from "@fortawesome/free-solid-svg-icons";
import { faBell } from "@fortawesome/free-solid-svg-icons";
import { faBookmark } from "@fortawesome/free-solid-svg-icons";

import './SideBarMainComponent.css';

const menu = [
    {
        path: '#',
        icon: faHome,
        desc: 'faHome',
        active: true,
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
    // {
    //     path: '#',
    //     icon: faBagShopping,
    //     desc: 'faBatteryHalf'
    // },
    // {
    //     path: '#',
    //     icon: faBookmark,
    //     desc: 'faBookmark'
    // },
    {
        path: '#',
        icon: faBagShopping,
        desc: 'faBatteryHalf',
        bottom: true
    }
];

const SideBarMainComponent = props => {
    return (
        <aside className="sidebar" data-sidebar>
            <SideBarTop />
            <SideBarContent menu={menu} />
            <SideBarBottom menu={menu} />
        </aside>
    );
}

export default SideBarMainComponent;