import React, {useState, useRef} from 'react';
import { useMediaQuery } from 'react-responsive'

import PlayerTimeLine from './PlayerTimeLine'
import PlayerItem from './PlayerItem'
import throttling from '../../utils/throttlings'
import playlist from './playlist'
import coverImg from '../../images/cover.png'
import playImg from '../../images/play-clip.png'


const classNames = require('classnames');

const Player = () => {
    

    const [ moreContainerIsOpen, setMoreContainerIsOpen] = useState(false)
    const [ btnsIsActive, setBtnIsActive] = useState(false)
    const [ coverIsHidden, setCoverIsHidden] = useState(true)
    const [ isTextActive, setIsTextActive] = useState(false)
    const [ switchBtnText, setSwitchBtnText] = useState('Текст песни')
    const [ isPlaying, setIsPlaying ] = useState(false)
    const [leftTime, setLeftTime] = useState(0)
    const [duration, setDuration] = useState(0)
    

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

    const playerButtonSwitch = () => {
        if (isPlaying) {
            myPlayer.current.pause()
        } else {
            myPlayer.current.play()
        }
        setIsPlaying(!isPlaying)   
    }

    const releasesClass = classNames('player__releases', {
        'hidden': isTextActive
    })

    const textClass = classNames('player__text', {
        'hidden': !isTextActive
    })

    const playerClass = classNames('player__button', {
        'player__button_type_play': !isPlaying,
        'player__button_type_pause': isPlaying
    })

    const moreBtnClass = classNames('player__button player__button_type_more', {
        'player__button_type_hideplay': moreContainerIsOpen
    })

    const [currentTrack, setCurrentTrack] = useState(playlist[0])
    

    const onTimeUpdate = throttling(e => {
        setLeftTime(e.target.duration - e.target.currentTime)
    }, 1000)

    const onPlay = e => {
        setDuration(e.target.duration)
    }
    const myPlayer = useRef(null)
    return (
        <div className="player">
            {!isMobile && cover}
            <div className="player__control">
                <audio src={currentTrack.file}
                    ref={myPlayer}
                    onTimeUpdate={onTimeUpdate}
                    // onPause
                    onPlay={onPlay}
                    onLoadedData={_ => {
                        setLeftTime(myPlayer.current.duration);
                        setDuration(myPlayer.current.duration);
                    }}
                />
                <button onClick={playerButtonSwitch} className={playerClass}/>
                <div className="player__wrapper">
                    <div className="player__additional-container">
                        <div className="player__info-container">
                            <div className="player__row">
                                <p className="player__track-title">{currentTrack.title} - {currentTrack.artist}</p>
                                <p className="player__time-remaining">{Math.floor(leftTime/60)}:{Math.floor(leftTime%60)}</p>
                            </div>
                            <PlayerTimeLine 
                                leftTime={leftTime}
                                duration={duration}
                                onCLick={timeToGo => myPlayer.current.currentTime = timeToGo}
                            />
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
                                {playlist.map(item => <PlayerItem 
                                    item={item}
                                    onClick={item => {
                                        setCurrentTrack(item)
                                        setIsPlaying(false)         
                                    }}
                                />)}
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