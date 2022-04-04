import ContactCardSlideDown from "../ContactCardSlideDown/ContactCardSlideDown";
import SocialMedia from "../SocialMedia/SocialMedia";


import { faAt, faFeatherPointed } from "@fortawesome/free-solid-svg-icons";
import { faLinkedin, faGithub } from "@fortawesome/free-brands-svg-icons";


import './FooterMainComponent.css';


const FooterMainComponent = props => {
    return (

        <footer className='footer'>
            <div className='footer__contact-container'>
                <ContactCardSlideDown
                    icon={faAt}
                    heading='Email me'
                    emailData={[
                        { email: 'lugowski.k@gmail.com', icon: 'yahoo3' },
                        { email: 'k.lugowski@yahoo.com', icon: 'gmail1' }
                    ]}
                />
                <ContactCardSlideDown
                    icon={faFeatherPointed}
                    heading='Drop me a line'
                    text='I love to hear, I love to share. Why not getting in touch then?'
                />
            </div>
            <ul className='footer__socialmedia-container'>
                <SocialMedia icon={faLinkedin} />
                <SocialMedia
                    icon={faGithub}
                    classIcon='footer__socialmedia-icon--github'
                    classItem='footer__socialmedia-item-github'
                />
            </ul>
        </footer>
    );
}

export default FooterMainComponent;