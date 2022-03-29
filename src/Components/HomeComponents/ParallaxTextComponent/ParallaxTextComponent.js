

import Section from "../../../SharedElements/Section/Section";

import './ParallaxTextComponent.css';

const ParallaxTextComponent = props => {

    const moveParallexTextHandler = () => {
        console.log('object');
    }


    return (
        <Section class='parallax-slogan' onMouseOver={moveParallexTextHandler}>
            <div className="parallax-slogan__skew1" >
                <h2 className="parallax-slogan__layer parallax-slogan__layer1">{props.slogan}</h2>
            </div>
            <div className="parallax-slogan__text-wrapper">
                <div className="parallax-slogan__skew2">
                    <h2 className="parallax-slogan__layer parallax-slogan__layer2">{props.slogan}</h2>
                </div>
            </div>
        </Section>
    );
}

export default ParallaxTextComponent;