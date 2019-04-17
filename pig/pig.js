function eye_right() {
  var eye = $('.box_right');
  var eyeX = eye.offset().left + eye.width() / 2;
  var eyeY = eye.offset().top + eye.height() / 2;
  $('body').on('mousemove', function(event) {
    var rad = Math.atan2(event.pageY - eyeY, event.pageX - eyeX);
    var rot = rad * (180 / Math.PI);
    eye.css('transform', 'rotate(' + rot + 'deg)')
    console.log(rot)
  });
}
eye_right();

function eye_left() {
  var eye = $('.box_left');
  var eyeX = eye.offset().left + eye.width() / 2;
  var eyeY = eye.offset().top + eye.height() / 2;
  $('body').on('mousemove', function(event) {
    var rad = Math.atan2(event.pageY - eyeY, event.pageX - eyeX);
    var rot = rad * (180 / Math.PI);
    eye.css('transform', 'rotate(' + rot + 'deg)')
    console.log(rot)
  });
}
eye_left();
