/*
Задание 2
Реализовать функционал модального окошка, которое открывается с затемнением фона при нажатии на кнопку и закрывается по нажатию на кнопку-крестик или на тёмную область вокруг окошка.
ПОСЛЕДОВАТЕЛЬНОСТЬ РАБОТЫ:
1) HTML, CSS
Посмотрите видео, как подготовить верстку: 
*/ 

const callBtn = document.querySelector(".call-btn");
const closeBtn = document.querySelector(".close-btn");

const modalContent = document.querySelector('.modal__content')
const modal = document.querySelector('.modal')
callBtn.addEventListener('click', () =>{
  modal.classList.add('active')
})
closeBtn.addEventListener('click', () => {
  modal.classList.remove("active");
})
modal.addEventListener('click', e => {
  if (!modalContent.contains(e.target)) modal.classList.remove("active");

})

