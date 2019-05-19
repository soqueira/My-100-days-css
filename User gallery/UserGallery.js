function infDisplay() {
  let info = document.getElementsByClassName('info')[0];
  let header = document.getElementsByClassName('info_top')[0];
  let main = document.getElementsByClassName('info_bottom')[0];
  let btn_close = document.getElementsByClassName('btn_close')[0];
  let anImg = document.getElementsByClassName('pic_profile')[0];
  let changeImg = document.getElementsByClassName('profile_change')[0];
  let name = document.getElementsByClassName('name')[0];
  let btns = document.querySelectorAll('.btn_profile');
  for (let i = 0; i < btns.length; i++) {
    btns[i].addEventListener('click', function() {
      if (i === 0) {
        header.classList.add('active');
        main.classList.add('active');
        info.classList.add('active_info');
        btn_close.classList.add('active_btn_close')
        anImg.classList.add('active_img');
        changeImg.src = 'https://100dayscss.com/codepen/13-1.jpg';
        name.innerHTML = 'Julia Toth';
      } else if (i === 1) {
        header.classList.add('active');
        main.classList.add('active');
        info.classList.add('active_info');
        btn_close.classList.add('active_btn_close')
        anImg.classList.add('active_img');
        changeImg.src = 'https://100dayscss.com/codepen/13-2.jpg';
        name.innerHTML = 'Michael F. Dobson';
      } else if (i === 2) {
        header.classList.add('active');
        main.classList.add('active');
        info.classList.add('active_info');
        btn_close.classList.add('active_btn_close')
        anImg.classList.add('active_img');
        changeImg.src = 'https://100dayscss.com/codepen/13-3.jpg';
        name.innerHTML = 'Ruth D. Pixley';
      } else if (i === 3) {
        header.classList.add('active');
        main.classList.add('active');
        info.classList.add('active_info');
        btn_close.classList.add('active_btn_close')
        anImg.classList.add('active_img');
        changeImg.src = 'https://100dayscss.com/codepen/13-4.jpg';
        name.innerHTML = 'Denise C. Roe';
      } else {
        header.classList.remove('active');
        main.classList.remove('active');
        info.classList.remove('active_info');
        btn_close.classList.remove('active_btn_close');
        anImg.classList.remove('active_img');

      }
    });
  }

}
infDisplay()
