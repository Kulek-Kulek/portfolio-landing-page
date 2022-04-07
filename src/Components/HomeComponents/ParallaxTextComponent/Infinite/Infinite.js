
import { v4 as uuidv4 } from 'uuid';

import './Infinite.css';

const Infinite = props => {

    const infiniteItemsData = [];

    let i = 0;
    while (i < props.infiniteRepeatTimes) {
        infiniteItemsData.push('--i');
        i++;
    }

    const infiniteItems = infiniteItemsData.map((item, index) => (
        <span
            key={uuidv4()}
            style={{ [item]: index }}
            className='infinite__dot'
        >
        </span>
    ));

    return (
        <div className='infinite'>
            <div className="infinite__container">
                <div className="infinite__circle">
                    {infiniteItems}
                </div>
                <div className="infinite__circle">
                    {infiniteItems}
                </div>
            </div>
        </div>
    );
}

export default Infinite;