const params = new URLSearchParams(window.location.search);
const userId = params.get('id');

fetch(`http://jsonplaceholder.typicode.com/users/${userId}`)
    .then(response => response.json())
    .then(user =>{
        const userBlock = document.getElementById('user-details');
        let userCard = document.createElement('div');

        userCard.innerHTML = userCard.innerHTML = `
                    <h2>${user.name}</h2>
                    <p><strong>Username:</strong> ${user.username}</p>
                    <p><strong>Email:</strong> ${user.email}</p>
                    <p><strong>Address:</strong> ${user.address.street}, ${user.address.suite}, ${user.address.city}, ${user.address.zipcode}</p>
                    <p><strong>Phone:</strong> ${user.phone}</p>
                    <p><strong>Website:</strong> ${user.website}</p>
                    <p><strong>Company:</strong> ${user.company.name}</p>
                    <p><strong>Catch Phrase:</strong> ${user.company.catchPhrase}</p>
                    <p><strong>BS:</strong> ${user.company.bs}</p>`;

        userBlock.appendChild(userCard);

    }
    )