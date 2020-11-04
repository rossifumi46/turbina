import React from "react";
import Streaming from "./Streamings";
import './Header/menu.css'

const Header = () => {

    return (
        <header className="header-container">
            <a href="https://marshakbooks.ru/" className="header__logo" target="_blank"/>
            <Streaming/>
        </header>
    );
}

export default Header;
