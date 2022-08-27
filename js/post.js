function getAllPosts() {
    // fetch('https://jsonplaceholder.typicode.com/posts')
    //     .then(response => response.json())
    //     .then(json => console.log(json))
    const url = 'https://jsonplaceholder.typicode.com/posts';
    fetch(url)
        .then(res => res.json())
        .then(data => displayAllPosts(data))
}

function displayAllPosts(data) {
    const allPostsDiv = document.getElementById('all-posts');

    for (let post of data) {
        let div = document.createElement('div');
        let h3ID = document.createElement('h3');
        let postTitle = document.createElement('h4');
        let postDescription = document.createElement('p');

        div.classList.add('m-4');
        div.classList.add('p-4');
        div.classList.add('rounded-lg');
        div.classList.add('bg-sky-300');

        // div.innerHTML = `<h3 class="">ID: ${post.id}</h3>
        // <h3>Post: ${post.title}</h3>
        // <p>Post description: ${post.body}</p>`;

        h3ID.classList.add('text-3xl');
        h3ID.innerText = `ID: ${post.id}`;

        postTitle.classList.add('text-2xl');
        postTitle.innerText = `Title: ${post.title}`;

        postDescription.classList.add('text-lg');
        postDescription.innerText = `Description: ${post.body}`;

        div.appendChild(h3ID);
        div.appendChild(postTitle);
        div.appendChild(postDescription);

        allPostsDiv.appendChild(div);
    }
}

getAllPosts();