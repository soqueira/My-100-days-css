function checklist_data() {
  const week = ['Monday', 'Tuesday', 'Wednesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];

  const month = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
  const d = new Date();

  let div_week = document.getElementsByClassName('week')[0];
  let div_month = document.getElementsByClassName('month')[0];
  let div_day = document.getElementsByClassName('day')[0];
  let div_year = document.getElementsByClassName('year')[0];

  div_week.innerHTML = week[d.getDay()];
  div_month.innerHTML = month[d.getMonth()];
  div_day.innerHTML = d.getDate();
  div_year.innerHTML = d.getFullYear();
}
checklist_data()
