import React from 'react';
import SVGIcon from '../../SharedElements/SVGIcon/SVGIcon';
// import { ReactComponent as ReactLogoWhite } from '../../Assets/Images/svg/logo-white.svg';
// import { ReactComponent as ReactLogoBlack } from '../../Assets/Images/svg/logo-white.svg';

import './Logo.css';


const Logo = props => {
    return (
        <div className='logo'>
            <SVGIcon spriteId={props.spriteId} class='logo__img' />
        </div>
    );
}

export default Logo;