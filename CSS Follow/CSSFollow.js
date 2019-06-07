function follow() {
  let container = document.getElementsByClassName('container')[0];
  let mouseFollow = document.getElementsByClassName('mouseFollow')[0];
  let top;
  let left;
  container.addEventListener('mousemove', function(e) {
    top = (e.offsetY - 4) + 'px';
    left = (e.offsetX - 7) + 'px';
    mouseFollow.style.cssText = 'left: ' + left + '; top:' + top + ''
  });
}
follow()
