import React, {useState} from 'react'
import { useMediaQuery } from 'react-responsive'
import { useSpring, animated, } from 'react-spring';

import Header from './Header.js';
import Player from './player/Player.js';


const Main = () => {
    const AnimatedPlayer = animated(Player)

    const isMobile = useMediaQuery({ query: '(max-width: 480px)' });
    const isShortMobile = useMediaQuery({ query: '(max-width: 480px) and (max-height: 550px)' })
    const isTallMobile = useMediaQuery({ query: '(max-width: 480px) and (min-height: 551px)' })
    const isWideMobile = useMediaQuery({ query: '(max-width: 600px)' })
    const isNarrowDesktop = useMediaQuery({ query: '(max-width: 1024px)' })

    const [isPlayerExtend, setPlayerState] = useState(false)

    const calcDefaultHeight = () => {
        switch (true) {
            case isTallMobile || isShortMobile:
            return "35px"
            case isWideMobile || isNarrowDesktop:
            return "38px"
            default:
            return "42px"
        }
    };
    
    const calcExtendedHeight = () => {
        switch (true) {
            case isTallMobile:
            return '466px'
            case isShortMobile:
            return '380px'
            case isWideMobile:
            return '220px'
            case isNarrowDesktop:
            return '170px'
            default:
            return '186px'
        }
    };

    const extendСonfig = useSpring({
        to: { height: isPlayerExtend ? calcExtendedHeight() : calcDefaultHeight() },
        config: { mass: 1, tension: isMobile ? 110 : 120, friction: 17 }
    })

    const onPlayerExtend = () => {
        setPlayerState(!isPlayerExtend);
    }

    return (
        <div className="main">
            <Header/>
            <Player
                // style={extendСonfig}
                isPlayerExtend={isPlayerExtend}
                onPlayerExtend={onPlayerExtend}
            />
        </div>
    )
}

export default Main;