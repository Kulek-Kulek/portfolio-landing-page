import sprite from '../../Assets/Images/svg/sprite.svg';

const SVGIcon = props => {
    return (
        <svg className={props.class}>
            <use href={sprite + '#' + props.spriteId} />
        </svg>
    );
}

export default SVGIcon;

