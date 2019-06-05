function pixels() {
  let container = document.getElementsByClassName('container')[0];
  for (let i = 1; i <= 400; i++) {
    container.innerHTML += '<div class="pixel"></div>';
  }
  let pixel = document.getElementsByClassName('pixel');
  for (let j = 1; j <= 400; j++) {
    if (j == 71 || j== 72 || j== 73 || j== 74 || j== 75 || j== 76 || j== 90 || j== 91 || j== 93 || j== 94 || j== 95 || j== 96 || j== 97 || j== 110 || j== 111 || j== 112 || j== 113 || j== 114 || j== 115 || j== 116 || j== 117 || j== 130 || j== 131 || j== 132 || j== 133 || j== 150 || j== 151 || j== 152 || j== 153 || j== 154 || j== 155 || j== 164 || j== 169 || j== 170 || j== 171 || j== 172 || j== 184 || j== 185 || j== 188 || j== 189 || j== 190 || j== 191 || j== 192 || j== 193 || j== 194 || j== 204 || j== 205 || j== 206 || j== 207 || j== 208 || j== 209 ||j== 210 || j== 211 || j== 212 || j== 214 || j== 224 || j== 225 || j== 226 || j== 227 || j== 228 || j== 229 || j== 230 || j== 231 || j== 232 || j== 245 || j== 246 || j== 247 || j== 248 || j== 249 || j== 194 || j== 194 || j== 194 || j== 194 || j== 250 || j== 251 || j== 252 || j== 266 || j== 267 || j== 268 || j== 269 || j== 270 || j== 271 || j== 287 || j== 288 || j== 289 || j== 290 || j== 307 || j== 308 || j== 310 || j== 327 || j== 330 || j== 347 || j== 348 || j== 350 || j== 351) {
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
