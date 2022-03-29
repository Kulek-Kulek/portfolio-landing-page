import { Fragment } from "react";
import SideBarMainComponent from "../SideBar/SideBarMainComonent/SideBarMainComponent";
import Main from "../../SharedElements/Main/Main";
import FlexContent from "../../SharedElements/FlexContent/FlexContent";
import Header from "../Header/Header";
import FooterMainComponent from "../Footer/FooterMainComponent/FooterMainComponent";

import './Layout.css';

const Layout = props => {
    return (
        <Fragment>
            <Header />
            <FlexContent>
                <SideBarMainComponent />
                <div className="app-wrapper">
                    <Main>
                        {props.children}

                    </Main>
                    <FooterMainComponent />
                </div>
            </FlexContent>
        </Fragment>
    );
}

export default Layout;