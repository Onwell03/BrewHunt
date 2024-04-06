import React from "react";
import Header from "../components/Header";
import { Outlet, Link } from "react-router-dom";

const SideNav = () => {
    return (
        <div className="page">
            <div className="side-nav">
                <Header />
                <h2 className="home-link" key="to-dashboard">
                    <Link style={{ color: "black" }} to="/">
                    🏠Dashboard
                    </Link>
                </h2>
                <h2 className="home-link" key="to-search">
                    <Link style={{ color: "black" }} to="/">
                    🔍Search
                    </Link>
                </h2>
                <h2 className="home-link" key="to-about">
                    <Link style={{ color: "black" }} to="/">
                    ℹ️About
                    </Link>
                </h2>
            </div>
            <Outlet /> 
        </div>
    )
};

export default SideNav;