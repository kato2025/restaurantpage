/* Import external modules and styles*/
import './styles.css'; 
import { createHomePage } from './home.js';
import { createMenuPage } from './menu.js';
import { createContactPage } from './contact.js';

/* Load content to index.html, in the various tabs, imported from their various js files */
const content = document.getElementById('content');
const homeBtn = document.getElementById('home-btn');
const menuBtn = document.getElementById('menu-btn');
const contactBtn = document.getElementById('contact-btn');

/* Load content to home tab */
homeBtn.addEventListener('click', () => {
  loadHomePage();
  homeBtn.style.backgroundColor = 'rgb(20, 93, 160)';
  contactBtn.style.backgroundColor = 'rgb(177, 212, 224)';
  menuBtn.style.backgroundColor = 'rgb(177, 212, 224)';
  contactBtn.style.borderBottom = '1px solid black';
  menuBtn.style.borderBottom = '1px solid black';
  homeBtn.style.borderBottom = 'none';
});
/* Load content to menu tab */
menuBtn.addEventListener('click', () => {
  loadMenuPage();
  menuBtn.style.backgroundColor = 'rgb(20, 93, 160)';
  homeBtn.style.backgroundColor = 'rgb(177, 212, 224)';
  contactBtn.style.backgroundColor = 'rgb(177, 212, 224)';
  homeBtn.style.borderBottom = '1px solid black';
  contactBtn.style.borderBottom = '1px solid black';
  menuBtn.style.borderBottom = 'none';
});
/* Load content to contact tab */
contactBtn.addEventListener('click', () => {
  loadContactPage();
  contactBtn.style.backgroundColor = 'rgb(20, 93, 160)';
  homeBtn.style.backgroundColor = 'rgb(177, 212, 224)';
  menuBtn.style.backgroundColor = 'rgb(177, 212, 224)';
  homeBtn.style.borderBottom = '1px solid black';
  menuBtn.style.borderBottom = '1px solid black';
  contactBtn.style.borderBottom = 'none';
});

/* Clear content in index.html content div to enable content upload from other pages */
function clearContent() {
  content.innerHTML = '';
}

/*Function to load home page content to index.html content div*/
function loadHomePage() {
  clearContent();
  createHomePage();
}

/*Function to load menu page content to index.html content div*/
function loadMenuPage() {
  clearContent();
  createMenuPage();
}

/*Function to load contact page content to index.html content div*/
function loadContactPage() {
  clearContent();
  createContactPage();
}
/* Open page based on the hash (value after the harsh) in the href for each page tab */
window.addEventListener('hashchange', () => {
  const hash = window.location.hash;
  switch (hash) {
    case '#menu':
      loadMenuPage();
      break;
    case '#contact':
      loadContactPage();
      break;
    default:
      loadHomePage();
  }
});

// Default page load
window.addEventListener('load', () => {
  loadHomePage(); // Load the homepage at startup
  homeBtn.style.backgroundColor = 'rgb(20, 93, 160)';
  contactBtn.style.backgroundColor = 'rgb(177, 212, 224)';
  menuBtn.style.backgroundColor = 'rgb(177, 212, 224)';
  menuBtn.style.borderBottom = '1px solid black';
  contactBtn.style.borderBottom = '1px solid black';
});
