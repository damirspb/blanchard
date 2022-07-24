document.addEventListener("DOMContentLoaded", () => {
  const element = document.querySelector('.filter__select');
  const choices = new Choices(element, {
    searchEnabled: false,
    itemSelectText: '',
  });
  // открытие, чтобы было удобнее искать классы
  // let choices1 = document.querySelector('.choices')
  let choicesList = document.querySelector('.choices__list--dropdown')
  choices1.classList.add('is-open')
  choices1.classList.add('is-focused')
  choices1.setAttribute("aria-expanded", "true");
  choicesList.classList.add('is-active')
  choicesList.setAttribute("aria-expanded", "true");
});
