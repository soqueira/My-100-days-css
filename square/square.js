anime({
  targets: '.square',

  translateY: [{
    value: -150,
    duration: 500,
    easing: 'easeOutExpo'
  }, {
    value: 0,
    duration: 500,
    easing: 'easeInQuad'
  }],
  rotate: [{
    value: 180,
    duration: 1550,
    easing: 'easeOutExpo'
  }],
  height: [{
    value: 200,
    duration: 250,
    delay: 500,
    easing: 'linear'
  }, {
    value: 100,
    duration: 350,
    delay: 250,
    easing: 'linear'
  }, {
    value: 200,
    duration: 350,
    delay: 50,
    easing: 'linear'
  }],
  scaleX: [{
    value: 1.8,
    duration: 350,
    delay: 1000
  }, {
    value: 1,
    duration: 350,
    delay: 50
  }],

  easing: 'linear',
  loop: true
});
anime({
  targets: '.shadow',
  scaleX: [{
    value: .5
  }, {
    value: 1
  }],
  easing: 'easeOutExpo',
  duration: 1750,
  loop: true
});
