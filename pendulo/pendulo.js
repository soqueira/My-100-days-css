let div = document.getElementsByClassName('center')[0];
for(let i = 0; i< 70; i++){
  div.innerHTML += '<div class="dots"></div>'
}
let dots = document.querySelectorAll('.dots');



let duration = 60;
let nDots = 70;
let oscilations = 40;
let i = 0;
let time;
  for(i; i <= nDots; i++){
      time = duration / (oscilations + nDots - i);
      timeAnim = time * 1000;
      dots[i].style.cssText = 'animation: wave '+ timeAnim +'ms ease-in-out infinite';
  }
