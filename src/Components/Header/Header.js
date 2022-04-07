import Logo from '../../SharedElements/Logo/Logo';

import { faBars } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import logoSrc from '../../Assets/Images/logo.png';

import './Header.css';

const Header = props => {

    const toggleSidebarHandler = () => {
        const menuBars = document.querySelector("[data-header]");
        const sidebar = document.querySelector("[data-sidebar]");
        console.log(menuBars, sidebar);
        if (menuBars && sidebar) sidebar.classList.toggle('open');
    }



    return (
        <header className='header' id='header'>
            <div className='header__bar-wrapper'>
                <FontAwesomeIcon className='header__bars' data-header icon={faBars} onClick={toggleSidebarHandler} />
            </div>
            <div className='header__logo'>
                <Logo logoSrc={logoSrc} />
            </div>
        </header>
    );
}

export default Header;