

import './Input.css';

const Input = props => {

    let inputType;
    switch (props.inputType) {
        case 'input':
            inputType = <input
                id={props.id}
                name={props.name}
                type={props.type}
                required={props.required}
                accept={props.type === 'file' ? props.accept : null}
                // checked={inputCurrentState.checked}
                placeholder={props.placeholder}
                // value={inputCurrentState.value}
                // onChange={inputChangeHandler}
                // onBlur={touchHandler}
                className={props.class}
                disabled={props.disabled}
            />
            break;
        default: inputType = <textarea
            id={props.id}
            rows={props.rows || 4}
            required={props.required}
            // value={inputCurrentState.value}
            placeholder={props.placeholder}
            // onChange={inputChangeHandler}
            // onBlur={touchHandler}
            className={props.class} />
    }



    return (
        <>
            {props.label && <label className={props.classLabel} htmlFor={props.id}>{props.label}</label>}
            {inputType}
            {/* {!inputCurrentState.isValid && inputCurrentState.isTouched && <p className={`error-text ${props.classError}`}>{props.errorText}</p>} */}
        </>
    );
}

export default Input;