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

// Contact Form Validation
const nameInputField = document.querySelector('[name=name]');
const emailInputField = document.querySelector('[name=email]');
const messageInputField = document.querySelector('[name=message]');
const submitBtn = document.querySelector('[type=submit]');
let flagName;
let flagEmail;
let flagMessage;

// Activates submit button if form inputs are valid
function submitBtnActivation() {
  if ((flagName) && (flagEmail) && (flagMessage)) {
    submitBtn.style.opacity = '1';
    submitBtn.style.cursor = 'pointer';
    submitBtn.disabled = false;
  } else {
    submitBtn.style.opacity = '0.1';
    submitBtn.style.cursor = 'not-allowed';
    submitBtn.disabled = true;
  }
}

function addClasses(field) {
  // Adds 'invalid' class to field
  field.classList.add('invalid');
  // Sets 'error' class to <span> tag within the form
  field.nextElementSibling.nextElementSibling.classList.add('error');
  // Displays error message
  field.nextElementSibling.nextElementSibling.innerText = `Please enter a valid ${field.getAttribute('name')}`;
}

// Removes 'error' & 'invalid' classes
function removeClasses(field) {
  // Removes 'invalid' class to field
  field.classList.remove('invalid');
  // Removes 'error' class to <span> tag within the form
  field.nextElementSibling.nextElementSibling.classList.remove('error');
  // Removes error message
  field.nextElementSibling.nextElementSibling.innerText = '';
}

const validateNameFormat = () => {
  const field = nameInputField;
  const regex = new RegExp(/^([A-Za-z\u00C0-\u00D6\u00D8-\u00f6\u00f8-\u00ff\s]*)$/);
  // Deletes blank spaces at the beginning and end of the string
  const fieldValue = field.value.trim();
  // Determines if the field string length > 2 and regex test is true (!false)
  if ((fieldValue.length <= 1) || (fieldValue.length > 1 && !regex.test(fieldValue))) {
    flagName = false;
    addClasses(field);
  } else {
    flagName = true;
    removeClasses(field);
    if (fieldValue.length === 30) {
      field.nextElementSibling.nextElementSibling.classList.add('warning');
      field.nextElementSibling.nextElementSibling.innerText = '30 chars max. limit';
    }
  }
  localStorage.setItem('name', fieldValue);
  submitBtnActivation();
};

const validateEmailFormat = () => {
  const field = emailInputField;
  const regex = new RegExp(/^[_a-z0-9]+(\.[_a-z0-9]+)*@[a-z0-9-]+(\.[a-z0-9-]+)*(\.[a-z]{2,15})$/);
  // Deletes blank spaces at the beginning and end of the string
  const fieldValue = field.value.trim();
  // Determines if the field string legth > 5 and regex test is false (!true)
  if (((fieldValue.length > 0 && !regex.test(fieldValue)) || (fieldValue.length === 0))) {
    flagEmail = false;
    addClasses(field);
  } else {
    flagEmail = true;
    removeClasses(field);
  }
  localStorage.setItem('email', fieldValue);
  submitBtnActivation();
};

const validateMessageFormat = () => {
  const field = messageInputField;
  const regex = new RegExp(/^\S.*(?:\r?\n\S.*)*$/u);
  // Deletes blank spaces at the beginning and end of the string
  const fieldValue = field.value.trim();
  // Determines if the field is empty
  if ((fieldValue.length > 0 && !regex.test(fieldValue)) || (fieldValue.length === 0)) {
    flagMessage = false;
    addClasses(field);
  } else {
    flagMessage = true;
    removeClasses(field);
    if (fieldValue.length === 500) {
      field.nextElementSibling.nextElementSibling.classList.add('warning');
      field.nextElementSibling.nextElementSibling.innerText = '500 chars max. limit';
    }
  }
  localStorage.setItem('message', fieldValue);
  submitBtnActivation();
};

// Event listeners for Form Contact Validation
nameInputField.addEventListener('input', validateNameFormat);
emailInputField.addEventListener('input', validateEmailFormat);
messageInputField.addEventListener('input', validateMessageFormat);
submitBtn.addEventListener('click', () => localStorage.clear());
document.addEventListener('DOMContentLoaded', () => {
  submitBtn.disabled = true;
  submitBtn.style.opacity = '0.1';
  submitBtn.style.cursor = 'not-allowed';
  // Loads local-storage data
  nameInputField.value = localStorage.getItem('name');
  emailInputField.value = localStorage.getItem('email');
  messageInputField.value = localStorage.getItem('message');
  // Calls validate funtions after loading local-storage data
  if (nameInputField.value.length > 0) validateNameFormat();
  if (emailInputField.value.length > 0) validateEmailFormat();
  if (messageInputField.value.length > 0) validateMessageFormat();
});
