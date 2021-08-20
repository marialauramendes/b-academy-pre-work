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
