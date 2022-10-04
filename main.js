const API_KEY = 'live_tX2syfWhhB9BPDgir3GkaIBo8JusxLWNA9iR1UfcMfFSQcfWl6sNQ4Bmf2CA9Ql9'
const API_URL_RANDOM = 'https://api.thecatapi.com/v1/images/search?limit=2&api_key=' + API_KEY
const API_URL_FAVORITES = 'https://api.thecatapi.com/v1/favourites?limit=2&api_key=' + API_KEY

const spanError = document.getElementById('error');

const loadRandomMichis = async () => {
    const res = await fetch(API_URL_RANDOM)

    if (res.status !== 200) {
        spanError.innerHTML = 'Hubo un error: ' + res.status
    } else {
        const data = await res.json()
        document.getElementById('img1').src = data[0].url
        document.getElementById('img2').src = data[1].url
    }
}

const loadFavoritesMichis = async () => {
    const res = await fetch(API_URL_FAVORITES)

    if (res.status !== 200) {
        spanError.innerHTML = 'Hubo un error: ' + res.status
    } else {
        const data = await res.json();
        console.log(data);
    }
}

const saveFavoriteMichi = async () => {
    const res = await fetch(API_URL_FAVORITES, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            image_id: '12'
        })
    })


    if (res.status !== 200) {
        spanError.innerHTML = 'Hubo un error: ' + res.status + ' ' + await res.text()
    } else {
        const data = await res.json();
        console.log(data);
    }
}

loadRandomMichis();
loadFavoritesMichis();


