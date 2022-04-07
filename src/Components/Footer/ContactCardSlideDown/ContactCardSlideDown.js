
import Button from "../../../SharedElements/Button/Button";
import SVGIcon from '../../../SharedElements/SVGIcon/SVGIcon';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { v4 as uuidv4 } from 'uuid';

import './ContactDownSlideDown.css';


const ContactCardSlideDown = props => {

    let slideDownContent = <p className='card-slide-down__content2-text'>{props.text}</p>;
    if (props.emailData) {
        slideDownContent = props.emailData.map(item => (
            <span key={uuidv4()} className='card-slide-down__face2-email'>
                <SVGIcon spriteId={item.icon} class='card-slide-down__face2-email-icon' />{item.email}
            </span>

        ));
    }


    const openContactFormHandler = () => {
        const contactForm = document.querySelector('.contact-form');
        contactForm.classList.add('contact-form--active');
    }

    return (
        <div className="card-slide-down">
            <div className="card-slide-down__face card-slide-down__face1">
                <div className="card-slide-down__content1">
                    <FontAwesomeIcon className='card-slide-down__item-icon' icon={props.icon} />
                    <h3 className='card-slide-down__content1-slogan'>{props.heading}</h3>
                </div>
            </div>
            <div className="card-slide-down__face card-slide-down__face2">
                <div className="card-slide-down__face2-content">
                    <div className="card-slide-down__face2-content-wrapper">
                        {slideDownContent}
                    </div>
                    <Button
                        type='text'
                        text='More'
                        click={openContactFormHandler}
                    />
                </div>
            </div>
        </div>
    );
}

export default ContactCardSlideDown;