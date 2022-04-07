import Section from "../../../SharedElements/Section/Section";
import Phone3DSlider from "../Phone3DSlider/Phone3DSlider";
import Button from '../../../SharedElements/Button/Button';

import './WelcomeMobileSection.css';

const WelcomeMobileSection = props => {
    return (
        <Section class='mobile-section' id='mobile-section'>
            <div className="mobile-section__desc">
                <div>
                    <h1 className="mobile-section__main-heading">My first slogan</h1>
                    <h5 className="mobile-section__minor-heading">My first subslogan</h5>
                </div>
                <Button
                    type='text'
                    text='Read more'
                />
            </div>
            <div className='mobile-section__slider-wrapper'>
                <Phone3DSlider />
            </div>
        </Section>
    );
}

export default WelcomeMobileSection;