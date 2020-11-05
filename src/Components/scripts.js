


export const toggleMore = () => {
  const releasesElement = document.querySelector('.player__releases');
  const textElement = document.querySelector('.player__text');
  const moreElement = document.querySelector('.player__container');
  const moreBtn = document.querySelector('.player__button_type_additional');

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
}


export const switcher = () => {
  const releasesElement = document.querySelector('.player__releases');
  const textElement = document.querySelector('.player__text');
  textElement.classList.toggle('player__text_type_hidden');
  releasesElement.classList.toggle('player__releases_type_hidden');
}
