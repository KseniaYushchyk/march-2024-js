// - Знайти та вивести довижину настипних стрінгових значень
// 'hello world', 'lorem ipsum', 'javascript is cool'

let x = 'hello world';
let y = 'lorem ipsum';
let z = 'javascript is cool';

console.log(x.length, y.length, z.length);

// - Перевести до великого регістру наступні стрінгові значення
// 'hello world', 'lorem ipsum', 'javascript is cool'

console.log(x.toUpperCase(), y.toUpperCase(), z.toUpperCase() )

// - Перевести до нижнього регістру настипні стрінгові значення
// 'HELLO WORLD', 'LOREM IPSUM', 'JAVASCRIPT IS COOL'

console.log('HELLO WORLD'.toLowerCase(), 'LOREM IPSUM'.toLowerCase(), 'JAVASCRIPT IS COOL'.toLowerCase(),);

// - Є "брудна" стрінга let str = ' dirty string   ' . Почистити її від зайвих пробілів.

let str = ' dirty string   ';
let strNew = str.trim();
console.log(strNew);

// - Напишіть функцію stringToarray(str), яка перетворює рядок на масив слів.
//     let str = 'Ревуть воли як ясла повні';
// let arr = stringToarray(str); ['Ревуть', 'воли', 'як', 'ясла', 'повні']
//
let string = 'Ревуть воли як ясла повні';
let stringToArray = (str) => {
    return str.split(' ');
}
console.log(stringToArray(string));

// - є масив чисел [10,8,-7,55,987,-1011,0,1050,0] . за допомоги map  перетворити всі об'єкти в масиві на стрінгові.

let num = [10,8,-7,55,987,-1011,0,1050,0];
let stringFromNum = num.map(String);
console.log(stringFromNum);

// - створити функцію sortNums(direction), яка прймає масив чисел, та сортує його від більшого до меньшого, або навпаки
// в залежності від значення аргументу direction.
// sortNums(nums,'ascending') // [3,11,21]
// sortNums(nums,'descending') // [21,11,3]

let sortNums = (arr, condition) => {
    if (condition === 'ascending') {
        arr.sort((a,b) => a-b);
    }
    else if (condition === 'descending') {
        arr.sort((a,b) => b-a);
    }
    return arr;
}
console.log(sortNums([3, 11, 21], 'ascending'));
console.log(sortNums([3, 11, 21], 'descending'));
// ==========================
// - є масив
let coursesAndDurationArray = [
    {title: 'JavaScript Complex', monthDuration: 5},
    {title: 'Java Complex', monthDuration: 6},
    {title: 'Python Complex', monthDuration: 6},
    {title: 'QA Complex', monthDuration: 4},
    {title: 'FullStack', monthDuration: 7},
    {title: 'Frontend', monthDuration: 4}
];
// -- відсортувати його за спаданням за monthDuration

coursesAndDurationArray.sort((a, b) => b.monthDuration - a.monthDuration);
console.log(coursesAndDurationArray);

// -- відфільтрувати , залишивши тільки курси з тривалістю більше 5 місяців

let result = coursesAndDurationArray.filter(value => value.monthDuration > 5);
console.log(result);

// -- за допомоги map перетворити кожен елемент на наступний тип {id,title,monthDuration}

let coursesAndDurationArrayNew = [...coursesAndDurationArray].map((course,index) => ({
    id: index + 1,
    title: course.title,
    monthDuration: course.monthDuration
}));
console.log(coursesAndDurationArrayNew);

// =========================
//     описати колоду карт (від 6 до туза без джокерів)

let cards = {
    cardSuit: ['spade', 'diamond','heart', 'clubs'],
    value: ['6', '7', '8', '9', '10', 'ace','jack','queen','king'],
    color: ['red','black']
};

const determineColor = (suit) => {
    return (suit === 'diamond' || suit === 'heart') ? 'red' : 'black';
};

let cardsFull = cards.cardSuit.reduce((acc, suit) => {
    cards.value.forEach(value => {
        let color = determineColor(suit);
        acc.push({
            Suite: suit,
            Value: value,
            Color: color
        });
    });
    return acc;
}, []);
console.log(cardsFull);

// - знайти піковий туз

let spadeAce = cardsFull.find(card => card.Suite === 'spade' && card.Value === 'ace' && card.Color === 'black');
console.log(spadeAce);

// - всі шістки

let sixes =  cardsFull.filter(card => card.Value === '6');
console.log(sixes);

// - всі червоні карти

let reds = cardsFull.filter(card => card.Color === 'red');
console.log(reds);

// - всі буби

let diamonds = cardsFull.filter(card => card.Suite === 'diamond');
console.log(diamonds);

// - всі трефи від 9 та більше

let clubs = cardsFull.filter(card => card.Suite === 'clubs' && (card.Value > 8 ||
    ['10', 'jack', 'queen', 'king', 'ace'].includes(card.Value)));
console.log(clubs);

//
//
//     Взяти описану колоду карт, та за допомоги reduce упакувати всі карти по "мастях" в об'єкт

let suits = cardsFull.reduce((acc, card) => {
    if (card.Suite === 'spade') {
        acc.spades.push(card);
    } else if (card.Suite === 'diamond') {
        acc.diamonds.push(card);
    } else if (card.Suite === 'heart') {
        acc.hearts.push(card);
    } else if (card.Suite === 'clubs') {
        acc.clubs.push(card);
    }
    return acc;
}, { spades: [], diamonds: [], hearts: [], clubs: [] });

console.log(suits);
// =========================
//     взяти з arrays.js (який лежить в папці 2023 plan) масив coursesArray

let coursesArray = [
    {
        title: 'JavaScript Complex',
        monthDuration: 5,
        hourDuration: 909,
        modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'react', 'angular', 'aws', 'docker', 'git', 'node.js']
    },
    {
        title: 'Java Complex',
        monthDuration: 6,
        hourDuration: 909,
        modules: ['html',
            'css',
            'js',
            'mysql',
            'mongodb',
            'angular',
            'aws',
            'docker',
            'git',
            'java core',
            'java advanced']
    },
    {
        title: 'Python Complex',
        monthDuration: 6,
        hourDuration: 909,
        modules: ['html',
            'css',
            'js',
            'mysql',
            'mongodb',
            'angular',
            'aws',
            'docker',
            'python core',
            'python advanced']
    },
    {
        title: 'QA Complex',
        monthDuration: 4,
        hourDuration: 909,
        modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'git', 'QA/QC']
    },
    {
        title: 'FullStack',
        monthDuration: 7,
        hourDuration: 909,
        modules: ['html',
            'css',
            'js',
            'mysql',
            'mongodb',
            'react',
            'angular',
            'aws',
            'docker',
            'git',
            'node.js',
            'python',
            'java']
    },
    {
        title: 'Frontend',
        monthDuration: 4,
        hourDuration: 909,
        modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'react', 'angular', 'aws', 'docker', 'git', 'sass']
    }
];

// --написати пошук всіх об'єктів, в який в modules є sass
let sassCourses = coursesArray.filter(course => course.modules.includes('sass'));
console.log(sassCourses);

// --написати пошук всіх об'єктів, в який в modules є docker

let dockerCourses = coursesArray.filter(course => course.modules.includes('docker'));
console.log(dockerCourses);