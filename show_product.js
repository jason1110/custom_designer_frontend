const searchParams = new URLSearchParams(window.location.search);
const product_id = searchParams.get('product_id');
const productURL = `http://localhost:4000/products/${product_id}`

const cardContainer = document.querySelector('.card-container')
const infoCard = document.querySelector('#info-card')
const productCard = document.querySelector('.card')
const sizeButtons = document.querySelector('#size-btns')
const textCanvas = document.querySelector('#text-canvas')
const addText = document.querySelector('.addText')
const text = document.querySelector('.text')
const textForm = document.querySelector('#text-form')
const cardTitle = document.querySelector('.card-title')
const colorSelect = document.querySelector('#color-select')
const textColor = document.querySelector('#text-color')
const context = textCanvas.getContext("2d")
context.textAlign = "center"

textForm.addEventListener('submit', (e) => {
    e.preventDefault()
    newTextForm = new FormData(textForm)
    getNewText = newTextForm.get('text')
    getTextColor = newTextForm.get('text-color')
    getTextFont = newTextForm.get('font-select')
    context.fillStyle = `${getTextColor}`;
    context.font = `40pt ${getTextFont}`;
    context.fillText(`${getNewText}`,textCanvas.width/2, textCanvas.height/2)
})

//START PRODUCT DISPLAY
fetch(productURL)
.then(parseJSON)
.then(getProduct)

function parseJSON(response){
    return response.json()
}

function getProduct(product){
    const newCardTitle = document.createElement('h4')
    const cardImage = document.createElement('img')
    const purchaseButton = document.createElement('button')
    const imageColor = document.createElement('input')
    const bg = document.createElement('div')

    bg.className = 'bg'
    imageColor.type ='color'
    imageColor.id = 'image-color'
    imageColor.value = '#FFFFFF'
    
    imageColor.addEventListener('input', (e) => {
        console.log(imageColor.value)
        let imgColValue = imageColor.value
        bg.style.background = imgColValue
    })

    purchaseButton.classList.add('purchase-button')
    purchaseButton.classList.add('btn-success')
    
    cardImage.className =('card-img')
    newCardTitle.textContent = product.name
    purchaseButton.innerText = 'Purchase'
    
    if (product.product_type === 'mask' || product.product_type === 'Hat' || product.product_type === 'Coffee Mug'){
        sizeButtons.innerText = " "
    }

    getProductImage(product, cardImage)
        
    colorSelect.append(imageColor)
    cardTitle.append(newCardTitle)
    infoCard.append(purchaseButton, cardTitle, colorSelect)
    productCard.append(cardImage, bg)
    cardContainer.append(productCard, infoCard)
}

function getProductImage(product, cardImage){
    switch(product.product_type){
        case "Mens-Shirt":
            cardImage.src='./assets/images/tshirt_men/mens_tshirt.png'
            textCanvas.id='text-canvas-mens'
            break
        case "Womens-Shirt":
            cardImage.src='./assets/images/tshirt_womens/womens_vneck_tshirt.png'
            textCanvas.id='text-canvas-womens'
            break
        case "LS-Shirt":
            cardImage.src='./assets/images/longsleeve/white-longsleeve.png'
            textCanvas.id='text-canvas-sleeve'
            break
        case "Hat":
            cardImage.src='./assets/images/hat/white-hat.png'
            textCanvas.id='text-canvas-hat'
            break
        case "Coffee Mug":
            cardImage.src='./assets/images/mug/white-mug.png'
            textCanvas.id='text-canvas-mug'
            break;
        case "mask":
            cardImage.src='./assets/images/mask/white-mask.png'
            textCanvas.id='text-canvas-mask'
            break;
    }
}