/*
Задание 4 (дополнительно, по желанию)
Самостоятельно реализовать меню, открывающееся по клику на бургер, который тут же превращается в крестик.
Образец - devby.io, или можно посмотреть здесь: https://ucarecdn.com/aeb69a87-...
Внутри открывающегося по клику на бургер блока сначала идет строка поиска, при клике в нее (фокусное состояние) фон всей строки, включая кнопку, меняется на белый.
Все нужные иконки скачать с сайта dev.by, из кода в инспекторе.
*/

const menuBurger = document.querySelector(".menu-burger");
const menuList = document.querySelector(".menu-list");
menuBurger.addEventListener('click', () => {
  menuList.classList.toggle('none')
  menuBurger.classList.toggle('active')
})