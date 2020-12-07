function addFavoriteHandlers() {
    // localStorage.removeItem('myfavorites')
    // Get all favorite beers
    let favorites = document.querySelectorAll(".favorite")
    // Get current favorites OR empty array
    let favoriteObject = JSON.parse(localStorage.getItem('myfavorites') || "{}")

    // Add event listener to each beer card received
    favorites.forEach(favorite => {
        favorite.addEventListener('click', () => {
            if(favorite.checked) {
                favoriteObject[favorite.dataset.id] = favorite.dataset.name
            } else {
                delete favoriteObject[favorite.dataset.id]
            }

            // Stringify the array and put it into localStorage
            localStorage.setItem('myfavorites', JSON.stringify(favoriteObject))
        })
    })
}
window.onload = addFavoriteHandlers