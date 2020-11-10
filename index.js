const baseURL = "http://localhost:4000"
const productURL = `${baseURL}/products`


const cardContainer = document.querySelector('.card-container')




fetch(productURL)
.then(parseJSON)
.then(getProducts)

function parseJSON(response){
    return response.json()
}

function getProducts(allProducts){
    console.log(allProducts)
    allProducts.products.forEach(showProductCard)
}

function showProductCard(eachProduct){
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
    cardTitle.textContent = eachProduct.name
    createButton.innerText = 'Create'

    switch(eachProduct.product_type){
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
    productCard.append(cardImage, cardTitle, createButton)
    cardContainer.appendChild(productCard)
}