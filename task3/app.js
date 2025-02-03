/* 
Задание 3
Реализовать вертикальное меню, которое "выезжает" по клику на кнопку-бургер и закрывается по клику на кнопку-крестик.
Пример, как это должно выглядеть и работать:  https://ucarecdn.com/eef643a8-...
*/
const menuButton = document.querySelector(".menu-icon");
const sideMenu = document.querySelector(".side-menu");
const mainContent = document.querySelector(".main__content");
const closeBtn = document.querySelector(".close-btn");
menuButton.addEventListener('click', () =>{
  sideMenu.classList.add('active')
  mainContent.classList.add('active')
  menuButton.classList.add('none')
})
closeBtn.addEventListener('click', () => {
    sideMenu.classList.remove("active");
    mainContent.classList.remove("active");
    menuButton.classList.remove("none");
})