import React   from 'react';
import { toggleMore, switcher } from './script.js'

const Player = () => {
    return (
        <div className="player">
           <div className="player__control">
            <button className="play"></button>
                <div className="player__wrapper">
                    <div className="player__row">
                        <p className="track-info">Контур — Хадн Дадн feat. Варя Карпова и Федя Быстров</p>
                        <div className="time">2:24</div>
                    </div>
                    <div className="progress-bar">
                        <div className="gone"></div>
                        <div className="left"></div>
                    </div>
                    <div className="more__container more__container_hidden">
                        <div className="player__releases player__releases_hidden">
                            <h3 className="player__title">Релизы:</h3>
                            <ul className="player__list">
                                <li className="player__release">Лодка — СБПЧ feat. Маруся Романова</li>
                                <li className="player__release">Лодка — СБПЧ feat. Маруся Романова</li>
                                <li className="player__release">Лодка — СБПЧ feat. Маруся Романова</li>
                            </ul>
                        </div>
                        <div className="player__text player__text_hidden">
                            <h3 className="player__text-title">Текст</h3>
                            <p className="player__song-text">
                                Мой милый, милый мальчик,
                                Моя милая, милая девочка.
                                Никогда не знаешь, что будет дальше
                            </p>
                        </div>
                    </div>
                    
                </div>

                <button className="switcher" onClick={switcher}>Текст песни</button>
                <button className="more" onClick={toggleMore}></button>
           </div>
        </div>
    )
}

export default Player;