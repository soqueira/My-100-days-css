function elastic() {
  var btn = document.querySelectorAll('.chk');
  var ball = document.getElementsByClassName('ball')[0];
  for (let i = 0; i < btn.length; i++) {
    btn[i].addEventListener('click', function() {
      if (i === 0) {
        ball.classList.add('anim');
        setTimeout(function() {
          ball.classList.remove('anim');
        }, 300);
      } else if (i === 1) {
        ball.classList.add('anim');
        setTimeout(function() {
          ball.classList.remove('anim');
        }, 300);
      } else if (i === 2) {
        ball.classList.add('anim');
        setTimeout(function() {
          ball.classList.remove('anim');
        }, 300)
      }
    });
  }
}
elastic()
