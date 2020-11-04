import React from 'react';
import '../blocks/turbina/turbina.css';   
import Header  from './Header.js';
import Player from './Player.js';

const Main = () => {
    return (
        <div className="main">
            <Header/>
            <Player/>
            <div alt="turbina-logo" className="turbina"/>
        </div>
    )
}

export default Main;