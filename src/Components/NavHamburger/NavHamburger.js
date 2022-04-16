import React from 'react';

import './NavHamburger.css';

const NavHamburger = props => {

    return (
        <div className='nav__hamburger-wrapper' id='nav-hamburger' onClick={props.click}>
            <div className={'nav__hamburger-div nav__hamburger-span--form-active'}>
                <span className='nav__haburger-snail'></span>
            </div>
            <div className={'nav__hamburger-div nav__hamburger-span--form-active'}>
                <span className='nav__haburger-snail'></span>
            </div>
            <div className={'nav__hamburger-div nav__hamburger-span--form-active'}>
                <span className='nav__haburger-snail'></span>
            </div>
            <i className='fas fa-wave-square hamburger-close-menu'></i>
        </div>
    );
}

export default NavHamburger;