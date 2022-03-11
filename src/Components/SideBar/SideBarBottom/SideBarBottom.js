import SideBarListItem from '../SideBarListItem/SideBarListItem';
import { v4 as uuidv4 } from 'uuid';

const SideBarBottom = props => {
    const sideBarListItems = props.menu.map(item => (
        item.bottom && <SideBarListItem
            key={uuidv4()}
            path={item.path}
            desc={item.desc}
            icon={item.icon}
            active={item.active}
        />
    ));

    return (
        <div className='sidebar__content-bottom'>
            <ul className='sidebar__list-bottom'>
                {sideBarListItems}
            </ul>
        </div>
    );
}

export default SideBarBottom;