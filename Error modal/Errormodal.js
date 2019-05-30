function toggle() {
  let modal = document.getElementsByClassName('modal_error')[0];
  let btn = document.getElementsByClassName('btn')[0]
  btn.addEventListener('click', function() {
    if (modal.classList.contains('show')) {
      modal.classList.remove('show');
      modal.classList.add('hide');
      setTimeout(function() {
        modal.classList.remove('hide');
        modal.classList.add('show');
      }, 1300);
    }
  });
}
toggle()
