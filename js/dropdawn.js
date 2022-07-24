let intervalId;
document.addEventListener("DOMContentLoaded", () => {
  const artistParamArr = [
    {
      name: 'Тинторетто',
      url: '../img/realism_tintoretto.jpg'
    },
    {
      name: 'Фридрих',
      url: '../img/realism_fridrix.jpg'
    },
    {
      name: 'Леонардо',
      url: '../img/realism_leonardo.jpg'
    },
    {
      name: 'Верроккьо',
      url: '../img/realism_verrokko.jpg'
    },
    {
      name: 'Моне',
      url: '../img/impressionism_mone.jpg'
    },
    {
      name: 'Сислей',
      url: '../img/impressionism_sislej.jpg'
    },
    {
      name: 'Мане',
      url: '../img/impressionism_mane.jpg'
    },
    {
      name: 'Ренуар',
      url: '../img/impressionism__renuar.jpg'
    },
    {
      name: 'Ван Гог',
      url: '../img/post-impressionism_van-gog.jpg'
    },
    {
      name: 'Сезанн',
      url: '../img/post-impressionism_sezann.jpg'
    },
    {
      name: 'Гоген',
      url: '../img/post-impressionism_gogen.jpg'
    },
    {
      name: 'Сёра',
      url: '../img/post-impressionism_syora.jpg'
    },
    {
      name: 'Кандинский',
      url: '../img/vanguard_kandinskij.jpg'
    },
    {
      name: 'Маринетти',
      url: '../img/vanguard_marinetti.jpg'
    },
    {
      name: 'Малевич',
      url: '../img/vanguard_malevich.jpg'
    },
    {
      name: 'Пикассо',
      url: '../img/vanguard_pikasso.jpg'
    },
    {
      name: 'Карра',
      url: '../img/futurism_karra.jpg'
    },
    {
      name: 'Прателла',
      url: '../img/futurism_pratella.jpg'
    },
    {
      name: 'Северини',
      url: '../img/futurism_severini.jpg'
    },
    {
      name: 'Балла',
      url: '../img/futurism_balla.jpg'
    }
  ]
  // Этот код всем Li делает бэкграунды
  document.querySelectorAll('.dropdown__item').forEach(li => li.style.backgroundImage = `url(${artistParamArr.find((el)=> el.name == li.innerText.trim()).url})`)
});
// Этот код делает функционал дропдауна
document.querySelectorAll('.dropdown__btn').forEach(e => {
  e.addEventListener('click', e => {
      const btnNumber = e.currentTarget.dataset.path
      document.querySelectorAll('.dropdown__menu').forEach(el => {
          const thisUl = document.querySelector(`[data-target=${btnNumber}]`)
          if (!thisUl.classList.contains('open')) {
              el.classList.remove('dropdown__menu--active')
              el.classList.remove('open')
              thisUl.classList.add('dropdown__menu--active')
              setTimeout(() => {
                  thisUl.classList.add('open')
              }, 0)
          }

          if (thisUl.classList.contains('open')) {
              clearTimeout(intervalId)
              intervalId = setTimeout(() => {
                  thisUl.classList.remove('dropdown__menu--active')
                  thisUl.classList.remove('open')
              }, 0)
          }
          window.onclick = e => {
              if (e.target == thisUl || e.target == document.querySelector(`[data-path=${btnNumber}]`)) {
                  return
              } else {
                  thisUl.classList.remove('dropdown__menu--active')
                  thisUl.classList.remove('open')
              }
          }
      })
  })
})




