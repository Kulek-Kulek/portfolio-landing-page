import Logo from '../../../SharedElements/Logo/Logo';

import './SideBarTop.css';

const SideBarTop = props => {
    return (
        <div className="sidebar__top">
            <div className="sidebar__logo-wrapper">
                <Logo spriteId='logoWhiteU' />
            </div>
            <h3 className='sidebar__logo-slogan'>Lifelong Learning</h3>
        </div>
    );
}

export default SideBarTop;