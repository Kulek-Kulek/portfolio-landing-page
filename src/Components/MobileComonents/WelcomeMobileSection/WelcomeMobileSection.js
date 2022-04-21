import Section from "../../../SharedElements/Section/Section";
import Phone3DSlider from "../Phone3DSlider/Phone3DSlider";
import Button from '../../../SharedElements/Button/Button';

import './WelcomeMobileSection.css';

const WelcomeMobileSection = props => {
    const openContactFormHandler = () => {
        const contactForm = document.querySelector('.contact-form');
        contactForm.classList.add('contact-form--active');
    }

    return (
        <Section class='mobile-section' id='mobile-section'>
            <div className="mobile-section__desc">
                <div>
                    <h1 className="mobile-section__main-heading">How far am I?</h1>
                    <h5 className="mobile-section__minor-heading">Just a click away!</h5>
                </div>
                <p className="mobile-section__testimony">It comes with real pleasure to code things from scratch, and I enjoy bringing ideas to life in the browser. I value simple content structure, clean design patterns, and thoughtful interactions.</p>
                <Button
                    type='text'
                    text='More'
                    click={openContactFormHandler}
                />
            </div>
            <div className='mobile-section__slider-wrapper'>
                <Phone3DSlider />
            </div>
        </Section>
    );
}

export default WelcomeMobileSection;