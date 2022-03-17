
import './Main.css';

const Main = props => {
    return (
        <main className={`main ${props.class ? props.class : ''}`}>
            {props.children}
        </main>
    );
}

export default Main;