import SideBarTop from '../SideBarTop/SideBarTop';
import SideBarContent from '../SideBarContent/SideBarContent';
import SideBarBottom from '../SideBarBottom/SideBarBottom';
import { v4 as uuidv4 } from 'uuid';

import { faHome, faShapes, faNetworkWired, faHandshake } from "@fortawesome/free-solid-svg-icons";


import './SideBarMainComponent.css';

const menu = [
    {
        id: uuidv4(),
        path: '/home',
        icon: faHome,
        desc: "Let's meet",
    },
    {
        id: uuidv4(),
        path: '/projects',
        icon: faNetworkWired,
        desc: "Let's have a look"
    },
    {
        id: uuidv4(),
        path: '/mobile',
        icon: faShapes,
        desc: "Let's something"
    },
    {
        id: uuidv4(),
        path: '/contact',
        icon: faHandshake,
        desc: "Let's do it",
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