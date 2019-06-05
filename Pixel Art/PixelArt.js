function pixels() {
  let container = document.getElementsByClassName('container')[0];
  for (let i = 1; i <= 400; i++) {
    container.innerHTML += '<div class="pixel"></div>';
  }
  let pixel = document.getElementsByClassName('pixel');
  for (let j = 1; j <= 400; j++) {
    if (j === 129 || j === 130 || j === 148 || j === 149 || j === 150 || j === 151 || j === 167 || j === 168 || j === 169 || j === 170 || j === 171 || j === 172 || j === 186 || j === 187 || j === 189 || j === 190 || j === 192 || j === 193 ||
      j === 206 || j === 207 || j === 208 || j === 209 || j === 210 || j === 211 || j === 212 || j === 213 || j === 228 || j === 231 || j === 247 || j === 249 || j === 250 || j === 252 || j === 266 || j === 268 || j === 271 || j === 273) {
      pixel[j].classList.add('active');
    }
    pixel[j].addEventListener('click', function() {
      if (pixel[j].classList.contains('active')) {
        pixel[j].classList.remove('active');
      } else {
        pixel[j].classList.add('active');
      }
    });
  }

}
pixels()
