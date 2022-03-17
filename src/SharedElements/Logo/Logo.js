import logoImg from '../../Assets/Images/logo_1280x606.jpg';

import './Logo.css';


const Logo = props => {
    return (
        <img className='logo-img' src={props.logoSrc ? props.logoSrc : logoImg} alt="logo"></img>
    );
}

export default Logo;