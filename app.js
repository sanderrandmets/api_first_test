// Create a request variable and 
let request = new XMLHttpRequest()

// Open a new connection, using the GET request on the URL endpoint
request.open('GET', 'https://ghibliapi.herokuapp.com/films', true)

request.onload = function() {
    // Begin accessing JSON data here
    let data = JSON.parse(this.response)

    if (request.status >= 200 && request.status < 400) {
        const container = document.getElementById('container')

        data.forEach(movie => {
            // Log each movie's title
            console.log(movie.title)
            const movie_div = document.createElement('div')
            movie_div.innerHTML = '<div class="title">' + movie.title + '</div>' + '<div class="description">' + movie.description + '</div>'
            movie_div.classList.add('movie')
            container.append(movie_div)
        });

        } else {
            console.log(error)
        }
    }
// Send request
request.send()