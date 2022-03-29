import WelcomeSectionComponent from "../WelcomeSectionComponent/WelcomeSectionComponent/WelcomeSectionComponent";
import RangeSliderComponent from "../RangeSliderComponent/RangeSliderComponent";
import ParallaxTextComponent from "../ParallaxTextComponent/ParallaxTextComponent";
import Cylinder from "../CylinderComponent/Cylinder/Cylinder";



const MainHomeComponent = props => {
    return (
        <>
            <WelcomeSectionComponent />
            <RangeSliderComponent />
            <ParallaxTextComponent slogan='Permanent Development' />
            <Cylinder cylinderSlogan='CSS' cylinderRepeatTimes={16} />
        </>
    );
}

export default MainHomeComponent;