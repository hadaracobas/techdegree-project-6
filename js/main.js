
// video media player
$('video').mediaelementplayer({
  features: ['playpause', 'tracks', 'progress', 'fullscreen', 'volume',],
  startLanguage: 'en',
  stretching: 'responsive'
});


// Highlight Text
const v = document.getElementsByTagName('video')[0];
const spanText = document.querySelectorAll('p span');

v.ontimeupdate = () => {
  const vTime = v.currentTime;

  for(let i = 0; i < spanText.length; i += 1) {
    if(vTime < spanText[i].getAttribute('data-end') && vTime > spanText[i].getAttribute('data-start')) {
      spanText[i].style.color = "#F15025"
    } else{
      spanText[i].style.color = "#101935"
    }
  }
};




// play the clicked point
for(let i = 0; i < spanText.length; i += 1) {
  spanText[i].addEventListener('click', (event) => {
    v.currentTime = event.target.getAttribute('data-start');
    v.play();
  })
}
