fetch('http://jsonplaceholder.typicode.com/users')
    .then(response => response.json())
    .then(users => {
        let usersDiv = document.createElement("div");

        users.forEach(user => {
            let userCard = document.createElement('div');
            userCard.className = 'user-card';
            userCard.innerHTML = `ID: ${user.id}, Name: ${user.name}<br>`;

            let userLink = document.createElement('a');
            userLink.href = `user-details.html?id=${user.id}`;
            userLink.classList.add('user-link');
            userLink.innerText = `Детальніше`;

            document.body.appendChild(usersDiv);
            userCard.appendChild(userLink);
            usersDiv.appendChild(userCard);
        });
    })