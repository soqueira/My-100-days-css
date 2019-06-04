function Pendulum() {
  let container = document.getElementsByClassName('center')[0];
  let duration = 60;
  let nDots = 70;
  let oscilations = 40;
  let time;
  let timeAnim;
  for (let i = 0; i < 70; i++) {
    time = duration / (oscilations + nDots - i);
    timeAnim = time * 1000;
    container.innerHTML += '<div class="dots"></div>';
    let dots = document.getElementsByClassName('dots')[i];
    dots.style.cssText = 'animation: wave ' + timeAnim + 'ms ease-in-out infinite'
  }
}
Pendulum()
