  function add(a,b){
  return a + b;
  }
  function subtract(a,b){
  return a - b;
  }
  function multiply(a,b){
  return a * b;
  }
  function divide(a,b){
  return a / b;
  }

  function calculadora (a, b, operador) {
    return operador(a,b);
  }

  const sum = calculadora(1, 2, add)
  const sub = calculadora(20, 4, subtract)
  const mult = calculadora(3, 3, multiply)
  const div = calculadora(15, 5, divide)


  console.log('Somar 1 e 2 = 3:', sum === 3)
  console.log('Subtrair 4 de 20 = 16:', sub === 16)
  console.log('Multiplicar 3 com 3 = 9:', mult === 9)
  console.log('Dividir 15 por 5 = 3:', div === 3)

