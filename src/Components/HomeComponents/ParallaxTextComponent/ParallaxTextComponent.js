

import Section from "../../../SharedElements/Section/Section";
import Infinite from "./Infinite/Infinite";

import './ParallaxTextComponent.css';

const ParallaxTextComponent = props => {

    return (
        <Section class='parallax'>
            <div className="parallax-slogan">
                <div className="parallax-slogan__skew1" >
                    <h2 className="parallax-slogan__layer parallax-slogan__layer1">{props.slogan}</h2>
                </div>
                <Infinite infiniteRepeatTimes={21} />
                <div className="parallax-slogan__text-wrapper">
                    <div className="parallax-slogan__skew2">
                        <h2 className="parallax-slogan__layer parallax-slogan__layer2">{props.slogan}</h2>
                        {/* <Infinite infiniteRepeatTimes={21} /> */}
                    </div>
                    <Infinite infiniteRepeatTimes={21} />
                </div>
            </div>
        </Section>
    );
}

export default ParallaxTextComponent;