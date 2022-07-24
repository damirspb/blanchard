document.addEventListener("DOMContentLoaded", () => {
  document.querySelectorAll('.dropdown__menu').forEach(el => {
    new SimpleBar(el, {
      scrollbarMaxSize: 28
    })
  })
});
