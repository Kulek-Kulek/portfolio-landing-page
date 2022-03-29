import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import './ContactDownSlideDown.css';


const ContactCardSlideDown = props => {
    return (
        <div class="card-slide-down">
            <div class="card-slide-down__face card-slide-down__face1">
                <div class="card-slide-down__content1">
                    <FontAwesomeIcon className='card-slide-down__item-icon' icon={props.icon} />
                    <h3 className='card-slide-down__content1-slogan'>Design</h3>
                </div>
            </div>
            <div class="card-slide-down__face card-slide-down__face2">
                <div class="card-slide-down__face2-content">
                    <p className='card-slide-down__content2-text'>
                        Quis est culpa consectetur sit aute ea sunt occaecat tempor proident in nulla sunt. Mollit irure
                    </p>
                    <button>Read more</button>
                </div>
            </div>
        </div>
    );
}

export default ContactCardSlideDown;