document.addEventListener("DOMContentLoaded", () => {
  getBgDropdawn()
});

function getBgDropdawn() {
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
  const artLiArr = document.querySelectorAll('.dropdown__item')
  artLiArr.forEach(li => li.style.backgroundImage = `url(${artistParamArr.find((el)=>el.name == li.innerText).url})`)

}








// console.log(artistParamArr);






