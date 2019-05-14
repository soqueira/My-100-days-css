function flip() {
  let marker = document.getElementsByClassName('marker_svg')[0];
  let map_inf = document.getElementsByClassName('content_map')[0];
  marker.addEventListener('click', function() {
    if (marker.classList.contains('active_marker')) {
      marker.classList.remove('active_marker');
      map_inf.classList.remove('active_content_map');
    } else {
      marker.classList.add('active_marker');
      map_inf.classList.add('active_content_map');
    }
  });
  map_inf.addEventListener('click', function() {
    if (map_inf.classList.contains('active_content_map')) {
      marker.classList.remove('active_marker');
      map_inf.classList.remove('active_content_map');
    } else {
      marker.classList.add('active_marker');
      map_inf.classList.add('active_content_map');
    }
  });
}
flip()
