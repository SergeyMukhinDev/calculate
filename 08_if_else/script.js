//Объявление переменных

let minValue;
let maxValue;
let minus = false;
let orderNumber = 1;
let gameRun = false;
let answerNumber;
let correctArray = ['Я всегда угадываю\n\u{1F60E}', 'Загадывай следующее', 'Я знал', 'Было легко'];
let answerArray = ['Да это легко! Ты загадал', 'Наверное, это число', 'Я угадал?', 'Хмм дай подумать, возможно это'];
let ItemAnswerArray = Math.floor(Math.random() * (answerArray.length - 0) + 0);
const orderNumberField = document.getElementById('orderNumberField');
const answerField = document.getElementById('answerField');

//Обработчик кнопки "Отправить" формы запроса минимально и максимального значений

document.getElementById('buttonSend').addEventListener('click', function () {
    //Проверка на заполнение инпутов формы
    if ((document.getElementById('minValue').value == '') || (document.getElementById('maxValue').value == '')) {
        document.getElementById('LabelMessage').textContent = 'Вы не ввели диапазон значений, будут приняты значения по умолчанию (0 и 100)'; 
        Ok();
        minValue = 0;
        maxValue = 100;
    }
    minValue = parseInt(document.getElementById('minValue').value);
    maxValue = parseInt(document.getElementById('maxValue').value);
    if (isNaN(minValue) || isNaN(maxValue)) {
        minValue = 0;
        maxValue = 100;
    }
    //Тернарный операторы для проверки минимального и максимального значений
    minValue = (minValue < -999) ? minValue = -999 : minValue + 0;
    maxValue = (maxValue > 999) ? maxValue = 999 : maxValue + 0;
    gameRun = true;
    answerNumber = Math.floor((minValue + maxValue) / 2);
    orderNumberField.innerText = orderNumber;
    answerField.innerText = `${answerArray[ItemAnswerArray]}  ${answerNumber }?`;
    NumberToStr();
    startGame();
    document.getElementById('LabelMessage').textContent = `Вы указали диапазон от ${minValue} до ${maxValue} 
    \n выберите из этого диапазона любое число 
    \n и я его угадаю.`;
    showMessage();
})
//Обработчик кнопки "Ок" окна сообщений
document.getElementById('buttonMessage').addEventListener('click', function () {
Ok();
})
//Обработчик кнопки "Заново"
document.getElementById('btnRetry').addEventListener('click', function () {
    gameRun = false;
    RestartGame();
})
//Обработчик кнопки "Больше"
document.getElementById('btnOver').addEventListener('click', function () {
    if (gameRun) {
        if (minValue === maxValue) {
            const phraseRandom = Math.round(Math.random());
            const answerPhrase = (phraseRandom === 1) ?
                `Вы загадали неправильное число!\n\u{1F914}` :
                `Я сдаюсь..\n\u{1F92F}`;

            answerField.innerText = answerPhrase;
            gameRun = false;
        } else {
            minValue = answerNumber + 1;
            answerNumber = Math.floor((minValue + maxValue) / 2);
            orderNumber++;
            orderNumberField.innerText = orderNumber;
            ItemAnswerArray = Math.floor(Math.random() * (answerArray.length - 0) + 0);
            answerField.innerText = `${answerArray[ItemAnswerArray]} ${answerNumber }?`;
        }
    }
    NumberToStr();
})
//Обработчик кнопки "Меньше" 
document.getElementById('btnLess').addEventListener('click', function () {
    if (gameRun) {
        if (minValue === maxValue) {
            const phraseRandom = Math.round(Math.random());
            const answerPhrase = (phraseRandom === 1) ?
                `Вы загадали неправильное число!\n\u{1F914}` :
                `Я сдаюсь..\n\u{1F92F}`;

            answerField.innerText = answerPhrase;
            gameRun = false;
        } else {
            maxValue = answerNumber + 1;
            answerNumber = Math.floor((minValue + maxValue) / 2);
            orderNumber++;
            orderNumberField.innerText = orderNumber;
            ItemAnswerArray = Math.floor(Math.random() * (answerArray.length - 0) + 0);
            answerField.innerText = `${answerArray[ItemAnswerArray]} ${answerNumber }?`;
        }
    }
    NumberToStr();
})
//Обработчик кнопки "Верно"
document.getElementById('btnEqual').addEventListener('click', function () {
    if (gameRun) {
        ItemAnswerArray = Math.floor(Math.random() * (answerArray.length - 0) + 0);
        answerField.innerText = `${correctArray[ItemAnswerArray]}`;
        gameRun = false;
    }
})
//функция перевода числа в текстовую запись
function NumberToStr() {
    let answerNumberToStr = answerNumber.toString();
    if (answerNumberToStr[0] == '-') {
        minus = true;
        answerNumberToStr = answerNumberToStr.split('-').join('');
    } else {
        minus = false;
    }
    let lineValue = '';
    let units = new Map([
        ["1", "один"],
        ["2", "два"],
        ["3", "три"],
        ["4", "четыре"],
        ["5", "пять"],
        ["6", "шесть"],
        ["7", "семь"],
        ["8", "восемь"],
        ["9", "девять"],
    ]);
    let tens = new Map([
        ["2", "двадцать"],
        ["3", "тридцать"],
        ["4", "сорок"],
        ["5", "пятьдесят"],
        ["6", "шестьдесят"],
        ["7", "семьдесят"],
        ["8", "восемьдесят"],
        ["9", "девяносто"]
    ]);
    let hundreds = new Map([
        ["1", "сто"],
        ["2", "двести"],
        ["3", "триста"],
        ["4", "четыреста"],
        ["5", "пятьсот"],
        ["6", "шестьсот"],
        ["7", "семьсот"],
        ["8", "восемьсот"],
        ["9", "девятьсот"]
    ]);
    let exceptions = new Map([
        ["10", "десять"],
        ["11", "одинадцать"],
        ["12", "двенадцать"],
        ["13", "тринадцать"],
        ["14", "четырнадцать"],
        ["15", "пятнадцать"],
        ["16", "шестнадцать"],
        ["17", "семнадцать"],
        ["18", "восемнадцать"],
        ["19", "девятнадцать"]
    ]);

    let [unit, ten, hundred] = answerNumberToStr.split('').reverse();
    for (let key of hundreds.keys()) {
        if ((hundred != undefined) && (hundred == key)) {
            lineValue = lineValue + hundreds.get(hundred) + ' ';

        }
    }
    for (let key of tens.keys()) {
        if ((ten != undefined) && (ten == key)) {
            lineValue = lineValue + tens.get(ten) + ' ';
        }
    }
    for (let key of units.keys()) {
        if ((unit != undefined) && (unit == key)) {
            lineValue = lineValue + units.get(unit);
        }
    }
    for (let key of exceptions.keys()) {
        if (answerNumberToStr == key) {
            lineValue = exceptions.get(answerNumberToStr);
        }
    }
    if ((ten != undefined) && (unit == '0')) {
        lineValue = lineValue.split('ноль').join('');
    }
    if (minus) {
        lineValue = 'минус ' + lineValue;
    }
    if ((lineValue == 'ноль') || (lineValue == '')) {
        lineValue = '0';
    }
    if (lineValue.length <= 20) {
        return answerField.innerText = `${answerArray[ItemAnswerArray]} ${lineValue}?`;
    } else return answerField.innerText = `${answerArray[ItemAnswerArray]} ${answerNumber}?`
}

