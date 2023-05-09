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
},
{
  id: '2',
  title: 'News Blog 2',
  subtitle: 'HTML, SCSS, JS',
  description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
  src: './images/travel.webp',
},
{
  id: '3',
  title: 'News Blog 3',
  subtitle: 'HTML, SCSS, JS',
  description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
  src: './images/travel.webp',
},
{
  id: '3',
  title: 'News Blog 3',
  subtitle: 'HTML, SCSS, JS',
  description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
  src: './images/travel.webp',
}];

projectCard.forEach((element) => {
  template.querySelector('.newsBlog').style.backgroundImage = `url(${element.src})`;
  template.querySelector('.newsBlog h3').textContent = element.title;
  template.querySelector('.newsBlog p').textContent = element.subtitle;
  template.querySelector('.description').textContent = element.description;
  template.querySelector('.newsBlog button').setAttribute('id', element.id);
  template.querySelector('.modal').setAttribute('id', `modal${element.id}`);
  template.querySelector('.closeModal').setAttribute('id', element.id);
  template.querySelector('#projectImg').setAttribute('src', element.src);
  template.querySelector('.modal h3').textContent = element.title;
  template.querySelector('.modal p').textContent = element.subtitle;
  template.querySelector('#description').textContent = element.description;

  const clone = document.importNode(template, true);
  fragment.appendChild(clone);
});

works.appendChild(fragment);

// Popup window
const openModalBtn = document.querySelectorAll('.openModal');
const closeModalBtn = document.querySelectorAll('.closeModal');
console.log(closeModalBtn);

openModalBtn.forEach((btn) => {
  btn.addEventListener('click', (e) => {
    document.getElementById(`modal${e.target.id}`).showModal();
  });
});

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
