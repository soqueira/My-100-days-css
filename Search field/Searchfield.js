function suggestions() {
  let input = document.getElementsByClassName('search')[0];
  let suggest = document.getElementsByClassName('suggestions')[0];
  let suggestList = document.getElementsByClassName('list_suggestions')[0];
  input.addEventListener('keyup', function() {
    let text = input.value;
    if (text) {
      suggest.classList.add('active');
      suggestList.innerHTML = '<li><b>' + text + '</b></li>' + '<li>truth and <b>' + text + '</b></li>' + '<li>' + 'continued to be of <b>' + text + '</b> however, they</li>';
      if (text.length >= 9) {
        suggest.style.cssText = 'height: 120px; bottom:-123px';
        if (text.length >= 18) {
          suggest.style.cssText = 'height: 138px; bottom:-141px';
        }
      } else {
        suggest.style.cssText = 'height: 95px; bottom:-98px';
      }
    } else {
      suggest.classList.remove('active');
    }
  });
}
suggestions()
