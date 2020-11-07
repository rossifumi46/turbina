import React     from "react";
import Streaming from "./Streamings";


const Header = () => {

    return (
        <header className="header">
            <a href="https://marshakbooks.ru/" className="header__logo" target="_blank"/>
            <Streaming/>
        </header>
    );
}

export default Header;
