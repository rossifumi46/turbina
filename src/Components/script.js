

export function toggleMore() {
  const releasesElement = document.querySelector('.player__releases');
  const moreElement = document.querySelector('.player__releases');
  const moreBtn = document.querySelector('.more');
  moreElement.classList.toggle('more__container_hidden');
  releasesElement.classList.toggle('player__releases_hidden');
  moreBtn.classList.toggle('hide');
}

export function switcher() {
  const releasesElement = document.querySelector('.player__releases');
  const textElement = document.querySelector('.player__text');
  textElement.classList.toggle('player__text_hidden');
  releasesElement.classList.toggle('player__releases_hidden');
}