//Масиви та об'єкти:
// - Створити масив, наповнити його 10 елементами будь-якого типу, вивести кожен елемент в консоль

let array = ['Bogdan', 'Ksenia', 'Lesya', 'Vika', 'Anton', 'Mykola', 'Romana', 'Ivan', 'Nastya', 'Anna'];
console.log(array[0]);
console.log(array[1]);
console.log(array[2]);
console.log(array[3]);
console.log(array[4]);
console.log(array[5]);
console.log(array[5]);
console.log(array[6]);
console.log(array[7]);
console.log(array[8]);
console.log(array[9]);

// - Створити 3 об'єкти які описують книги. Поля об'єкту : title ,pageCount, genre.

let book1 = {
    title: 'The A.B.C. Murders',
    pageCount: 250,
    genre: 'detective'
};

let book2 = {
    title: '1984',
    pageCount: 250,
    genre: 'dystopia novel'
};

let book3 = {
    title: 'Murder in Mesopotamia',
    pageCount: 310,
    genre: 'detective'
}

// - Створити 3 об'єкти які описують книги. Поля об'єкту : title ,pageCount, genre, authors. Поле "автори"
// - являється  масивом. Кожен автор має поля name та age.

let book1More = {
    title: 'The A.B.C. Murders',
    pageCount: 250,
    genre: 'detective',
    author: [
        {name:'Agata Kristi', age: 84}
    ]
};

let book2More = {
    title: '1984',
    pageCount: 250,
    genre: 'dystopia novel',
    author: [
        {name:'Jorj Oruell', age: 65}
    ]
};

let book3More = {
    title: 'Murder in Mesopotamia',
    pageCount: 310,
    genre: 'detective', authorauthor: [
        {name:'Agata Kristi', age: 84}
    ]
}

// - Створити масив з 10 об'єктами які описують сутніть "користувач". Поля: name, username,password. Вивести
// в консоль пароль кожного користувача

let users = [
    {name: 'Ksenia', username: 'ksks', password: '1234FDki'},
    {name: 'Petro', username: 'pet', password: '1255FDloi'},
    {name: 'Anton', username: 'tiger', password: 'qwer567'},
    {name: 'Olesya', username: 'wowalesia', password: 'hjkkl789'},
    {name: 'Vika', username: 'boyko', password: '254ghj'},
    {name: 'Ivan', username: 'navi', password: 'fghj678'},
    {name: 'Inna', username: 'nina78', password: '525dfghj'},
    {name: 'Tanya', username: 'tanysha', password: '5644erty'},
    {name: 'Danya', username: 'zhorin', password: 'fgh4678'},
    {name: 'Maksym', username: 'lion', password: 'fgh4dfgh8'}
]

console.log(users[0].password);
console.log(users[1].password);
console.log(users[2].password);
console.log(users[3].password);
console.log(users[4].password);
console.log(users[5].password);
console.log(users[6].password);
console.log(users[7].password);
console.log(users[8].password);
console.log(users[9].password);


// - описати масив, в якому буде зберігатись інформація про температуру вранці, вдень і ввечері за термін
// в 7 днів. Як зробити цей масив - вам потрібно подумати. Нормальних варіантів опису - 2. Варіант, коли в
// вас буде одновимірний масив з 21 значенням вичключаємо одразу


let temperatures = {
    day1: [22, 25, 28],
    day2: [24, 20, 27],
    day3: [22, 24, 24],
    day4: [22, 25, 28],
    day5: [20, 25, 29],
    day6: [20, 28, 24],
    day7: [20, 28, 21],
};

let tempertatures2 = [
    [22, 25, 28],
    [24, 20, 27],
    [22, 24, 24],
    [22, 25, 28],
    [20, 25, 29],
    [20, 28, 24],
    [20, 28, 21],
]
//Логічні розгалуження:
// - Є змінна х, якій ви надаєте довільне числове значення.
// Якщо змінна x не дорівнює нулю, виведіть 'Вірно', інакше виведіть 'Невірно'. Перевірте  скрипт при a,
// що дорівнює 1, 0, -3

let x = 0;

