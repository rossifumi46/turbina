import React from 'react';
import '../blocks/turbina/turbina.css';   
import Header  from './Header.js';
import Player from './Player.js';
import turbina from '../images/turbina.png';
const Main = () => {
    return (
        <div className="main">
            <Header/>
            <img alt="turbina-logo" className="turbina" src={turbina}/>
            <Player/>
        </div>
    )
}

export default Main;