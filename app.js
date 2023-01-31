const accordions = document.querySelectorAll(".accordion");

accordions.forEach((accordion) => {
  accordion.addEventListener("click", function () {
    accordions.forEach((accordion) => {
      if (accordion !== this) {
        accordion.classList.remove("active");
      }
    });
    this.classList.toggle("active");
  });
});
