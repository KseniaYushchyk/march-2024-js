const params = new URLSearchParams(window.location.search);
const userId = params.get('id');

fetch(`http://jsonplaceholder.typicode.com/users/${userId}`)
    .then(response => response.json())
    .then(user =>{
            const userBlock = document.createElement('div');
            let userCard = document.createElement('div');
            userCard.classList.add('user-info');

            userCard.innerHTML = userCard.innerHTML = `
                    <h2>${user.name}</h2>
                    <p><strong>Username:</strong> ${user.username}</p>
                    <p><strong>Email:</strong> ${user.email}</p>
                    <p><strong>Address:</strong> ${user.address.street}, ${user.address.suite}, ${user.address.city}, ${user.address.zipcode}</p>
                    <p><strong>Geo:</strong> lat: ${user.address.geo.lat}, lng: ${user.address.geo.lng} </p>
                    <p><strong>Phone:</strong> ${user.phone}</p>
                    <p><strong>Website:</strong> ${user.website}</p>
                    <p><strong>Company:</strong> ${user.company.name}</p>
                    <p><strong>Catch Phrase:</strong> ${user.company.catchPhrase}</p>
                    <p><strong>BS:</strong> ${user.company.bs}</p>`;

            document.body.appendChild(userBlock);
            userBlock.appendChild(userCard);


        fetch(`https://jsonplaceholder.typicode.com/users/${userId}/posts`)
            .then(response => response.json())
            .then(posts => {
                console.log(posts)
                let divForTitle = document.createElement('div');

                let divForButton = document.createElement('div');
                let buttonUserPost = document.createElement('button');
                buttonUserPost.classList.add('button-post');
                divForButton.classList.add('button-container')
                buttonUserPost.innerText = 'Post of current user';

                buttonUserPost.onclick = function (e) {
                    divForTitle.innerHTML = '<strong class="title">Titles of posts:</strong>';
                    posts.forEach(post => {
                        let linkOnPost = document.createElement('a');
                        linkOnPost.classList.add('link')
                        linkOnPost.href = `post-details.html?id=${post.id}`;
                        linkOnPost.innerText = post.title;
                        linkOnPost.style.display = 'block';

                        divForTitle.appendChild(linkOnPost);
                    });
                    buttonUserPost.remove();
                };

                document.body.append(divForTitle, divForButton);
                divForButton.appendChild(buttonUserPost);

            })

            }
    )