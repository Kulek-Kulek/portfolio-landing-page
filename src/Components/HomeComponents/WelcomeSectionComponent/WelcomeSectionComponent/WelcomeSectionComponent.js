import { useEffect } from "react";
import { createStackImage } from './createStackImage';

import Section from '../../../../SharedElements/Section/Section';
import './WelcomeSectionComponent.css';

const WelcomeSectionComponent = props => {

    useEffect(() => {
        const interval = setInterval(createStackImage, 150);

        return () => {
            clearInterval(interval);
        }
    }, [])

    return (
        <Section class="welcome__section" />
    );
}

export default WelcomeSectionComponent;