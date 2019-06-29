function calendar() {
  let week = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
  let d = new Date();
  let yesterdayWeek = week[d.getDay() - 1];
  let beforeYesterdayWeek = week[d.getDay() - 2];
  let threeDaysBeforeWeek = week[d.getDay() - 3];
  let day = d.getDate()
  let yestardayDay = day - 1;
  let beforeYesterdayDay = day - 2;
  let threeDaysBeforeDay = day - 3;

  let weekDiv = document.getElementsByClassName('week');
  let dayDiv = document.getElementsByClassName('day');

  weekDiv[0].innerHTML = threeDaysBeforeWeek;
  weekDiv[1].innerHTML = beforeYesterdayWeek;
  weekDiv[2].innerHTML = yesterdayWeek;
  weekDiv[3].innerHTML = week[d.getDay()];
  dayDiv[0].innerHTML = threeDaysBeforeDay;
  dayDiv[1].innerHTML = beforeYesterdayDay;
  dayDiv[2].innerHTML = yestardayDay;
  dayDiv[3].innerHTML = day;
}
calendar()
