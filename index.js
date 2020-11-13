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
    listenForCreate(createButton, eachProduct)

productCard.addEventListener('mouseover', (e) =>{
    boxShadowGen = randomBoxShadow()
    productCard.style.boxShadow = boxShadowGen
})

    getProductImage(eachProduct, cardImage)
    
    productCard.append(cardImage, cardTitle, createButton)
    cardContainer.appendChild(productCard)
}

function randomBoxShadow() {
    const colors = ['#ff0', '#f0f', '#0ff', '#000']
    const shadow1 = '0 8px 16px 0' 
    const shadow2 = '0 6px 20px 0' 
    const shadow3 = '0 4px 24px 0' 

    function randomColor1(){
        return shadow1 + colors[Math.floor(Math.random() * colors.length)]
    }
    function randomColor2(){
        return shadow2 + colors[Math.floor(Math.random() * colors.length)]
    }
    function randomColor3(){
        return shadow3 + colors[Math.floor(Math.random() * colors.length)]
    }
    return randomColor1(),randomColor2(),randomColor3()
}

function listenForCreate(createButton, eachProduct){
    createButton.addEventListener('click', (e) => {
        document.location.href = `showProduct.html?product_id=${eachProduct.id}`
    })
}

function getProductImage(product, cardImage){
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
}