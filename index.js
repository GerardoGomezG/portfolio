// Toogles hamburger button and mobile menu display
const x = document.querySelector('.menu-button');
x.addEventListener('click', () => {
  x.classList.toggle('change');
});

// Popup window

// Static design: start
// const openModalBtn = document.querySelector('#openModal');
// const openModalBtn2 = document.querySelector('#openModal2');
// const closeModalBtn = document.querySelector('#closeModal');
// const modal = document.querySelector('#modal');

// openModalBtn.addEventListener('click', () => {
// modal.showModal();
// });

// openModalBtn2.addEventListener('click', () => {
// modal.showModal();
// });

// closeModalBtn.addEventListener('click', () => {
// modal.close();
// });
// Static design: end

// Dynamic design: start
const works = document.querySelector('.myWorks');
const template = document.querySelector('template').content;
const fragment = document.createDocumentFragment();

const projectCard = [{
  id: 'card01',
  title: 'News Blog 1',
  subtitle: 'HTML, SCSS, JS',
  description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
  src: './images/travel.webp',
},
{
  id: 'card02',
  title: 'News Blog 2',
  subtitle: 'HTML, SCSS, JS',
  description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
  src: './images/travel.webp',
},
{
  id: 'card03',
  title: 'News Blog 3',
  subtitle: 'HTML, SCSS, JS',
  description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
  src: '(./images/travel.webp)',
},
{
  id: 'card03',
  title: 'News Blog 3',
  subtitle: 'HTML, SCSS, JS',
  description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
  src: '(./images/travel.webp)',
},
{
  id: 'card03',
  title: 'News Blog 3',
  subtitle: 'HTML, SCSS, JS',
  description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
  src: '(./images/travel.webp)',
}];

projectCard.forEach((element) => {
  template.querySelector('.newsBlog h3').textContent = element.title;
  template.querySelector('.newsBlog p').textContent = element.subtitle;
  template.querySelector('.description').textContent = element.description;

  const clone = document.importNode(template, true);
  fragment.appendChild(clone);
});

works.appendChild(fragment);