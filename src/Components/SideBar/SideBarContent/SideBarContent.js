import SideBarListItem from '../SideBarListItem/SideBarListItem';
import { v4 as uuidv4 } from 'uuid';

import './SideBarContent.css';



const SideBarContent = props => {

    const sideBarListItems = props.menu.map(item => (
        !item.bottom && <SideBarListItem
            key={uuidv4()}
            path={item.path}
            desc={item.desc}
            icon={item.icon}
            active={item.active}
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