import React, {useState} from 'react';


const PlayerItem = ({item, onClick}) => {
    const { title, artist, id} = item

    return <li 
      key={id}
      className='player__release'
      onClick={_=> onClick(item)}
    >
      {title} - {artist}
    </li>
}

export default PlayerItem;