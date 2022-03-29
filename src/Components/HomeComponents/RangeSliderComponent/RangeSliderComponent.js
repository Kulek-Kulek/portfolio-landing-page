import { useState } from "react";

import Section from "../../../SharedElements/Section/Section";
import Carousel3D from "../3DCarousel/3DCarousel";

import './RangeSliderComponent.css';

const SPRITE_SVG = ['react', 'node', 'angular', 'typescript', 'javascript', 'mongodb', 'redux', 'sass'];

const RangeSliderComponent = props => {

    const [rangeValue, setRangeValue] = useState(100);

    const rangeSliderHandler = e => {

        const value = e.target.value;
        setRangeValue(e.target.value);
        const sliderFront = document.querySelector('#fillRangeValue');
        const sliderText = document.querySelector('#rangeSliderText');
        const currnetRange = document.querySelector('#rangeValue');
        currnetRange.innerHTML = value;
        sliderFront.style.width = +value + '%';

        const sliderBack = document.querySelector('#rangeSliderDesc');
        const sliderFrontWidth = sliderFront.offsetWidth;
        const sliderBackWidth = sliderBack.offsetWidth;
        if (sliderBackWidth >= sliderFrontWidth) {
            sliderText.classList.add('range-slider__p--front');
            currnetRange.classList.add('range-slider__range-value--front');

        } else {
            sliderText.classList.remove('range-slider__p--front');
            currnetRange.classList.remove('range-slider__range-value--front');
        }

    }

    return (
        <Section class='range-slider'>
            <div className="range-slider__wrapper">
                <div className="range-slider__desc" id='rangeSliderDesc'>
                    <p className="range-slider__p" id='rangeSliderText'>Laboris id laborum aute cillum. Aliquip culpa ipsum sint non pariatur minim nisi. Ipsum ad enim fugiat cillum ea ad excepteur. Laboris non sunt Lorem sit ad elit culpa elit veniam occaecat ut fugiat consequat.

                        Mollit fugiat in proident aute excepteur exercitation ea ad do irure ipsum. Veniam do reprehenderit culpa qui elit dolore enim. Incididunt consequat aliqua irure fugiat. Nulla aute proident amet sit culpa sit qui voluptate cupidatat ea. Officia ex et commodo sunt. In est ad qui est.</p>
                    <h2 className="range-slider__range-value" id="rangeValue">{rangeValue}</h2>
                    <div className="range-slider__fill-range-value" id="fillRangeValue">
                    </div>
                    <input type="range" className="range-slider__range-input" value={rangeValue} min="0" max="100" onChange={rangeSliderHandler} onMouseMove={rangeSliderHandler}></input>
                </div>
                <div className="range-slider__carousel-wrapper">
                    <Carousel3D spriteIds={SPRITE_SVG} />
                </div>
            </div>
        </Section >
    );
}

export default RangeSliderComponent;