import React, {useState} from 'react';

import SvgStreamingsClsBtn from './SvgStreamingsClsBtn.js';
import { streamings } from '../config.js'


const classNames = require('classnames');

const Streamings = () => {

    const [streamingsIsOpen, setStreamingsIsOpen] = useState(false);
    const [streamingsBtnIsClicked, setStreamingsBtnIsClicked] = useState(false);

    const streamListClass = classNames('streamings__list', {
        'streamings__list_type_mobile': streamingsIsOpen
    })
    const openBtnClass = classNames('streamings__open-btn', {
        'streamings__open-btn_is-clicked': streamingsIsOpen
    })

    const handleBtnClick = () => {
        setStreamingsIsOpen(!streamingsIsOpen);
        setStreamingsBtnIsClicked(!streamingsBtnIsClicked);
    };


    return (
        <div className="streamings">
            <button className={openBtnClass} 
                    onClick={handleBtnClick}>
                {streamingsBtnIsClicked ? <SvgStreamingsClsBtn/> : 'Стриминги'}
            </button>

            <ul className={streamListClass}>
                {streamings.map((streaming) => {
                    return <li className="streamings__list-item" key={streaming.id}>
                        <a className="streamings__link" rel="noreferrer" href={streaming.link} target="_blank">
                            {streaming.title} &#8599;
                        </a>
                    </li>
                })}
            </ul>
        </div>
    );
}

export default Streamings;
