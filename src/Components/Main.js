import React, {useState} from 'react'
// import { useSpring, animated, } from 'react-spring';

import Header from './Header.js';
import Player from './player/Player.js';


const Main = () => {
    // const AnimatedPlayer = animated(Player)

    // const extendСonfig = useSpring({
    //     to: { height: isPlayerExtend ? calcExtendedHeight() : calcDefaultHeight() },
    //     config: { mass: 1, tension: isMobile ? 110 : 120, friction: 17 }
    // })

    return (
        <div className="main">
            <Header/>
            <Player/>
        </div>
    )
}

export default Main;