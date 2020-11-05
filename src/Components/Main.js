import React from 'react';
import '../blocks/main/__logo/main__logo.css';
import Header  from './Header.js';
import Player from './Player.js';
import turbina from '../images/turbina.png';

const Main = () => {
    return (
        <div className="main">
            <Header/>
            <img className="main__logo" alt="logo" src={turbina} />
            <Player/>
        </div>
    )
}

export default Main;