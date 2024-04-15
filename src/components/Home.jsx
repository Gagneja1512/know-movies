import React from "react";
import SideNav from "./templates/SideNav";

const Home = () => {
    document.title = "Home"

    return (
        <React.Fragment>
            <SideNav></SideNav>
            <div className="w-[80%] h-full"></div>
            
        </React.Fragment>
    );
}

export default Home ;