

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
const context = textCanvas.getContext("2d")




textForm.addEventListener('submit', (e) => {
    e.preventDefault()
    newTextForm = new FormData(textForm)
    getNewText = newTextForm.get('text')
    context.fillText(`${getNewText}`,textCanvas.width/2, textCanvas.height/2)

})



context.font = "40pt Calibri";
context.fillStyle = "#000";
context.textAlign = "center"
//context.fillText( 'displays' , textCanvas.width/2, textCanvas.height/2);

//START PRODUCT DISPLAY
fetch(productURL)
.then(parseJSON)
.then(getProduct)

function parseJSON(response){
    return response.json()
}

function getProduct(product){
    //const productCard = document.createElement('div')
    const cardTitle = document.createElement('h4')
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
    cardTitle.className = ('card-title')
    cardImage.className =('card-img')
    cardTitle.textContent = product.name
    purchaseButton.innerText = 'Purchase'
    
    if (product.product_type === 'mask' || product.product_type === 'Hat' || product.product_type === 'Coffee Mug'){
        sizeButtons.innerText = " "
    }

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

        infoCard.append(cardTitle, imageColor, purchaseButton)
        productCard.append(cardImage, bg)
        cardContainer.append(productCard, infoCard)
}