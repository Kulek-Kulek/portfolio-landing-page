
import './Button.css';


const Button = props => {
    return (
        <button type={props.type} onClick={props.click} className={`button ${props.class}`}>
            <svg className={`button__svg ${props.class}`}>
                <rect className={`button__rect ${props.class}`}></rect>
            </svg>
            {props.text}
        </button>
    );
}

export default Button;