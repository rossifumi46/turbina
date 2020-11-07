import React                  from 'react';
import {switcher, toggleMore} from './scripts.js'

const Player = () => {
    function playerButtonSwitch() {
        const playButton = document.querySelector('.player__button_type_play')
        const pauseButton = document.querySelector('.player__button_type_pause')

        if (playButton) {
            playButton.classList.toggle("player__button_type_play");
            playButton.classList.toggle("player__button_type_pause")
        } else if (pauseButton) {
            pauseButton.classList.toggle("player__button_type_play");
            pauseButton.classList.toggle("player__button_type_pause")
        }
    }

    return (
        <div className="player">
            <div className="player__control">
                <button onClick={playerButtonSwitch} className="player__button_type_play"/>
                <div className="player__wrapper">
                    <div className="player__additional-container">
                        <div className="player__info-container">
                            <div className="player__row">
                                <p className="player__track-title">Контур — Хадн Дадн feat. Варя Карпова и Федя
                                    Быстров</p>
                                <p className="player__time-remaining">2:24</p>
                            </div>
                            <div className="player__progressbar">
                                <div className="player__progressbar_type_gone"></div>
                                <div className="player__progressbar_type_left"></div>
                            </div>
                        </div>
                        <button className="player__button_type_switcher hidden" onClick={switcher}>Текст песни</button>
                    </div>
                    <div className="player__container player__container_type_hidden">
                        <div className="player__releases player__releases_type_hidden">
                            <h3 className="player__title">Релизы:</h3>
                            <ul className="player__list">
                                <li className="player__release">Лодка — СБПЧ feat. Маруся Романова</li>
                                <li className="player__release">Лодка — СБПЧ feat. Маруся Романова</li>
                                <li className="player__release">Лодка — СБПЧ feat. Маруся Романова</li>
                            </ul>

                        </div>

                        <div className="player__text player__text_type_hidden">
                            <h3 className="player__text-title">Текст</h3>
                            <p className="player__song-text">
                                Мой милый, милый мальчик,
                                Моя милая, милая девочка.
                                Никогда не знаешь, что будет дальше
                            </p>
                        </div>
                    </div>
                </div>
                <button className="player__button_type_additional" onClick={toggleMore}></button>
            </div>
        </div>
    )
}

export default Player;