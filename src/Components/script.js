

export function toggleMore() {
  const releasesElement = document.querySelector('.player__releases');
  const textElement = document.querySelector('.player__text');
  const moreElement = document.querySelector('.more__container');
  const moreBtn = document.querySelector('.more');
  if (!moreElement.classList.contains('more__container_hidden')) {
    if (releasesElement.classList.contains('player__releases_hidden')) {
      textElement.classList.toggle('player__text_hidden');
    } else {
      releasesElement.classList.toggle('player__releases_hidden');
    }
  } else {
    releasesElement.classList.toggle('player__releases_hidden');
  }

  moreElement.classList.toggle('more__container_hidden');
  
  moreBtn.classList.toggle('hide');
}

export function switcher() {
  const releasesElement = document.querySelector('.player__releases');
  const textElement = document.querySelector('.player__text');
  textElement.classList.toggle('player__text_hidden');
  releasesElement.classList.toggle('player__releases_hidden');
}