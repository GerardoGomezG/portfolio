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
  id: '1',
  title: 'News Blog 1',
  subtitle: 'HTML, SCSS, JS',
  description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
  src: './images/travel.webp',
  url: 'https://github.com/GerardoGomezG/portfolio',
},
{
  id: '2',
  title: 'News Blog 2',
  subtitle: 'HTML, SCSS, JS',
  description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
  src: './images/travel.webp',
  url: 'https://github.com/GerardoGomezG/portfolio',
},
{
  id: '3',
  title: 'News Blog 3',
  subtitle: 'HTML, SCSS, JS',
  description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
  src: './images/travel.webp',
  url: 'https://github.com/GerardoGomezG/portfolio',
}];

projectCard.forEach((element) => {
  template.querySelector('.newsBlog').style.backgroundImage = `url(${element.src})`;
  template.querySelector('.newsBlog h3').textContent = element.title;
  template.querySelector('.newsBlog p').textContent = element.subtitle;
  template.querySelector('.description').textContent = element.description;
  template.querySelector('.openModal').setAttribute('id', `button${element.id}`);
  template.querySelector('.modal').setAttribute('id', `modal${element.id}`);
  template.querySelector('.closeModal').setAttribute('id', element.id);
  template.querySelector('#projectImg').setAttribute('src', element.src);
  template.querySelector('.modal h3').textContent = element.title;
  template.querySelector('.modal p').textContent = element.subtitle;
  template.querySelector('#description').textContent = element.description;
  template.querySelector('.modal a').setAttribute('href', element.url);

  const clone = document.importNode(template, true);
  fragment.appendChild(clone);
});

works.appendChild(fragment);

// Modal (popup) window
const openModalBtn = document.querySelectorAll('.openModal');
const closeModalBtn = document.querySelectorAll('.closeModal');
const projectLink = document.querySelectorAll('.modal a');

// Open modal window
openModalBtn.forEach((btn) => {
  btn.addEventListener('click', (e) => {
    // Gets the id number for the button id string (e.g.: button1. Gets: 1)
    const idNumber = e.target.id.replace('button', '');
    document.getElementById(`modal${idNumber}`).showModal();
  });
});

// URL in modal window activation
projectLink.forEach((a) => {
  a.addEventListener('click', (e) => {
    e.preventDefault();
    window.open(e.currentTarget.getAttribute('href'), '_blank');
  });
});

// Close modal window
closeModalBtn.forEach((btn) => {
  btn.addEventListener('click', (e) => {
    document.getElementById(`modal${e.currentTarget.id}`).close();
  });
});

// newsBlog hover
const y = document.querySelectorAll('.newsBlog');
y.forEach((z) => {
  z.addEventListener('mouseenter', () => {
    z.classList.toggle('newsBlogHover');
  });
  z.addEventListener('mouseleave', () => {
    z.classList.toggle('newsBlogHover');
  });
});

// Dynamic design: end
