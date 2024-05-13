//ВСЕ ЗРОБИТИ СТРІЛОЧНИМИ ФУНКЦІЯМИ!
// - створити функцію яка обчислює та повертає площу прямокутника зі сторонами а і б

let sqrRectangle =(a,b) => a*b;
console.log(sqrRectangle(2,7));

// - створити функцію яка обчислює та повертає площу кола з радіусом r
let sqrCircle = (r) => Math. PI * r**2;
console.log(sqrCircle(10))
// // - створити функцію яка обчислює та повертає площу циліндру висотою h, та радіутом r
//
let sqrCylinder =(h,r) => Math. PI * r**2 * h;
console.log(sqrCylinder(10,4))
//
// // - створити функцію яка приймає масив та виводить кожен його елемент
//
let arrUsers = [
    { name: 'Іван', age: 25 },
    { name: 'Марія', age: 30 },
    { name: 'Петро', age: 35 }
];

let Users = (arrUsers) => {
    for (let i = 0; i < arrUsers.length; i++) {
        console.log(`Ім'я: ${arrUsers[i].name} Вік: ${arrUsers[i].age}`);
    }
}
Users(arrUsers);
//
// // - створити функцію яка створює параграф з текстом. Текст задати через аргумент
//
let pText = (text) => document.write(`<p>${text}</p>`)
pText('Hello, World!')
// // - створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий
//
let list = (textLi) => {
    document.write(`<ul>
         <li>${textLi}</li>
         <li>${textLi}</li>
        <li>${textLi}</li>
    </ul>`)
}

list('list');
// // - створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий. Кількість
// // li визначається другим аргументом, який є числовим (тут використовувати цикл)
//
let List2 = (textLi, num) => {
    document.write(`<ul>`);
    for (let i = 0; i < num; i++) {
        document.write(`<li>${textLi}</li>`);
    }
    document.write(`</ul>`);
};

List2('list2', 10);
//
// // - створити функцію яка приймає масив примітивних елементів (числа,стрінги,булеві), та будує для них список
//

let arrData =(textLi) => {
    document.write(`<ul>`)
    for (let i = 0; i < textLi.length; i++) {
        document.write(`<li>${textLi[i]}</li>`)
    }
    document.write (`</ul>`)
}
//
arrData(['Heyyy!', 5, true]);
// // - створити функцію яка приймає масив об'єктів з наступними полями id,name,age , та виводить їх в документ. Для кожного об'єкту окремий блок.
//
let users = [
    { id: 1, name: 'Іван', age: 25 },
    { id: 2, name: 'Марія', age: 30 },
    { id: 3, name: 'Петро', age: 35 }
];
let usersArr = (users) => {
    for (let i = 0; i < users.length; i++) {
        document.write(`<div>Id: ${users[i].id}, Name: ${users[i].name}, Age: ${users[i].age}</div>`);
    }
}
usersArr(users);
// // - створити функцію яка повертає найменьше число з масиву
//
let numArr = [1, 2, 3, 4, 5];
let numbers = (num) => {
    let min = num[0];
    for (let i = 0; i < min.length; i++) {
        if(num[i] < min){
            min = num[i];
        }
    }
    return min;
};

console.log(numbers(numArr));
// // - створити функцію sum(arr)яка приймає масив чисел, сумує значення елементів масиву та повертає його. Приклад sum([1,2,10]) //->13
//
let arrNum = [4,5,10,25];
let sum = (arr) => {
    let total = 0;
    for (let i = 0; i < arr.length; i++) {
        total += arr[i];
    }
    return total;
};

console.log(sum(arrNum));
// // - створити функцію swap(arr,index1,index2). Функція міняє місцями заняення у відаовідних індексах
// Приклад  swap([11,22,33,44],0,1) //=> [22,11,33,44]
//
let swap =(arr,index1,index2) => {
    let index0 = arr[index1];
    arr[index1] = arr[index2];
    arr[index2] = index0;
    return arr;
}

console.log(swap([55, 66, 77, 88], 0,1));
//
// // - Написати функцію обміну валюти exchange(sumUAH,currencyValues,exchangeCurrency)
// // Приклад exchange(10000,[{currency:'USD',value:40},{currency:'EUR',value:42}],'USD') // => 250
//
let exchange = (currency,value,convertedCurrency) => {
    let exchangeCurrency;
    if (currency === 'UAH' && convertedCurrency === 'USD') {
        exchangeCurrency = value * 0.025;
    } else if (currency === 'UAH' && convertedCurrency === 'EUR') {
        exchangeCurrency = value * 0.023;
    } else if (currency === 'USD' && convertedCurrency === 'UAH') {
        exchangeCurrency = value * 39.54;
    } else if (currency === 'USD' && convertedCurrency === 'EUR') {
        exchangeCurrency = value * 0.93;
    } else if (currency === 'EUR' && convertedCurrency === 'UAH') {
        exchangeCurrency = value * 42.68;
    } else if (currency === 'EUR' && convertedCurrency === 'USD') {
        exchangeCurrency = value * 1.08;
    }
    return exchangeCurrency;
};
    console.log(exchange('UAH', 1000, 'USD'));

