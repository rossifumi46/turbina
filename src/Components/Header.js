import React from "react";
import Streaming from "./Streamings";
import turbina from '../images/turbina.png';

const Header = () => <header className="header">
    <a href="https://marshakbooks.ru/" className="header__logo" target="_blank"/>
    <Streaming/>
    <img className="main__logo" alt="logo" src={turbina}/>
</header>

export default Header;
