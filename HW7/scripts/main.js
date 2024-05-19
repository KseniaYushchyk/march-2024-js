// - Створити функцію конструктор для об'єктів User з полями id, name, surname , email, phone
// створити пустий масив, наповнити його 10 об'єктами new User(....)

function User(id,name,surname,email,phone) {
    this.id = id;
    this.name = name;
    this.surname = surname;
    this.email = email;
    this.phone = phone;
}

let users = [];

users.push(new User(1, "John", "Doe", "john.doe@example.com", "123-456-7890"));
users.push(new User(2, "Jane", "Smith", "jane.smith@example.com", "234-567-8901"));
users.push(new User(3, "Michael", "Johnson", "michael.johnson@example.com", "345-678-9012"));
users.push(new User(4, "Emily", "Davis", "emily.davis@example.com", "456-789-0123"));
users.push(new User(5, "David", "Brown", "david.brown@example.com", "567-890-1234"));
users.push(new User(6, "Linda", "Miller", "linda.miller@example.com", "678-901-2345"));
users.push(new User(7, "William", "Wilson", "william.wilson@example.com", "789-012-3456"));
users.push(new User(8, "Elizabeth", "Moore", "elizabeth.moore@example.com", "890-123-4567"));
users.push(new User(9, "James", "Taylor", "james.taylor@example.com", "901-234-5678"));
users.push(new User(10, "Patricia", "Anderson", "patricia.anderson@example.com", "012-345-6789"));


console.log(users);

//
// - Взяти масив з  User[] з попереднього завдання, та відфільтрувати , залишивши тільки об'єкти з парними id (filter)

console.log(users.filter(user => user.id % 2 === 0));

//
// - Взяти масив з  User[] з попереднього завдання, та відсортувати його по id. по зростанню (sort)
//

console.log(users.sort((a, b) => a.id - b.id));

// - створити класс для об'єктів Client з полями id, name, surname , email, phone, order (поле є масивом зі списком товарів)

class Client {
    constructor(id, name, surname, email, phone, order = []) {
        this.id = id;
        this.name = name;
        this.surname = surname;
        this.email = email;
        this.phone = phone;
        this.order = order;
    }
}

// створити пустий масив, наповнити його 10 об'єктами Client
let clients = [];

// Наповнення масиву 10 об'єктами Client
clients.push(new Client(1, "John", "Doe", "john.doe@example.com", "123-456-7890", ["item1", "item2"]));
clients.push(new Client(2, "Jane", "Smith", "jane.smith@example.com", "234-567-8901", ["item3"]));
clients.push(new Client(3, "Michael", "Johnson", "michael.johnson@example.com", "345-678-9012", ["item4", "item5", "item6"]));
clients.push(new Client(4, "Emily", "Davis", "emily.davis@example.com", "456-789-0123", ["item7"]));
clients.push(new Client(5, "David", "Brown", "david.brown@example.com", "567-890-1234", ["item8", "item9"]));
clients.push(new Client(6, "Linda", "Miller", "linda.miller@example.com", "678-901-2345", ["item10"]));
clients.push(new Client(7, "William", "Wilson", "william.wilson@example.com", "789-012-3456", ["item11", "item12", "item13"]));
clients.push(new Client(8, "Elizabeth", "Moore", "elizabeth.moore@example.com", "890-123-4567", ["item14"]));
clients.push(new Client(9, "James", "Taylor", "james.taylor@example.com", "901-234-5678", ["item15", "item16"]));
clients.push(new Client(10, "Patricia", "Anderson", "patricia.anderson@example.com", "012-345-6789", ["item17", "item18", "item19"]));

//- Взяти масив (Client [] з попереднього завдання).Відсортувати його по кількості товарів в полі order по зростанню. (sort)
clients.sort((a, b) => a.order.length - b.order.length);

console.log(clients);

// - Створити функцію конструктор яка дозволяє створювати об'єкти car, з властивостями модель, виробник, рік випуску,
// максимальна швидкість, об'єм двигуна. додати в об'єкт функції:
// -- drive () - яка виводить в консоль `їдемо зі швидкістю ${максимальна швидкість} на годину`
// -- info () - яка виводить всю інформацію про автомобіль в форматі `назва поля - значення поля`
// -- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
// -- changeYear (newValue) - змінює рік випуску на значення newValue
// -- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і додає його в поточний об'єкт car

function Car (model,manufacturer, yearOfManufacture, maximumSpeed, engineVolume) {
    this.model = model;
    this.manufacturer = manufacturer;
    this.yearOfManufacture = yearOfManufacture;
    this.maximumSpeed = maximumSpeed;
    this.engineVolume = engineVolume;

    this.drive = function () {
        console.log(`їдемо зі швидкістю ${this.maximumSpeed} на годину`)
    };
    this.info = function () {
        console.log(`Модель: ${this.model}, виробник: ${this.manufacturer}, рік випуску:${this.yearOfManufacture}, 
        максимальна швидкість: ${this.maximumSpeed}, об'єм двигуна: ${this.engineVolume}`)
    }
    this.increaseMaxSpeed = function (newSpeed) {
        this.maximumSpeed += newSpeed;
    }
    this.changeYear = function (newValue) {
        this.yearOfManufacture = newValue;
    }
    this.addDriver = function (driver) {
        this.driver = driver;
    }
}

let car = new Car('GLA', 'Mercedes-Benz', 2015, 85, 75);
console.log(car);
car.drive();
car.info();
car.increaseMaxSpeed(12);
car.drive();
car.changeYear(2018);
car.info();
car.addDriver({name: 'Ksenia', age: 21});
console.log(car.driver);

