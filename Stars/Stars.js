function stars() {
  let starsContent = document.getElementsByClassName('stars_content')[0];
  let stars = document.getElementsByClassName('stars');
  let shootingStar = document.getElementsByClassName('shooting_star');
  let starLeft, starTop, seconds, delay;
  for (let i = 1; i <= 1000; i++) {
    starLeft = Math.floor(Math.random() * 400) + 'px';
    starTop = Math.floor(Math.random() * 400) + 'px';
    seconds = Math.floor(Math.random() * 4) + 's';
    delay = Math.random() * -2 + 's';
    starsContent.innerHTML += '<span class="stars"></span>';
    stars[i].style.cssText += 'left:' + starLeft + '; top:' + starTop + '; animation:' + seconds + ' flickr ' + delay + ' infinite;'
  }
  let shootTop, shootSec;
  for (let j = 0; j < 5; j++) {
    starsContent.innerHTML += '<div class="shooting_star"></div>'
    shootTop = Math.floor(Math.random() * 70) + 'px';
    shootSec = Math.random() * 25 + 's';
    shootDelay = Math.random() * 25 + 's';
    shootingStar[j].style.cssText += 'display: block; top: ' + shootTop + '; animation: ' + shootSec + ' shooting_star ' + shootDelay + ' infinite';
  }
}
stars()
