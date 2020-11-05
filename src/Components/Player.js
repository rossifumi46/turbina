import React   from 'react';




const Player = () => {
    const releasesElement = document.querySelector('.player__releases');
    const textElement = document.querySelector('.player__text');
    const moreElement = document.querySelector('.player__container');
    const moreBtn = document.querySelector('.player__button_type_additional');

    function toggleMore() {

        if (!moreElement.classList.contains('player__container_type_hidden')) {
            releasesElement.classList.contains('player__releases_type_hidden') ?
              textElement.classList.remоve('player__text_type_hidden') :
              releasesElement.classList.add('player__releases_type_hidden')
            }
        else {
            releasesElement.classList.toggle('player__releases_type_hidden');
        }

        moreElement.classList.toggle('player__container_type_hidden');

        moreBtn.classList.toggle('player__button_type_hideplay');
    }
    function switcher() {
        const releasesElement = document.querySelector('.player__releases');
        const textElement = document.querySelector('.player__text');
        textElement.classList.toggle('player__text_hidden');
        releasesElement.classList.toggle('player__releases_hidden');
    }

    return (
        <div className="player">
           <div className="player__control">
            <button className="player__button_type_play"/>
                <div className="player__wrapper">
                    <div className="player__row">
                        <p className="player__track-title">Контур — Хадн Дадн feat. Варя Карпова и Федя Быстров</p>
                        <p className="player__time-remaining">2:24</p>
                    </div>
                    <div className="player__progressbar">
                        <div className="player__progressbar_type_gone"></div>
                        <div className="player__progressbar_type_left"></div>
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

                <button className="player__button_type_switcher" onClick={switcher}>Текст песни</button>
                <button className="player__button_type_additional" onClick={toggleMore}></button>
           </div>
        </div>
    )
}

export default Player;