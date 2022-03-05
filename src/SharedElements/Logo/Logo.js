import logoImg from '../../Assets/Images/logo-name.png';

import './Logo.css';


const Logo = props => {
    return (
        <img className='logo-img' src={props.logoSrc ? props.logoSrc : logoImg} alt="logo"></img>
    );
}

export default Logo;