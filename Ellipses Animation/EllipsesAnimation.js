function ellipse() {
  let centerDiv = document.getElementsByClassName('center')[0];
  let nullbase;
  let degree;
  let closingFactor = 0.6;
  for (let i = 1; i <= 18; i++) {
    nullbase = i - 1;
    degree = (180 / 18) * nullbase;
    centerDiv.innerHTML += '<div class="ellipse ellipse-' + i + '" style="animation: ellipse-' + i + ' 5s ease-in-out infinite; transform: rotate(' + degree + 'deg)"></div>';

    //js gen keyframes *OPEN CONSOLE*
    console.log(`@keyframes ellipse-${i}{
        0%{
            transform: rotate(${degree}deg);
            border-radius: 50%;
            border-width: 2px;
        }
        50%{
            transform: rotate(0) scaleX(${2 / closingFactor});
            border-radius: 0%;
        }
        100%{
            transform: rotate(${(-1 * degree ) + 360}deg);
            border-radius: 50%;
            border-width: 2px;
        }
    }`);
  }
}
ellipse()