// - (Те саме, тільки через клас)
// Створити клас який дозволяє створювати об'єкти car, з властивостями модель, виробник, рік випуску, максимальна швидкість, об'єм двигуна. додати в об'єкт функції:
// -- drive () - яка виводить в консоль `їдемо зі швидкістю ${максимальна швидкість} на годину`
// -- info () - яка виводить всю інформацію про автомобіль в форматі `назва поля - значення поля`
// -- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
// -- changeYear (newValue) - змінює рік випуску на значення newValue
// -- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і додає його в поточний об'єкт car

class Car2 {
    constructor(model,manufacturer, yearOfManufacture, maximumSpeed, engineVolume) {
        this.model = model;
        this.manufacturer = manufacturer;
        this.yearOfManufacture = yearOfManufacture;
        this.maximumSpeed = maximumSpeed;
        this.engineVolume = engineVolume;
    }
    drive () {
        console.log(`їдемо зі швидкістю ${this.maximumSpeed} на годину`)
    };
    info  () {
        console.log(`Модель: ${this.model}, виробник: ${this.manufacturer}, рік випуску:${this.yearOfManufacture}, 
        максимальна швидкість: ${this.maximumSpeed}, об'єм двигуна: ${this.engineVolume}`)
    }
    increaseMaxSpeed (newSpeed) {
        this.maximumSpeed += newSpeed;
    }
    changeYear (newValue) {
        this.yearOfManufacture = newValue;
    }
    addDriver (driver) {
        this.driver = driver;
    }
}

let car2 = new Car2('Cayenne1743', 'Porsche', 2020, 215, 86);
console.log(car);
car2.drive();
car2.info();
car2.increaseMaxSpeed(12);
car2.drive();
car2.changeYear(2022);
car2.info();
car2.addDriver({name: 'Ksenia', age: 21});
console.log(car2.driver);
//
// -створити класс/функцію конструктор попелюшка з полями ім'я, вік, розмір ноги. Створити масив з 10 попелюшок.

class Cinderella {
    constructor(name,age,sizeOfFoot) {
        this.name = name;
        this.age = age;
        this.sizeOfFoot = sizeOfFoot;
    }
}
let cinderellas = [
    new Cinderella('Ksenia', 21, 37),
    new Cinderella('Anna', 22, 36),
    new Cinderella('Maria', 23, 38),
    new Cinderella('Olga', 24, 39),
    new Cinderella('Natalia', 25, 40),
    new Cinderella('Irina', 26, 35),
    new Cinderella('Elena', 27, 36.5),
    new Cinderella('Daria', 28, 37.5),
    new Cinderella('Tatiana', 29, 38.5),
    new Cinderella('Victoria', 30, 39.5),
    new Cinderella('Svetlana', 31, 38)
];

// Сторити об'єкт класу "принц" за допомоги класу який має поля ім'я, вік, туфелька яку він знайшов.
//     За допомоги циклу знайти яка попелюшка повинна бути з принцом.

class Prince {
    constructor(name, age, foundShoeSize) {
        this.name = name;
        this. age = age;
        this.foundShoeSize = foundShoeSize;
    }

    findCinderella(cinderellas) {
        for (const cinderella of cinderellas) {
            if (cinderella.sizeOfFoot === this.foundShoeSize) {
                console.log(`Твоя попелюшка: ${cinderella.name}, вік: ${cinderella.age}, розмір ноги: ${cinderella.sizeOfFoot}`);
                return cinderella;
            }
        }
        console.log('Це не вона(');
        return null;
    }
    //     Додатково, знайти необхідну попелюшку за допомоги функції масиву find та відповідного колбеку
    findCinderella2(cinderellas) {
        let foundCinderella = cinderellas.find(cinderella => cinderella.sizeOfFoot === this.foundShoeSize);
        if (foundCinderella) {
            console.log(`Твоя попелюшка: ${foundCinderella.name}, вік: ${foundCinderella.age}, розмір ноги: ${foundCinderella.sizeOfFoot}`);
        } else {
            console.log('Це не вона(');
        }
        return foundCinderella;
    }
}

let prince = new Prince('Alexander', 30, 37);
prince.findCinderella(cinderellas);
prince.findCinderella2(cinderellas);


//     Додатково, знайти необхідну попелюшку за допомоги функції масиву find та відповідного колбеку
//
// наявно в коді зверху
//
// Через Array.prototype. створити власний foreach, filter, map

Array.prototype.foreach = function (callback) {
    for (let i = 0; i < arguments.length; i++) {
    }
}

let arr = [1, 2, 3, 4, 5];
arr.foreach(function (element,index,array){
    console.log(`Елемент: ${element}, Індекс: ${index}, Масив: ${array}`)
});

Array.prototype.myFilter = function (callback) {
    const result = [];
    for (let i = 0; i < this.length; i++) {
        if (callback(this[i], i, this)) {
            result.push(this[i]);
        }
    }
    return result;
};

let filteredArr = arr.myFilter(function(element) {
    return element % 2 === 0;
});

console.log(filteredArr);

Array.prototype.myMap = function(callback) {
    const result = [];
    for (let i = 0; i < this.length; i++) {
        result.push(callback(this[i], i, this));
    }
    return result;
};

let mappedArr = arr.myMap(function(element) {
    return element * 2;
});

console.log(mappedArr);


