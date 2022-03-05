import Logo from '../../../SharedElements/Logo/Logo';

import './SideBarTop.css';

const SideBarTop = props => {
    return (
        <div className="sidebar__top">
            <div className="sidebar__logo-wrapper">
                <Logo />
            </div>
            <h3 className='sidebar__hidden'>Your channel</h3>
            <h4 className='sidebar__hidden'>OkayProjects</h4>
        </div>
    );
}

export default SideBarTop;