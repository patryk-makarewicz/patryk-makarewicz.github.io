import '../scss/main.scss';


/* place your code below */

console.log('HELLO 🚀')

fetch('https://api.github.com/users/patryk-makarewicz/repos?sort=created')
.then(resp => resp.json())
.then(resp => {
    for (let repo of resp) {
        const {name, description, homepage, html_url} = repo;
        const repozytoryList = document.querySelector('.one-list--js');
        const myTemplate = `<p>project: <span class="repo__name">${name}</span> <br>
        description: <span class="repo__description">${description}</span> </p>
        <p>demo: &lt;<a href="${homepage}" title="link to live ${name}"><span class="repo__link">see here</span></a>&gt; <br>
        github: &lt;<a href="${html_url}" title="link to repozytory ${name} 
        on github"><span class="repo__link">sorce code</span></a>&gt;</p>
        `;
        repozytoryList.innerHTML = myTemplate;
    }
})
.catch((error) => {
console.log('Nie udało się pobrać repozytoriów.');
})

fetch('https://api.github.com/users/patryk-makarewicz/repos?sort=created')
.then(resp => resp.json())
.then(resp => {
    for (let repo of resp) {
        const {name, description, homepage, html_url} = repo;
        const repozytoryList = document.querySelector('.two-list--js');
        const myTemplate = `<p>project: <span class="repo__name">${name}</span> <br>
        description: <span class="repo__description">${description}</span> </p>
        <p>demo: &lt;<a href="${homepage}" title="link to live ${name}"><span class="repo__link">see here</span></a>&gt; <br>
        github: &lt;<a href="${html_url}" title="link to repozytory ${name} 
        on github"><span class="repo__link">sorce code</span></a>&gt;</p>
        `;
        repozytoryList.innerHTML = myTemplate;
    }
})
.catch((error) => {
console.log('Nie udało się pobrać repozytoriów.');
})