const searchParams = new URLSearchParams(window.location.search);
const product_id = searchParams.get('product_id');
const productURL = `http://localhost:4000/products/${product_id}`

const cardContainer = document.querySelector('.card-container')
//color wheel
new ReinventedColorWheel({
    appendTo: document.getElementById('color-wheel')
})

fetch(productURL)
.then(parseJSON)
.then(getProduct)

function parseJSON(response){
    return response.json()
}

function getProduct(product){
    console.log(product.product_type)
    const productCard = document.createElement('div')
    const cardTitle = document.createElement('h4')
    const cardImage = document.createElement('img')
    const createButton = document.createElement('button')
    productCard.classList.add('card')
    createButton.classList.add('btn')
    createButton.classList.add('btn-primary')
    createButton.classList.add('create-button')
    cardTitle.className = ('card-title')
    cardImage.className =('card-img-top')
    cardTitle.textContent = product.name
    
    switch(product.product_type){
        case "Mens-Shirt":
            cardImage.src='./assets/images/tshirt_men/mens_tshirt.png'
            break
        case "Womens-Shirt":
            cardImage.src='./assets/images/tshirt_womens/womens_vneck_tshirt.png'
            break
        case "LS-Shirt":
            cardImage.src='./assets/images/longsleeve/white-longsleeve.png'
            break
        case "Hat":
            cardImage.src='./assets/images/hat/white-hat.png'
            break
        case "Coffee Mug":
            cardImage.src='./assets/images/mug/white-mug.png'
            break;
        case "mask":
            cardImage.src='./assets/images/mask/white-mask.png'
            break;

        }
    productCard.append(cardImage, cardTitle)
    cardContainer.appendChild(productCard)
}

