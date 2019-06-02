(function() {
  let scJs = function(arg) {
    if (!(this instanceof scJs)) {
      return new scJs(arg);
    }
    this.arg = arg;
  };
  scJs.fn = scJs.prototype = {
    search: function() {
      const input = document.querySelector(this.arg);
      const dataSearch = document.getElementsByClassName("itemSc");
      const container = document.getElementsByClassName("pens")[0];
      const notfound = document.getElementsByClassName("notFound")[0];
      console.log(dataSearch)
      input.addEventListener("keyup", function() {
        const valor = input.value.toLowerCase();
        for (let i = 0; i < dataSearch.length; i++) {
          if (valor) {
            if (dataSearch[i].dataset.search === valor) {
              dataSearch[i].style.display = "block";
            } else {
              dataSearch[i].style.display = "none";
            }
          } else {
            for (let j = 0; j < dataSearch.length; j++) {
              dataSearch[i].style.display = "block";
            }
          }
        }
        if (container.offsetHeight <= 0) {
          notfound.style.display = "block";
        } else if (container.offsetHeight >= 90) {
          notfound.style.display = "none";
        } else {
          notfound.style.display = "block";
        }
      });

    }
  }
  window.scJs = scJs, window.scJs = scJs;
})();
