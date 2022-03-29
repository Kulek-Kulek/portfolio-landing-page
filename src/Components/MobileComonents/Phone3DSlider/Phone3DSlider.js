import smartphone from '../../../Assets/Images/smartphone.jpeg';

import './Phone3DSlider.css';

const Phone3DSlider = props => {
    return (
        <div className="phone3DSlider">
            <img src={smartphone} alt='smartphone' className="phone3DSlider__img"></img>
            <img src={smartphone} alt='smartphone' className="phone3DSlider__img"></img>
            <img src={smartphone} alt='smartphone' className="phone3DSlider__img"></img>
            <img src={smartphone} alt='smartphone' className="phone3DSlider__img"></img>
        </div>
    );
}

export default Phone3DSlider;