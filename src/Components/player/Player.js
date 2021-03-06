import React, {useState, useRef} from 'react'
import PlayerTimeLine from './PlayerTimeLine'
import throttling from '../../utils/throttlings'
import playlist from './playlist'
import playImg from '../../images/play-clip.png'
import { useMediaQuery } from 'react-responsive'

const classNames = require('classnames');

const Player = (props) => {
    const isMobile = useMediaQuery({ query: '(max-width: 480px)' });
    const isShortMobile = useMediaQuery({ query: '(max-width: 480px) and (max-height: 550px)' })
    const isTallMobile = useMediaQuery({ query: '(max-width: 480px) and (min-height: 551px)' })
    const isWideMobile = useMediaQuery({ query: '(max-width: 600px)' })
    const isNarrowDesktop = useMediaQuery({ query: '(max-width: 1024px)' })

    const [isPlayerExtend, setPlayerState] = useState(false)
    const [ btnsIsActive, setBtnIsActive] = useState(false)
    const [ isTextActive, setIsTextActive] = useState(false)
    const [ switchBtnText, setSwitchBtnText] = useState('Текст песни')
    const [ isPlaying, setIsPlaying ] = useState(false)
    const [leftTime, setLeftTime] = useState(0)
    const [duration, setDuration] = useState(0)
    const [currentTrack, setCurrentTrack] = useState(playlist[0])

    const moreContainerClass = classNames('player__container')
    const btnsClass= classNames('player__buttons', {
        'hidden': !btnsIsActive
    });
    const coverClass = classNames('player__cover')
    
    const cover = <img src={currentTrack.cover} alt="обложка" className={coverClass}/>;

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

    const handleMoreClick = () => {
        setPlayerState(!isPlayerExtend)
        setBtnIsActive(!btnsIsActive)
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
        'player__button_type_hideplay': isPlayerExtend
    })    

    const onTimeUpdate = throttling(e => {
        setLeftTime(e.target.duration - e.target.currentTime)
    }, 1000)

    const onPlay = e => {
        setDuration(e.target.duration)
    }
    const myPlayer = useRef(null)


    return (
        <div className="player" style={{height: isPlayerExtend ? calcExtendedHeight() + 30 : calcDefaultHeight() + 30 }}>
            <audio src={currentTrack.file}
                ref={myPlayer}
                onTimeUpdate={onTimeUpdate}
                // onPause
                onPlay={onPlay}
                onLoadedData={() => {
                    setLeftTime(myPlayer.current.duration);
                    setDuration(myPlayer.current.duration);
                }}
                onEnded={_=> {
                    const nextID = currentTrack.id === playlist.length-1 ? 0 : currentTrack.id + 1
                    setCurrentTrack(playlist[nextID])
                    setIsPlaying(false)
                }}
            />

            <div className="player__control">
                <button onClick={playerButtonSwitch} className={playerClass}/>
                <div className="player__track-title-container">
                    <p className="player__track-title">{`${currentTrack.title} - ${currentTrack.artist}`}</p>
                </div>
                <p className="player__time-remaining">{Math.floor(leftTime/60)}:{Math.floor(leftTime%60)}</p>
                <PlayerTimeLine 
                    leftTime={leftTime}
                    duration={duration}
                    onCLick={timeToGo => myPlayer.current.currentTime = timeToGo}
                />         
            </div>
            <div className={btnsClass}>
                <button className="player__button player__button_type_clip"><img className="player__play-clip" src={playImg} alt="" />Клип</button>
                <button className="player__button player__button_type_switcher" onClick={handleSwitchClick}>{switchBtnText}</button>
            </div>
            <button className={moreBtnClass} onClick={handleMoreClick}/>
            {isPlayerExtend && cover}
            {isPlayerExtend &&
                <div className={moreContainerClass}>
                    <div className={releasesClass}>
                        <h3 className="player__title">Релизы:</h3>
                        <ul className="player__list">
                            {playlist.map(item => {
                                const releaseClass = classNames('player__release', {
                                    'player__release_active': currentTrack === item
                                });
                                return <li key={item.id}
                                    className={releaseClass}
                                    onClick={_=> {
                                        setCurrentTrack(item)
                                        const status = currentTrack === item
                                        setIsPlaying(status)
                                    }}
                                >
                                    {item.title} - {item.artist}
                                </li>
                            }
                            )}
                        </ul>
                    </div>

                    <div className={textClass}>
                        <h3 className="player__text-title">Текст</h3>
                        <p className="player__song-text">
                            {currentTrack.text}
                        </p>
                    </div>
                </div> 
            }
            
        </div>
    )
}

export default Player;