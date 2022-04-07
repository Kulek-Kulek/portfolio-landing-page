import { useEffect } from "react";

import MainMobileComponent from "../../Components/MobileComonents/MainMobileComponent/MainMobileComponent";

const Sample = props => {

    useEffect(() => {
        document.body.scrollTop = document.documentElement.scrollTop = 0;
    }, []);


    return (
        <MainMobileComponent />
    );
}

export default Sample;