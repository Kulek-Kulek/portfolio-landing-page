import { Fragment } from "react";
import SideBarMainComponent from "../SideBar/SideBarMainComonent/SideBarMainComponent";
import Main from "../../SharedElements/Main/Main";
import FlexContent from "../../SharedElements/FlexContent/FlexContent";
import Header from "../Header/Header";

const Layout = props => {
    return (
        <Fragment>
            <Header />
            <FlexContent>
                <SideBarMainComponent />
                <Main>{props.children}</Main>
            </FlexContent>
        </Fragment>
    );
}

export default Layout;