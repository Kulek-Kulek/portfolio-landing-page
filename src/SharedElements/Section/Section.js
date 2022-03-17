
import './Section.css'


const Section = props => {
    return (
        <section className={`section ${props.class ? props.class : ''}`}>{props.children}</section>
    );
}

export default Section;