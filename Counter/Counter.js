function counter() {
  let min = document.getElementsByClassName('min')[0];
  let plus = document.getElementsByClassName('plus')[0];
  let counterDisplay = document.getElementsByClassName('display_counter')[0];
  let number = 0;
  min.addEventListener('click', function() {
    counterDisplay.innerHTML = --number;
    counterDisplay.classList.add('fadeOut');
    setTimeout(function() {
      counterDisplay.classList.remove('fadeOut');
    }, 300);
  });
  plus.addEventListener('click', function() {
    counterDisplay.innerHTML = ++number;
    counterDisplay.classList.add('fadeIn');
    setTimeout(function() {
      counterDisplay.classList.remove('fadeIn');
    }, 300);
  });
}
counter()
