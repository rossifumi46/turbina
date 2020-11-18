const PlayerTimeLine = ({leftTime, duration, onCLick}) => {
    const clickHandler = e => {
        const rect = e.currentTarget.getBoundingClientRect()
        const percentage  = (e.clientX - rect.left)/rect.width
        const timeToGo = percentage*duration
        onCLick(timeToGo)
    }

    return <div 
        className="player__progressbar"
        onClick={clickHandler}
    >
        <div 
            className="player__progressbar-gone"
            style={{
                width: `${(duration - leftTime)/duration * 100}%`
            }}
        />
    </div>
}

export default PlayerTimeLine;