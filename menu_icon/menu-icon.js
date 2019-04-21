function menu_toggle() {
  let btn = document.getElementById('toggle');
  btn.addEventListener('click', function() {
    if (btn.classList.contains('active')) {
      btn.classList.remove('active')
      anime({
        targets: '.toggle_1',
        translateY: [{
          value: 0,
          delay: 400
        }],
        rotate: [{
          value: 0
        }]
      });
      anime({
        targets: '.toggle_2',
        scale: [{
          value: 1,
          easing: 'easeInQuad',
          duration: 500,
          delay: 50
        }]
      });
      anime({
        targets: '.toggle_3',
        translateY: [{
          value: 0,
          delay: 400
        }],
        rotate: [{
          value: 0
        }]
      })
    } else {
      btn.classList.add('active')
      anime({
        targets: '.toggle_1',
        translateY: [{
          value: 18
        }],
        rotate: [{
          value: 40,
          delay: 400
        }]
      });
      anime({
        targets: '.toggle_2',
        scale: [{
          value: 0
        }]
      });
      anime({
        targets: '.toggle_3',
        translateY: [{
          value: -18
        }],
        rotate: [{
          value: 130,
          delay: 400
        }]
      });
    }
  });
}
menu_toggle();
