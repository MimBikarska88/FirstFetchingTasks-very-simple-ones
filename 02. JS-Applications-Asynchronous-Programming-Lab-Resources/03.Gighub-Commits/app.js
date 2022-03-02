function loadCommits() {
    let username = document.querySelector('#username').value;
    let repo = document.querySelector('#repo').value;

    const url = `https://api.github.com/repos/${username}/${repo}/commits`;

    fetch(url)
        .then(response => response.json())
        .then(data => {
            data.forEach((element) => {
                let text = `${element.commit.author.name}: ${element.commit.message}`;
                let li = document.createElement('li');
                li.textContent = text;
                document.querySelector('#commits').appendChild(li);
            })
        })
        .catch((error) => {
            let text = `Error: ${error.status} (Not Found)`;
            let li = document.createElement('li');
            li.textContent = text;
            document.querySelector('#commits').appendChild(li);

        });


}