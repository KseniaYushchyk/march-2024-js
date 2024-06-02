const params = new URLSearchParams(window.location.search);
const postId = params.get('id');

fetch(`http://jsonplaceholder.typicode.com/posts/${postId}`)
    .then(response => response.json())
    .then(post => {
        console.log(post);

        let postInfo = document.createElement('div');
        postInfo.classList.add('post-info');
        postInfo.innerHTML = `
            <h3><strong>User Id: ${post.userId}</strong></h3>
            <h3><strong>Id: ${post.id}</strong></h3>
            <h3>${post.title}</h3>
            <p><strong>Plot:</strong> <br> ${post.body}</p>
        `;

        document.body.appendChild(postInfo);

        fetch(`https://jsonplaceholder.typicode.com/posts/${postId}/comments`)
            .then(response => response.json())
            .then(comments => {
                let blockForComments = document.createElement('div');
                blockForComments.classList.add('comments-container');
                console.log(comments)
                comments.forEach(comment => {
                    let commentText = document.createElement('p');
                    commentText.classList.add('comment');
                    commentText.innerHTML = `<strong>${comment.email}</strong>: ${comment.body}`;

                    blockForComments.appendChild(commentText);
                });

                document.body.appendChild(blockForComments);
            });
    });