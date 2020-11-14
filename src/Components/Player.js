import React, {useState} from 'react';
import { useMediaQuery } from 'react-responsive'

import coverImg from '../images/cover.png'
import playImg from '../images/play-clip.png'

const classNames = require('classnames');

const Player = () => {
    const [moreContainerIsOpen, setMoreContainerIsOpen] = useState(false)
    const [btnsIsActive, setBtnIsActive] = useState(false)
    const [coverIsHidden, setCoverIsHidden] = useState(true)
    const [isTextActive, setIsTextActive] = useState(false)
    const [switchBtnText, setSwitchBtnText] = useState('Текст песни')
    const [ playerState, setPlayerSate ] = useState(false)

    const isMobile = useMediaQuery({ query: '(max-width: 767px)' })

    const moreContainerClass = classNames('player__container', {
        'hidden': !moreContainerIsOpen
    })

    const btnsClass= classNames('player__buttons', {
        'hidden': !btnsIsActive
    })

    const coverClass = classNames('player__cover', {
        'hidden': coverIsHidden
    })

    const cover = <img src={coverImg} alt="" className={coverClass}/>

    const handleMoreClick = () => {
        setMoreContainerIsOpen(!moreContainerIsOpen)
        setBtnIsActive(!btnsIsActive)
        setCoverIsHidden(!coverIsHidden)
    }

    const handleSwitchClick = () => {
        setIsTextActive(!isTextActive)
        setSwitchBtnText(!isTextActive ? 'Релизы' : 'Текст песни')
    }

    const playerButtonSwitch = () => { setPlayerSate(!playerState) }

    const releasesClass = classNames('player__releases', {
        'hidden': isTextActive
    })

    const textClass = classNames('player__text', {
        'hidden': !isTextActive
    })

    const playerClass = classNames('player__button', {
        'player__button_type_play': !playerState,
        'player__button_type_pause': playerState
    })

    const moreBtnClass = classNames('player__button player__button_type_more', {
        'player__button_type_hideplay': moreContainerIsOpen
    })

    return (
        <div className="player">
            {!isMobile && cover}
            <div className="player__control">
                <button onClick={playerButtonSwitch} className={playerClass}/>
                <div className="player__wrapper">
                    <div className="player__additional-container">
                        <div className="player__info-container">
                            <div className="player__row">
                                <p className="player__track-title">Контур — Хадн Дадн feat. Варя Карпова и Федя
                                    Быстров</p>
                                <p className="player__time-remaining">2:24</p>
                            </div>
                            <div className="player__progressbar">
                                <div className="player__progressbar-gone"></div>
                                <div className="player__progressbar-left"></div>
                            </div>
                        </div>
                        {isMobile && cover}
                        <div className={btnsClass}>
                            <button className="player__button player__button_type_clip"><img className="player__play-clip" src={playImg} alt="" />Клип</button>
                            <button className="player__button player__button_type_switcher" onClick={handleSwitchClick}>{switchBtnText}</button>
                        </div>
                    </div>
                    <div className={moreContainerClass}>
      
                        <div className={releasesClass}>
                            <h3 className="player__title">Релизы:</h3>
                            <ul className="player__list">
                                <li className="player__release player__release_active">Лодка — СБПЧ feat. Маруся Романова</li>
                                <li className="player__release">Лодка — СБПЧ feat. Маруся Романова</li>
                                <li className="player__release">Лодка — СБПЧ feat. Маруся Романова</li>
                            </ul>

                        </div>

                        <div className={textClass}>
                            <h3 className="player__text-title">Текст</h3>
                            <p className="player__song-text">
                                Мой милый, милый мальчик,
                                Моя милая, милая девочка.
                                Никогда не знаешь, что будет дальше
                            </p>
                        </div>
                    </div>
                </div>
                <button className={moreBtnClass} onClick={handleMoreClick}></button>
            </div>
        </div>
    )
}

export default Player;