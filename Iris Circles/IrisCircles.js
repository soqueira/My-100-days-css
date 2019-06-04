function circles() {
  let container = document.getElementsByClassName('container')[0];
  let dot = document.getElementsByClassName('dot');
  const numberOfDots = 12;
  const numberOfRings = 6;
  for (let i = 0; i < numberOfRings; i++) {
    container.innerHTML += '<div class="ring"></div>';
    let ring = document.getElementsByClassName('ring')[i];
    var opacity = i - 1;

    for (let j = 0; j < numberOfDots; j++) {
      let nullbase = j - 1;
      let deg = (nullbase * 30);
      ring.innerHTML += '<div class="dot dot-' + j + '" style="opacity:' + (1 - (opacity / 6)) + ';"></div>';
      ring.style.cssText = 'animation: inOut-' + i + ' 2s ease-in-out alternate infinite';

    }
  }
  for (let p = 0; p < dot.length; p++) {
    let nullbase = p - 1;
    let angle = 360 / 12;
    let deg = (nullbase * angle);
    dot[p].style.cssText += 'transform: translate3d(0, -100px, 0) rotate(' + deg + 'deg);transform-origin: 0 100px;';
  }

}

//gen keyframes
for (k = 1; k <= 6; k++) {
  let nullbase = k - 1;
  console.log('@keyframes inOut-' + k + '{0%{transform: scale(' + (1 - (nullbase / 7)) + ')rotate(' + (nullbase * 5) + 'deg)}100%{transform: scale(' + (1 - (nullbase / 22)) + ') rotate(' + ((nullbase * 10) + 360) + 'deg)}}');
}

circles()
