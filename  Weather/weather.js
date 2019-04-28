function rain() {
  var rain_template = document.getElementsByClassName('rain')[0];

  for (i = 0; i <= 10; i++) {
    if (i >= 10) {
      for (n = 0; n <= 10; n++) {
        rain_template.innerHTML += "<div class='rain_drop_sm'></div>";
      }
    } else {
      rain_template.innerHTML += "<div class='rain_drop_big'></div>";
    }
  }
}
rain();

function moon_crater() {
  var moon = document.getElementsByClassName('moon')[0];
  for (i = 0; i <= 10; i++) {
    moon.innerHTML += "<div class='crater'></div>"
  }
}
moon_crater();
