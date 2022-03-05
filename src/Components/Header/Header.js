import Logo from '../../SharedElements/Logo/Logo';

import { faBars } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import logoSrc from '../../Assets/Images/logo-img.png';

import './Header.css';

const Header = props => {
    return (
        <header className='header'>
            <div className='header__bar-wrapper'>
                <FontAwesomeIcon className='header__bars' icon={faBars} />
            </div>
            <div className='header__logo'>
                <Logo logoSrc={logoSrc} />
            </div>

        </header>
    );
}

export default Header;