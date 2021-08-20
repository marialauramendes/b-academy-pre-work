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
const colorOptions = ['#0099e5', '#511378', '#ff6600', '#666666', '#e2001a'];

const colorsContainer = document.createElement("div");
colorsContainer.style.display = "flex";

colorOptions.forEach(color => {
  const option = document.createElement('option');
  option.value = color;
  option.textContent = color;
  select.appendChild(option);
});

function createColorBox(e){
  colorsContainer.innerHTML = "";
  Array.from(e.target.selectedOptions).forEach(option => {
    const colorBox = document.createElement('div');
    colorBox.style.height = "100px";
    colorBox.style.width = "100px";
    colorBox.style.background = option.value;

    colorsContainer.appendChild(colorBox);
  })
}

select.addEventListener('change', createColorBox)


form.appendChild(select);
select.setAttribute('multiple', '');
form.appendChild(colorsContainer);
