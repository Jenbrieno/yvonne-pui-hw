// update page title on product details page 
const queryString = window.location.search;
const params = new URLSearchParams(queryString);
const rollType = params.get('roll');

const headerElement = document.querySelector('.page-title');
headerElement.innerText = rollType + ' Cinnamon Roll'

// update the image on product details page 
const rollImage = document.querySelector('.image-detail');
rollImage.src = "../solution-hw4/assets/" + rolls[rollType]['imageFile'];

// create an empty cart array for later updates
const cart = [];
 
class Roll {
    constructor(rollType, rollGlazing, packSize, basePrice) {
        this.type = rollType;
        this.glazing = rollGlazing;
        this.size = packSize;
        this.basePrice = basePrice;  
    }
}

// get selected options and update the cart array with Roll information
function addToCart() {
    const glazingSelected = document.getElementById("glazing-options");
    const glazingText = glazingSelected.options[glazingSelected.selectedIndex].text;
    const sizeSelected = document.getElementById("pack-size");
    const sizeText = sizeSelected.options[sizeSelected.selectedIndex].text;

    const rollInfo = new Roll(
        rollType,
        glazingText,
        sizeText,
        rolls[rollType]['basePrice'],
    );
    
    cart.push(rollInfo);
    console.log(cart);
}

  







