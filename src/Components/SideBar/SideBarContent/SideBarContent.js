import SideBarListItem from '../SideBarListItem/SideBarListItem';


import './SideBarContent.css';



const SideBarContent = props => {

    const sideBarListItems = props.menu.map(item => (
        !item.bottom && <SideBarListItem
            key={item.id}
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