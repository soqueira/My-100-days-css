function fadeModal(n) {
  let modal_1 = document.getElementsByClassName('modal_1')[0];
  let modal_2 = document.getElementsByClassName('modal_2')[0];
  let modal_3 = document.getElementsByClassName('modal_3')[0];
  if (n === 'modal_1') {
    if (modal_1.classList.contains('active')) {
      modal_1.classList.remove('active');
      modal_2.classList.add('active');
    }
  } else if (n === 'modal_2') {
    if (modal_2.classList.contains('active')) {
      modal_2.classList.remove('active');
      modal_3.classList.add('active');
    }

  } else if (n === 'modal_3') {
    if (modal_3.classList.contains('active')) {
      modal_3.classList.remove('active');
      modal_1.classList.add('active');
    }

  }
}
fadeModal()
