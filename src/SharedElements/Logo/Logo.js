import logoImg from '../../Assets/Images/youtube_profile_image.png';

import './Logo.css';


const Logo = props => {
    return (
        <img className='logo-img' src={props.logoSrc ? props.logoSrc : logoImg} alt="logo"></img>
    );
}

export default Logo;