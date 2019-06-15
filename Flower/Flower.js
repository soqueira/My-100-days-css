function flower() {
  let flower = document.getElementsByClassName('flower')[0];
  let angle;
  let percentIn;
  let percentOut;
  for (let i = 0; i < 16; i++) {
    angle = 360 / 16;
    flower.innerHTML += '<div class="leaf leaf-' + i + '" style="animation: leaf-' + i + ' 7s ease infinite; transform: translateY(0) rotate(' + i * angle + 'deg) scale(1); "></div>';

    //gen css keyframes *OPEN CONSOLE*
    percentIn = (i * (45 / 16)) + 10;
    percentOut = (i * (10 / 16)) + 65;

    console.log(`@keyframes leaf-${i}{
          0,100%{
            transform: rotate(${i * angle}deg) translateY(0);
          }
          ${percentIn}%{
            transform: rotate(${i * angle}deg) translate(-35px, -35px) scale(2);
          }
          60%{
            transform: rotate(${i * angle}deg) translate(-35px, -35px) scale(2);
          }
          ${percentOut}%{
            transform: rotate(${i * angle}deg) translate(-35px, -35px) scale(2);
          }
        }`);
  }
}
flower()
