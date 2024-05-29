//     - зробити файл users.html
// з ендпоінту http://jsonplaceholder.typicode.com/users отримати всіх користувачів
//     вивести їх id + name списком та додати посилання з href = user-details.html?id=XXX (замість ХХХ - айді юзера)
// при кліку на посилання перехід на відповідну сторінку, на якій буде вся інформація про користувача (всі 15 полів)
// отримана через додатковий запит (https://jsonplaceholder.typicode.com/users/XXX   де ХХХ - айді користувача)

fetch('http://jsonplaceholder.typicode.com/users')
    .then(response => response.json())
    .then(users => {
        const usersDiv = document.getElementById('users');

        console.log(users)
        users.forEach(user => {
            let userCard = document.createElement('div');
            userCard.className = 'user-card';

            let userLink = document.createElement('a');
            userLink.href = `user-details.html?id=${user.id}`;
            userLink.innerText = `ID: ${user.id}, Name: ${user.name}`;

            userCard.appendChild(userLink);
            usersDiv.appendChild(userCard);
        });
    })