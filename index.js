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
    productCard.classList.add('card')
    cardTitle.className = ('card-title')
    cardImage.className =('card-img-top')
    cardTitle.textContent = eachProduct.name

    switch(eachProduct.product_type){
        case "Mens-Shirt":
            cardImage.src='./assets/images/tshirt_men/blue_mens_tshirt.png'
            break
        case "Womens-Shirt":
            cardImage.src='./assets/images/tshirt_womens/green_womens_vneck_tshirt.png'
            break
        case "LS-Shirt":
            cardImage.src='./assets/images/longsleeve/orange-long-sleeve.png'
            break
        case "Hat":
            cardImage.src='./assets/images/hat/red-hat.png'
            break
        case "Coffee Mug":
            cardImage.src='./assets/images/mug/grey_mug.png'
            break;
        case "mask":
            cardImage.src='./assets/images/mask/yellow_mask.png'
            break;
    }
    productCard.append(cardImage, cardTitle)
    cardContainer.appendChild(productCard)
}