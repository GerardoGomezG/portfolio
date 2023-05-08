// Toogles hamburger button and mobile menu display
const x = document.querySelector('.menu-button');
x.addEventListener('click', () => {
  x.classList.toggle('change');
});

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
  alt: 'project snapshot',
},
{
  id: 'card02',
  title: 'News Blog 2',
  subtitle: 'HTML, SCSS, JS',
  description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
  src: './images/travel.webp',
  alt: 'project snapshot',
},
{
  id: 'card03',
  title: 'News Blog 3',
  subtitle: 'HTML, SCSS, JS',
  description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
  src: './images/travel.webp',
  alt: 'project snapshot',
},
{
  id: 'card03',
  title: 'News Blog 4',
  subtitle: 'HTML, SCSS, JS',
  description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
  src: './images/travel.webp',
  alt: 'project snapshot',
},
{
  id: 'card03',
  title: 'News Blog 5',
  subtitle: 'HTML, SCSS, JS',
  description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
  src: './images/travel.webp',
  alt: 'project snapshot',
}];

projectCard.forEach((element) => {
  template.querySelector('.newsBlog h3').textContent = element.title;
  template.querySelector('.newsBlog p').textContent = element.subtitle;
  template.querySelector('.description').textContent = element.description;
  template.querySelector('#projectImg').setAttribute('src', element.src);
  template.querySelector('#modal h3').textContent = element.title;
  template.querySelector('#modal p').textContent = element.subtitle;
  template.querySelector('#description').textContent = element.description;

  const clone = document.importNode(template, true);
  fragment.appendChild(clone);
});

works.appendChild(fragment);

// Popup window
const openModalBtn = document.querySelector('#openModal');
const closeModalBtn = document.querySelector('#closeModal');
const modal = document.querySelector('#modal');

openModalBtn.addEventListener('click', () => {
  modal.showModal();
});

closeModalBtn.addEventListener('click', () => {
  modal.close();
});

const y = document.querySelector('.newsBlog');
y.addEventListener('mouseenter', () => {
  y.classList.toggle('newsBlogHover');
});

y.addEventListener('mouseleave', () => {
  y.classList.toggle('newsBlogHover');
});