if (x !== 0) {
    console.log('true');
}
else {
    console.log('false');
}


// - Дано змінну time яка рівна числу від 0 до 59. Потрібно написати код, який перевірить, до якої четверті
// години попадає число
// (в першу, другу, третю или четверту частину години).

let time = 15;

if (time >= 0 && time <= 14) {
    console.log('Перша чверть');
} else if (time >= 15 && time <= 29) {
    console.log('Друга чверть');
} else if (time >= 30 && time <= 44) {
    console.log('Третя чверть');
} else if (time >= 45 && time <= 59) {
    console.log('Четверта чверть');
}

// - У змінній day дано якесь число від 1 до 31. Потрібно визначити, у яку половину(декаду) місяця потрапляє
// це число (у першу, другу чи третю).

let day = 5;

if (day >= 1 && day <= 10) {
    console.log('Перша декада')
} else if (day <= 11 && day <= 20){
    console.log('Друга декада')
}  else if (day <= 21 && day <= 30){
    console.log('Третя декада')
}


// - Скласти розклад на тиждень за домопоги switch. Користувач вводить порядковий номер дня тижня і на екрані
// відображається інфа що заплановано на цей день (можна замість плану на день, назву дня англійською).

let orderOfDay = 4;

switch (orderOfDay){
    case 1:
        console.log('Monday');
        break;
    case 2:
        console.log('Tuesday');
        break;
    case 3:
        console.log('Wednesday');
        break;
    case 4:
        console.log('Thursday');
        break;
    case 5:
        console.log('Friday');
        break;
    case 6:
        console.log('Saturday');
        break;
    case 7:
        console.log('Sunday');
        break;
    default:
        console.log('Oops, error');
}

// - Користувач вводить або має два числа.
// Потрібно знайти та вивести максимальне число з тих двох .
// Також потрібно врахувати коли введені рівні числа.
//

let a = 10;
let b = 20;

if (a>b) {
    console.log(a)
}
else  if(b>a){
    console.log(b)
}
else {
    console.log('Вони рівні')
}

// - є змінна х, яка може прийняти будь-яке значення (стрінг, число, undefined, null  і тд включно). Напишіть
// код який,
//  буде присвоювати змінній х значення "default"  якщо ви намагаєтесь присвоїти в неї falsy-значення
//  (хибноподібні, тобто ті, які приводиться до false, а це 0 null undefined і тд).

let x2;

if (!x2) {
    x = "default";
}

console.log(x2);

// - з файлу arrays.js (лежить в папці 2023 plan ) взяти масив coursesAndDurationArray. За допомоги іф перевірити
// кожен його елемент на тривалість навчання. У випадку якщо тривалість довша за 5 місяців вивести в консоль "Супер".

let coursesAndDurationArray = [
    {title: 'JavaScript Complex', monthDuration: 5},
    {title: 'Java Complex', monthDuration: 6},
    {title: 'Python Complex', monthDuration: 6},
    {title: 'QA Complex', monthDuration: 4},
    {title: 'FullStack', monthDuration: 7},
    {title: 'Frontend', monthDuration: 4}
];

if (coursesAndDurationArray[0].monthDuration > 5) {
    console.log(`${coursesAndDurationArray[0].title}: Супер`);
} else {
    console.log(' ');
}

if (coursesAndDurationArray[1].monthDuration > 5) {
    console.log(`${coursesAndDurationArray[1].title}: Супер`);
} else {
    console.log(' ');
}

if (coursesAndDurationArray[2].monthDuration > 5) {
    console.log(`${coursesAndDurationArray[2].title}: Супер`);
} else {
    console.log(' ');
}

if (coursesAndDurationArray[3].monthDuration > 5) {
    console.log(`${coursesAndDurationArray[3].title}: Супер`);
} else {
    console.log(' ');
}

if (coursesAndDurationArray[4].monthDuration > 5) {
    console.log(`${coursesAndDurationArray[4].title}: Супер`);
} else {
    console.log(' ');
}

if (coursesAndDurationArray[5].monthDuration > 5) {
    console.log(`${coursesAndDurationArray[5].title}: Супер`);
} else {
    console.log(' ');
}