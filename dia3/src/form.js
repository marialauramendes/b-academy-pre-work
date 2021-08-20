const inputNome = document.querySelector('[data-js="name"]');

const dontChange = ['da', 'das', 'de', 'do', 'dos'];

function maskName(e){

  const nomesArray = e.target.value.split(' ');

  e.target.value = nomesArray.map((nome) =>{
    return dontChange.includes(nome.toLowerCase())
    ? nome.toLowerCase()
    : captalize(nome);

  }).join(' ');


  console.log('valor digitado:', e.target.value);
  console.log('nomes:', nomesArray);
}

inputNome.addEventListener('input', maskName);

function captalize(nome){
  return nome.charAt(0).toUpperCase() + nome.slice(1).toLowerCase();
};


const form = document.querySelector('[data-js="form"]');

const select = document.createElement('select');
form.appendChild(select);
select.setAttribute('multiple', '');

const colorOptions = ['#0099e5', '#511378', '#ff6600', '#666666', '#e2001a'];

colorOptions.forEach(color => {
  const option = document.createElement('option');
  option.value = color;
  option.textContent = color;
  select.appendChild(option);
});

const colorBox

// const optionBlue = {
//   name: 'blue',
//   hex: '#0099e5'
// }

// const optionPurple = {
//   name: 'purple',
//   hex: '#511378'
// }

// const optionOrange = {
//   name: 'orange',
//   hex: '#ff6600'
// }






