import FlexContent from '../../SharedElements/FlexContent/FlexContent';
import Header from '../../Components/Header/Header';
import Main from '../../SharedElements/Main/Main';
import SideBar from '../../Components/SideBar/SideBarMainComonent/SideBarMainComponent';


const Home = props => {
    return (
        <>
            <Header />
            <FlexContent>
                <SideBar />
                <Main />
            </FlexContent>
        </>
    );
}

export default Home;