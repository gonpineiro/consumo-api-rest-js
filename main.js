const API_KEY = 'live_tX2syfWhhB9BPDgir3GkaIBo8JusxLWNA9iR1UfcMfFSQcfWl6sNQ4Bmf2CA9Ql9'

const ULR = 'https://api.thecatapi.com/v1/images/search?limit=3&api_key=' + API_KEY

const getCatPic = async () => {
    const res = await fetch(ULR)
    const data = await res.json()

    document.getElementById('img1').src = data[0].url
    document.getElementById('img2').src = data[1].url
    document.getElementById('img3').src = data[2].url
}

document.querySelector('#new-cat').addEventListener('click', getCatPic)

getCatPic();


