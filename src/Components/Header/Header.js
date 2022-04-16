import Logo from '../../SharedElements/Logo/Logo';
import NavHamburger from '../NavHamburger/NavHamburger';

import './Header.css';

const Header = props => {

    const toggleSidebarHandler = () => {
        const menuBars = document.querySelector("#nav-hamburger");
        const sidebar = document.querySelector("[data-sidebar]");
        if (menuBars && sidebar) sidebar.classList.toggle('open');
    }



    return (
        <header className='header' id='header'>
            <div className='header__bar-wrapper'>
                <NavHamburger click={toggleSidebarHandler} />
            </div>
            <div className='header__logo'>
                <Logo spriteId='logoWhite' />
            </div>
        </header>
    );
}

export default Header;