import ContactCardSlideDown from "../ContactCardSlideDown/ContactCardSlideDown";

import { faAt, faFeatherPointed } from "@fortawesome/free-solid-svg-icons";

import './FooterMainComponent.css';

const FooterMainComponent = props => {
    return (
        <footer className='footer'>
            <div className='container'>
                <ContactCardSlideDown icon={faAt} />
                <ContactCardSlideDown icon={faFeatherPointed} />
            </div>
        </footer>
    );
}

export default FooterMainComponent;