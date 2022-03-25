import SVGIcon from '../../../SharedElements/SVGIcon/SVGIcon';
import { v4 as uuidv4 } from 'uuid';

import './3DCarousel.css';


const Carousel3D = props => {
    const icons = props.spriteIds.map((spriteId, index) => (
        <span key={uuidv4()} style={{ '--i': index + 1 }} className='carousel3D__img-wrapper'>
            <SVGIcon
                spriteId={spriteId}
                class='carousel3D__img'
            />
        </span>
    ))

    return (
        <div className="carousel3D">
            {icons}
        </div>
    );
}

export default Carousel3D;