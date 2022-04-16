import { Fragment } from "react";
import { useLocation } from "react-router-dom";
import SideBarMainComponent from "../SideBar/SideBarMainComonent/SideBarMainComponent";
import Main from "../../SharedElements/Main/Main";
import FlexContent from "../../SharedElements/FlexContent/FlexContent";
import Header from "../Header/Header";
import FooterMainComponent from "../Footer/FooterMainComponent/FooterMainComponent";

import './Layout.css';

const Layout = props => {
    const location = useLocation();
    return (
        <Fragment>
            <Header />
            <FlexContent>
                <SideBarMainComponent />
                <div className="app-wrapper">
                    <Main>
                        {props.children}
                    </Main>
                    {location.pathname !== '/contact' && <FooterMainComponent />}
                </div>
            </FlexContent>
        </Fragment>
    );
}

export default Layout;