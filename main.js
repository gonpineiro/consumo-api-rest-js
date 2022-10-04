const API_KEY = 'live_tX2syfWhhB9BPDgir3GkaIBo8JusxLWNA9iR1UfcMfFSQcfWl6sNQ4Bmf2CA9Ql9'
const API_URL_RANDOM = 'https://api.thecatapi.com/v1/images/search?limit=2&api_key=' + API_KEY
const API_URL_FAVORITES = 'https://api.thecatapi.com/v1/favourites?api_key=' + API_KEY

const spanError = document.getElementById('error');

const loadRandomMichis = async () => {
    const res = await fetch(API_URL_RANDOM)

    if (res.status !== 200) {
        spanError.innerHTML = 'Hubo un error: ' + res.status
    } else {
        const data = await res.json()
        document.getElementById('img1').src = data[0].url
        document.getElementById('img2').src = data[1].url

        const btn1 = document.getElementById('btn1')
        const btn2 = document.getElementById('btn2')

        btn1.onclick = () => saveFavoriteMichi(data[0].id)
        btn2.onclick = () => saveFavoriteMichi(data[1].id)
    }
}

const loadFavoritesMichis = async () => {
    const res = await fetch(API_URL_FAVORITES)

    if (res.status !== 200) {
        spanError.innerHTML = 'Hubo un error: ' + res.status
    } else {
        const data = await res.json();

        data.forEach(cat => {
            const article = document.createElement('article')
            const img = document.createElement('img')
            img.src = cat.image.url
            img.width = "150"
            const button = document.createElement('button')
            button.textContent = 'Borrar Gato de favoritos'
            button.dataset.id = cat.image.id
            article.append(img, button)

            document.getElementById('favoritesMichis').append(article)
        });
    }
}

const saveFavoriteMichi = async (id) => {
    const res = await fetch(API_URL_FAVORITES, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            image_id: id
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


