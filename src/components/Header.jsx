import React from "react";
import logo from "../img/logo.png";

const Header = () => {
    return (
        <div className="header">
            <span className="header__logo-container">
                <img className="header-logo" src={logo} alt="logo SynapseChain"></img>
                <h1 className="header-h1">SynapseChain</h1>
            </span>
        </div>
    )
}

export default Header;