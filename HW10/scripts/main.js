// Стоврити форму з трьома полями для name,sruname,age та кнопкою. При натисканні на кнопку зчитати данні з полів, та
// вивести об'єкт в документ. Іншими словами : заповниои форму, натиснули кнопку, під формою з'явився блок з вашим об'єктом
// ==========================

let form = document.createElement('form');
let inputName = document.createElement('input');
let inputSurname = document.createElement('input');
let inputAge = document.createElement('input');
let button = document.createElement('button');

inputName.placeholder = 'Name';
inputName.id = 'name';
inputSurname.placeholder = 'Surname';
inputSurname.id = 'surname';
inputAge.placeholder = 'Age';
inputAge.id = 'age';
button.innerText = 'Send';

form.append(inputName, inputSurname, inputAge, button);
document.body.appendChild(form);


let info = document.createElement('div');
form.appendChild(info);

form.onsubmit = function (e) {
    e.preventDefault();
    let userName = document.getElementById('name').value;
    let userSurname = document.getElementById('surname').value;
    let userAge = document.getElementById('age').value;
    let userObject = {
        name: userName,
        surname: userSurname,
        age: userAge
    }
    info.innerText = JSON.stringify(userObject);
};

// є сторінка, на якій є блок, я кому знаходиьтся цифра. написати код, який при кожному перезавантажені сторінки буде додавати до неї +1

let block = document.createElement('div');
block.classList.add('block');
document.body.appendChild(block);

let valueOfBlock = localStorage.getItem('number') || 0;
valueOfBlock = parseInt(valueOfBlock) +1;
block.innerText = valueOfBlock;

localStorage.setItem('number', valueOfBlock);

// ==========================
// Є сторінка index.html (назва довільна), при відвідуванні якої в локальне сховще, в масив sessions зберігається
// інформація про дату та час відвідування сторінки. Є ще сторінка sessions.html (назва довільна), при відвідуванні якої
// потрібно відмалювати всю інформацію про відвідування сторінки index.html. Інфу НЕ виводити в консоль, а побудувати дом
// структуру під кожну сессію
// =========================


function sessionsTime ()  {
    const time = new Date();
    const sessionInfo = time.toISOString();

    let sessions = JSON.parse(localStorage.getItem('sessions')) || [];
    sessions.push(sessionInfo);
    localStorage.setItem('sessions', JSON.stringify(sessions));
}

sessionsTime();

//другу частину завдання не виконала

//     зробити масив на 100 об'єктів та дві кнопки prev next
// при завантажені сторінки з'являються перші 10 об'єктів.
//     При натисканні next виводяться настпні 10 об'єктів
// При натисканні prev виводяться попередні 10 об'єктів
//
class Arr {
    constructor(name,age) {
        this.name = name;
        this.age = age;
    }
}
arr = [];

for (let i = 1; i <= 100; i++) {
    arr.push(new Arr(`Person${i}`, 17 + i));
}

console.log(arr);

let buttonBlock = document.createElement('div')
let buttonNext = document.createElement('button');
let buttonPrev = document.createElement('button');
let arr10 = document.createElement('div');

document.body.append(arr10,buttonBlock);
buttonBlock.append(buttonNext,buttonPrev);
buttonBlock.classList.add('button-block');

buttonNext.innerText = 'Next';
buttonPrev.innerText = 'Previous';

let currentIndex = 0;

function displayItems(startIndex) {
    arr10.innerText = '';
    for (let i = startIndex; i < startIndex + 10 && i < arr.length; i++) {
        arr10.innerText += JSON.stringify(arr[i]) + '\n';
    }
}

window.onload = function (e) {
    displayItems(currentIndex);
}

buttonNext.onclick = function () {
    if (currentIndex + 10 < arr.length) {
        currentIndex += 10;
        displayItems(currentIndex);
    }
}

buttonPrev.onclick = function () {
    if (currentIndex - 10 >= 0) {
        currentIndex -= 10;
        displayItems(currentIndex);
    }
}

//
//
// - Створити довільний елемент з id = text та створити кнопку.Використовуючи JavaScript, зробіть так, щоб
// при натисканні на кнопку зникав елемент з id="text".

let text = document.createElement('div');
let buttonText = document.createElement('button')
text.id = 'text';
text.innerText = 'HELLO!';
buttonText.innerText = 'click';
document.body.append(text, buttonText);

buttonText.onclick = function (e){
    text.remove();
}
//
//
//     - створити інпут який приймає вік людини та кнопку яка підтверджує дію.При натисканні на кнопку зчитат
//     и інформацію з інпуту та перевірити вік чи меньше він ніж 18, та повідомити про це користувача
//

let ageInput = document.createElement('input');
let buttonInput = document.createElement('button')
let infoAge = document.createElement('h3');

ageInput.id = 'ageOfUser';
buttonInput.innerText = 'send age';
ageInput.placeholder = 'Age';

document.body.append(ageInput,buttonInput, infoAge);

buttonInput.onclick = function () {
    let age = parseInt(ageInput.value);

    if (isNaN(age)) {
        infoAge.innerText = 'Please enter a valid age.';
    } else if (age < 18) {
        infoAge.innerText = 'Ви неповнолітні';
    } else if (age >= 18 && age < 105) {
        infoAge.innerText = 'Вам вже можна вживати алкоголь!';
    } else if (age >= 105) {
        infoAge.innerText = 'Це нереально!';
    }
};

//
// *** Створити 3 інпута та кнопку. Один визначає кількість рядків, другий - кількість ячеєк, третій вмиіст ячеєк.
//     При натисканні кнопки, вся ця інформація зчитується і формується табличка, з відповідним вмістом.

let input1 = document.createElement('input');
let input2 = document.createElement('input');
let input3 = document.createElement('input');
let buttonUnderInputs = document.createElement('button');

input1.placeholder = 'К-сть рядків';
input2.placeholder = 'К-сть ячеєк';
input3.placeholder = 'Вміст ячеєк';
buttonUnderInputs.innerText = 'Створити таблицю';

let table = document.createElement('table');

table.onclick = function () {


    let rows = parseInt(input1.value);
    let cols = parseInt(input2.value);

    for (let i = 0; i < rows; i++) {
        let tr = document.createElement('tr');
        for (let j = 0; j < cols; j++) {
            let td = document.createElement('td');
            td.innerText = input3.value;
            tr.appendChild(td);
        }
        table.appendChild(tr);
    }
}

document.body.append(input1,input2,input3,buttonUnderInputs,table);


