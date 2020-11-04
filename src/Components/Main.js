import React from 'react';
import '../blocks/turbina/turbina.css';   
import Header  from './Header.js';


const Main = () => {
    return (
        <div className="main">
            <Header/>
            <div alt="turbina-logo" className="turbina"/>
        </div>
    )
}

export default Main;