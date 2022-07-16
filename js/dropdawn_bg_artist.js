document.addEventListener("DOMContentLoaded", (e=>{
  console.log(e);
  getBgArtist()
}));























function getBgArtist() {
  const artistsArr = [
    {
      id: 0,
      name: 'Реализм',
      namesArr: [
        {
          name: 'Тинторетто',
          backgroundImage: '../img/realism_tintoretto.jpg'
        },
        {
          name: 'Фридрих',
          backgroundImage: '../img/realism_fridrix.jpg'
        },{
          name: 'Леонардо',
          backgroundImage: '../img/realism_leonardo.jpg'
        },{
          name: 'Верроккьо',
          backgroundImage: '../img/realism_verrokko.jpg'
        },
      ]
    },
    {
      id: 1,
      name: 'Импрессионизм',
      namesArr: [
        {
          name: 'Моне',
          backgroundImage: '../img/impressionism_mone.jpg'
        },
        {
          name: 'Сислей',
          backgroundImage: '../img/impressionism_sislej.jpg'
        },{
          name: 'Мане',
          backgroundImage: '../img/impressionism_mane.jpg'
        },{
          name: 'Ренуар',
          backgroundImage: '../img/impressionism__renuar.jpg'
        },
      ]
    },
    {
      id: 2,
      name: 'Постимпрессионизм',
      namesArr: [
        {
          name: 'Ван Гог',
          backgroundImage: '../img/post-impressionism_van-gog.jpg'
        },
        {
          name: 'Сезанн',
          backgroundImage: '../img/post-impressionism_sezann.jpg'
        },{
          name: 'Гоген',
          backgroundImage: '../img/post-impressionism_gogen.jpg'
        },{
          name: 'Сёра',
          backgroundImage: '../img/post-impressionism_syora.jpg'
        },
      ]
    },
    {
      id: 3,
      name: 'Авангард',
      namesArr: [
        {
          name: 'Кандинский',
          backgroundImage: '../img/vanguard_kandinskij.jpg'
        },
        {
          name: 'Маринетти',
          backgroundImage: '../img/vanguard_marinetti.jpg'
        },{
          name: 'Малевич',
          backgroundImage: '../img/vanguard_malevich.jpg'
        },{
          name: 'Пикассо',
          backgroundImage: '../img/vanguard_pikasso.jpg'
        },
      ]
    },
    {
      id: 4,
      name: 'Футуризм',
      namesArr: [
        {
          name: 'Карра',
          backgroundImage: '../img/futurism_karra.jpg'
        },
        {
          name: 'Прателла',
          backgroundImage: '../img/futurism_pratella.jpg'
        },{
          name: 'Северини',
          backgroundImage: '../img/futurism_severini.jpg'
        },{
          name: 'Балла',
          backgroundImage: '../img/futurism_balla.jpg'
        },
      ]
    },
  ]
  const dropdown = document.querySelector('.dropdown')
 console.log(dropdown);

 for (let el of artistsArr) {
  let li = document.createElement('li');
li.className = "dropdown__list-item";
li.innerHTML = `<a class="dropdown__list-a" href="#">${el.name}</a>`;
li.addEventListener('mouseover', (event)=> {
  const ul = document.createElement('ul')
  ul.className = 'dropdown__content list-reset'
  // ul.className = 'list-reset'
// event.currentTarget.innerText
// event.innerHTML
const curArtist = event.currentTarget.innerText
console.log(el.namesArr);
  for (let item of el.namesArr.filter(({name})=> {
    return name == curArtist
  })) {
    const li_item = document.createElement('li')
    li_item.className = 'dropdown__content-item'
    li_item.innerHTML = `<a class="dropdown__content-a" href="#">${item.name}</a>`
    li_item.style.backgroundImage = `url(${item.backgroundImage})`
    ul.append(li_item)
  }
  li.append(ul)
  ul.classList.add('dropdown__content--active')
})
dropdown.append(li)
 }
 /////
}
