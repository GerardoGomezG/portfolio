// Toogles hamburger button and mobile menu display
const x = document.querySelector('.menu-button');
x.addEventListener('click', () => {
  x.classList.toggle('change');
});

// Popup window
const openModalBtn1 = document.querySelector('#openModal1');
const openModalBtn2 = document.querySelector('#openModal2');
const closeModalBtn = document.querySelector('#closeModal');
const modal = document.querySelector('#modal');

openModalBtn1.addEventListener('click', () => {
  modal.showModal();
});

openModalBtn2.addEventListener('click', () => {
  modal.showModal();
});

closeModalBtn.addEventListener('click', () => {
  modal.close();
});
