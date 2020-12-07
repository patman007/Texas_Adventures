window.onload = function () {
    //Object
    let favorites = JSON.parse(localStorage.getItem('myfavorites'))

    var snippet = ''

    //Create a snippet and convert to an array
    Object.keys(favorites).forEach( function(results) {
        snippet +=  `<p><a data-id="${results.park} ${results.weatherdata}" href="/favoritepage">${favorites[results.park]} ${favorites[results.weatherdata]}</a></p>`
    })
    document.getElementById('myfavorites').innerHTML = snippet
    console.log(snippet)

}