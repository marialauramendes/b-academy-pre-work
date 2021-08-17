import './style.css'

document.querySelector('.app').innerHTML = `
  <h1>B. Academy</h1>
  <p>Boas vindas à semana de pré-work para o Bootcamp em React.js 😁</p>
`

const link = document.querySelector('[data-js="link"]');

function toggleAppVisibility (event){
  const app = document.querySelector('[data-js="app"]');
  app.classList.toggle('active');
}

link.addEventListener('click', toggleAppVisibility);