function startGame() {
    document.getElementById('inputForm').style.display = 'none';
    document.getElementById('head').style.display = 'block';
    document.getElementById('bod1').style.display = 'block';
    document.getElementById('bod2').style.display = 'block';
    document.getElementById('foot').style.display = 'block';
}

function RestartGame() {
    document.getElementById('inputForm').style.display = 'block';
    document.getElementById('head').style.display = 'none';
    document.getElementById('bod1').style.display = 'none';
    document.getElementById('bod2').style.display = 'none';
    document.getElementById('foot').style.display = 'none';
    document.getElementById('minValue').value = '';
    document.getElementById('maxValue').value = '';
    minValue = 0;
    maxValue = 0;
    answerNumber = 0;
    orderNumber = 0;
}
function showMessage () {
    document.getElementById('FormMessage').style.display = 'block';
    document.getElementById('head').style.display = 'none';
    document.getElementById('bod1').style.display = 'none';
    document.getElementById('bod2').style.display = 'none';
    document.getElementById('foot').style.display = 'none';
    document.getElementById('inputForm').style.display = 'none';  
}
function Ok () {
    document.getElementById('FormMessage').style.display = 'none';
    document.getElementById('head').style.display = 'block';
    document.getElementById('bod1').style.display = 'block';
    document.getElementById('bod2').style.display = 'block';
    document.getElementById('foot').style.display = 'block'; 
}