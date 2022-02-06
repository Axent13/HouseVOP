const $videoSection = document.querySelector('.video');
const $video = document.querySelector('.video__video');
const $playButton = document.querySelector('.video__play-button');


$videoSection.onclick = () => {
  if ($video.paused) {
    $video.play();
    $playButton.classList.add('video__play-button_hidden');
  } else {
      $video.pause();
      $playButton.classList.remove('video__play-button_hidden');
  }
}

ymaps.ready(init);

function init(){
  var myMap = new ymaps.Map("map", {
      center: [55.76, 37.64],
      zoom: 7,
      controls: []
  });
  console.log('init');
}
