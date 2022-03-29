import { Link } from "react-router-dom";
import SVGIcon from '../../../SharedElements/SVGIcon/SVGIcon';

import './NavItem.css';

const NavItem = props => {

    let iconId;
    switch (props.name) {
        case 'mongodb':
            iconId = 'mongodblogo';
            break;
        case 'react.js':
            iconId = 'react';
            break;
        case 'angular.js':
            iconId = 'angular';
            break;
        case 'typescript.js':
            iconId = 'typescript';
            break;
        case 'node.js':
            iconId = 'nodelogo';
            break;
        case 'redux.js':
            iconId = 'redux';
            break;
        default: iconId = 'javascript'
    }




    return (
        <li className='projects__nav-item'>
            <Link to='#' className='projects__nav-link' data-text={props.name}>
                <SVGIcon class='projects__nav-i' spriteId={iconId} />
                {props.name}
            </Link>
        </li>
    );
}

export default NavItem;