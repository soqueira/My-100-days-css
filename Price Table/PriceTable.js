function barsWith() {
  let basic = document.getElementsByClassName('basic')[0];
  let pro = document.getElementsByClassName('pro')[0];
  let premium = document.getElementsByClassName('premium')[0];
  let fill = document.querySelectorAll('.fill');
  basic.addEventListener('mouseover', function() {
    fill[0].style.cssText = 'width: 20px';
    fill[1].style.cssText = 'width: 20px';
    fill[2].style.cssText = 'width: 20px';
  });
  basic.addEventListener('mouseleave', function() {
    fill[0].style.cssText = 'width: 0px';
    fill[1].style.cssText = 'width: 0px';
    fill[2].style.cssText = 'width: 0px';
  });
  pro.addEventListener('mouseover', function() {
    fill[0].style.cssText = 'width: 100px';
    fill[1].style.cssText = 'width: 220px';
    fill[2].style.cssText = 'width: 70px';
  });
  pro.addEventListener('mouseleave', function() {
    fill[0].style.cssText = 'width: 0px';
    fill[1].style.cssText = 'width: 0px';
    fill[2].style.cssText = 'width: 0px';
  });
  premium.addEventListener('mouseover', function() {
    fill[0].style.cssText = 'width: 330px';
    fill[1].style.cssText = 'width: 330px';
    fill[2].style.cssText = 'width: 330px';
  });
  premium.addEventListener('mouseleave', function() {
    fill[0].style.cssText = 'width: 0px';
    fill[1].style.cssText = 'width: 0px';
    fill[2].style.cssText = 'width: 0px';
  });
}
barsWith()
