function changeCheckbox(event) {
  let numberItem = event.target.classList[1].replace(/[^0-9]/g,"")
  let item = document.querySelector(`.check__span-${numberItem}`)

  switch(item.getAttribute('aria-checked')) {
    case "true":
      item.setAttribute('aria-checked', "false");
      break;
      case "false":
        item.setAttribute('aria-checked', "true");
        break;
      }
    }
