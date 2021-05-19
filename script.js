let lastOperand = 0;
let operation = null;
let performing = false;
document.getElementById('textarea').style.display = 'none';
document.getElementById('btn_hist_clr').style.display = 'none';
const inputWindow = document.getElementById('inputWindow');
inputWindow.value = '0';
document.getElementById('btn_1').addEventListener('click', function () {
    if ((inputWindow.value === '0') || (inputWindow.value === '-0')) {inputWindow.value = '';}
    if (performing === true) {
        inputWindow.value = '';
        performing = false;    
    }
    inputWindow.value = inputWindow.value + 1;
})
document.getElementById('btn_2').addEventListener('click', function () {
    if ((inputWindow.value === '0') || (inputWindow.value === '-0')) {inputWindow.value = '';}
    if (performing === true) {
        inputWindow.value = '';
        performing = false;    
    }
    inputWindow.value = inputWindow.value + 2;
})
document.getElementById('btn_3').addEventListener('click', function () {
    if ((inputWindow.value === '0') || (inputWindow.value === '-0')) {inputWindow.value = '';}
    if (performing === true) {
        inputWindow.value = '';
        performing = false;    
    }
    inputWindow.value = inputWindow.value + 3;
})
document.getElementById('btn_4').addEventListener('click', function () {
    if ((inputWindow.value === '0') || (inputWindow.value === '-0')) {inputWindow.value = '';}
    if (performing === true) {
        inputWindow.value = '';
        performing = false;    
    }
    inputWindow.value = inputWindow.value + 4;
})
document.getElementById('btn_5').addEventListener('click', function () {
    if ((inputWindow.value === '0') || (inputWindow.value === '-0')) {inputWindow.value = '';}
    if (performing === true) {
        inputWindow.value = '';
        performing = false;    
    }
    inputWindow.value = inputWindow.value + 5;
})
document.getElementById('btn_6').addEventListener('click', function () {
    if ((inputWindow.value === '0') || (inputWindow.value === '-0')) {inputWindow.value = '';}
    if (performing === true) {
        inputWindow.value = '';
        performing = false;    
    }
    inputWindow.value = inputWindow.value + 6;
})
document.getElementById('btn_7').addEventListener('click', function () {
    if ((inputWindow.value === '0') || (inputWindow.value === '-0')) {inputWindow.value = '';}
    if (performing === true) {
        inputWindow.value = '';
        performing = false;    
    }
    inputWindow.value = inputWindow.value + 7;
})
document.getElementById('btn_8').addEventListener('click', function () {
    if ((inputWindow.value === '0') || (inputWindow.value === '-0')) {inputWindow.value = '';}
    if (performing === true) {
        inputWindow.value = '';
        performing = false;    
    }
    inputWindow.value = inputWindow.value + 8;
})
document.getElementById('btn_9').addEventListener('click', function () {
    if ((inputWindow.value === '0') || (inputWindow.value === '-0')) {inputWindow.value = '';}
    if (performing === true) {
        inputWindow.value = '';
        performing = false;    
    }
    inputWindow.value = inputWindow.value + 9;
})
document.getElementById('btn_0').addEventListener('click', function () {
    if (inputWindow.value === '-0') {inputWindow.value = '';}
    if (performing === true) {
        inputWindow.value = '';
        performing = false;    
    }
    if (inputWindow.value !== '0')  {
        inputWindow.value = inputWindow.value + 0;
        }
    
})


document.getElementById('btn_clr').addEventListener('click', function () {
    lastOperand = 0;
    operation = null;
    inputWindow.value = '0';
})

