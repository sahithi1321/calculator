let curinput = '';
let operator = '';
let previnput = '';

function inputValue(value) {
  curinput += value;
  updateDisplay();
}

function setOperator(op) {
  operator = op;
  previnput = curinput;
  curinput = '';
}

function clearDisplay() {
  curinput = '';
  previnput = '';
  operator = '';
  updateDisplay();
}

function calculate() {
  let result;
  
if (operator === '+') {
    result = parseFloat(previnput) + parseFloat(curinput);
} else if (operator === '-') {
    result = parseFloat(previnput) - parseFloat(curinput);
} else if (operator === '*') {
    result = parseFloat(previnput) * parseFloat(curinput);
} else if (operator === '/') {
    result = parseFloat(previnput) / parseFloat(curinput);
}
  
curinput = result.toString();
previnput = '';
operator = '';
updateDisplay();
}

function updateDisplay() {
document.getElementById('display').innerText = curinput || '0';
}