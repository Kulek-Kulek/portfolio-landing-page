import SideBarTop from '../SideBarTop/SideBarTop';
import SideBarContent from '../SideBarContent/SideBarContent';
import SideBarBottom from '../SideBarBottom/SideBarBottom';

import './SideBarMainComponent.css';



const SideBarMainComponent = props => {
    return (
        <aside className="sidebar">
            <SideBarTop />
            <SideBarContent />
            <SideBarBottom />
        </aside>
    );
}

export default SideBarMainComponent;