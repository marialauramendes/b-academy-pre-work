const form = document.querySelector('[data-js="cars-form"]');
const table = document.querySelector('[data-js="table"]');

const elementTypes = {
  image: createImage,
  text: createText,
  color: createColor
}

function createImage (value){
  const td = document.createElement('td');
  const img = document.createElement('img')
  img.src = value;
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


function handleSubmit(event){
  event.preventDefault();

  const image = event.target.elements['image'];
  const brandModel = event.target.elements['brand-model'];
  const year = event.target.elements['year'];
  const plate = event.target.elements['plate'];
  const color = event.target.elements['color'];

  const elements = [
    {type: 'image', value: image.value},
    {type: 'text', value: brandModel.value},
    {type: 'text', value: year.value},
    {type: 'text', value: plate.value},
    {type: 'color', value: color.value},

  ];

  const tr = document.createElement( 'tr');
  elements.forEach((element) => {
    const td = elementTypes[element.type](element.value);
    tr.appendChild(td);
  })

  table.appendChild(tr);
  event.target.reset();
  image.focus();
}

form.addEventListener('submit', handleSubmit);
