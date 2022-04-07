import { useEffect } from "react";

import MainHomeComponent from "../../Components/HomeComponents/MainHomeComponent/MainHomeComponent";


const HomePage = props => {

    useEffect(() => {
        document.body.scrollTop = document.documentElement.scrollTop = 0;
    }, []);

    return (
        <>
            <MainHomeComponent />
        </>
    );
}

export default HomePage;