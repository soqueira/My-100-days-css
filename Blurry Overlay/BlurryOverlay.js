function overlay() {
  let container = document.getElementsByClassName('container')[0];
  let top;
  let scaleY;
  let triggers = document.getElementsByClassName('trigger');
  for (let i = 0; i <= 200; i++) {
    top = (i - 1) * 2 + 'px';
    container.innerHTML += '<div class="trigger trigger-' + i + '" style="top: ' + top + '"></div>';
  }
  let plane = document.getElementsByClassName('plane')[0];
  for (let j = 0; j <= 200; j++) {
    scaleY = (1 / triggers.length) * j;

    triggers[j].addEventListener('mouseover', function() {
      plane.style.cssText = 'height:' + j * 2 + 'px;'
    });
    triggers[j].addEventListener('mouseleave', function() {
      plane.style.cssText = 'height:200px;'
    });
  }
}
overlay()
