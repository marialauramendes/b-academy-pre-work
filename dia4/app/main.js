import './style.css';
import {get, post} from './http';

const url = 'http://localhost:3333/cars';
const form = document.querySelector('[data-js="cars-form"]');
const table = document.querySelector('[data-js="table"]');

const getFormElement = (event) => (elementName) => {
  return event.target.elements[elementName];
}

const elementTypes = {
  image: createImage,
  text: createText,
  color: createColor
}

function createImage ({src, alt}){
  const td = document.createElement('td');
  const img = document.createElement('img')
  img.src = src;
  img.alt = alt;
  img.style.width = "100px";
  td.appendChild(img);
  return td;
}
function createText (value){
  const td = document.createElement('td');
  td.textContent = value;
  return td;
}
function createColor (value){
  const td = document.createElement('td');
  const div = document.createElement('div')
  div.style.width = "100px";
  div.style.height = "100px";
  div.style.background = value;
  td.appendChild(div);
  return td;
}

async function handleSubmit(event){
  event.preventDefault();
  const getElement = getFormElement(event);

  const data = {
    image: getElement('image').value,
    brandModel: getElement('brand-model').value,
    year: getElement('year').value,
    plate: getElement('plate').value,
    color: getElement('color').value,
  }

  const result = await post(url, data);

  if (result.error){
    console.log('deu erro na hora de cadastrar', result.message);
    return
  }
  const noContent = document.querySelector('[data-js="no-content"]');

  table.removeChild(noContent);

  createTableRow(data);
  event.target.reset();
  image.focus();
}

form.addEventListener('submit', handleSubmit);

//cria linha da tabela
function createTableRow(data){
  const elements = [
    {type: 'image', value: {src: data.image, alt: data.brandModel} },
    {type: 'text', value: data.brandModel},
    {type: 'text', value: data.year},
    {type: 'text', value: data.plate},
    {type: 'color', value: data.color},

  ];

  const tr = document.createElement('tr');
  elements.forEach((element) => {
    const td = elementTypes[element.type](element.value);
    tr.appendChild(td);
  })

  table.appendChild(tr);
}

function createNoCarRow(){
  const tr = document.createElement('tr');
  const td = document.createElement('td');
  const ths = document.querySelectorAll('th');

  //o atributo colspan define quantas colunas a célula ocupará
  td.setAttribute('colspan', ths.length);
  td.textContent = 'Nenhum carro encontrado';

  tr.dataset.js = 'no-content';
  tr.appendChild(td);
  table.appendChild(tr);

}

async function main () {
  const result = await get(url);

  if (result.error){
    console.log('Erro ao buscar carros', result.message);
    return
  }

  if(result.length === 0 ){
    createNoCarRow();
    return
  }
 // aqui deu sucesso
  result.forEach(createTableRow)
}

main();
