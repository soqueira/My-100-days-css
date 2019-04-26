function open() {
  var btn_search = document.getElementsByClassName('search_box')[0];
  var input = document.getElementsByClassName('search_input')[0];
  btn_search.addEventListener('click', function() {
    if (input.classList.contains('search_active')) {
      input.classList.remove('search_active');
      setTimeout(function() {
        input.value = '';
      }, 300)

    } else {
      input.classList.add('search_active');
      setTimeout(function() {
        input.focus();
      }, 100)
    }
  });
  var toggle = document.getElementsByClassName('toggle')[0];
  var menu = document.getElementsByClassName('nav_left')[0];
  var container = document.getElementsByClassName('main_notification')[0];
  toggle.addEventListener('click', function() {
    if (container.classList.contains('menu_container_active')) {
      container.classList.remove('menu_container_active');
      menu.classList.remove('menu_active');
    } else {
      container.classList.add('menu_container_active');
      menu.classList.add('menu_active');
    }

  });

}
open()

function search() {
  $(".search_input").on("keyup", function() {
    var value = $(this).val().toLowerCase();
    $(".content").filter(function() {
      $(this).toggle($(this).text().toLowerCase().indexOf(value) > -1)
    });
  });
}
search();
