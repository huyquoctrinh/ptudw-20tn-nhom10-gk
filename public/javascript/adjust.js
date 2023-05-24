
document.querySelectorAll(".dropdown-submenu > a").forEach(function (element) {
    element.addEventListener("click", function (e) {
      e.preventDefault();
      var subMenu = this.nextElementSibling;
      if (subMenu.classList.contains("show")) {
        subMenu.classList.remove("show");
        subMenu.parentElement.classList.remove("show");
      } else {
        subMenu.classList.add("show");
        subMenu.parentElement.classList.add("show");
      }
    });
  });
  