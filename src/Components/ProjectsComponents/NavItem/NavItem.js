
import SVGIcon from '../../../SharedElements/SVGIcon/SVGIcon';

import './NavItem.css';

const NavItem = props => {

    let iconId;
    switch (props.name) {
        case 'mongodb':
            iconId = 'mongodb-icon';
            break;
        case 'react':
            iconId = 'react';
            break;
        case 'angular':
            iconId = 'angular';
            break;
        case 'typescript':
            iconId = 'typescript';
            break;
        case 'node':
            iconId = 'nodelogo';
            break;
        case 'redux':
            iconId = 'redux';
            break;
        case 'css':
            iconId = 'css';
            break;
        case 'html5':
            iconId = 'html5';
            break;
        case 'jquery':
            iconId = 'jquery';
            break;
        case 'bootstrap':
            iconId = 'bootstrap';
            break;
        default: iconId = 'javascript'
    }

    return (
        <li className='projects__nav-item'>
            <button onClick={props.click} name={props.name} className='projects__nav-link' data-text={props.name}>
                <SVGIcon class='projects__nav-i' spriteId={iconId} />
                {props.name}
            </button>
        </li>
    );
}

export default NavItem;