document.getElementById('btn_plus').addEventListener('click', function () {
    lastOperand = parseFloat(inputWindow.value);
    console.log(lastOperand);
    operation = 'sum';
    inputWindow.value = '';

})
document.getElementById('btn_minus').addEventListener('click', function () {
    lastOperand = parseFloat(inputWindow.value);
    operation = 'minus';
    inputWindow.value = '';

})
document.getElementById('btn_multiply').addEventListener('click', function () {
    lastOperand = parseFloat(inputWindow.value);
    operation = 'multiply';
    inputWindow.value = '';

})
document.getElementById('btn_split').addEventListener('click', function () {
    lastOperand = parseFloat(inputWindow.value);
    operation = 'split';
    inputWindow.value = '';

})
document.getElementById('btn_square').addEventListener('click', function () {
        let sqrt = inputWindow.value;
        inputWindow.value  = Math.sqrt(inputWindow.value).toFixed(10);
        document.getElementById('textarea').value = document.getElementById('textarea').value +`Квадратный корень из  ${sqrt} = ${inputWindow.value}\n`;
        performing = true;
})
document.getElementById('btn_unary').addEventListener('click', function () {
    if ((inputWindow.value === '0') || (inputWindow.value === '-0')) {inputWindow.value = '';}
    if (performing === true) {
        inputWindow.value = '';
        performing = false;    
    }
    if (inputWindow.value.includes('-') === false) {
    inputWindow.value  = '-' + inputWindow.value;
    }
    
})
document.getElementById('btn_point').addEventListener('click', function () {
    if (performing === true) {
        inputWindow.value = '';
        performing = false;    
    }
    if (inputWindow.value.includes('.') === false) {
    inputWindow.value  = inputWindow.value + '.';
    }
})
document.getElementById('btn_percent').addEventListener('click', function () {
    let result_percent = lastOperand / 100 * parseFloat(inputWindow.value);
    if (operation === 'sum'){
        const result = parseFloat(lastOperand) + parseFloat(result_percent);
        document.getElementById('textarea').value = document.getElementById('textarea').value + `${lastOperand} + ${parseFloat(inputWindow.value)}% = ${result}\n`;
        lastOperand = 0;
        operation = null;
        performing = true;
        inputWindow.value = result;
    }
    if (operation === 'minus'){
        const result = parseFloat(lastOperand) - parseFloat(result_percent);
        document.getElementById('textarea').value = document.getElementById('textarea').value + `${lastOperand} - ${parseFloat(inputWindow.value)}% = ${result}\n`;
        lastOperand = 0;
        operation = null;
        performing = true;
        inputWindow.value = result;
    }
    if (operation === 'multiply'){
        const result = parseFloat(lastOperand) * parseFloat(result_percent);
        document.getElementById('textarea').value = document.getElementById('textarea').value + `${lastOperand} * ${parseFloat(inputWindow.value)}% = ${result}\n`;
        lastOperand = 0;
        operation = null;
        performing = true;
        inputWindow.value = result;
    }
    if (operation === 'split'){
        const result = parseFloat(lastOperand) / parseFloat(result_percent);
        document.getElementById('textarea').value = document.getElementById('textarea').value + `${lastOperand} / ${parseFloat(inputWindow.value)}% = ${result}\n`;
        lastOperand = 0;
        operation = null;
        performing = true;
        inputWindow.value = result;
    }
    
})
document.getElementById('btn_hist').addEventListener('click', function () {
    
        if (document.getElementById('textarea').style.display === 'none') {
        document.getElementById('textarea').style.display = 'block';
        document.getElementById('btn_hist_clr').style.display = 'block';
        document.getElementById('btn_hist').textContent = 'Закрыть историю';
    } else {
        document.getElementById('textarea').style.display = 'none';
        document.getElementById('btn_hist_clr').style.display = 'none';
        document.getElementById('btn_hist').textContent = 'История операций';
    }
})

document.getElementById('btn_equally').addEventListener('click', function () {
  
    if (operation === 'sum'){
        const result = lastOperand + parseFloat(inputWindow.value);
        document.getElementById('textarea').value = document.getElementById('textarea').value + `${lastOperand} + ${parseFloat(inputWindow.value)} = ${result}\n`;
        lastOperand = 0;
        operation = null;
        performing = true;
        inputWindow.value = result;
    }
    if (operation === 'minus'){
        const result = lastOperand - parseFloat(inputWindow.value);
        document.getElementById('textarea').value = document.getElementById('textarea').value + `${lastOperand} - ${parseFloat(inputWindow.value)} = ${result}\n`;
        lastOperand = 0;
        operation = null;
        performing = true;
        inputWindow.value = result;
    }
    if (operation === 'multiply'){
        const result = lastOperand * parseFloat(inputWindow.value);
        document.getElementById('textarea').value = document.getElementById('textarea').value + `${lastOperand} * ${parseFloat(inputWindow.value)} = ${result}\n`;
        lastOperand = 0;
        operation = null;
        performing = true;
        inputWindow.value = result;
    }
    if (operation === 'split'){
        const result = lastOperand / parseFloat(inputWindow.value);
        document.getElementById('textarea').value = document.getElementById('textarea').value + `${lastOperand} / ${parseFloat(inputWindow.value)} = ${result}\n`;
        lastOperand = 0;
        operation = null;
        performing = true;
        inputWindow.value = result;
    }
})
document.getElementById('btn_hist_clr').addEventListener('click', function () {
    document.getElementById('textarea').value = '';
})