function clock() {
  setInterval(function() {

    let monthNames = ["January", "February", "March", "April", "May", "June",
      "July", "August", "September", "October", "November", "December"
    ];
    document.getElementById('month').innerHTML = monthNames[new Date().getMonth()];


    document.getElementById('timer_hour').innerHTML = new Date().toLocaleTimeString([], {
      hour: '2-digit',
      minute: '2-digit'
    });


    document.getElementById('day').innerHTML = new Date().toLocaleDateString([], {
      day: '2-digit'
    });


    document.getElementById('year').innerHTML = new Date().getFullYear();


    document.getElementById('week').innerHTML = new Date().toLocaleString('en-us', {
      weekday: 'short'
    });

  }, 1);
}
clock();

function sec() {
  setInterval(function() {
    let svgTime = document.getElementById('svgTime')
    let sync_paragraph = document.getElementsByClassName('sy')[0];
    let d = new Date();
    console.log(d.getSeconds());
    if (d.getSeconds() === 0) {
      svgTime.classList.remove('animOut');
      svgTime.classList.add('animIn');
      sync_paragraph.innerHTML = 'synchronized!'
      setTimeout(function(){
        sync_paragraph.style.display = 'none';
      }, 450);
    }
  }, 1000);
}
sec()
