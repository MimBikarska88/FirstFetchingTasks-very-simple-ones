function loadRepos() {
    let res = document.querySelector('#res');
    let url = 'https://api.github.com/users/testnakov/repos';
    const httpRequest = new XMLHttpRequest();
    httpRequest.addEventListener('readystatechange', () => {
        if (httpRequest.readyState == 4 && httpRequest.status == 200) {
            res.innerHTML = httpRequest.responseText;
        } else {
            console.log("error")
        }
    });
    httpRequest.open('GET', url);
    httpRequest.send();
}