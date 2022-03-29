import Section from "../../../../SharedElements/Section/Section";
import { v4 as uuidv4 } from 'uuid';

import './Clinder.css';

const Cylinder = props => {

    const cylinderItemsData = [];

    let i = 0;
    while (i < props.cylinderRepeatTimes) {
        cylinderItemsData.push(props.cylinderSlogan);
        i++;
    }

    const cylinderItems = cylinderItemsData.map((item, index) => (
        <span
            key={uuidv4()}
            style={{ '--i': index + 1 }}
            className='cylinder__slogan'
        >
            <i>{item}</i> is <i>A</i>wesome
        </span>
    ));

    return (
        <Section class='cylinder'>
            <div className="cylinder__wrapper">
                {cylinderItems}
            </div>
        </Section>
    );
}

export default Cylinder;