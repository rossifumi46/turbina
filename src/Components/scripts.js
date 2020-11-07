export const toggleMore = () => {
    const releasesElement = document.querySelector('.player__releases');
    const textElement = document.querySelector('.player__text');
    const moreElement = document.querySelector('.player__container');
    const moreBtn = document.querySelector('.player__button_type_additional');
    const switchBtn = document.querySelector('.player__button_type_switcher');

    if (!moreElement.classList.contains('player__container_type_hidden')) {
        if (releasesElement.classList.contains('player__releases_type_hidden')) {
            textElement.classList.toggle('player__text_type_hidden');
        } else {
            releasesElement.classList.toggle('player__releases_type_hidden');
        }
    } else {
        releasesElement.classList.toggle('player__releases_type_hidden');
    }

    moreElement.classList.toggle('player__container_type_hidden');

    moreBtn.classList.toggle('player__button_type_hideplay');
    switchBtn.classList.toggle('hidden');
}


export const switcher = () => {
    const releasesElement = document.querySelector('.player__releases');
    const textElement = document.querySelector('.player__text');
    const switchBtn = document.querySelector('.player__button_type_switcher');

    if (textElement.classList.contains('player__text_type_hidden')) {
        switchBtn.textContent = 'Релизы';
    } else {
        switchBtn.textContent = 'Текст песни';
    }
    textElement.classList.toggle('player__text_type_hidden');
    releasesElement.classList.toggle('player__releases_type_hidden');
}
