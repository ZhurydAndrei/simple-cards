const url = 'https://jsonplaceholder.typicode.com/users'
const app = document.querySelector('.container')

fetch(url)
    .then(response => response.json())
    .then(response => create(response))
    .catch(err => console.error(err))

function create(response) {
    response.forEach(elem => {
        let element = document.createElement('div')
        element.classList = ('userCard')
        element.innerHTML = card(elem)
        app.appendChild(element)
    })
}

function card(person) {
    return `
        <div class="card">
            <div class="card-body">
                <h5 class="card-title">${person.name}</h5>
                <h5 class="card-subtitle mb-2 text-muted">${person.username}</h5>
                <h6 class="card-subtitle mb-2 text-muted">${person.email}</h6>
                <a href="${person.website}" class="card-link" target="_blank">${person.website}</a>
            </div>
        </div>
    `
}