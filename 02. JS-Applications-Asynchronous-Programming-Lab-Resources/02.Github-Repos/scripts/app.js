function loadRepos() {
    const url = 'https://api.github.com/users/USERNAME/repos';
    const username = document.querySelector('#username').value;
    const ulElement = document.querySelector('#repos');
    const newUsername = url.replace('USERNAME', username);
    fetch(newUsername)
        .then((response) => response.json())
        .then((data) => {
            ulElement.innerHTML = '';
            data.map((x) => {
                let name = x.full_name;
                let href = x.html_url;

                let a = document.createElement('a');
                a.href = href;
                a.textContent = name;

                let li = document.createElement('li');
                li.appendChild(a);
                console.log(li);
                return li;

            }).forEach((li) => {
                ulElement.appendChild(li);
            });
        })
        .catch((error) => {
            ulElement.innerHTML = 'Not found';
        })

}