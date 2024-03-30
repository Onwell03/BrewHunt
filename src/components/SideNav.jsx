import React from "react";
import Header from "./Header";

const SideNav = () => {
    return (
        <div className="side-nav">
            <Header />
            <h2>🏠Dashboard</h2>
            <h2>🔍Search</h2>
            <h2>ℹ️About</h2>
        </div>
    )
};

export default SideNav;