console.log('holasdasd');

const ULR = 'https://api.thecatapi.com/v1/images/search'

const getCatPic = async () => {
    const res = await fetch(ULR)
    const data = await res.json()

    const img = document.querySelector('img')
    img.src = data[0].url
}

document.querySelector('#new-cat').addEventListener('click', getCatPic)

getCatPic();


